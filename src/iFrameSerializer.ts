import Ajv from 'ajv';

export type ICall = {
  _to: string;
  _value: any;
  _calldata: string;
};

interface BrydgeWidgetParams {
  darkMode: boolean;
  isERC20Mode: boolean;
  outputTokenAddress: string;
  destinationChainId: number;
  title: string;
  price: number;
  iCalls: ICall[];
}

const schema = {
  type: 'object',
  properties: {
    darkMode: { type: 'boolean', default: true },
    isERC20Mode: { type: 'boolean', default: false },
    outputTokenAddress: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$|NATIVE', default: 'NATIVE' },
    destinationChainId: { type: 'number', minimum: 1, maximum: 100000, default: 1 },
    title: { type: 'string', default: 'Brydge' },
    price: { type: 'number', minimum: 0, default: 1 },
    iCalls: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          _to: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' },
          _value: {},
          _calldata: { type: 'string' },
        },
        required: ['_to', '_value', '_calldata'],
      },
      default: [],
    },
  },
  anyOf: [
    { required: ['darkMode', 'isERC20Mode', 'outputTokenAddress', 'destinationChainId', 'title', 'price', 'iCalls'] },
  ],
};

const ajv = new Ajv();

export function encodeUrl(widgetParams: {}): string {
  const valid = ajv.validate(schema, widgetParams);
  if (valid) {
    return encodeURIComponent(JSON.stringify(widgetParams));
  }
  throw new Error(ajv.errorsText());
}

export function decodeUrl(path: string): BrydgeWidgetParams | { error: string } {
  try {
    const widgetParams = JSON.parse(decodeURIComponent(path));
    const valid = ajv.validate(schema, widgetParams);
    if (valid) {
      return widgetParams;
    }
    return { error: ajv.errorsText() };
  } catch (e) {
    return { error: 'Malformed url.' };
  }
}
