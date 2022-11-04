import { Currency, NativeCurrency } from '@uniswap/sdk-core';
import { isAddress } from 'ethers/lib/utils';
import invariant from 'tiny-invariant';
import {
  AVAX_NATIVE_ADDRESS, MATIC_NATIVE_ADDRESS, nativeOnChain, QUICKSWAP_ONLY_TOKEN_LIST,
} from './constants';
import tokensMapJSON from './constants/brydgeTokensMap.json';

interface ChainTokenMap {
  [key: number]: TokenMap;
}

interface TokenMap {
  [key: string]: Token;
}

interface Token {
  name: string;
  address: string;
  symbol: string;
  decimals: number;
  chainId: number;
  logoURI: string;
}

const NATIVE_STRING = 'NATIVE';
const NATIVE_ADDRESS1 = '0x0000000000000000000000000000000000000000';
const NATIVE_ADDRESS2 = '0xEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE';

/*
 * Returns true if the tokenAddress is one of the following:
 * 1. NATIVE (case-insensitive)
 * 2. 0x0000000000000000000000000000000000000000
 * 3. 0xEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
 * 4. Native token address is called (must pass in optional chainId argument)
 */
export function isNativeAddress(tokenAddress: string, chainId?: number): boolean {
  if (
    NATIVE_STRING.localeCompare(tokenAddress, undefined, { sensitivity: 'base' }) === 0
    || NATIVE_ADDRESS1 === tokenAddress
    || NATIVE_ADDRESS2 === tokenAddress
  ) {
    return true;
  }
  invariant(tokenAddress, 'Invalid token address');

  // Polygon Case
  if (chainId === 137 && tokenAddress === MATIC_NATIVE_ADDRESS) {
    return true;
  }

  // Avalanche Case
  if (chainId === 43114 && tokenAddress === AVAX_NATIVE_ADDRESS) {
    return true;
  }
  return false;
}

export function getTokenInfo(chainId: number, tokenAddress: string): Token {
  invariant(isAddress(tokenAddress), 'Invalid token address');
  return (tokensMapJSON as ChainTokenMap)[chainId][tokenAddress];
}

// Returns undefined if the token is not in tokensMap
export function getCurrencyObject(chainId: number, tokenAddress: string): NativeCurrency | Token {
  if (isNativeAddress(tokenAddress, chainId)) {
    return nativeOnChain(chainId);
  }
  invariant(isAddress(tokenAddress), 'Invalid token address');
  return (tokensMapJSON as ChainTokenMap)[chainId][tokenAddress];
}

// Default to 18 decimals if token is undefined
export function getTokenDecimals(chainId: number, tokenAddress: string): number {
  if (isNativeAddress(tokenAddress, chainId)) {
    return 18;
  }
  invariant(isAddress(tokenAddress), 'Invalid token address');
  const token = (tokensMapJSON as ChainTokenMap)[chainId][tokenAddress];
  return token ? token.decimals : 18;
}

export function isQuickSwapToken(token: Currency | undefined | null): boolean {
  if (!token) return false;
  const address = token.isToken ? token.address : '0';
  return QUICKSWAP_ONLY_TOKEN_LIST.includes(address.toLowerCase());
}
