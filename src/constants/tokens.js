"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAI_LIST = exports.TOKEN_SHORTHANDS = exports.isNativeAddress = exports.nativeOnChain = exports.ExtendedEther = exports.WRAPPED_NATIVE_CURRENCY = exports.STARGATE_CURRENCIES = exports.UNI = exports.WETH_POLYGON = exports.WETH_POLYGON_MUMBAI = exports.SWISE = exports.rETH2 = exports.sETH2 = exports.ETH2X_FLI = exports.renBTC = exports.FXS = exports.FRAX = exports.TRIBE = exports.FEI = exports.WBTC_OPTIMISM = exports.WBTC_ARBITRUM_ONE = exports.WBTC = exports.USDT_OPTIMISM = exports.USDT_ARBITRUM_ONE = exports.USDT = exports.WBTC_POLYGON = exports.USDT_POLYGON = exports.USDC = exports.USDC_AVALANCHE = exports.DAI_AVALANCHE = exports.DAI_POLYGON = exports.DAI_OPTIMISM = exports.DAI_ARBITRUM_ONE = exports.DAI = exports.AMPL = exports.USDC_POLYGON_MUMBAI = exports.USDC_POLYGON = exports.USDC_ARBITRUM_RINKEBY = exports.USDC_ARBITRUM = exports.USDC_OPTIMISTIC_KOVAN = exports.USDC_OPTIMISM = exports.USDC_KOVAN = exports.USDC_GOERLI = exports.USDC_RINKEBY = exports.USDC_ROPSTEN = exports.USDC_MAINNET = exports.MATIC_NATIVE_ADDRESS = void 0;
const sdk_core_1 = require("@uniswap/sdk-core");
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const chains_1 = require("./chains");
exports.MATIC_NATIVE_ADDRESS = '0x0000000000000000000000000000000000001010';
exports.USDC_MAINNET = new sdk_core_1.Token(chains_1.SupportedChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C');
exports.USDC_ROPSTEN = new sdk_core_1.Token(chains_1.SupportedChainId.ROPSTEN, '0x07865c6e87b9f70255377e024ace6630c1eaa37f', 6, 'USDC', 'USD//C');
exports.USDC_RINKEBY = new sdk_core_1.Token(chains_1.SupportedChainId.RINKEBY, '0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b', 6, 'tUSDC', 'test USD//C');
exports.USDC_GOERLI = new sdk_core_1.Token(chains_1.SupportedChainId.GOERLI, '0x07865c6e87b9f70255377e024ace6630c1eaa37f', 6, 'USDC', 'USD//C');
exports.USDC_KOVAN = new sdk_core_1.Token(chains_1.SupportedChainId.KOVAN, '0x31eeb2d0f9b6fd8642914ab10f4dd473677d80df', 6, 'USDC', 'USD//C');
exports.USDC_OPTIMISM = new sdk_core_1.Token(chains_1.SupportedChainId.OPTIMISM, '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', 6, 'USDC', 'USD//C');
exports.USDC_OPTIMISTIC_KOVAN = new sdk_core_1.Token(chains_1.SupportedChainId.OPTIMISTIC_KOVAN, '0x3b8e53b3ab8e01fb57d0c9e893bc4d655aa67d84', 6, 'USDC', 'USD//C');
exports.USDC_ARBITRUM = new sdk_core_1.Token(chains_1.SupportedChainId.ARBITRUM_ONE, '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', 6, 'USDC', 'USD//C');
exports.USDC_ARBITRUM_RINKEBY = new sdk_core_1.Token(chains_1.SupportedChainId.ARBITRUM_RINKEBY, '0x09b98f8b2395d076514037ff7d39a091a536206c', 6, 'USDC', 'USD//C');
exports.USDC_POLYGON = new sdk_core_1.Token(chains_1.SupportedChainId.POLYGON, '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', 6, 'USDC', 'USD//C');
exports.USDC_POLYGON_MUMBAI = new sdk_core_1.Token(chains_1.SupportedChainId.POLYGON_MUMBAI, '0xe11a86849d99f524cac3e7a0ec1241828e332c62', 6, 'USDC', 'USD//C');
exports.AMPL = new sdk_core_1.Token(chains_1.SupportedChainId.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth');
exports.DAI = new sdk_core_1.Token(chains_1.SupportedChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin');
exports.DAI_ARBITRUM_ONE = new sdk_core_1.Token(chains_1.SupportedChainId.ARBITRUM_ONE, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai stable coin');
exports.DAI_OPTIMISM = new sdk_core_1.Token(chains_1.SupportedChainId.OPTIMISM, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai stable coin');
exports.DAI_POLYGON = new sdk_core_1.Token(chains_1.SupportedChainId.POLYGON, '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', 18, 'DAI', 'Dai Stablecoin');
exports.DAI_AVALANCHE = new sdk_core_1.Token(chains_1.SupportedChainId.AVALANCHE, '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70', 18, 'DAI', 'Dai Stablecoin');
exports.USDC_AVALANCHE = new sdk_core_1.Token(chains_1.SupportedChainId.AVALANCHE, '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', 6, 'USDC', 'USD//C');
exports.USDC = {
    [chains_1.SupportedChainId.MAINNET]: exports.USDC_MAINNET,
    [chains_1.SupportedChainId.ARBITRUM_ONE]: exports.USDC_ARBITRUM,
    [chains_1.SupportedChainId.OPTIMISM]: exports.USDC_OPTIMISM,
    [chains_1.SupportedChainId.ARBITRUM_RINKEBY]: exports.USDC_ARBITRUM_RINKEBY,
    [chains_1.SupportedChainId.OPTIMISTIC_KOVAN]: exports.USDC_OPTIMISTIC_KOVAN,
    [chains_1.SupportedChainId.POLYGON]: exports.USDC_POLYGON,
    [chains_1.SupportedChainId.POLYGON_MUMBAI]: exports.USDC_POLYGON_MUMBAI,
    [chains_1.SupportedChainId.GOERLI]: exports.USDC_GOERLI,
    [chains_1.SupportedChainId.RINKEBY]: exports.USDC_RINKEBY,
    [chains_1.SupportedChainId.KOVAN]: exports.USDC_KOVAN,
    [chains_1.SupportedChainId.ROPSTEN]: exports.USDC_ROPSTEN,
    // [SupportedChainId.AVALANCHE]: USDC_KOVAN,
    // [SupportedChainId.SOLANA]: USDC_ROPSTEN,
};
exports.USDT_POLYGON = new sdk_core_1.Token(chains_1.SupportedChainId.POLYGON, '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 6, 'USDT', 'Tether USD');
exports.WBTC_POLYGON = new sdk_core_1.Token(chains_1.SupportedChainId.POLYGON, '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', 8, 'WBTC', 'Wrapped BTC');
exports.USDT = new sdk_core_1.Token(chains_1.SupportedChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD');
exports.USDT_ARBITRUM_ONE = new sdk_core_1.Token(chains_1.SupportedChainId.ARBITRUM_ONE, '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', 6, 'USDT', 'Tether USD');
exports.USDT_OPTIMISM = new sdk_core_1.Token(chains_1.SupportedChainId.OPTIMISM, '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', 6, 'USDT', 'Tether USD');
exports.WBTC = new sdk_core_1.Token(chains_1.SupportedChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC');
exports.WBTC_ARBITRUM_ONE = new sdk_core_1.Token(chains_1.SupportedChainId.ARBITRUM_ONE, '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f', 8, 'WBTC', 'Wrapped BTC');
exports.WBTC_OPTIMISM = new sdk_core_1.Token(chains_1.SupportedChainId.OPTIMISM, '0x68f180fcCe6836688e9084f035309E29Bf0A2095', 8, 'WBTC', 'Wrapped BTC');
exports.FEI = new sdk_core_1.Token(chains_1.SupportedChainId.MAINNET, '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', 18, 'FEI', 'Fei USD');
exports.TRIBE = new sdk_core_1.Token(chains_1.SupportedChainId.MAINNET, '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B', 18, 'TRIBE', 'Tribe');
exports.FRAX = new sdk_core_1.Token(chains_1.SupportedChainId.MAINNET, '0x853d955aCEf822Db058eb8505911ED77F175b99e', 18, 'FRAX', 'Frax');
exports.FXS = new sdk_core_1.Token(chains_1.SupportedChainId.MAINNET, '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0', 18, 'FXS', 'Frax Share');
exports.renBTC = new sdk_core_1.Token(chains_1.SupportedChainId.MAINNET, '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D', 8, 'renBTC', 'renBTC');
exports.ETH2X_FLI = new sdk_core_1.Token(chains_1.SupportedChainId.MAINNET, '0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD', 18, 'ETH2x-FLI', 'ETH 2x Flexible Leverage Index');
exports.sETH2 = new sdk_core_1.Token(chains_1.SupportedChainId.MAINNET, '0xFe2e637202056d30016725477c5da089Ab0A043A', 18, 'sETH2', 'StakeWise Staked ETH2');
exports.rETH2 = new sdk_core_1.Token(chains_1.SupportedChainId.MAINNET, '0x20BC832ca081b91433ff6c17f85701B6e92486c5', 18, 'rETH2', 'StakeWise Reward ETH2');
exports.SWISE = new sdk_core_1.Token(chains_1.SupportedChainId.MAINNET, '0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2', 18, 'SWISE', 'StakeWise');
exports.WETH_POLYGON_MUMBAI = new sdk_core_1.Token(chains_1.SupportedChainId.POLYGON_MUMBAI, '0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa', 18, 'WETH', 'Wrapped Ether');
exports.WETH_POLYGON = new sdk_core_1.Token(chains_1.SupportedChainId.POLYGON, '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', 18, 'WETH', 'Wrapped Ether');
exports.UNI = {
    [chains_1.SupportedChainId.MAINNET]: new sdk_core_1.Token(chains_1.SupportedChainId.MAINNET, '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', 18, 'UNI', 'Uniswap'),
    [chains_1.SupportedChainId.RINKEBY]: new sdk_core_1.Token(chains_1.SupportedChainId.RINKEBY, '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', 18, 'UNI', 'Uniswap'),
    [chains_1.SupportedChainId.ROPSTEN]: new sdk_core_1.Token(chains_1.SupportedChainId.ROPSTEN, '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', 18, 'UNI', 'Uniswap'),
    [chains_1.SupportedChainId.GOERLI]: new sdk_core_1.Token(chains_1.SupportedChainId.GOERLI, '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', 18, 'UNI', 'Uniswap'),
    [chains_1.SupportedChainId.KOVAN]: new sdk_core_1.Token(chains_1.SupportedChainId.KOVAN, '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', 18, 'UNI', 'Uniswap'),
};
exports.STARGATE_CURRENCIES = {
    [chains_1.SupportedChainId.OPTIMISM]: exports.USDC_OPTIMISM,
    [chains_1.SupportedChainId.ARBITRUM_ONE]: exports.USDC_ARBITRUM,
    [chains_1.SupportedChainId.MAINNET]: exports.USDC_MAINNET,
    [chains_1.SupportedChainId.POLYGON]: exports.USDC_POLYGON,
    [chains_1.SupportedChainId.AVALANCHE]: exports.USDC_AVALANCHE,
};
exports.WRAPPED_NATIVE_CURRENCY = {
    ...sdk_core_1.WETH9,
    [chains_1.SupportedChainId.OPTIMISM]: new sdk_core_1.Token(chains_1.SupportedChainId.OPTIMISM, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.SupportedChainId.OPTIMISTIC_KOVAN]: new sdk_core_1.Token(chains_1.SupportedChainId.OPTIMISTIC_KOVAN, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.SupportedChainId.ARBITRUM_ONE]: new sdk_core_1.Token(chains_1.SupportedChainId.ARBITRUM_ONE, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.SupportedChainId.ARBITRUM_RINKEBY]: new sdk_core_1.Token(chains_1.SupportedChainId.ARBITRUM_RINKEBY, '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681', 18, 'WETH', 'Wrapped Ether'),
    [chains_1.SupportedChainId.POLYGON]: new sdk_core_1.Token(chains_1.SupportedChainId.POLYGON, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped MATIC'),
    [chains_1.SupportedChainId.POLYGON_MUMBAI]: new sdk_core_1.Token(chains_1.SupportedChainId.POLYGON_MUMBAI, '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 18, 'WMATIC', 'Wrapped MATIC'),
};
function isMatic(chainId) {
    return (chainId === chains_1.SupportedChainId.POLYGON_MUMBAI
        || chainId === chains_1.SupportedChainId.POLYGON);
}
class MaticNativeCurrency extends sdk_core_1.NativeCurrency {
    equals(other) {
        return other.isNative && other.chainId === this.chainId;
    }
    get wrapped() {
        if (!isMatic(this.chainId))
            throw new Error('Not matic');
        const wrapped = exports.WRAPPED_NATIVE_CURRENCY[this.chainId];
        (0, tiny_invariant_1.default)(wrapped instanceof sdk_core_1.Token);
        return wrapped;
    }
    constructor(chainId) {
        if (!isMatic(chainId))
            throw new Error('Not matic');
        super(chainId, 18, 'MATIC', 'Polygon Matic');
    }
}
class ExtendedEther extends sdk_core_1.Ether {
    get wrapped() {
        const wrapped = exports.WRAPPED_NATIVE_CURRENCY[this.chainId];
        if (wrapped)
            return wrapped;
        throw new Error('Unsupported chain ID');
    }
    static _cachedExtendedEther = {};
    static onChain(chainId) {
        return (this._cachedExtendedEther[chainId]
            ?? (this._cachedExtendedEther[chainId] = new ExtendedEther(chainId)));
    }
}
exports.ExtendedEther = ExtendedEther;
const cachedNativeCurrency = {};
function nativeOnChain(chainId) {
    return (cachedNativeCurrency[chainId]
        ?? (cachedNativeCurrency[chainId] = isMatic(chainId)
            ? new MaticNativeCurrency(chainId)
            : ExtendedEther.onChain(chainId)));
}
exports.nativeOnChain = nativeOnChain;
function isNativeAddress(address, chainId) {
    if (address === 'NATIVE')
        return true;
    if (chainId === chains_1.SupportedChainId.POLYGON && address === exports.MATIC_NATIVE_ADDRESS)
        return true;
    // add more chain/native currency address checks here
    return false;
}
exports.isNativeAddress = isNativeAddress;
exports.TOKEN_SHORTHANDS = {
    USDC: {
        [chains_1.SupportedChainId.MAINNET]: exports.USDC_MAINNET.address,
        [chains_1.SupportedChainId.ARBITRUM_ONE]: exports.USDC_ARBITRUM.address,
        [chains_1.SupportedChainId.OPTIMISM]: exports.USDC_OPTIMISM.address,
        [chains_1.SupportedChainId.ARBITRUM_RINKEBY]: exports.USDC_ARBITRUM_RINKEBY.address,
        [chains_1.SupportedChainId.OPTIMISTIC_KOVAN]: exports.USDC_OPTIMISTIC_KOVAN.address,
        [chains_1.SupportedChainId.POLYGON]: exports.USDC_POLYGON.address,
        [chains_1.SupportedChainId.POLYGON_MUMBAI]: exports.USDC_POLYGON_MUMBAI.address,
        [chains_1.SupportedChainId.GOERLI]: exports.USDC_GOERLI.address,
        [chains_1.SupportedChainId.RINKEBY]: exports.USDC_RINKEBY.address,
        [chains_1.SupportedChainId.KOVAN]: exports.USDC_KOVAN.address,
        [chains_1.SupportedChainId.ROPSTEN]: exports.USDC_ROPSTEN.address,
    },
};
exports.DAI_LIST = {
    1: exports.DAI,
    42161: exports.DAI_ARBITRUM_ONE,
    10: exports.DAI_OPTIMISM,
    43114: exports.DAI_AVALANCHE,
    137: exports.DAI_POLYGON,
};
