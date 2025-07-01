// This file exports the Reaction contract ABI and address for use with wagmi/viem.
// Update the ABI import after each contract build/deploy.

// If your environment doesn't support JSON imports, copy the ABI array here manually.
// import reactionAbiJson from '../../../../packages/contracts/out/Reaction.sol/Reaction.json';
// export const REACTION_ABI = reactionAbiJson.abi;

// Manual ABI export fallback (replace with actual ABI array after build):
export const REACTION_ABI = [
  {
    type: "constructor",
    inputs: [
      { name: "initialOwner", type: "address", internalType: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "addReaction",
    inputs: [
      { name: "transactionId", type: "bytes32", internalType: "bytes32" },
      { name: "emojiId", type: "uint8", internalType: "uint8" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "adminAction",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "reactions",
    inputs: [
      { name: "", type: "bytes32", internalType: "bytes32" },
      { name: "", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ReactionAdded",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      { name: "user", type: "address", indexed: true, internalType: "address" },
      { name: "emojiId", type: "uint8", indexed: false, internalType: "uint8" },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
];

// Update this after deployment
export const REACTION_ADDRESS = "0x29D404443f2CFd112B9C2947B28bf0Db27a7D00E";
