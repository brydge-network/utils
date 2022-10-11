export type ICall = {
  _to: string;
  _value: any;
  _calldata: string;
};

export function createUrl(
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

  return path;
}
