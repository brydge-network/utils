import qs from 'qs';
import { Currency, CurrencyAmount, Token } from '@uniswap/sdk-core';
import { utils } from 'ethers';
import { nativeOnChain, ZERO_ADDRESS } from './constants';

export type QueryCurrency = {
  chainId: string | undefined;
  address: string | undefined;
  decimals: string | undefined;
  isNative: string | undefined;
  symbol?: string;
  name?: string;
};

export type FeeParams = {
  amount: string;
  currency: QueryCurrency;
  sourceChain: number;
  destChain: number;
  library: string;
  isCrossChain: boolean;
};

export type QueryCurrencyAmount = {
  amount: string;
  currency: QueryCurrency;
};

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

export function getCurrency(queryCurrency: QueryCurrency): Currency {
  const isNativeBool: boolean = queryCurrency.isNative === 'true';
  const chainId: number = parseInt(queryCurrency.chainId ?? '1', 10);
  const address: string = queryCurrency.address ?? ZERO_ADDRESS;
  const decimals: number = parseInt(queryCurrency.decimals ?? '18', 10);
  const currencyObj = isNativeBool
    ? nativeOnChain(chainId)
    : new Token(
      chainId,
      address,
      decimals,
      queryCurrency.symbol,
      queryCurrency.name,
    );
  return currencyObj;
}

export function getCurrencyAmount(
  queryCurrencyAmount: QueryCurrencyAmount,
): CurrencyAmount<Currency> {
  const currency = getCurrency(queryCurrencyAmount.currency);
  return CurrencyAmount.fromRawAmount(currency, queryCurrencyAmount.amount);
}

export function getQueryCurrency(
  currency: Currency | null | undefined,
): QueryCurrency {
  const feeQueryCurrency = currency?.isNative
    ? nativeOnChain(currency.chainId)
    : currency
      ? new Token(currency?.chainId, currency?.address, currency?.decimals)
      : undefined;
  const finalCurrency: QueryCurrency = {
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

export function getQueryCurrencyAmount(
  currencyAmount: CurrencyAmount<Currency> | undefined,
): QueryCurrencyAmount {
  const amount = currencyAmount
    ? utils.parseUnits(
      currencyAmount.toFixed(),
      currencyAmount.currency.decimals,
    ).toString()
    : '0';
  const currency = currencyAmount
    ? getQueryCurrency(currencyAmount.currency)
    : BASE_QUERY_CURRENCY;
  return {
    amount,
    currency,
  };
}

export function createFeeQuery(
  paramAmount: CurrencyAmount<Currency> | undefined,
  paramCurrency: Currency | null | undefined,
  sourceChainId: number,
  destChainId: number,
  library: string,
  isCrossChain: boolean,
): string {
  const finalCurrency = getQueryCurrency(paramCurrency);
  const amountAsString = paramAmount
    ? utils.parseUnits(
      paramAmount.toFixed(),
      paramAmount.currency.decimals,
    ).toString()
    : '0';
  const feeParamObject: FeeParams = {
    amount: amountAsString,
    currency: finalCurrency,
    sourceChain: sourceChainId,
    destChain: destChainId,
    library,
    isCrossChain,
  };
  const queryString = qs.stringify(feeParamObject);
  return queryString;
}
