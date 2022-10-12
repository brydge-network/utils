import { ICall } from '../../src/iFrameSerializer';
import { encodeUrl, decodeUrl } from '../../src/iFrameSerializer';

const darkMode = true;
const isERC20Mode = true;
const outputTokenAddress = '0x0000000000000000000000000000000000000000';
const destinationChainId = 1;
const title = 'title';
const price = 100;
const iCalls: ICall[] = [
  {
    _to: '0x0000000000000000000000000000000000000000',
    _value: 0,
    _calldata:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
  },
  {
    _to: '0x0000000000000000000000000000000000000000',
    _value: 0,
    _calldata:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
  },
];

describe('utils | safePackageName', () => {
  it('should encode url params and decode them back into the same params', () => {
    // Testing the encodeUrl function
    const url = encodeUrl(
      darkMode,
      isERC20Mode,
      outputTokenAddress,
      destinationChainId,
      title,
      price,
      iCalls
    );
    const urlObject = JSON.parse(url);
    expect(urlObject.darkMode).toEqual(darkMode);
    expect(urlObject.isERC20Mode).toEqual(isERC20Mode);
    expect(urlObject.outputTokenAddress).toEqual(outputTokenAddress);
    expect(urlObject.destinationChainId).toEqual(destinationChainId);
    expect(urlObject.title).toEqual(title);
    expect(urlObject.price).toEqual(price);
    expect(urlObject.iCalls).toEqual(iCalls);

    // Testing the decodeUrl function
    const decodedUrl = decodeUrl(url);
    expect('error' in decodedUrl).toBe(false);
    if ('error' in decodedUrl) {
      expect(true).toBe(false); // Fail
    } else {
      expect(decodedUrl?.darkMode).toBe(darkMode);
      expect(decodedUrl?.isERC20Mode).toBe(isERC20Mode);
      expect(decodedUrl?.outputTokenAddress).toBe(outputTokenAddress);
      expect(decodedUrl?.destinationChainId).toBe(destinationChainId);
      expect(decodedUrl?.title).toBe(title);
      expect(decodedUrl?.price).toBe(price);
      expect(decodedUrl?.iCalls).toEqual(iCalls);
    }
  });
});
