/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ATKLandMinter,
  ATKLandMinterInterface,
} from "../../../../delegates/ATK/ATKDelegate.sol/ATKLandMinter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ATK",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ATK_LAND",
    outputs: [
      {
        internalType: "contract IATKLand",
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
        name: "data",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "handleERC721Transfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5073f868939ee81f04f463010bc52eab91c0839ef08c73ffffffffffffffffffffffffffffffffffffffff1663095ea7b3737d792e98bd1efe92da70e4658f7c541ac22f09a27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b81526004016200009792919062000180565b6020604051808303816000875af1158015620000b7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000dd9190620001ef565b5062000221565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200011182620000e4565b9050919050565b620001238162000104565b82525050565b6000819050919050565b6000819050919050565b6000819050919050565b600062000168620001626200015c8462000129565b6200013d565b62000133565b9050919050565b6200017a8162000147565b82525050565b600060408201905062000197600083018562000118565b620001a660208301846200016f565b9392505050565b600080fd5b60008115159050919050565b620001c981620001b2565b8114620001d557600080fd5b50565b600081519050620001e981620001be565b92915050565b600060208284031215620002085762000207620001ad565b5b60006200021884828501620001d8565b91505092915050565b610f3880620002316000396000f3fe60806040526004361061003f5760003560e01c8063150b7a02146100445780631b73eab0146100815780632bf0c756146100ac578063a5e1573f146100c8575b600080fd5b34801561005057600080fd5b5061006b60048036038101906100669190610733565b6100f3565b60405161007891906107f6565b60405180910390f35b34801561008d57600080fd5b50610096610108565b6040516100a39190610870565b60405180910390f35b6100c660048036038101906100c1919061088b565b610120565b005b3480156100d457600080fd5b506100dd61060e565b6040516100ea919061090c565b60405180910390f35b600063150b7a0260e01b905095945050505050565b737d792e98bd1efe92da70e4658f7c541ac22f09a281565b6000838360009060049261013693929190610931565b906101419190610984565b905060008484600490809261015893929190610931565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509050600080600080606060006393b6bcc860e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916887bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191603610214578680602001905181019061020791906109f8565b80945081965050506102c9565b638fcbcb9860e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916887bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19160361028d57868060200190518101906102749190610bdb565b809650819850829750839950849a5050505050506102c8565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102bf90610ccf565b60405180910390fd5b5b6001830361036857610461737d792e98bd1efe92da70e4658f7c541ac22f09a273ffffffffffffffffffffffffffffffffffffffff1663afddbb596040518163ffffffff1660e01b8152600401602060405180830381865afa158015610333573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103579190610cef565b6103619190610d4b565b905061048d565b60028303610406576078737d792e98bd1efe92da70e4658f7c541ac22f09a273ffffffffffffffffffffffffffffffffffffffff16631e3d05ff6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f59190610cef565b6103ff9190610d4b565b905061048c565b737d792e98bd1efe92da70e4658f7c541ac22f09a273ffffffffffffffffffffffffffffffffffffffff1663183a5dfa6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610465573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104899190610cef565b90505b5b6000737d792e98bd1efe92da70e4658f7c541ac22f09a273ffffffffffffffffffffffffffffffffffffffff168c8c6040516104ca929190610de0565b6000604051808303816000865af19150503d8060008114610507576040519150601f19603f3d011682016040523d82523d6000602084013e61050c565b606091505b5050905080610550576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054790610e45565b60405180910390fd5b6000600190505b8681116105ff57737d792e98bd1efe92da70e4658f7c541ac22f09a273ffffffffffffffffffffffffffffffffffffffff166323b872dd308d848761059c9190610d4b565b6040518463ffffffff1660e01b81526004016105ba93929190610e83565b600060405180830381600087803b1580156105d457600080fd5b505af11580156105e8573d6000803e3d6000fd5b5050505080806105f790610eba565b915050610557565b50505050505050505050505050565b73f868939ee81f04f463010bc52eab91c0839ef08c81565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106658261063a565b9050919050565b6106758161065a565b811461068057600080fd5b50565b6000813590506106928161066c565b92915050565b6000819050919050565b6106ab81610698565b81146106b657600080fd5b50565b6000813590506106c8816106a2565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126106f3576106f26106ce565b5b8235905067ffffffffffffffff8111156107105761070f6106d3565b5b60208301915083600182028301111561072c5761072b6106d8565b5b9250929050565b60008060008060006080868803121561074f5761074e610630565b5b600061075d88828901610683565b955050602061076e88828901610683565b945050604061077f888289016106b9565b935050606086013567ffffffffffffffff8111156107a05761079f610635565b5b6107ac888289016106dd565b92509250509295509295909350565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6107f0816107bb565b82525050565b600060208201905061080b60008301846107e7565b92915050565b6000819050919050565b600061083661083161082c8461063a565b610811565b61063a565b9050919050565b60006108488261081b565b9050919050565b600061085a8261083d565b9050919050565b61086a8161084f565b82525050565b60006020820190506108856000830184610861565b92915050565b6000806000604084860312156108a4576108a3610630565b5b600084013567ffffffffffffffff8111156108c2576108c1610635565b5b6108ce868287016106dd565b935093505060206108e186828701610683565b9150509250925092565b60006108f68261083d565b9050919050565b610906816108eb565b82525050565b600060208201905061092160008301846108fd565b92915050565b600080fd5b600080fd5b6000808585111561094557610944610927565b5b838611156109565761095561092c565b5b6001850283019150848603905094509492505050565b600082905092915050565b600082821b905092915050565b6000610990838361096c565b8261099b81356107bb565b925060048210156109db576109d67fffffffff0000000000000000000000000000000000000000000000000000000083600403600802610977565b831692505b505092915050565b6000815190506109f2816106a2565b92915050565b60008060408385031215610a0f57610a0e610630565b5b6000610a1d858286016109e3565b9250506020610a2e858286016109e3565b9150509250929050565b6000610a438261063a565b9050919050565b610a5381610a38565b8114610a5e57600080fd5b50565b600081519050610a7081610a4a565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610ac482610a7b565b810181811067ffffffffffffffff82111715610ae357610ae2610a8c565b5b80604052505050565b6000610af6610626565b9050610b028282610abb565b919050565b600067ffffffffffffffff821115610b2257610b21610a8c565b5b610b2b82610a7b565b9050602081019050919050565b60005b83811015610b56578082015181840152602081019050610b3b565b83811115610b65576000848401525b50505050565b6000610b7e610b7984610b07565b610aec565b905082815260208101848484011115610b9a57610b99610a76565b5b610ba5848285610b38565b509392505050565b600082601f830112610bc257610bc16106ce565b5b8151610bd2848260208601610b6b565b91505092915050565b600080600080600060a08688031215610bf757610bf6610630565b5b6000610c0588828901610a61565b9550506020610c16888289016109e3565b9450506040610c27888289016109e3565b9350506060610c38888289016109e3565b925050608086015167ffffffffffffffff811115610c5957610c58610635565b5b610c6588828901610bad565b9150509295509295909350565b600082825260208201905092915050565b7f41544b4c616e644d696e7465723a20556e6b6e6f776e2073656c6563746f7200600082015250565b6000610cb9601f83610c72565b9150610cc482610c83565b602082019050919050565b60006020820190508181036000830152610ce881610cac565b9050919050565b600060208284031215610d0557610d04610630565b5b6000610d13848285016109e3565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d5682610698565b9150610d6183610698565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610d9657610d95610d1c565b5b828201905092915050565b600081905092915050565b82818337600083830152505050565b6000610dc78385610da1565b9350610dd4838584610dac565b82840190509392505050565b6000610ded828486610dbb565b91508190509392505050565b7f4d696e74206661696c6564000000000000000000000000000000000000000000600082015250565b6000610e2f600b83610c72565b9150610e3a82610df9565b602082019050919050565b60006020820190508181036000830152610e5e81610e22565b9050919050565b610e6e8161065a565b82525050565b610e7d81610698565b82525050565b6000606082019050610e986000830186610e65565b610ea56020830185610e65565b610eb26040830184610e74565b949350505050565b6000610ec582610698565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610ef757610ef6610d1c565b5b60018201905091905056fea26469706673582212202ed156be3be11af2c9cb666fb68fdf49822e9146bf213ca5d4e212756b0443c064736f6c634300080e0033";

type ATKLandMinterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ATKLandMinterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ATKLandMinter__factory extends ContractFactory {
  constructor(...args: ATKLandMinterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ATKLandMinter> {
    return super.deploy(overrides || {}) as Promise<ATKLandMinter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ATKLandMinter {
    return super.attach(address) as ATKLandMinter;
  }
  override connect(signer: Signer): ATKLandMinter__factory {
    return super.connect(signer) as ATKLandMinter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ATKLandMinterInterface {
    return new utils.Interface(_abi) as ATKLandMinterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ATKLandMinter {
    return new Contract(address, _abi, signerOrProvider) as ATKLandMinter;
  }
}
