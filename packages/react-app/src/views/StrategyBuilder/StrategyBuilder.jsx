import React, { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";

import Block from "./Block";
import CreateBlock from "./CreateBlock";
import BlockDetails from "./BlockDetails";
import factoryAbi from "./abis/SlothyVaultFactoryAbi.json";
import vaultAbi from "./abis/BlockAbi.json";
import { FACTORY_ADDRESS } from "./constants";
import { REGISTRY_ABI, REGISTRY_ADDR_POLYGON_MAINNET } from "./abis/registry.abi";
import "./StrategyBuilder.css";

const erc20Abi = [
  "function balanceOf(address owner) view returns (uint256)",
  "function approve(address _spender, uint256 _value) public returns (bool success)",
  "function allowance(address _owner, address _spender) public view returns (uint256 remaining)",
];

const mutateAddress = address => {
  return `0x000000000000000000000000${address.slice(2)}`;
};

export default function StrategyBuilder({ address, provider }) {
  const [blocks, setBlocks] = useState([]);
  const [addBlockModalOpen, setAddBlockModalOpen] = useState(false);
  const [editableBlock, setEditableBlock] = useState(null);

  useEffect(() => {
    const blocks = JSON.parse(localStorage.getItem("blocks"));

    setBlocks(blocks ?? []);
  }, []);

  const handleSubmit = useCallback(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Account:", await signer.getAddress());
    console.log({ signer, factoryAbi });

    console.log({ blocks, signer });

    const factoryContract = new ethers.Contract(FACTORY_ADDRESS, factoryAbi.abi, signer);
    const startingToken = new ethers.Contract(blocks[0].out, erc20Abi, signer);

    const beforeLoop =
      blocks[0].domain === "Aave"
        ? [
            {
              target: blocks[0].address,
              data: [
                ethers.utils.formatBytes32String(blocks[0].fields[0].value),
                mutateAddress(blocks[0].fields[0].address),
              ],
            },
          ]
        : [];

    const approvals = blocks
      .map(block => {
        if (block.type === "swap") {
          return {
            token: block.id,
            spender: block.address,
            amount: 10 ** 18,
          };
        }

        if (block.approve) {
          return {
            token: block.approve,
            spender: block.address,
            amount: 10 ** 18,
          };
        }
      })
      .filter(Boolean);

    const loop = blocks.slice(2).map(block => {
      switch (block.type) {
        case "claim":
          return {
            target: block.address,
            data: [
              mutateAddress(blocks[0].fields[0].address),
              mutateAddress(blocks[0].receiptAddressToken),
              ethers.utils.formatBytes32String("10"),
            ],
          };
        case "send":
          return {
            target: block.address,
            data: [mutateAddress(block.address_to_call), mutateAddress(block.fields[0].value)],
          };
        default:
          return {};
      }
    });

    console.log({ approvals, beforeLoop });

    const _supportedTokens = approvals.map(approval => approval.token);

    console.log({
      a: blocks[0].fields[0].address,
      b: blocks[0].fields[0].value,
      c: _supportedTokens,
      d: approvals,
      e: beforeLoop,
      f: loop,
      g: blocks.find(block => block.type === "time_condition").fields[0].value,
    });

    await factoryContract.newVault(
      blocks[0].fields[0].address,
      blocks[0].fields[0].value,
      [_supportedTokens[0]],
      approvals,
      beforeLoop,
      loop,
      blocks.find(block => block.type === "time_condition").fields[0].value,
      {},
    );

    const vaultAddress = await factoryContract.userToVault(address);

    console.log({ vaultAddress });

    await startingToken.approve(vaultAddress, "10000000000000000000000000");

    const vault = new ethers.Contract(vaultAddress, vaultAbi.abi, signer);

    console.log({ vault });
    await vault.setUp({ gasLimit: 100000000000, gasPrice: 500000000 });

    // Create Autonomy Registry Instance
    const autonomyRegistry = new ethers.Contract(REGISTRY_ADDR_POLYGON_MAINNET, REGISTRY_ABI, signer);

    // Generate funciton signature and create calldata for Request
    const vaultRunLoopSignature = ["function runLoop()"];
    const vaultRunLoopInterface = new ethers.utils.Interface(vaultRunLoopSignature);
    const callData = vaultRunLoopInterface.encodeFunctionData("runLoop", []);

    console.log(callData);

    // Create new Request in Registry
    let receipt = await autonomyRegistry.newReq(
      vaultAddress,
      "0x0000000000000000000000000000000000000000",
      callData,
      0,
      false,
      false,
      false,
      { value: 500000000000000 },
    ); // todo check how much gas is needed for runLoop

    console.log({ receipt });
  }, [address, blocks, provider]);

  return (
    <div>
      <div className="blocks">
        {blocks.map((block, index) => (
          <div className="blockWrapper" type={index}>
            <Block />

            <BlockDetails data={block} />
          </div>
        ))}

        <div className="blockWrapper">
          <Block variant="add" onClick={() => setAddBlockModalOpen(true)} />

          <BlockDetails
            data={editableBlock}
            setBlocks={setBlocks}
            blocks={blocks}
            setEditableBlock={setEditableBlock}
          />
        </div>
      </div>

      <CreateBlock
        visible={addBlockModalOpen}
        setVisibility={setAddBlockModalOpen}
        setEditableBlock={setEditableBlock}
        setBlocks={setBlocks}
      />

      <button className="button" onClick={handleSubmit} disabled={!address || blocks.length === 0}>
        {address ? "Submit" : "You need to connect"}
      </button>
    </div>
  );
}
