import { getTotalSupply } from '../../src/createCalls';
import { BigNumber } from 'ethers';

describe('utils | safePackageName', () => {
  it('should connect to the minter contract and return the total supply', async () => {
    try {
      const totalSupply = await getTotalSupply({
        minterAddress: '0x204a879975378ac0b1f8f378f8cceadc75422f97',
        chainId: 1,
      });
      expect(BigNumber.from(0).lt(totalSupply)).toBe(true);
    } catch {
      expect(true).toBe(false); // Fail
    }
  });
  it('should error gracefully when trying to connect to an unknown contract', async () => {
    await expect(
      getTotalSupply({ minterAddress: '0x0000000000000000000000000000000000000000', chainId: 1 }),
    ).rejects.toEqual(Error('Minter ABI not found'));
  });
  it('should error gracefully when provided insufficent params', async () => {
    await expect(getTotalSupply({ minterAddress: '0x204a879975378ac0b1f8f378f8cceadc75422f97' })).rejects.toEqual(
      Error('Invalid params'),
    );
  });
});
