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
        address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // token address
        symbol: "USDC",
      },
    ],
    in: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // token address
    out: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // token address
    address: "0x0000000000000000000000000000000000000000", // block address
    address_to_call: "0x0000000000000000000000000000000000000000",
    approve: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // token address
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
        address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // token address
        symbol: "USDC",
      },
    ],
    in: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    out: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // token address
    address: "0x9F0B13D9469748Eb57969A403BeF4A0596D73ae8", // block address
    address_to_call: "0x0000000000000000000000000000000000000000",
    approve: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // token address
    receiptAddressToken: "0x625e7708f30ca75bfd92586e17077590c60eb4cd",
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
    address: "0x0000000000000000000000000000000000000000", // block address
    method: "",
  },
  {
    type: "claim",
    label: "Claim Rewards",
    //in from prev
    //out from prev
    address_to_call: "0x0000000000000000000000000000000000000000",
    address: "0xf460988E9E7c0211C30Ba73714BA52993dac5d28", // block address
    approve: "0x625e7708f30ca75bfd92586e17077590c60eb4cd", // receiptAddressToken
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
    address_to_call: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // token address
    address: "0x1C2e496944Be8b352f0668C0F1DF78288137c21A", // block address
    // approve: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // address to call address
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
    address: "0x0000000000000000000000000000000000000000", // block address
    // approve: "0x0000000000000000000000000000000000000000", // in address
    method: "",
  },
  {
    type: "receive_streaming",
    label: "Receive Streaming",
    domain: "Superfluid",
    //in from prev
    //out from prev
    address_to_call: "0x0000000000000000000000000000000000000000",
    address: "0x0000000000000000000000000000000000000000", // block address
    // approve: "0x0000000000000000000000000000000000000000", // in address
    method: "",
  },
];

export default blockOptions;
