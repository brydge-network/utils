import { assert } from 'console';
import { getTokenInfo } from '../../src/tokenUtils';

describe('utils | tokenUtils', () => {
  it('should get USDT on Ethereum', () => {
    const token = getTokenInfo(1, '0xdAC17F958D2ee523a2206206994597C13D831ec7');
    assert(token.symbol === 'USDT');
  });

  it('should get LINK on Optimism', () => {
    const token = getTokenInfo(10, '0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6');
    assert(token.symbol === 'LINK');
  });

  it('should get USDC on Polygon', () => {
    const token = getTokenInfo(137, '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174');
    assert(token.symbol === 'USDC');
  });

  it('should get USDC on Arbitrum', () => {
    const token = getTokenInfo(42161, '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8');
    assert(token.symbol === 'USDC');
  });
});
