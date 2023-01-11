/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMultichainPortal,
  IMultichainPortalInterface,
} from "../../L2/IMultichainPortal";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "swapRouter",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "swapArguments",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "_calldata",
            type: "bytes",
          },
        ],
        internalType: "struct Types.ICall[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "swapERC20AndCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountUSDC",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "swapRouter",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "swapArguments",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "dstChainId",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "srcPoolId",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "dstPoolId",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "minAmountOut",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "dstGasForCall",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "dstNativeAmount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "dstNativeAddr",
                type: "bytes",
              },
            ],
            internalType: "struct IStargateRouter.lzTxObj",
            name: "lzTxObj",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct IMultichainPortal.StargateArgs",
        name: "stargateArgs",
        type: "tuple",
      },
    ],
    name: "swapERC20AndSend",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "swapRouter",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "swapArguments",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "_calldata",
            type: "bytes",
          },
        ],
        internalType: "struct Types.ICall[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "swapNativeAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountUSDC",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lzFee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "swapRouter",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "swapArguments",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "dstChainId",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "srcPoolId",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "dstPoolId",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "minAmountOut",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "dstGasForCall",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "dstNativeAmount",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "dstNativeAddr",
                type: "bytes",
              },
            ],
            internalType: "struct IStargateRouter.lzTxObj",
            name: "lzTxObj",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct IMultichainPortal.StargateArgs",
        name: "stargateArgs",
        type: "tuple",
      },
    ],
    name: "swapNativeAndSend",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class IMultichainPortal__factory {
  static readonly abi = _abi;
  static createInterface(): IMultichainPortalInterface {
    return new utils.Interface(_abi) as IMultichainPortalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMultichainPortal {
    return new Contract(address, _abi, signerOrProvider) as IMultichainPortal;
  }
}