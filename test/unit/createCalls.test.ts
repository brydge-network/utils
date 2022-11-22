import { createMintICall } from '../../src/createCalls';
import { ICall } from '../../src/constants';

const darkMode = true;
const widgetMode = 'PURCHASE';
const outputTokenAddress = '0x0000000000000000000000000000000000000000';
const destinationChainId = 1;
const title = 'title';
const price = 100;
const iCalls: ICall[] = [
  {
    _to: '0x0000000000000000000000000000000000000000',
    _value: 0,
    _calldata: '0x0000000000000000000000000000000000000000000000000000000000000000',
  },
  {
    _to: '0x0000000000000000000000000000000000000000',
    _value: 0,
    _calldata: '0x0000000000000000000000000000000000000000000000000000000000000000',
  },
];
const baseColor = '#000000';

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
