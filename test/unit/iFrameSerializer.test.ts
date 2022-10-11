import { ICall } from '../../src/iFrameSerializer';
import { createUrl } from '../../src/iFrameSerializer';

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
  it('should turn params into url string', () => {
    const url = createUrl(
      false,
      false,
      '0x0000000000000000000000000000000000000000',
      1,
      'test',
      1,
      iCalls
    );
    expect(url.split('-').length).toBe(2);
    expect(url.split('-')[0].split('+').length).toBe(5);
    expect(url.split('-')[1].split(',').length).toBe(2);
    expect(url.split('-')[1].split(',')[0].split('+').length).toBe(3);
    expect(url.split('-')[1].split(',')[1].split('+').length).toBe(3);
  });
});
