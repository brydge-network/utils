import Ajv from 'ajv';
import { ICall } from './createCalls/createCalls';

interface BrydgeWidgetParams {
  darkMode?: boolean;
  widgetMode: string;
  outputTokenAddress: string;
  destinationChainId: number;
  title: string;
  price: number;
  iCalls: ICall[];
  baseColor?: string;
  hoverColor?: string;
  backgroundColor?: string;
}

const schema = {
  type: 'object',
  properties: {
    darkMode: { type: 'boolean', default: true },
    widgetMode: { type: 'string', enum: ['SWAP', 'PURCHASE', 'LP_DEPOSIT'] },
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
    baseColor: { type: 'string', pattern: '^#[A-Fa-f0-9]{6}' },
    hoverColor: { type: 'string', pattern: '^#[A-Fa-f0-9]{6}' },
    backgroundColor: { type: 'string', pattern: '^#[A-Fa-f0-9]{6}' },
  },
  allOf: [
    {
      required: ['widgetMode'],
    },
    {
      if: {
        properties: { widgetMode: { const: 'SWAP' } },
      },
      then: {
        required: [],
      },
    },
    {
      if: {
        properties: { widgetMode: { const: 'PURCHASE' } },
      },
      then: {
        required: ['outputTokenAddress', 'destinationChainId', 'price', 'iCalls'],
      },
    },
    {
      if: {
        properties: { widgetMode: { const: 'LP_DEPOSIT' } },
      },
      then: {
        required: [],
      },
    },
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
