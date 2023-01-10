import { JsonRpcProvider, JsonRpcSigner } from '@ethersproject/providers';
import {
  Contract, ContractFunction, ContractTransaction, ethers, PayableOverrides,
} from 'ethers';
import request from 'supertest';

import setBalances from '../../test/utils/setBalances';
import {
  ERC20TransactionProps,
  ExposedERC20TransactionProps,
  ExposedNativeTransactionProps,
  GAS_ESTIMATION_BASIS,
  GAS_ESTIMATION_MULTIPLIER,
  MULTICHAIN_ARBITRUM_ROUTER, MULTICHAIN_AVALANCHE_ROUTER, MULTICHAIN_ETH_ROUTER, MULTICHAIN_OPTIMISM_ROUTER, MULTICHAIN_POLY_ROUTER, NativeTransactionProps, SupportedChainId,
} from './constants';
import { MultichainRouter__factory } from './types/brydge-contracts';

const {
  TENDERLY_USER, TENDERLY_PROJECT, TENDERLY_ACCESS_KEY, TENDERLY_BASE_URL, TEST_WALLET,
} = process.env;

const TENDERLY_FORK_API = `/api/v1/account/${TENDERLY_USER}/project/${TENDERLY_PROJECT}/fork`;

let forkId: Number;
let forkRPC: string;
let provider: JsonRpcProvider;
let signer: JsonRpcSigner;
async function closeFork() {
  const TENDERLY_FORK_ACCESS_URL = `${TENDERLY_FORK_API}/${forkId}`;

  await request(TENDERLY_BASE_URL)
    .delete(TENDERLY_FORK_ACCESS_URL)
    .set('X-Access-Key', TENDERLY_ACCESS_KEY as string);
}
function getRouterForChain(chainId: number, simulatedSigner: JsonRpcSigner) {
  let multiChainRouter;
  switch (chainId) {
    case 1:
      multiChainRouter = MultichainRouter__factory.connect(MULTICHAIN_ETH_ROUTER, simulatedSigner);
      break;
    case 137:
      multiChainRouter = MultichainRouter__factory.connect(MULTICHAIN_POLY_ROUTER, simulatedSigner);
      break;
    case 10:
      multiChainRouter = MultichainRouter__factory.connect(MULTICHAIN_OPTIMISM_ROUTER, simulatedSigner);
      break;
    case 42161:
      multiChainRouter = MultichainRouter__factory.connect(MULTICHAIN_ARBITRUM_ROUTER, simulatedSigner);
      break;
    case SupportedChainId.AVALANCHE:
      multiChainRouter = MultichainRouter__factory.connect(MULTICHAIN_AVALANCHE_ROUTER, simulatedSigner);
      break;
    default:
      return undefined;
  }
  return multiChainRouter;
}
export async function contractCallWithGasEstimation<T extends Contract>(
  contract: T,
  methodName: keyof T['functions'],
  args: Parameters<T['functions'][typeof methodName]>,
  overrides?: PayableOverrides,
) {
  const estimateGasFn = contract.estimateGas[methodName as string];
  const gasEstimation = await estimateGasFn(...args, overrides);
  const fn: ContractFunction = contract[methodName];
  const gasLimit = gasEstimation.mul(GAS_ESTIMATION_MULTIPLIER).div(GAS_ESTIMATION_BASIS);

  return fn(...args, { ...overrides, gasLimit });
}

export async function sendNativeTransaction({
  isCrossChain,
  outputTokenAddress,
  multiChainRouter,
  swapAddressSource,
  swapArgumentsSource,
  swapAddressDest,
  swapArgumentsDest,
  stargateArgs,
  amountIn,
  amountInUSDC,
  layerZeroFeeEstimate,
  account,
  calls,
}: NativeTransactionProps): Promise<ContractTransaction | undefined> {
  let transaction;
  // TODO: Get correct signer from provider
  if (!isCrossChain) {
    transaction = contractCallWithGasEstimation(
      multiChainRouter,
      'swapNativeAndCall',
      [outputTokenAddress, account, swapAddressDest, swapArgumentsDest, calls],
      {
        value: amountIn,
      },
    );
  } else {
    transaction = contractCallWithGasEstimation(
      multiChainRouter,
      'swapNativeAndSend',
      [amountIn, amountInUSDC, layerZeroFeeEstimate, account, swapAddressSource, swapArgumentsSource, stargateArgs],
      {
        value: amountIn.add(layerZeroFeeEstimate),
      },
    );
  }
  return transaction;
}

export async function sendERC20Transaction({
  isCrossChain,
  outputTokenAddress,
  multiChainRouter,
  swapAddressSource,
  swapArgumentsSource,
  swapAddressDest,
  swapArgumentsDest,
  stargateArgs,
  account,
  inputCurrencyAddress,
  amountIn,
  amountInUSDC,
  layerZeroFeeEstimate,
  calls,
}: ERC20TransactionProps): Promise<ContractTransaction | undefined> {
  let transaction;
  if (!isCrossChain) {
    transaction = contractCallWithGasEstimation(
      multiChainRouter,
      'swapERC20AndCall',
      [inputCurrencyAddress, outputTokenAddress, amountIn, account, swapAddressDest, swapArgumentsDest, calls],
      {
        value: '0',
      },
    );
  } else {
    transaction = contractCallWithGasEstimation(
      multiChainRouter,
      'swapERC20AndSend',
      [amountIn, amountInUSDC, account, inputCurrencyAddress, swapAddressSource, swapArgumentsSource, stargateArgs],
      {
        value: layerZeroFeeEstimate,
      },
    );
  }
  return transaction;
}
export async function simulateNativeTransaction(props: ExposedNativeTransactionProps) {
  const FORK_OPTIONS = {
    network_id: props.chainId.toString(),
  };
  const fork = await request(TENDERLY_BASE_URL)
    .post(TENDERLY_FORK_API)
    .set('X-Access-Key', TENDERLY_ACCESS_KEY as string)
    .send(FORK_OPTIONS);

  forkId = fork.body.simulation_fork.id;
  forkRPC = `https://rpc.tenderly.co/fork/${forkId}`;
  provider = new ethers.providers.JsonRpcProvider(forkRPC);
  signer = provider.getSigner(TEST_WALLET);
  setBalances(TEST_WALLET, 100, provider);
  const multiChainRouter = getRouterForChain(props.chainId, signer);
  await sendNativeTransaction({
    chainId: props.chainId,
    isCrossChain: props.isCrossChain,
    outputTokenAddress: props.outputTokenAddress,
    multiChainRouter,
    swapAddressSource: props.swapAddressSource,
    swapArgumentsSource: props.swapArgumentsSource,
    swapAddressDest: props.swapAddressDest,
    swapArgumentsDest: props.swapArgumentsDest,
    stargateArgs: props.stargateArgs,
    amountIn: props.amountIn,
    amountInUSDC: props.amountInUSDC,
    layerZeroFeeEstimate: props.layerZeroFeeEstimate,
    account: props.account,
    calls: props.calls,
  });
  await closeFork();
}

export async function simulateERC20Transaction(props: ExposedERC20TransactionProps) {
  const FORK_OPTIONS = {
    network_id: props.chainId.toString(),
  };
  const fork = await request(TENDERLY_BASE_URL)
    .post(TENDERLY_FORK_API)
    .set('X-Access-Key', TENDERLY_ACCESS_KEY as string)
    .send(FORK_OPTIONS);

  forkId = fork.body.simulation_fork.id;
  forkRPC = `https://rpc.tenderly.co/fork/${forkId}`;
  provider = new ethers.providers.JsonRpcProvider(forkRPC);
  signer = provider.getSigner(TEST_WALLET);
  setBalances(TEST_WALLET, 100, provider);
  const multiChainRouter = getRouterForChain(props.chainId, signer);
  await sendERC20Transaction({
    chainId: props.chainId,
    isCrossChain: props.isCrossChain,
    outputTokenAddress: props.outputTokenAddress,
    multiChainRouter,
    swapAddressSource: props.swapAddressSource,
    swapArgumentsSource: props.swapArgumentsSource,
    swapAddressDest: props.swapAddressDest,
    swapArgumentsDest: props.swapArgumentsDest,
    stargateArgs: props.stargateArgs,
    account: props.account,
    inputCurrencyAddress: props.inputCurrencyAddress,
    amountIn: props.amountIn,
    amountInUSDC: props.amountInUSDC,
    layerZeroFeeEstimate: props.layerZeroFeeEstimate,
    calls: props.calls,
  });
  await closeFork();
}

export async function submitTransaction() {
  console.log('TODO');
}
