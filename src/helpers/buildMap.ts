import tokenList from '@brydge-network/token-list';
import { TSMap } from 'typescript-map';

const supportedChains = [1, 10, 137, 42161];

function buildMap() {
  const chainTokenMap = new TSMap<any, any>();
  for (const supportedChain of supportedChains) {
    chainTokenMap.set(supportedChain, new TSMap<any, any>());
  }
  for (const token of tokenList.tokens) {
    if (supportedChains.includes(token.chainId)) {
      const tokenMap = chainTokenMap.get(token.chainId);
      tokenMap.set(token.address, token);
    }
  }
  return chainTokenMap;
}

const chainTokenMap = buildMap();

console.log(JSON.stringify(chainTokenMap, null, 2));
