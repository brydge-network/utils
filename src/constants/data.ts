import { SupportedChainId } from './chains';

export const MULTICALL_ADDRESSES = {
  [SupportedChainId.MAINNET]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [SupportedChainId.POLYGON]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [SupportedChainId.OPTIMISM]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [SupportedChainId.ARBITRUM_ONE]: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  [SupportedChainId.AVALANCHE]: '0x8C0F842791F03C095b6c633759224FcC9ACe68ea',
  // [SupportedChainId.BSC]: '0x54ee21260d08cf48f78fc6fda031b712d0a3481f',
};
const { INFURA_KEY } = process.env;
export const INFURA_NETWORK_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.MAINNET]: 'https://mainnet.infura.io/v3/708131e926f2496aa1d430ff6c39650b',
  [SupportedChainId.OPTIMISM]: 'https://optimism-mainnet.infura.io/v3/708131e926f2496aa1d430ff6c39650b',
  [SupportedChainId.ARBITRUM_ONE]: 'https://arbitrum-mainnet.infura.io/v3/708131e926f2496aa1d430ff6c39650b',
  [SupportedChainId.POLYGON]: 'https://polygon-mainnet.infura.io/v3/708131e926f2496aa1d430ff6c39650b',
  [SupportedChainId.AVALANCHE]: 'https://avalanche-mainnet.infura.io/v3/708131e926f2496aa1d430ff6c39650b',
};

export const MULTICALL_ABI = [
  {
    name: 'multicall',
    stateMutability: 'view',
    type: 'function',
    inputs: [
      {
        name: 'calls',
        type: 'tuple[]',
        internalType: 'struct UniswapInterfaceMulticall.Call[]',
        components: [
          { internalType: 'address', name: 'target', type: 'address' },
          { internalType: 'uint256', name: 'gasLimit', type: 'uint256' },
          { internalType: 'bytes', name: 'callData', type: 'bytes' },
        ],
      },
    ],
    outputs: [
      {
        name: 'blockNumber',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'results',
        type: 'tuple[]',
        internalType: 'struct UniswapInterfaceMulticall.Result[]',
        components: [
          { internalType: 'bool', name: 'success', type: 'bool' },
          { internalType: 'uint256', name: 'gasUsed', type: 'uint256' },
          { internalType: 'bytes', name: 'returnData', type: 'bytes' },
        ],
      },
    ],
  },
] as const;
