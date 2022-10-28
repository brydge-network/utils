import { CurrencyAmount, Token } from '@uniswap/sdk-core';
import { USDC_MAINNET } from '../../src/constants/tokens';
import {
  getCurrency,
  getCurrencyAmount,
  getQueryCurrency,
  getQueryCurrencyAmount,
  QueryCurrency,
  QueryCurrencyAmount,
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
  it('should turn query currencyAmount into currencyAmount', () => {
    const currencyAmount = getCurrencyAmount(testQueryCurrencyAmount);
    // console.log(currencyAmount);
  });
  it('should turn currency into queryCurrency', () => {
    const queryCurrency = getQueryCurrency(testCurrency);
    // console.log(queryCurrency);
  });
  it('should turn currencyAmount into query currencyAmount', () => {
    const queryCurrencyAmount = getQueryCurrencyAmount(testCurrencyAmount);
    // console.log(queryCurrencyAmount);
  });
});
