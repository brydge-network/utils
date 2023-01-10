"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryCurrencyAmount = exports.getQueryCurrency = exports.getCurrencyAmount = exports.getCurrency = void 0;
const qs_1 = __importDefault(require("qs"));
const sdk_core_1 = require("@uniswap/sdk-core");
const ethers_1 = require("ethers");
const tokens_1 = require("./constants/tokens");
const brydge_1 = require("./constants/brydge");
const { parseUnits } = ethers_1.utils;
function getCurrency(queryCurrency) {
    const isNativeBool = queryCurrency.isNative === 'true';
    const chainId = parseInt(queryCurrency.chainId ?? '1', 10);
    const address = queryCurrency.address ?? brydge_1.ZERO_ADDRESS;
    const decimals = parseInt(queryCurrency.decimals ?? '18', 10);
    const currencyObj = isNativeBool
        ? (0, tokens_1.nativeOnChain)(chainId)
        : new sdk_core_1.Token(chainId, address, decimals, queryCurrency.symbol, queryCurrency.name);
    return currencyObj;
}
exports.getCurrency = getCurrency;
function getCurrencyAmount(queryCurrencyAmount) {
    const currency = getCurrency(queryCurrencyAmount.currency);
    return sdk_core_1.CurrencyAmount.fromRawAmount(currency, queryCurrencyAmount.amount);
}
exports.getCurrencyAmount = getCurrencyAmount;
function getQueryCurrency(currency) {
    const feeQueryCurrency = currency?.isNative
        ? (0, tokens_1.nativeOnChain)(currency.chainId)
        : currency
            ? new sdk_core_1.Token(currency?.chainId, currency?.address, currency?.decimals)
            : undefined;
    const finalCurrency = {
        chainId: feeQueryCurrency?.chainId.toString(),
        address: feeQueryCurrency?.isNative
            ? feeQueryCurrency?.wrapped.address
            : feeQueryCurrency?.address,
        decimals: feeQueryCurrency?.decimals.toString(),
        symbol: feeQueryCurrency?.symbol,
        name: feeQueryCurrency?.name,
        isNative: feeQueryCurrency?.isNative.toString(),
    };
    return finalCurrency;
}
exports.getQueryCurrency = getQueryCurrency;
function createFeeQuery(paramAmount, paramCurrency, sourceChainId, destChainId, library, isCrossChain) {
    const finalCurrency = getQueryCurrency(paramCurrency);
    const amountAsString = paramAmount
        ? parseUnits(paramAmount.toFixed(), paramAmount.currency.decimals).toString()
        : '0';
    const feeParamObject = {
        amount: amountAsString,
        currency: finalCurrency,
        sourceChain: sourceChainId,
        destChain: destChainId,
        library,
        isCrossChain,
    };
    const queryString = qs_1.default.stringify(feeParamObject);
    return queryString;
}
exports.default = createFeeQuery;
function getQueryCurrencyAmount(currencyAmount) {
    const amount = currencyAmount
        ? parseUnits(currencyAmount.toFixed(), currencyAmount.currency.decimals).toString()
        : '0';
    const currency = currencyAmount
        ? getQueryCurrency(currencyAmount.currency)
        : brydge_1.BASE_QUERY_CURRENCY;
    return {
        amount,
        currency,
    };
}
exports.getQueryCurrencyAmount = getQueryCurrencyAmount;
