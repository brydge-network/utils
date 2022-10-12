export type ICall = {
  _to: string;
  _value: any;
  _calldata: string;
};

export function encodeUrl(
  darkMode: boolean,
  isERC20Mode: boolean,
  outputTokenAddress: string,
  destinationChainId: number,
  title: string,
  price: number,
  iCalls: ICall[]
) {
  const mode = (darkMode ? '1' : '0') + (isERC20Mode ? '1' : '0');
  let path = `${mode}+${outputTokenAddress}+${destinationChainId}+${title.replaceAll(
    ' ',
    '%20'
  )}+${price}-`;
  for (let ICall of iCalls) {
    path += `${ICall._to}+${ICall._value}+${ICall._calldata},`;
  }

  path = path.slice(0, -1);

  return path;
}

export function decodeUrl(path: string) {
  if (
    path.split('-').length != 2 ||
    path.split('-')[0].split('+').length != 5
  ) {
    return {
      error:
        'Needs to be in the format of mode+outputTokenAddress+destinationChainId+title+price-iCalls',
    };
  }
  const [
    mode,
    outputTokenAddress,
    destinationChainId,
    title,
    price,
  ] = path.split('-')[0].split('+');
  const iCalls = path.split('-')[1];

  if (mode.length != 2) {
    return { error: 'Modes are malformed.' };
  }
  const darkMode = mode[0] === '1';
  const isERC20Mode = mode[1] === '1';

  const iCallsArray = iCalls.split(',').map((iCall) => {
    if (iCall.split('+').length != 3) {
      return null;
    }
    const [_to, _value, _calldata] = iCall.split('+');
    return {
      _to,
      _value,
      _calldata,
    };
  });

  if (iCallsArray.includes(null)) {
    return { error: 'ICalls are malformed.' };
  }

  return {
    darkMode,
    isERC20Mode,
    outputTokenAddress,
    destinationChainId: parseInt(destinationChainId),
    title,
    price: parseInt(price),
    iCalls: iCallsArray,
  };
}
