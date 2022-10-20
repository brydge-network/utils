import { isAddress } from 'ethers/lib/utils';
import invariant from 'tiny-invariant';
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

export function getTokenInfo(chainId: number, tokenAddress: string): Token {
  invariant(isAddress(tokenAddress), 'Invalid token address');
  return (tokensMapJSON as ChainTokenMap)[chainId][tokenAddress];
}

/*
 * Returns true if the tokenAddress is one of the following:
 * 1. NATIVE (case-insensitive)
 * 2. 0x0000000000000000000000000000000000000000
 * 3. 0xEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
 */
export function isNativeToken(tokenAddress: string): boolean {
  let isNative = false;
  if (
    NATIVE_STRING.localeCompare(tokenAddress, undefined, { sensitivity: 'base' }) === 0 ||
    NATIVE_ADDRESS1 === tokenAddress ||
    NATIVE_ADDRESS2 === tokenAddress
  ) {
    isNative = true;
  }
  return isNative;
}

export function getTokenDecimals(chainId: number, tokenAddress: string): number {
  if (isNativeToken(tokenAddress)) {
    return 18;
  }
  invariant(isAddress(tokenAddress), 'Invalid token address');
  return (tokensMapJSON as ChainTokenMap)[chainId][tokenAddress].decimals;
}
