/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  10: {
    ReputationTokens: {
      address: "0x1Bf357A15d17E73AffF72c581EF49066cA6aBA75",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
            {
              name: "admins",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "tokenUpdaters",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "MINTER_ROLE",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "TOKEN_MIGRATOR_ROLE",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "TOKEN_UPDATER_ROLE",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "accountsByToken",
          inputs: [
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "balanceOfBatch",
          inputs: [
            {
              name: "accounts",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "ids",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "burnedBalanceOf",
          inputs: [
            {
              name: "addr",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "burnedBalance",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "distributableBalanceOf",
          inputs: [
            {
              name: "addr",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "distributableBalance",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "distribute",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "distributeBatch",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "ids",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "values",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getRoleAdmin",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRoleMember",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "index",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRoleMemberCount",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTokenType",
          inputs: [
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint8",
              internalType: "enum IReputationTokensTypes.TokenType",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "grantRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "hasRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "honestBalanceOf",
          inputs: [
            {
              name: "addr",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "transferrableBalance",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isApprovedForAll",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "migrate",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "migrateBatch",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "ids",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "values",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "mint",
          inputs: [
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "mintBatch",
          inputs: [
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "ids",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "values",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "revokeRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeBatchTransferFrom",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "ids",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "values",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeTransferFrom",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setApprovalForAll",
          inputs: [
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
            {
              name: "status",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "tokensByAccount",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalHolders",
          inputs: [
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "updateToken",
          inputs: [
            {
              name: "id",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "tokenType",
              type: "uint8",
              internalType: "enum IReputationTokensTypes.TokenType",
            },
            {
              name: "uri",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "updateTokenBatch",
          inputs: [
            {
              name: "ids",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "tokenTypes",
              type: "uint8[]",
              internalType: "enum IReputationTokensTypes.TokenType[]",
            },
            {
              name: "uris",
              type: "string[]",
              internalType: "string[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "uri",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "ApprovalForAll",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Create",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Distribute",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "DistributeBatch",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
            {
              name: "value",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Migrate",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "MigrateBatch",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "ids",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
            {
              name: "values",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Mint",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "MintBatch",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenIds",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
            {
              name: "values",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
          ],
          anonymous: false,
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
          name: "RoleAdminChanged",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "previousAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "newAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleGranted",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleRevoked",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "TransferBatch",
          inputs: [
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "ids",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
            {
              name: "values",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "TransferSingle",
          inputs: [
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "id",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "URI",
          inputs: [
            {
              name: "value",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Update",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "tokenType",
              type: "uint8",
              indexed: true,
              internalType: "enum IReputationTokensTypes.TokenType",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "UpdateBatch",
          inputs: [
            {
              name: "tokenId",
              type: "uint256[]",
              indexed: true,
              internalType: "uint256[]",
            },
            {
              name: "tokenType",
              type: "uint8[]",
              indexed: true,
              internalType: "enum IReputationTokensTypes.TokenType[]",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "ERC1155Base__ArrayLengthMismatch",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__BalanceQueryZeroAddress",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__BurnExceedsBalance",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__BurnFromZeroAddress",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__ERC1155ReceiverNotImplemented",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__ERC1155ReceiverRejected",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__MintToZeroAddress",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__NotOwnerOrApproved",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__SelfApproval",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__TransferExceedsBalance",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC1155Base__TransferToZeroAddress",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC165Base__InvalidInterfaceId",
          inputs: [],
        },
        {
          type: "error",
          name: "EnumerableSet__IndexOutOfBounds",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable__NotOwner",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable__NotTransitiveOwner",
          inputs: [],
        },
        {
          type: "error",
          name: "ReputationTokens__CannotTransferSoulboundToken",
          inputs: [],
        },
        {
          type: "error",
          name: "ReputationTokens__InsufficientBalance",
          inputs: [],
        },
        {
          type: "error",
          name: "UintUtils__InsufficientPadding",
          inputs: [],
        },
        {
          type: "error",
          name: "UintUtils__InvalidBase",
          inputs: [],
        },
      ],
      inheritedFunctions: {
        owner: "lib/reputation/lib/solidstate-solidity/contracts/access/ownable/Ownable.sol",
        transferOwnership: "lib/reputation/lib/solidstate-solidity/contracts/access/ownable/Ownable.sol",
        MINTER_ROLE: "lib/reputation/contracts/ReputationTokensBase.sol",
        TOKEN_MIGRATOR_ROLE: "lib/reputation/contracts/ReputationTokensBase.sol",
        TOKEN_UPDATER_ROLE: "lib/reputation/contracts/ReputationTokensBase.sol",
        accountsByToken: "lib/reputation/contracts/ReputationTokensBase.sol",
        balanceOf: "lib/reputation/contracts/ReputationTokensBase.sol",
        balanceOfBatch: "lib/reputation/contracts/ReputationTokensBase.sol",
        burnedBalanceOf: "lib/reputation/contracts/ReputationTokensBase.sol",
        distributableBalanceOf: "lib/reputation/contracts/ReputationTokensBase.sol",
        distribute: "lib/reputation/contracts/ReputationTokensBase.sol",
        distributeBatch: "lib/reputation/contracts/ReputationTokensBase.sol",
        getRoleAdmin: "lib/reputation/contracts/ReputationTokensBase.sol",
        getRoleMember: "lib/reputation/contracts/ReputationTokensBase.sol",
        getRoleMemberCount: "lib/reputation/contracts/ReputationTokensBase.sol",
        getTokenType: "lib/reputation/contracts/ReputationTokensBase.sol",
        grantRole: "lib/reputation/contracts/ReputationTokensBase.sol",
        hasRole: "lib/reputation/contracts/ReputationTokensBase.sol",
        honestBalanceOf: "lib/reputation/contracts/ReputationTokensBase.sol",
        isApprovedForAll: "lib/reputation/contracts/ReputationTokensBase.sol",
        migrate: "lib/reputation/contracts/ReputationTokensBase.sol",
        migrateBatch: "lib/reputation/contracts/ReputationTokensBase.sol",
        mint: "lib/reputation/contracts/ReputationTokensBase.sol",
        mintBatch: "lib/reputation/contracts/ReputationTokensBase.sol",
        renounceRole: "lib/reputation/contracts/ReputationTokensBase.sol",
        revokeRole: "lib/reputation/contracts/ReputationTokensBase.sol",
        safeBatchTransferFrom: "lib/reputation/contracts/ReputationTokensBase.sol",
        safeTransferFrom: "lib/reputation/contracts/ReputationTokensBase.sol",
        setApprovalForAll: "lib/reputation/contracts/ReputationTokensBase.sol",
        supportsInterface: "lib/reputation/contracts/ReputationTokensBase.sol",
        tokensByAccount: "lib/reputation/contracts/ReputationTokensBase.sol",
        totalHolders: "lib/reputation/contracts/ReputationTokensBase.sol",
        totalSupply: "lib/reputation/contracts/ReputationTokensBase.sol",
        updateToken: "lib/reputation/contracts/ReputationTokensBase.sol",
        updateTokenBatch: "lib/reputation/contracts/ReputationTokensBase.sol",
        uri: "lib/reputation/contracts/ReputationTokensBase.sol",
      },
    },
    ReputationFaucet: {
      address: "0xC64770CC5029E1Fb3dc3A5340422B83bE7130FBc",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "addr",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "claim",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "onERC1155BatchReceived",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "onERC1155Received",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
      ],
      inheritedFunctions: {
        onERC1155BatchReceived: "lib/openzeppelin-contracts/contracts/token/ERC1155/utils/ERC1155Holder.sol",
        onERC1155Received: "lib/openzeppelin-contracts/contracts/token/ERC1155/utils/ERC1155Holder.sol",
        supportsInterface: "lib/openzeppelin-contracts/contracts/token/ERC1155/utils/ERC1155Holder.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
