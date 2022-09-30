import { USDC_MAINNET } from '../../src/constants/tokens';
import { CurrencyAmount, Token } from '@uniswap/sdk-core';
import { QueryCurrency, QueryCurrencyAmount } from '../../src/types/index';
import {
  getCurrency,
  getCurrencyAmount,
  getQueryCurrency,
  getQueryCurrencyAmount,
} from '../../src/serializer';
const testCurrency = USDC_MAINNET;
const testCurrencyAmount = CurrencyAmount.fromRawAmount(testCurrency, '100');
const testQueryCurrency: QueryCurrency = {
  address: testCurrency.address,
  chainId: testCurrency.chainId.toString(),
  decimals: testCurrency.decimals.toString(),
  isNative: 'false',
};
const testQueryCurrencyAmount: QueryCurrencyAmount = {
  amount: '100',
  currency: testQueryCurrency,
};
describe('utils | safePackageName', () => {
  it('should turn query currency into currency', () => {
    const currency = getCurrency(testQueryCurrency);
    expect(currency).toBeInstanceOf(Token);
  });
  it('should turn query currencyamount into currencyamount', () => {
    const currencyAmount = getCurrencyAmount(testQueryCurrencyAmount);
    console.log(currencyAmount);
  });
  it('should turn currency into querycurrency', () => {
    const queryCurrency = getQueryCurrency(testCurrency);
    console.log(queryCurrency);
  });
  it('should turn currencyamount into query currencyamount', () => {
    const queryCurrencyAmount = getQueryCurrencyAmount(testCurrencyAmount);
    console.log(queryCurrencyAmount);
  });
});
