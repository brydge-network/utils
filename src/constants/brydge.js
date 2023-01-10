"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_QUERY_CURRENCY_AMOUNT = exports.BASE_QUERY_CURRENCY = exports.MOCK_PAYLOAD = exports.PORTAL_GAS_LIMIT = exports.BRYDGE_ROUTER_MAP = exports.BRYDGE_PORTALS_FROM_CHAIN = exports.STARGATE_FEE_LIBRARY_ADDRESSES = exports.CHAIN_ID_TO_SG_CHAIN_ID = exports.CHAIN_ID_TO_ROUTER = exports.STARGATE_INFO = exports.STARGATE_LZ_TX_DST_GAS = exports.STARGATE_GAS_LIMIT_POLYGON = exports.STARGATE_GAS_LIMIT_OPTIMISM = exports.STARGATE_GAS_LIMIT_ARBITRUM = exports.STARGATE_GAS_LIMIT = exports.MULTICHAIN_AVALANCHE_PORTAL = exports.MULTICHAIN_AVALANCHE_ROUTER = exports.MULTICHAIN_OPTIMISM_PORTAL = exports.MULTICHAIN_OPTIMISM_ROUTER = exports.MULTICHAIN_ARBITRUM_PORTAL = exports.MULTICHAIN_ARBITRUM_ROUTER = exports.MULTICHAIN_POLY_PORTAL = exports.MULTICHAIN_POLY_ROUTER = exports.MULTICHAIN_ETH_PORTAL = exports.MULTICHAIN_ETH_ROUTER = exports.ATK_ADDRESS = exports.FEE_API_URL = exports.ROUTER_URL = exports.STARGATE_FEE_COEFFICIENT = exports.BRYDGE_FEE_COEFFICIENT = exports.ZERO_ADDRESS = void 0;
exports.ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
exports.BRYDGE_FEE_COEFFICIENT = 5;
exports.STARGATE_FEE_COEFFICIENT = 6;
exports.ROUTER_URL = 'https://o36n0q35ub.execute-api.us-east-1.amazonaws.com/prod/';
exports.FEE_API_URL = 'https://api-routes-apitesting.vercel.app/api/fees/query?';
exports.ATK_ADDRESS = '0xf868939ee81f04f463010bc52eab91c0839ef08c';
exports.MULTICHAIN_ETH_ROUTER = '0xD1310EeDaE36929603191d44155dF9252554F2F4'.toLowerCase();
exports.MULTICHAIN_ETH_PORTAL = '0xFEd7358599B9CaC7114199Fd4CcdF87ECafF5059'.toLowerCase();
exports.MULTICHAIN_POLY_ROUTER = '0x46171bf797C4FFeE613E66b64a4264534Fef180a'.toLowerCase();
exports.MULTICHAIN_POLY_PORTAL = '0xDd6C18053B06147Cc38C4B18444Aca6d3632cD8C'.toLowerCase();
exports.MULTICHAIN_ARBITRUM_ROUTER = '0x003301aE7CbF6663262Dd280fB29135ab745c732'.toLowerCase();
exports.MULTICHAIN_ARBITRUM_PORTAL = '0x9c944b82Ab5B2882e7CE4b6805b43f50889e8fb9'.toLowerCase();
exports.MULTICHAIN_OPTIMISM_ROUTER = '0x003301aE7CbF6663262Dd280fB29135ab745c732'.toLowerCase();
exports.MULTICHAIN_OPTIMISM_PORTAL = '0x9c944b82Ab5B2882e7CE4b6805b43f50889e8fb9'.toLowerCase();
exports.MULTICHAIN_AVALANCHE_ROUTER = '0x003301aE7CbF6663262Dd280fB29135ab745c732'.toLowerCase();
exports.MULTICHAIN_AVALANCHE_PORTAL = '0x9c944b82Ab5B2882e7CE4b6805b43f50889e8fb9'.toLowerCase();
exports.STARGATE_GAS_LIMIT = 750000;
exports.STARGATE_GAS_LIMIT_ARBITRUM = 3050000;
exports.STARGATE_GAS_LIMIT_OPTIMISM = 2050000;
exports.STARGATE_GAS_LIMIT_POLYGON = 1050000;
exports.STARGATE_LZ_TX_DST_GAS = 550000;
exports.STARGATE_INFO = {
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
    avax: { chainId: 106, router: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd' },
    mainnet: {
        chainId: 101,
        router: '0x8731d54E9D02c286767d56ac03e8037C07e01e98',
    },
    arbitrum: {
        chainId: 110,
        router: '0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614',
    },
};
exports.CHAIN_ID_TO_ROUTER = {
    137: '0x45A01E4e04F14f7A4a6702c74187c5F6222033cd',
    1: '0x8731d54E9D02c286767d56ac03e8037C07e01e98',
    42161: '0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614',
    10: '0xB0D502E938ed5f4df2E681fE6E419ff29631d62b',
};
exports.CHAIN_ID_TO_SG_CHAIN_ID = {
    137: 109,
    1: 101,
    42161: 110,
    10: 111,
};
exports.STARGATE_FEE_LIBRARY_ADDRESSES = {
    1: '0xdbf50791d09603915bd066354a5b45775cfad924',
    137: '0xd46ccf40d6dd371ade5c9d0e8f83354cf62285ed',
    42161: '0x165a45083f43bf3d0df756bd51e3855bdef45250',
    10: '0x18ae6d4becae6cb6d2536ecce89871f27a8c1bb0',
};
exports.BRYDGE_PORTALS_FROM_CHAIN = {
    1: exports.MULTICHAIN_ETH_PORTAL,
    137: exports.MULTICHAIN_POLY_PORTAL,
    42161: exports.MULTICHAIN_ARBITRUM_PORTAL,
    10: exports.MULTICHAIN_OPTIMISM_PORTAL,
};
exports.BRYDGE_ROUTER_MAP = {
    1: exports.MULTICHAIN_ETH_ROUTER,
    137: exports.MULTICHAIN_POLY_ROUTER,
    10: exports.MULTICHAIN_OPTIMISM_ROUTER,
    42161: exports.MULTICHAIN_ARBITRUM_ROUTER,
};
// TODO: @zachrosen, update below hardcoded values when we have ethPortal and polygonPortal gas limit calculated
// TODO: Update values for optimism and arbitrum
// TODO: make cases for same chain limits and star gate limits
exports.PORTAL_GAS_LIMIT = {
    1: {
        NATIVE: 700000,
        ERC20: 750000,
    },
    137: {
        NATIVE: 850000,
        ERC20: 1050000,
    },
    10: {
        NATIVE: 2050000,
        ERC20: 2050000,
    },
    42161: {
        NATIVE: 3050000,
        ERC20: 3050000,
    },
};
exports.MOCK_PAYLOAD = '0x00000000000000000000000070912710163d4cff7fe2fc6d70c84b57bc63b73b000000000000000000000000da10009cbd5d07dd0cecc66161fc93d7c9000da100000000000000000000000068b3465833fb72a70ecdf485e0e4c7bd8665fc4500000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000028000000000000000000000000000000000000000000000000000000000000001a45ae401dc000000000000000000000000000000000000000000000000000001833d5f340500000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000e404e45aaf0000000000000000000000007f5c764cbc14f9669b88837ca1490cca17c31607000000000000000000000000da10009cbd5d07dd0cecc66161fc93d7c9000da100000000000000000000000000000000000000000000000000000000000000640000000000000000000000009c944b82ab5b2882e7ce4b6805b43f50889e8fb900000000000000000000000000000000000000000000000000000000000cf63f0000000000000000000000000000000000000000000000000bbbb383b8e3e402000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000000';
exports.BASE_QUERY_CURRENCY = {
    chainId: undefined,
    address: undefined,
    decimals: undefined,
    isNative: undefined,
};
exports.BASE_QUERY_CURRENCY_AMOUNT = {
    amount: '0',
    currency: exports.BASE_QUERY_CURRENCY,
};
