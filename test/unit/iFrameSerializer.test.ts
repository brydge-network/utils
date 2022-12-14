import { encodeUrl, decodeUrl } from '../../src/iFrameSerializer';
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
  it('should encode url params and decode them back into the same params', () => {
    // Testing the encodeUrl function
    const url = encodeUrl({
      darkMode,
      widgetMode,
      outputTokenAddress,
      destinationChainId,
      title,
      price,
      iCalls,
      baseColor,
    });
    const urlObject = JSON.parse(decodeURIComponent(url));
    expect(urlObject.darkMode).toEqual(darkMode);
    expect(urlObject.widgetMode).toEqual(widgetMode);
    expect(urlObject.outputTokenAddress).toEqual(outputTokenAddress);
    expect(urlObject.destinationChainId).toEqual(destinationChainId);
    expect(urlObject.title).toEqual(title);
    expect(urlObject.price).toEqual(price);
    expect(urlObject.iCalls).toEqual(iCalls);
    expect(urlObject.baseColor).toEqual(baseColor);

    // Testing the decodeUrl function
    const decodedUrl = decodeUrl(url);
    if ('error' in decodedUrl) {
      expect(true).toBe(false); // Fail
    } else {
      expect(decodedUrl?.darkMode).toBe(darkMode);
      expect(decodedUrl?.widgetMode).toBe(widgetMode);
      expect(decodedUrl?.outputTokenAddress).toBe(outputTokenAddress);
      expect(decodedUrl?.destinationChainId).toBe(destinationChainId);
      expect(decodedUrl?.title).toBe(title);
      expect(decodedUrl?.price).toBe(price);
      expect(decodedUrl?.iCalls).toEqual(iCalls);
      expect(decodedUrl?.baseColor).toBe(baseColor);
    }
  });
  it('should encode url default params and decode them back into the same params', () => {
    // Testing the encodeUrl function
    const url = encodeUrl({});
    const urlObject = JSON.parse(decodeURIComponent(url));
    expect(urlObject.widgetMode).toEqual('SWAP');

    // Testing the decodeUrl function
    const decodedUrl = decodeUrl(url);
    if ('error' in decodedUrl) {
      expect(true).toBe(false); // Fail
    } else {
      expect(decodedUrl?.widgetMode).toBe('SWAP');
    }
  });
});
