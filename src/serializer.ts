import qs from 'qs';

import { Currency, CurrencyAmount, Token } from '@uniswap/sdk-core';
import { parseUnits } from 'ethers/lib/utils';
import { nativeOnChain } from './constants/tokens';
import { BASE_QUERY_CURRENCY, ZERO_ADDRESS } from './constants/brydge';
import { QueryCurrency } from './types/index';
import { QueryCurrencyAmount } from './types/index';
import { FeeParams } from './types/index';

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
        queryCurrency.name
      );
  return currencyObj;
}

export function getCurrencyAmount(
  queryCurrencyAmount: QueryCurrencyAmount
): CurrencyAmount<Currency> {
  const currency = getCurrency(queryCurrencyAmount.currency);
  return CurrencyAmount.fromRawAmount(currency, queryCurrencyAmount.amount);
}
export default function createFeeQuery(
  paramAmount: CurrencyAmount<Currency> | undefined,
  paramCurrency: Currency | null | undefined,
  sourceChainId: number,
  destChainId: number,
  library: string,
  isCrossChain: boolean
): string {
  const finalCurrency = getQueryCurrency(paramCurrency);
  const amountAsString = paramAmount
    ? parseUnits(
        paramAmount.toFixed(),
        paramAmount.currency.decimals
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

export function getQueryCurrencyAmount(
  currencyAmount: CurrencyAmount<Currency> | undefined
): QueryCurrencyAmount {
  const amount = currencyAmount
    ? parseUnits(
        currencyAmount.toFixed(),
        currencyAmount.currency.decimals
      ).toString()
    : '0';
  const currency = currencyAmount
    ? getQueryCurrency(currencyAmount.currency)
    : BASE_QUERY_CURRENCY;
  return {
    amount: amount,
    currency: currency,
  };
}

export function getQueryCurrency(
  currency: Currency | null | undefined
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
