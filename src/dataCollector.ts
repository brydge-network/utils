/* eslint-disable guard-for-in */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { BigNumber } from '@ethersproject/bignumber';
import { JsonRpcProvider, Provider } from '@ethersproject/providers';
import tokensList from '@brydge-network/token-list';
import { Contract } from '@ethersproject/contracts';
import { utils } from 'ethers/lib/ethers';
import axios from 'axios';
import { INFURA_NETWORK_URLS, MULTICALL_ABI, MULTICALL_ADDRESSES } from './constants/data';
import { SupportedChainId } from './constants/chains';

interface CheckTokenBalancesArgs {
  provider: Provider
  account: string
  tokens: string[]
  chainId: SupportedChainId
}

type Result = {
  success: boolean
  gasUsed: BigNumber
  returnData: string
};

const checkTokenBalances = async ({ account, provider, chainId }: CheckTokenBalancesArgs) => {
  const tokens = tokensList.tokens.filter((token) => token.chainId === chainId).map((token) => token.address);
  const multicallAddress = MULTICALL_ADDRESSES[chainId];
  const multicall = new Contract(multicallAddress, MULTICALL_ABI, provider);

  const IERC20_ABI = ['function balanceOf(address owner) view returns (uint256)'];
  const iface = new utils.Interface(IERC20_ABI);
  const checkBalanceCalldata = iface.encodeFunctionData('balanceOf', [account]);

  const calls = tokens.map((tokenAddress) => ({
    target: tokenAddress,
    callData: checkBalanceCalldata,
    gasLimit: 30_000_000,
  }));

  const [blockNumber, returnData] = (await multicall.multicall(calls)) as [BigNumber, Result[]];

  const balances = returnData.map(({ /* gasUsed, success, */ returnData }): BigNumber => {
    const decoded = iface.decodeFunctionResult('balanceOf', returnData);
    return decoded[0];
  });

  return {
    blockNumber,
    balances,
  };
};

export async function runAnalysis(testChainId: SupportedChainId) {
  const testProvider = new JsonRpcProvider(INFURA_NETWORK_URLS[testChainId]);
  const tokens = tokensList.tokens.filter((token) => token.chainId === testChainId).map((token) => token.address);

  const params = {
    module: 'account',
    action: 'txlist',
    address: '0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106',
    startblock: '0',
    endblock: '99999999',
    page: '3',
    offset: '100',
    sort: 'desc',
    apikey: '6CJG3UMG8E8FWA5XBW6K9DIHJ6CTAQWY5E',
  };
  const uriComponent = new URLSearchParams(params).toString();
  console.log('uriComponent', uriComponent);
  const finalURL = `https://api.snowtrace.io/api?${uriComponent}`;
  let uniqueAddresses = [];
  console.log('finalURL', finalURL);
  const testList = await axios.get(finalURL).then(async (res) => {
    // console.log('result', res);
    const addresses = res.data.result.map((tx: any) => tx.from);
    // console.log('addresses', addresses);
    uniqueAddresses = [...new Set(addresses)];
    console.log('uniqueAddresses', uniqueAddresses);
    const narrowedList = uniqueAddresses.slice(0, 100);
    // const { blockNumber, balances } = await checkTokenBalances({
    //   tokens,
    //   account: '0x70912710163d4Cff7FE2fC6d70c84b57Bc63B73b',
    //   provider: testProvider,
    //   chainId: testChainId,
    // })
    return narrowedList;
  });

  const sumList = new Array(testList.length).fill(0);
  let i = 0;
  console.log('testList', testList);
  for (const address of testList) {
    console.log('address', address);
    const { balances } = await checkTokenBalances({
      tokens,
      account: address,
      provider: testProvider,
      chainId: testChainId,
    });

    console.log('balances lenght', balances.length);
    // console.log('balancesResult', balances);
    let sum = 0;
    balances.forEach((value) => {
      if (!value.isZero()) {
        sum += 1;
      }
    });
    // console.log('sum', sum);
    sumList[i] = [address, sum];
    i += 1;
  }
  // const { balances } = await checkTokenBalances({
  //   tokens,
  //   account: '0x70912710163d4Cff7FE2fC6d70c84b57Bc63B73b',
  //   provider: testProvider,
  //   chainId: testChainId,
  // });
  return sumList;
}

// type balancesList = [string, string][];
// function getUSDSumFromBalances(balances: balanceList): number;
