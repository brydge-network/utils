import { assert } from 'console';
import { AVAX_NATIVE_ADDRESS, MATIC_NATIVE_ADDRESS } from '../../src';
import { getTokenDecimals, getTokenInfo, isNativeAddress } from '../../src/tokenUtils';

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
    const isNative = isNativeAddress('0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8');
    assert(isNative === false);
  });

  it('should be Native token', () => {
    const isNative1 = isNativeAddress('Native');
    const isNative2 = isNativeAddress('NATIVE');
    const isNative3 = isNativeAddress('native');
    const isNative4 = isNativeAddress('NaTiVe');
    assert(isNative1 === true);
    assert(isNative2 === true);
    assert(isNative3 === true);
    assert(isNative4 === true);
  });

  it('should be Native MATIC', () => {
    const isNative = isNativeAddress(MATIC_NATIVE_ADDRESS, 137);
    assert(isNative === true);
  });

  it('should be Native AVAX', () => {
    const isNative = isNativeAddress(AVAX_NATIVE_ADDRESS, 43114);
    assert(isNative === true);
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
    const decimals = getTokenDecimals(137, '0xc2132D05D31c914a87C6611C10748AEb04B58e8F');
    assert(decimals === 18);
  });
});
