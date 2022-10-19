import tokensMapJSON from './constants/tokensMap.json';

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

export function getTokenInfo(chainId: number, tokenAddress: string) {
  return (tokensMapJSON as ChainTokenMap)[chainId][tokenAddress];
}
