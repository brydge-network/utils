/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  HootlesMinter,
  HootlesMinterInterface,
} from "../../../delegates/Hootles/HootlesMinter";

const _abi = [
  {
    inputs: [],
    name: "HOOTLES",
    outputs: [
      {
        internalType: "contract IHootles",
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
  "0x60806040526000805473faf3795ac17962d48b9aba848151efd2107a634e6001600160a01b0319918216811790925560018054909116909117905534801561004657600080fd5b506106bb806100566000396000f3fe6080604052600436106100345760003560e01c8063150b7a02146100395780632bf0c75614610083578063485ad51414610098575b600080fd5b34801561004557600080fd5b50610065610054366004610402565b630a85bd0160e11b95945050505050565b6040516001600160e01b031990911681526020015b60405180910390f35b610096610091366004610471565b6100d0565b005b3480156100a457600080fd5b506001546100b8906001600160a01b031681565b6040516001600160a01b03909116815260200161007a565b60006100df60048285876104c5565b6100e8916104ef565b905060006100f984600481886104c5565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250600154604080516318160ddd60e01b8152905196975091956001600160a01b0390911694506318160ddd9350600480830193506020928290030181865afa158015610178573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019c919061051f565b6101a790600161054e565b905060006060630bf1da5360e31b6001600160e01b031986160161024057838060200190518101906101d9919061051f565b60015460405163140e25ad60e31b8152600481018390529193506001600160a01b03169063a0712d689034906024015b6000604051808303818588803b15801561022257600080fd5b505af1158015610236573d6000803e3d6000fd5b50505050506102f0565b63169aa7d560e11b6001600160e01b03198616016102a4578380602001905181019061026c919061057d565b600154604051636965582b60e11b81529294509092506001600160a01b03169063d2cab0569034906102099086908690600401610647565b60405162461bcd60e51b815260206004820152601960248201527f486f6f746c65733a20556e6b6e6f776e2073656c6563746f7200000000000000604482015260640160405180910390fd5b60005b82811015610392576001546001600160a01b03166323b872dd3089610318858961054e565b6040516001600160e01b031960e086901b1681526001600160a01b0393841660048201529290911660248301526044820152606401600060405180830381600087803b15801561036757600080fd5b505af115801561037b573d6000803e3d6000fd5b50505050808061038a90610695565b9150506102f3565b505050505050505050565b80356001600160a01b03811681146103b457600080fd5b919050565b60008083601f8401126103cb57600080fd5b50813567ffffffffffffffff8111156103e357600080fd5b6020830191508360208285010111156103fb57600080fd5b9250929050565b60008060008060006080868803121561041a57600080fd5b6104238661039d565b94506104316020870161039d565b935060408601359250606086013567ffffffffffffffff81111561045457600080fd5b610460888289016103b9565b969995985093965092949392505050565b60008060006040848603121561048657600080fd5b833567ffffffffffffffff81111561049d57600080fd5b6104a9868287016103b9565b90945092506104bc90506020850161039d565b90509250925092565b600080858511156104d557600080fd5b838611156104e257600080fd5b5050820193919092039150565b6001600160e01b031981358181169160048510156105175780818660040360031b1b83161692505b505092915050565b60006020828403121561053157600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561056157610561610538565b92915050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561059057600080fd5b8251915060208084015167ffffffffffffffff808211156105b057600080fd5b818601915086601f8301126105c457600080fd5b8151818111156105d6576105d6610567565b8060051b604051601f19603f830116810181811085821117156105fb576105fb610567565b60405291825284820192508381018501918983111561061957600080fd5b938501935b828510156106375784518452938501939285019261061e565b8096505050505050509250929050565b6000604082018483526020604081850152818551808452606086019150828701935060005b818110156106885784518352938301939183019160010161066c565b5090979650505050505050565b6000600182016106a7576106a7610538565b506001019056fea164736f6c6343000811000a";

type HootlesMinterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HootlesMinterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HootlesMinter__factory extends ContractFactory {
  constructor(...args: HootlesMinterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HootlesMinter> {
    return super.deploy(overrides || {}) as Promise<HootlesMinter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HootlesMinter {
    return super.attach(address) as HootlesMinter;
  }
  override connect(signer: Signer): HootlesMinter__factory {
    return super.connect(signer) as HootlesMinter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HootlesMinterInterface {
    return new utils.Interface(_abi) as HootlesMinterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HootlesMinter {
    return new Contract(address, _abi, signerOrProvider) as HootlesMinter;
  }
}
