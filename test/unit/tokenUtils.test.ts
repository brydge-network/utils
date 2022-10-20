import { assert } from 'console';
import { getTokenDecimals, getTokenInfo, isNativeToken } from '../../src/tokenUtils';

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

  it('should not be Native token', () => {
    const isNative = isNativeToken('0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8');
    assert(isNative === false);
  });

  it('should be Native token', () => {
    const isNative1 = isNativeToken('Native');
    const isNative2 = isNativeToken('NATIVE');
    const isNative3 = isNativeToken('native');
    const isNative4 = isNativeToken('NaTiVe');
    assert(isNative1 === true);
    assert(isNative2 === true);
    assert(isNative3 === true);
    assert(isNative4 === true);
  });

  it('should getTokenDecimals native', () => {
    const decimals = getTokenDecimals(1, 'Native');
    assert(decimals === 18);
  });

  it('should getTokenDecimals USDT Ethereum', () => {
    const decimals = getTokenDecimals(1, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48');
    assert(decimals === 6);
  });

  it('should getTokenDecimals LINK Arbitrum', () => {
    const decimals = getTokenDecimals(42161, '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4');
    assert(decimals === 18);
  });
});
