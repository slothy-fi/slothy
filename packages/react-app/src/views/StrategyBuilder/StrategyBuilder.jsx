import React, { useState, useEffect, useCallback } from "react";

import Block from "./Block";
import CreateBlock from "./CreateBlock";
import BlockDetails from "./BlockDetails";
import "./StrategyBuilder.css";

export default function StrategyBuilder({ address }) {
  const [blocks, setBlocks] = useState([]);
  const [addBlockModalOpen, setAddBlockModalOpen] = useState(false);
  const [editableBlock, setEditableBlock] = useState(null);

  useEffect(() => {
    const blocks = JSON.parse(localStorage.getItem("blocks"));

    setBlocks(blocks ?? []);
  }, []);

  const handleSubmit = useCallback(() => {
    console.log({ blocks });
  }, []);

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
