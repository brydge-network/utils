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
} from "../../../common";

export interface ATKLandMinterInterface extends utils.Interface {
  functions: {
    "ATK()": FunctionFragment;
    "ATK_LAND()": FunctionFragment;
    "handleERC721Transfer(bytes,address)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ATK"
      | "ATK_LAND"
      | "handleERC721Transfer"
      | "onERC721Received"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "ATK", values?: undefined): string;
  encodeFunctionData(functionFragment: "ATK_LAND", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "handleERC721Transfer",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "ATK", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ATK_LAND", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "handleERC721Transfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ATKLandMinter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ATKLandMinterInterface;

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
    ATK(overrides?: CallOverrides): Promise<[string]>;

    ATK_LAND(overrides?: CallOverrides): Promise<[string]>;

    handleERC721Transfer(
      data: PromiseOrValue<BytesLike>,
      user: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  ATK(overrides?: CallOverrides): Promise<string>;

  ATK_LAND(overrides?: CallOverrides): Promise<string>;

  handleERC721Transfer(
    data: PromiseOrValue<BytesLike>,
    user: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC721Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    ATK(overrides?: CallOverrides): Promise<string>;

    ATK_LAND(overrides?: CallOverrides): Promise<string>;

    handleERC721Transfer(
      data: PromiseOrValue<BytesLike>,
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    ATK(overrides?: CallOverrides): Promise<BigNumber>;

    ATK_LAND(overrides?: CallOverrides): Promise<BigNumber>;

    handleERC721Transfer(
      data: PromiseOrValue<BytesLike>,
      user: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ATK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ATK_LAND(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    handleERC721Transfer(
      data: PromiseOrValue<BytesLike>,
      user: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
