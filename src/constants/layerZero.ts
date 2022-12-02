import { AddressMap } from './brydge';

export type ChainIdMap = {
  [chainId: number]: number;
};

export const STARGATE_FEE_LIBRARY_ADDRESSES: AddressMap = {
  1: '0xdbf50791d09603915bd066354a5b45775cfad924',
  137: '0xd46ccf40d6dd371ade5c9d0e8f83354cf62285ed',
  42161: '0x165a45083f43bf3d0df756bd51e3855bdef45250',
  10: '0x18ae6d4becae6cb6d2536ecce89871f27a8c1bb0',
};

export const STARGATE_GAS_LIMIT = 750000;
export const STARGATE_GAS_LIMIT_ARBITRUM = 3050000;
export const STARGATE_GAS_LIMIT_OPTIMISM = 2050000;
export const STARGATE_GAS_LIMIT_POLYGON = 1050000;
export const STARGATE_LZ_TX_DST_GAS = 550000;
export const STARGATE_INFO = {
  rinkeby: {
    chainId: 10001,
    router: '0x82A0F5F531F9ce0df1DF5619f74a0d3fA31FF561',
    USDC: '0x1717A0D5C8705EE89A8aD6E808268D6A826C97A4',
  },
  optimismKovan: {
    chainId: 10011,
    router: '0xCC68641528B948642bDE1729805d6cf1DECB0B00',
    USDC: '0x567f39d9e6d02078F357658f498F80eF087059aa',
  },
  mumbai: {
    chainId: 10009,
    router: '0x817436a076060D158204d955E5403b6Ed0A5fac0',
    USDC: '0x742DfA5Aa70a8212857966D491D67B09Ce7D6ec7',
  },
  polygon: {
    chainId: 109,
    router: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
  },
  optimism: {
    chainId: 111,
    router: '0xB0D502E938ed5f4df2E681fE6E419ff29631d62b',
  },
  avax: {
    chainId: 106,
    router: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
  },
  mainnet: {
    chainId: 101,
    router: '0x8731d54E9D02c286767d56ac03e8037C07e01e98',
  },
  arbitrum: {
    chainId: 110,
    router: '0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614',
  },
};

export const CHAIN_ID_TO_SG_CHAIN_ID: ChainIdMap = {
  137: 109,
  1: 101,
  42161: 110,
  10: 111,
  43114: 106,
};

export const SG_CHAIN_ID_TO_CHAIN_ID: ChainIdMap = {
  109: 137,
  101: 1,
  110: 42161,
  111: 10,
  106: 43114,
};
