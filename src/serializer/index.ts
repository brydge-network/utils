import qs from 'qs';
import { Currency, CurrencyAmount, Token } from '@uniswap/sdk-core';
import { utils } from 'ethers';
import { brydge, tokens } from '../constants';
import { BASE_QUERY_CURRENCY } from './constants';
import type { QueryCurrency, QueryCurrencyAmount, FeeParams } from './types';

function getCurrency(queryCurrency: QueryCurrency): Currency {
  const isNativeBool: boolean = queryCurrency.isNative === 'true';
  const chainId: number = parseInt(queryCurrency.chainId ?? '1', 10);
  const address: string = queryCurrency.address ?? brydge.ZERO_ADDRESS;
  const decimals: number = parseInt(queryCurrency.decimals ?? '18', 10);
  const currencyObj = isNativeBool
    ? tokens.nativeOnChain(chainId)
    : new Token(
      chainId,
      address,
      decimals,
      queryCurrency.symbol,
      queryCurrency.name,
    );
  return currencyObj;
}

function getCurrencyAmount(
  queryCurrencyAmount: QueryCurrencyAmount,
): CurrencyAmount<Currency> {
  const currency = getCurrency(queryCurrencyAmount.currency);
  return CurrencyAmount.fromRawAmount(currency, queryCurrencyAmount.amount);
}

function getQueryCurrency(
  currency: Currency | null | undefined,
): QueryCurrency {
  const feeQueryCurrency = currency?.isNative
    ? tokens.nativeOnChain(currency.chainId)
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

function getQueryCurrencyAmount(
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

function createFeeQuery(
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

export {
  getCurrency,
  getCurrencyAmount,
  getQueryCurrency,
  getQueryCurrencyAmount,
  createFeeQuery,
};

export type {
  QueryCurrency,
  QueryCurrencyAmount,
  FeeParams,
};
