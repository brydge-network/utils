export type ICall = {
  _to: string;
  _value: any;
  _calldata: string;
};

type WidgetParams =
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

  iCalls.forEach((iCall, index) => {
    path += `${iCall._to}+${iCall._value}+${iCall._calldata}`;
    if (index !== iCalls.length - 1) {
      path += ',';
    }
  });

  return path;
}

export function decodeUrl(path: string): WidgetParams {
  if (
    path.split('-').length !== 2 ||
    path.split('-')[0].split('+').length !== 5
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

  if (mode.length !== 2) {
    return { error: 'Modes are malformed.' };
  }
  const darkMode = mode[0] === '1';
  const isERC20Mode = mode[1] === '1';

  const iCallsArray = iCalls.split(',').map((iCall) => {
    if (iCall.split('+').length !== 3) {
      return null as any;
    }
    const [to, value, calldata] = iCall.split('+');
    const iCallObject: ICall = {
      _to: to,
      _value: value,
      _calldata: calldata,
    };
    return iCallObject;
  });

  if (iCallsArray.includes(null)) {
    return { error: 'ICalls are malformed.' };
  }

  const params: WidgetParams = {
    darkMode,
    isERC20Mode,
    outputTokenAddress,
    destinationChainId: parseInt(destinationChainId, 10),
    title,
    price: parseInt(price, 10),
    iCalls: iCallsArray,
  };

  return params;
}
