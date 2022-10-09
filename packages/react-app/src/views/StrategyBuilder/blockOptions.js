// deposit
// time_condition
// send
// swap

const blockOptions = [
  {
    type: "deposit",
    domain: "Apwine",
    label: "Deposit",
    asset: "USDC",
    fields: [
      {
        type: "asset_amount",
        address: "0x0000000000000000000000000000000000000000", // token address
        symbol: "USDC",
      },
    ],
    out: "0x0000000000000000000000000000000000000000", // token address
    address_to_call: "0x0000000000000000000000000000000000000000",
    method: "",
  },
  {
    type: "deposit",
    domain: "Aave",
    label: "Deposit",
    asset: "USDC",
    fields: [
      {
        type: "asset_amount",
        address: "0x0000000000000000000000000000000000000000", // token address
        symbol: "USDC",
      },
    ],
    out: "0x0000000000000000000000000000000000000000", // token address
    address_to_call: "0x0000000000000000000000000000000000000000",
    method: "",
  },
  {
    type: "time_condition",
    label: "Time Condition",
    fields: [
      {
        type: "time", // in seconds
      },
    ],
    //in from prev
    //out from prev
    address_to_call: "0x0000000000000000000000000000000000000000",
    method: "",
  },
  {
    type: "claim",
    label: "Claim Rewards",
    //in from prev
    //out from prev
    address_to_call: "0x0000000000000000000000000000000000000000",
    method: "",
  },
  {
    type: "send",
    label: "Send",
    fields: [
      {
        type: "address",
        address: "0x0000000000000000000000000000000000000000", // destination address
      },
    ],
    // in from prev
    // out nothing
    address_to_call: "0x0000000000000000000000000000000000000000",
    method: "",
  },
  {
    type: "swap",
    label: "Swap",
    domain: "Uniswap",
    fields: [
      {
        type: "swap_to",
        // value: "asset_address",
      },
    ],
    //in from prev
    //out is destination asset
    address_to_call: "0x0000000000000000000000000000000000000000",
    method: "",
  },
];

export default blockOptions;
