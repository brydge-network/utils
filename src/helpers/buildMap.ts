import tokenList from '@brydge-network/token-list';
import { TSMap } from 'typescript-map';

const supportedChains = [1, 10, 137, 42161];

function buildMap() {
  const chainTokenMap = new TSMap<any, any>();
  supportedChains.forEach((chainId) => chainTokenMap.set(chainId, new TSMap<any, any>()));

  tokenList.tokens.forEach((token) => {
    if (supportedChains.includes(token.chainId)) {
      const tokenMap = chainTokenMap.get(token.chainId);
      tokenMap.set(token.address, token);
    }
  });
  return chainTokenMap;
}

const chainTokenMap = buildMap();

console.log(JSON.stringify(chainTokenMap, null, 2));
