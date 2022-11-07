import { getTotalSupply } from '../../src/createCalls';
import { BigNumber } from 'ethers';

describe('utils | safePackageName', () => {
  it('should connect to the minter contract and return the total supply', () => {
    // try {
    getTotalSupply({ minterAddress: '0x204a879975378ac0b1f8f378f8cceadc75422f97', networkId: 1 })
      .then((totalSupply) => {
        expect(BigNumber.from(0).lt(totalSupply)).toBe(true);
      })
      .catch((err) => {
        console.log(err);
        expect(true).toBe(false); // Fail
      });
  });
  it('should error gracefully when trying to connect to an unknown contract', () => {
    getTotalSupply({ minterAddress: '0x0000000000000000000000000000000000000000', networkId: 1 })
      .then(() => {
        expect(true).toBe(false); // Fail
      })
      .catch((err) => {
        expect(err.message).toBe('Minter ABI not found');
      });
  });
  it('should error gracefully when provided insufficent params', () => {
    getTotalSupply({ minterAddress: '0x204a879975378ac0b1f8f378f8cceadc75422f97' })
      .then(() => {
        expect(true).toBe(false); // Fail
      })
      .catch((err) => {
        expect(err.message).toBe(
          "data must have required property 'jsonRpcUrl', data must have required property 'networkId', data must match a schema in anyOf",
        );
      });
  });
});
