/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { MockNFT, MockNFTInterface } from "../../mocks/MockNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "mintTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600b81526020016a139195151d5d1bdc9a585b60aa1b8152506040518060400160405280600381526020016213919560ea1b815250816000908162000063919062000120565b50600162000072828262000120565b505050620001ec565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620000a657607f821691505b602082108103620000c757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200011b57600081815260208120601f850160051c81016020861015620000f65750805b601f850160051c820191505b81811015620001175782815560010162000102565b5050505b505050565b81516001600160401b038111156200013c576200013c6200007b565b62000154816200014d845462000091565b84620000cd565b602080601f8311600181146200018c5760008415620001735750858301515b600019600386901b1c1916600185901b17855562000117565b600085815260208120601f198616915b82811015620001bd578886015182559484019460019091019084016200019c565b5085821015620001dc5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61144280620001fc6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a22cb46511610066578063a22cb465146101e1578063b88d4fde146101f4578063c87b56dd14610207578063e985e9c51461021a57600080fd5b806370a08231146101a5578063755edd17146101c657806395d89b41146101d957600080fd5b8063095ea7b3116100c8578063095ea7b31461015757806323b872dd1461016c57806342842e0e1461017f5780636352211e1461019257600080fd5b806301ffc9a7146100ef57806306fdde0314610117578063081812fc1461012c575b600080fd5b6101026100fd366004611033565b610256565b60405190151581526020015b60405180910390f35b61011f6102a8565b60405161010e91906110a0565b61013f61013a3660046110b3565b61033a565b6040516001600160a01b03909116815260200161010e565b61016a6101653660046110e8565b610361565b005b61016a61017a366004611112565b610499565b61016a61018d366004611112565b610511565b61013f6101a03660046110b3565b61052c565b6101b86101b336600461114e565b610591565b60405190815260200161010e565b6101b86101d436600461114e565b61062b565b61011f610652565b61016a6101ef366004611169565b610661565b61016a6102023660046111bb565b610670565b61011f6102153660046110b3565b6106ef565b610102610228366004611297565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061028757506001600160e01b03198216635b5e139f60e01b145b806102a257506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546102b7906112ca565b80601f01602080910402602001604051908101604052809291908181526020018280546102e3906112ca565b80156103305780601f1061030557610100808354040283529160200191610330565b820191906000526020600020905b81548152906001019060200180831161031357829003601f168201915b5050505050905090565b600061034582610763565b506000908152600460205260409020546001600160a01b031690565b600061036c8261052c565b9050806001600160a01b0316836001600160a01b0316036103de5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061041857506001600160a01b038116600090815260056020908152604080832033845290915290205460ff165b61048a5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c000060648201526084016103d5565b61049483836107ca565b505050565b6104a33382610845565b6105065760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526d1c881b9bdc88185c1c1c9bdd995960921b60648201526084016103d5565b6104948383836108c4565b61049483838360405180602001604052806000815250610670565b6000818152600260205260408120546001600160a01b0316806102a25760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016103d5565b60006001600160a01b03821661060f5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e6572000000000000000000000000000000000000000000000060648201526084016103d5565b506001600160a01b031660009081526003602052604090205490565b600061063b600680546001019055565b600061064660065490565b90506102a28382610a85565b6060600180546102b7906112ca565b61066c338383610a9f565b5050565b61067a3383610845565b6106dd5760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526d1c881b9bdc88185c1c1c9bdd995960921b60648201526084016103d5565b6106e984848484610b6d565b50505050565b60606106fa82610763565b600061071160408051602081019091526000815290565b90506000815111610731576040518060200160405280600081525061075c565b8061073b84610beb565b60405160200161074c929190611304565b6040516020818303038152906040525b9392505050565b6000818152600260205260409020546001600160a01b03166107c75760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016103d5565b50565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038416908117909155819061080c8261052c565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806108518361052c565b9050806001600160a01b0316846001600160a01b0316148061089857506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806108bc5750836001600160a01b03166108b18461033a565b6001600160a01b0316145b949350505050565b826001600160a01b03166108d78261052c565b6001600160a01b0316146109535760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016103d5565b6001600160a01b0382166109b55760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103d5565b6109c06000826107ca565b6001600160a01b03831660009081526003602052604081208054600192906109e9908490611349565b90915550506001600160a01b0382166000908152600360205260408120805460019290610a1790849061135c565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b61066c828260405180602001604052806000815250610d04565b816001600160a01b0316836001600160a01b031603610b005760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103d5565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610b788484846108c4565b610b8484848484610d82565b6106e95760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016103d5565b606081600003610c125750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610c3c5780610c268161136f565b9150610c359050600a8361139e565b9150610c16565b60008167ffffffffffffffff811115610c5757610c576111a5565b6040519080825280601f01601f191660200182016040528015610c81576020820181803683370190505b5090505b84156108bc57610c96600183611349565b9150610ca3600a866113b2565b610cae90603061135c565b60f81b818381518110610cc357610cc36113c6565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610cfd600a8661139e565b9450610c85565b610d0e8383610ece565b610d1b6000848484610d82565b6104945760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016103d5565b60006001600160a01b0384163b15610ec357604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610dc69033908990889088906004016113dc565b6020604051808303816000875af1925050508015610e01575060408051601f3d908101601f19168201909252610dfe91810190611418565b60015b610ea9573d808015610e2f576040519150601f19603f3d011682016040523d82523d6000602084013e610e34565b606091505b508051600003610ea15760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016103d5565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506108bc565b506001949350505050565b6001600160a01b038216610f245760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103d5565b6000818152600260205260409020546001600160a01b031615610f895760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103d5565b6001600160a01b0382166000908152600360205260408120805460019290610fb290849061135c565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b0319811681146107c757600080fd5b60006020828403121561104557600080fd5b813561075c8161101d565b60005b8381101561106b578181015183820152602001611053565b50506000910152565b6000815180845261108c816020860160208601611050565b601f01601f19169290920160200192915050565b60208152600061075c6020830184611074565b6000602082840312156110c557600080fd5b5035919050565b80356001600160a01b03811681146110e357600080fd5b919050565b600080604083850312156110fb57600080fd5b611104836110cc565b946020939093013593505050565b60008060006060848603121561112757600080fd5b611130846110cc565b925061113e602085016110cc565b9150604084013590509250925092565b60006020828403121561116057600080fd5b61075c826110cc565b6000806040838503121561117c57600080fd5b611185836110cc565b91506020830135801515811461119a57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156111d157600080fd5b6111da856110cc565b93506111e8602086016110cc565b925060408501359150606085013567ffffffffffffffff8082111561120c57600080fd5b818701915087601f83011261122057600080fd5b813581811115611232576112326111a5565b604051601f8201601f19908116603f0116810190838211818310171561125a5761125a6111a5565b816040528281528a602084870101111561127357600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156112aa57600080fd5b6112b3836110cc565b91506112c1602084016110cc565b90509250929050565b600181811c908216806112de57607f821691505b6020821081036112fe57634e487b7160e01b600052602260045260246000fd5b50919050565b60008351611316818460208801611050565b83519083019061132a818360208801611050565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b818103818111156102a2576102a2611333565b808201808211156102a2576102a2611333565b60006001820161138157611381611333565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826113ad576113ad611388565b500490565b6000826113c1576113c1611388565b500690565b634e487b7160e01b600052603260045260246000fd5b60006001600160a01b0380871683528086166020840152508360408301526080606083015261140e6080830184611074565b9695505050505050565b60006020828403121561142a57600080fd5b815161075c8161101d56fea164736f6c6343000811000a";

type MockNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockNFT__factory extends ContractFactory {
  constructor(...args: MockNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockNFT> {
    return super.deploy(overrides || {}) as Promise<MockNFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockNFT {
    return super.attach(address) as MockNFT;
  }
  override connect(signer: Signer): MockNFT__factory {
    return super.connect(signer) as MockNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockNFTInterface {
    return new utils.Interface(_abi) as MockNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockNFT {
    return new Contract(address, _abi, signerOrProvider) as MockNFT;
  }
}