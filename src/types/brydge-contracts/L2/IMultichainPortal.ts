/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace Types {
  export type ICallStruct = {
    _to: PromiseOrValue<string>;
    _value: PromiseOrValue<BigNumberish>;
    _calldata: PromiseOrValue<BytesLike>;
  };

  export type ICallStructOutput = [string, BigNumber, string] & {
    _to: string;
    _value: BigNumber;
    _calldata: string;
  };
}

export declare namespace IStargateRouter {
  export type LzTxObjStruct = {
    dstGasForCall: PromiseOrValue<BigNumberish>;
    dstNativeAmount: PromiseOrValue<BigNumberish>;
    dstNativeAddr: PromiseOrValue<BytesLike>;
  };

  export type LzTxObjStructOutput = [BigNumber, BigNumber, string] & {
    dstGasForCall: BigNumber;
    dstNativeAmount: BigNumber;
    dstNativeAddr: string;
  };
}

export declare namespace IMultichainPortal {
  export type StargateArgsStruct = {
    dstChainId: PromiseOrValue<BigNumberish>;
    srcPoolId: PromiseOrValue<BigNumberish>;
    dstPoolId: PromiseOrValue<BigNumberish>;
    minAmountOut: PromiseOrValue<BigNumberish>;
    lzTxObj: IStargateRouter.LzTxObjStruct;
    receiver: PromiseOrValue<string>;
    data: PromiseOrValue<BytesLike>;
  };

  export type StargateArgsStructOutput = [
    number,
    number,
    number,
    BigNumber,
    IStargateRouter.LzTxObjStructOutput,
    string,
    string
  ] & {
    dstChainId: number;
    srcPoolId: number;
    dstPoolId: number;
    minAmountOut: BigNumber;
    lzTxObj: IStargateRouter.LzTxObjStructOutput;
    receiver: string;
    data: string;
  };
}

export interface IMultichainPortalInterface extends utils.Interface {
  functions: {
    "swapERC20AndCall(address,address,uint256,address,address,bytes,(address,uint256,bytes)[])": FunctionFragment;
    "swapERC20AndSend(uint256,uint256,address,address,address,bytes,(uint16,uint16,uint16,uint256,(uint256,uint256,bytes),address,bytes))": FunctionFragment;
    "swapNativeAndCall(address,address,address,bytes,(address,uint256,bytes)[])": FunctionFragment;
    "swapNativeAndSend(uint256,uint256,uint256,address,address,bytes,(uint16,uint16,uint16,uint256,(uint256,uint256,bytes),address,bytes))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "swapERC20AndCall"
      | "swapERC20AndSend"
      | "swapNativeAndCall"
      | "swapNativeAndSend"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "swapERC20AndCall",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      Types.ICallStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapERC20AndSend",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      IMultichainPortal.StargateArgsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapNativeAndCall",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      Types.ICallStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapNativeAndSend",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      IMultichainPortal.StargateArgsStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "swapERC20AndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapERC20AndSend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapNativeAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapNativeAndSend",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IMultichainPortal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMultichainPortalInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    swapERC20AndCall(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      swapRouter: PromiseOrValue<string>,
      swapArguments: PromiseOrValue<BytesLike>,
      calls: Types.ICallStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapERC20AndSend(
      amountIn: PromiseOrValue<BigNumberish>,
      amountUSDC: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      swapRouter: PromiseOrValue<string>,
      swapArguments: PromiseOrValue<BytesLike>,
      stargateArgs: IMultichainPortal.StargateArgsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapNativeAndCall(
      tokenOut: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      swapRouter: PromiseOrValue<string>,
      swapArguments: PromiseOrValue<BytesLike>,
      calls: Types.ICallStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapNativeAndSend(
      amountIn: PromiseOrValue<BigNumberish>,
      amountUSDC: PromiseOrValue<BigNumberish>,
      lzFee: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      swapRouter: PromiseOrValue<string>,
      swapArguments: PromiseOrValue<BytesLike>,
      stargateArgs: IMultichainPortal.StargateArgsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  swapERC20AndCall(
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    amountIn: PromiseOrValue<BigNumberish>,
    user: PromiseOrValue<string>,
    swapRouter: PromiseOrValue<string>,
    swapArguments: PromiseOrValue<BytesLike>,
    calls: Types.ICallStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapERC20AndSend(
    amountIn: PromiseOrValue<BigNumberish>,
    amountUSDC: PromiseOrValue<BigNumberish>,
    user: PromiseOrValue<string>,
    tokenIn: PromiseOrValue<string>,
    swapRouter: PromiseOrValue<string>,
    swapArguments: PromiseOrValue<BytesLike>,
    stargateArgs: IMultichainPortal.StargateArgsStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapNativeAndCall(
    tokenOut: PromiseOrValue<string>,
    user: PromiseOrValue<string>,
    swapRouter: PromiseOrValue<string>,
    swapArguments: PromiseOrValue<BytesLike>,
    calls: Types.ICallStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapNativeAndSend(
    amountIn: PromiseOrValue<BigNumberish>,
    amountUSDC: PromiseOrValue<BigNumberish>,
    lzFee: PromiseOrValue<BigNumberish>,
    user: PromiseOrValue<string>,
    swapRouter: PromiseOrValue<string>,
    swapArguments: PromiseOrValue<BytesLike>,
    stargateArgs: IMultichainPortal.StargateArgsStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    swapERC20AndCall(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      swapRouter: PromiseOrValue<string>,
      swapArguments: PromiseOrValue<BytesLike>,
      calls: Types.ICallStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    swapERC20AndSend(
      amountIn: PromiseOrValue<BigNumberish>,
      amountUSDC: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      swapRouter: PromiseOrValue<string>,
      swapArguments: PromiseOrValue<BytesLike>,
      stargateArgs: IMultichainPortal.StargateArgsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    swapNativeAndCall(
      tokenOut: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      swapRouter: PromiseOrValue<string>,
      swapArguments: PromiseOrValue<BytesLike>,
      calls: Types.ICallStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    swapNativeAndSend(
      amountIn: PromiseOrValue<BigNumberish>,
      amountUSDC: PromiseOrValue<BigNumberish>,
      lzFee: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      swapRouter: PromiseOrValue<string>,
      swapArguments: PromiseOrValue<BytesLike>,
      stargateArgs: IMultichainPortal.StargateArgsStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    swapERC20AndCall(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      swapRouter: PromiseOrValue<string>,
      swapArguments: PromiseOrValue<BytesLike>,
      calls: Types.ICallStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapERC20AndSend(
      amountIn: PromiseOrValue<BigNumberish>,
      amountUSDC: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      swapRouter: PromiseOrValue<string>,
      swapArguments: PromiseOrValue<BytesLike>,
      stargateArgs: IMultichainPortal.StargateArgsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapNativeAndCall(
      tokenOut: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      swapRouter: PromiseOrValue<string>,
      swapArguments: PromiseOrValue<BytesLike>,
      calls: Types.ICallStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapNativeAndSend(
      amountIn: PromiseOrValue<BigNumberish>,
      amountUSDC: PromiseOrValue<BigNumberish>,
      lzFee: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      swapRouter: PromiseOrValue<string>,
      swapArguments: PromiseOrValue<BytesLike>,
      stargateArgs: IMultichainPortal.StargateArgsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swapERC20AndCall(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      swapRouter: PromiseOrValue<string>,
      swapArguments: PromiseOrValue<BytesLike>,
      calls: Types.ICallStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapERC20AndSend(
      amountIn: PromiseOrValue<BigNumberish>,
      amountUSDC: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      tokenIn: PromiseOrValue<string>,
      swapRouter: PromiseOrValue<string>,
      swapArguments: PromiseOrValue<BytesLike>,
      stargateArgs: IMultichainPortal.StargateArgsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapNativeAndCall(
      tokenOut: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      swapRouter: PromiseOrValue<string>,
      swapArguments: PromiseOrValue<BytesLike>,
      calls: Types.ICallStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapNativeAndSend(
      amountIn: PromiseOrValue<BigNumberish>,
      amountUSDC: PromiseOrValue<BigNumberish>,
      lzFee: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      swapRouter: PromiseOrValue<string>,
      swapArguments: PromiseOrValue<BytesLike>,
      stargateArgs: IMultichainPortal.StargateArgsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}