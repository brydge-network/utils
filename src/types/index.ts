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
