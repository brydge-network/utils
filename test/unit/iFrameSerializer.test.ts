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
    _value: '0',
    _calldata:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
  },
  {
    _to: '0x0000000000000000000000000000000000000000',
    _value: '0',
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
    expect(url.split('-').length).toBe(2);
    expect(url.split('-')[0].split('+').length).toBe(5);
    expect(url.split('-')[1].split(',').length).toBe(2);
    expect(url.split('-')[1].split(',')[0].split('+').length).toBe(3);
    expect(url.split('-')[1].split(',')[1].split('+').length).toBe(3);

    // Testing the decodeUrl function
    const decodedUrl = decodeUrl(url);
    expect(decodedUrl?.error).toBe(undefined);
    expect(decodedUrl?.darkMode).toBe(darkMode);
    expect(decodedUrl?.isERC20Mode).toBe(isERC20Mode);
    expect(decodedUrl?.outputTokenAddress).toBe(outputTokenAddress);
    expect(decodedUrl?.destinationChainId).toBe(destinationChainId);
    expect(decodedUrl?.title).toBe(title);
    expect(decodedUrl?.price).toBe(price);
    expect(decodedUrl?.iCalls).toEqual(iCalls);
  });

  it('should return appropriate error messages when provided a malformed url', () => {
    let url =
      '00+0x0000000000000000000000000000000000000000+1+title+100-0x0000000000000000000000000000000000000000+0+0';
    let formatMessage =
      'Needs to be in the format of mode+outputTokenAddress+destinationChainId+title+price-iCalls';

    // case 1: too many chunks (hyphens) (should be 2)
    let error1 = url + '-';
    expect(decodeUrl(error1)?.error).toBe(formatMessage);

    // case 2: too few chunks (hyphens) (should be 2)
    let error2 = url.split('-')[0];
    expect(decodeUrl(error2)?.error).toBe(formatMessage);

    // case 3: too many params (plus signs) (should be 5)
    let error3 = url.split('-')[0] + '+0-' + url.split('-')[1];
    expect(decodeUrl(error3)?.error).toBe(formatMessage);

    // case 4: too few params (plus signs) (should be 5)
    let error4 = url.split('-')[0].split('+')[0] + '-' + url.split('-')[1];
    expect(decodeUrl(error4)?.error).toBe(formatMessage);

    // case 5: too many mode characters (should be 2)
    let error5 = '0' + url;
    expect(decodeUrl(error5)?.error).toBe('Modes are malformed.');

    // case 6: too few mode characters (should be 2)
    let error6 = url.slice(1);
    expect(decodeUrl(error6)?.error).toBe('Modes are malformed.');

    // case 7: too many iCall params (plus signs) (should be 3)
    let error7 = url + '+0';
    expect(decodeUrl(error7)?.error).toBe('ICalls are malformed.');

    // case 8: too few iCall params (plus signs) (should be 3)
    let error8 = url.slice(0, -2);
    expect(decodeUrl(error8)?.error).toBe('ICalls are malformed.');
  });
});
