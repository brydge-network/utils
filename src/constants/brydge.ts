export type AddressMap = {
  [chainId: number]: string;
};

export type GasLimitMap = {
  [chainId: number]: {
    [tokenType: string]: number;
  };
};

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export const BRYDGE_FEE_COEFFICIENT = 5;
export const STARGATE_FEE_COEFFICIENT = 6;
export const ROUTER_URL = 'https://o36n0q35ub.execute-api.us-east-1.amazonaws.com/prod/';
export const FEE_API_URL = 'https://api-routes-apitesting.vercel.app/api/fees/query?';

export const MULTICHAIN_ETH_ROUTER = '0xD1310EeDaE36929603191d44155dF9252554F2F4'.toLowerCase();
export const MULTICHAIN_ETH_PORTAL = '0xFEd7358599B9CaC7114199Fd4CcdF87ECafF5059'.toLowerCase();

export const MULTICHAIN_POLY_ROUTER = '0x46171bf797C4FFeE613E66b64a4264534Fef180a'.toLowerCase();
export const MULTICHAIN_POLY_PORTAL = '0xDd6C18053B06147Cc38C4B18444Aca6d3632cD8C'.toLowerCase();

export const MULTICHAIN_ARBITRUM_ROUTER = '0x003301aE7CbF6663262Dd280fB29135ab745c732'.toLowerCase();
export const MULTICHAIN_ARBITRUM_PORTAL = '0x9c944b82Ab5B2882e7CE4b6805b43f50889e8fb9'.toLowerCase();

export const MULTICHAIN_OPTIMISM_ROUTER = '0x003301aE7CbF6663262Dd280fB29135ab745c732'.toLowerCase();
export const MULTICHAIN_OPTIMISM_PORTAL = '0x9c944b82Ab5B2882e7CE4b6805b43f50889e8fb9'.toLowerCase();

export const MULTICHAIN_AVALANCHE_ROUTER = '0x003301aE7CbF6663262Dd280fB29135ab745c732'.toLowerCase();
export const MULTICHAIN_AVALANCHE_PORTAL = '0x9c944b82Ab5B2882e7CE4b6805b43f50889e8fb9'.toLowerCase();

export const CHAIN_ID_TO_ROUTER: AddressMap = {
  137: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
  1: '0x8731d54E9D02c286767d56ac03e8037C07e01e98',
  42161: '0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614',
  10: '0xB0D502E938ed5f4df2E681fE6E419ff29631d62b',
};

export const BRYDGE_PORTALS_FROM_CHAIN: AddressMap = {
  1: MULTICHAIN_ETH_PORTAL,
  137: MULTICHAIN_POLY_PORTAL,
  42161: MULTICHAIN_ARBITRUM_PORTAL,
  10: MULTICHAIN_OPTIMISM_PORTAL,
};

export const BRYDGE_ROUTER_MAP: AddressMap = {
  1: MULTICHAIN_ETH_ROUTER,
  137: MULTICHAIN_POLY_ROUTER,
  10: MULTICHAIN_OPTIMISM_ROUTER,
  42161: MULTICHAIN_ARBITRUM_ROUTER,
};

export type ICall = {
  _to: string;
  _value: any;
  _calldata: string;
};

export type LpInfo = {
  lpChainId: number;
  currencyAAddress: string;
  currencyBAddress: string;
  routerAddress: string;
  tokenPairName: string;
};
