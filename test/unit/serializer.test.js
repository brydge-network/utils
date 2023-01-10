"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@uniswap/sdk-core");
const tokens_1 = require("../../src/constants/tokens");
const serializer_1 = require("../../src/serializer");
const testCurrency = tokens_1.USDC_MAINNET;
const testCurrencyAmount = sdk_core_1.CurrencyAmount.fromRawAmount(testCurrency, '100');
const testQueryCurrency = {
    address: testCurrency.address,
    chainId: testCurrency.chainId.toString(),
    decimals: testCurrency.decimals.toString(),
    isNative: 'false',
};
const testQueryCurrencyAmount = {
    amount: '100',
    currency: testQueryCurrency,
};
describe('utils | safePackageName', () => {
    it('should turn query currency into currency', () => {
        const currency = (0, serializer_1.getCurrency)(testQueryCurrency);
        expect(currency).toBeInstanceOf(sdk_core_1.Token);
    });
    it('should turn query currencyamount into currencyamount', () => {
        const currencyAmount = (0, serializer_1.getCurrencyAmount)(testQueryCurrencyAmount);
        console.log(currencyAmount);
    });
    it('should turn currency into querycurrency', () => {
        const queryCurrency = (0, serializer_1.getQueryCurrency)(testCurrency);
        console.log(queryCurrency);
    });
    it('should turn currencyamount into query currencyamount', () => {
        const queryCurrencyAmount = (0, serializer_1.getQueryCurrencyAmount)(testCurrencyAmount);
        console.log(queryCurrencyAmount);
    });
});
