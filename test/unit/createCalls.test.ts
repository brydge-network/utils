import { createMintICall } from '../../src/createCalls';

describe('utils | safePackageName', () => {
  it('should create icalls using an integrated contact address', () => {
    const contractAddress = '0xfaf3795ac17962d48b9aba848151efd2107a634e';
    const chainId = 137;
    const mintPrice = 120;
    const mintICalls = createMintICall({
      contractAddress,
      chainId,
      mintPrice,
    });
    expect(mintICalls.length).toBe(1);
  });
});
