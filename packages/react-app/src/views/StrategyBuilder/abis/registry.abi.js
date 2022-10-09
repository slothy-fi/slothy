export const REGISTRY_ADDR_MUMBAI = "0xe87800fEb6E7aEcEB8F136f1d821E98500C0FF42";
export const REGISTRY_ADDR_POLYGON_MAINNET = "0x18d02301E534cab22267460eD8fBdf2B8382A3ff";

export const REGISTRY_ABI = [
  {
    inputs: [
      {
        internalType: "contract IStakeManager",
        name: "stakeMan",
        type: "address",
      },
      {
        internalType: "contract IOracle",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "contract IForwarder",
        name: "userForwarder",
        type: "address",
      },
      {
        internalType: "contract IForwarder",
        name: "gasForwarder",
        type: "address",
      },
      {
        internalType: "contract IForwarder",
        name: "userGasForwarder",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "totalAUTOSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "referer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "initEthSent",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "ethForCall",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "verifyUser",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "insertFeeAmount",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "payWithAUTO",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isAlive",
        type: "bool",
      },
    ],
    name: "HashedReqAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "HashedReqCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "wasRemoved",
        type: "bool",
      },
    ],
    name: "HashedReqExecuted",
    type: "event",
  },
  {
    inputs: [],
    name: "BASE_BPS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GAS_OVERHEAD_AUTO",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GAS_OVERHEAD_ETH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAY_AUTO_BPS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAY_ETH_BPS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "referer",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint112",
            name: "initEthSent",
            type: "uint112",
          },
          {
            internalType: "uint112",
            name: "ethForCall",
            type: "uint112",
          },
          {
            internalType: "bool",
            name: "verifyUser",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "insertFeeAmount",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "payWithAUTO",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isAlive",
            type: "bool",
          },
        ],
        internalType: "struct IRegistry.Request",
        name: "r",
        type: "tuple",
      },
    ],
    name: "cancelHashedReq",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "referer",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint112",
            name: "initEthSent",
            type: "uint112",
          },
          {
            internalType: "uint112",
            name: "ethForCall",
            type: "uint112",
          },
          {
            internalType: "bool",
            name: "verifyUser",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "insertFeeAmount",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "payWithAUTO",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isAlive",
            type: "bool",
          },
        ],
        internalType: "struct IRegistry.Request",
        name: "r",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "expectedGas",
        type: "uint256",
      },
    ],
    name: "executeHashedReq",
    outputs: [
      {
        internalType: "uint256",
        name: "gasUsed",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAUTOAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getExecCountOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGasForwarder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getHashedReq",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getHashedReqs",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getHashedReqsLen",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startIdx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endIdx",
        type: "uint256",
      },
    ],
    name: "getHashedReqsSlice",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getReferalCountOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "referer",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint112",
            name: "initEthSent",
            type: "uint112",
          },
          {
            internalType: "uint112",
            name: "ethForCall",
            type: "uint112",
          },
          {
            internalType: "bool",
            name: "verifyUser",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "insertFeeAmount",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "payWithAUTO",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isAlive",
            type: "bool",
          },
        ],
        internalType: "struct IRegistry.Request",
        name: "r",
        type: "tuple",
      },
    ],
    name: "getReqBytes",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getReqCountOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStakeManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserForwarder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserGasForwarder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "expectedGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startIdx",
        type: "uint256",
      },
    ],
    name: "insertToCallData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "referer",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        internalType: "uint112",
        name: "ethForCall",
        type: "uint112",
      },
      {
        internalType: "bool",
        name: "verifyUser",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "insertFeeAmount",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isAlive",
        type: "bool",
      },
    ],
    name: "newReq",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "referer",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        internalType: "uint112",
        name: "ethForCall",
        type: "uint112",
      },
      {
        internalType: "bool",
        name: "verifyUser",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "insertFeeAmount",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "payWithAUTO",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isAlive",
        type: "bool",
      },
    ],
    name: "newReqPaySpecific",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
