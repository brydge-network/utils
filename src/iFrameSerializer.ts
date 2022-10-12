export type ICall = {
  _to: string;
  _value: any;
  _calldata: string;
};

type widgetParams =
  | {
      darkMode: boolean;
      isERC20Mode: boolean;
      outputTokenAddress: string;
      destinationChainId: number;
      title: string;
      price: number;
      iCalls: ICall[];
    }
  | {
      error: string;
    };

export function encodeUrl(
  darkMode: boolean,
  isERC20Mode: boolean,
  outputTokenAddress: string,
  destinationChainId: number,
  title: string,
  price: number,
  iCalls: ICall[]
): string {
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

export function decodeUrl(path: string): widgetParams {
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
      return null as any;
    }
    const [_to, _value, _calldata] = iCall.split('+');
    const iCallObject: ICall = {
      _to,
      _value,
      _calldata,
    };
    return iCallObject;
  });

  if (iCallsArray.includes(null)) {
    return { error: 'ICalls are malformed.' };
  }

  const params: widgetParams = {
    darkMode,
    isERC20Mode,
    outputTokenAddress,
    destinationChainId: parseInt(destinationChainId),
    title,
    price: parseInt(price),
    iCalls: iCallsArray,
  };

  return params;
}
