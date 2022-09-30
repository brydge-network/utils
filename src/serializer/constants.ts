import type { QueryCurrency, QueryCurrencyAmount } from './types';

export const BASE_QUERY_CURRENCY: QueryCurrency = {
  chainId: undefined,
  address: undefined,
  decimals: undefined,
  isNative: undefined,
};

export const BASE_QUERY_CURRENCY_AMOUNT: QueryCurrencyAmount = {
  amount: '0',
  currency: BASE_QUERY_CURRENCY,
};
