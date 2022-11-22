import { getTotalSupply } from '../../src/createCalls';
import { BigNumber } from 'ethers';

describe('utils | safePackageName', () => {
  it('should connect to the delegate contract and return the total supply', async () => {
    try {
      const totalSupply = await getTotalSupply({
        contractAddress: '0xfaf3795ac17962d48b9aba848151efd2107a634e',
        chainId: 137,
      });
      console.log('totalSupply = ', totalSupply.toString());
      expect(BigNumber.from(0).lte(totalSupply)).toBe(true);
    } catch (e) {
      console.log(e);
      expect(true).toBe(false); // Fail
    }
  });
  it('should error gracefully when trying to connect to an unknown contract', async () => {
    await expect(
      getTotalSupply({ contractAddress: '0x0000000000000000000000000000000000000000', chainId: 137 }),
    ).rejects.toEqual(Error('Integration not found'));
  });
  it('should error gracefully when provided insufficent params', async () => {
    await expect(getTotalSupply({ contractAddress: '0xfaf3795ac17962d48b9aba848151efd2107a634e' })).rejects.toEqual(
      Error('Invalid params'),
    );
  });
});
