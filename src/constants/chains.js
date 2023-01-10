"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L2_CHAIN_IDS = exports.L1_CHAIN_IDS = exports.SUPPORTED_GAS_ESTIMATE_CHAIN_IDS = exports.ALL_SUPPORTED_CHAIN_IDS = exports.CHAIN_IDS_TO_NAMES = exports.SupportedChainId = void 0;
/**
 * List of all the networks supported by the Uniswap Interface
 */
var SupportedChainId;
(function (SupportedChainId) {
    SupportedChainId[SupportedChainId["MAINNET"] = 1] = "MAINNET";
    SupportedChainId[SupportedChainId["ROPSTEN"] = 3] = "ROPSTEN";
    SupportedChainId[SupportedChainId["RINKEBY"] = 4] = "RINKEBY";
    SupportedChainId[SupportedChainId["GOERLI"] = 5] = "GOERLI";
    SupportedChainId[SupportedChainId["KOVAN"] = 42] = "KOVAN";
    SupportedChainId[SupportedChainId["ARBITRUM_ONE"] = 42161] = "ARBITRUM_ONE";
    SupportedChainId[SupportedChainId["ARBITRUM_RINKEBY"] = 421611] = "ARBITRUM_RINKEBY";
    SupportedChainId[SupportedChainId["OPTIMISM"] = 10] = "OPTIMISM";
    SupportedChainId[SupportedChainId["OPTIMISTIC_KOVAN"] = 69] = "OPTIMISTIC_KOVAN";
    SupportedChainId[SupportedChainId["POLYGON"] = 137] = "POLYGON";
    SupportedChainId[SupportedChainId["POLYGON_MUMBAI"] = 80001] = "POLYGON_MUMBAI";
    SupportedChainId[SupportedChainId["AVALANCHE"] = 43114] = "AVALANCHE";
    SupportedChainId[SupportedChainId["SOLANA"] = 12345] = "SOLANA";
})(SupportedChainId = exports.SupportedChainId || (exports.SupportedChainId = {}));
exports.CHAIN_IDS_TO_NAMES = {
    [SupportedChainId.MAINNET]: 'mainnet',
    [SupportedChainId.ROPSTEN]: 'ropsten',
    [SupportedChainId.RINKEBY]: 'rinkeby',
    [SupportedChainId.GOERLI]: 'goerli',
    [SupportedChainId.KOVAN]: 'kovan',
    [SupportedChainId.POLYGON]: 'polygon',
    [SupportedChainId.POLYGON_MUMBAI]: 'polygon_mumbai',
    [SupportedChainId.ARBITRUM_ONE]: 'arbitrum',
    [SupportedChainId.ARBITRUM_RINKEBY]: 'arbitrum_rinkeby',
    [SupportedChainId.OPTIMISM]: 'optimism',
    [SupportedChainId.OPTIMISTIC_KOVAN]: 'optimistic_kovan',
    [SupportedChainId.AVALANCHE]: 'avalanche',
    [SupportedChainId.SOLANA]: 'solana',
};
/**
 * Array of all the supported chain IDs
 */
exports.ALL_SUPPORTED_CHAIN_IDS = Object.values(SupportedChainId).filter((id) => typeof id === 'number');
exports.SUPPORTED_GAS_ESTIMATE_CHAIN_IDS = [
    SupportedChainId.MAINNET,
    SupportedChainId.POLYGON,
    SupportedChainId.OPTIMISM,
    SupportedChainId.ARBITRUM_ONE,
];
/**
 * All the chain IDs that are running the Ethereum protocol.
 */
exports.L1_CHAIN_IDS = [
    SupportedChainId.MAINNET,
    SupportedChainId.ROPSTEN,
    SupportedChainId.RINKEBY,
    SupportedChainId.GOERLI,
    SupportedChainId.KOVAN,
    SupportedChainId.POLYGON,
    SupportedChainId.POLYGON_MUMBAI,
];
/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
exports.L2_CHAIN_IDS = [
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISTIC_KOVAN,
];
