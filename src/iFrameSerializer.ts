import Ajv from 'ajv';
import { ICall, LpInfo } from './constants';

export interface BrydgeWidgetParams {
  darkMode?: boolean;
  widgetMode?: string;
  outputTokenAddress?: string;
  destinationChainId?: number;
  title?: string;
  price?: number;
  iCalls?: ICall[];
  contractAddress?: string;
  presalePrice?: number;
  presaleAmount?: number;
  lpInfo?: LpInfo;
  baseColor?: string;
  hoverColor?: string;
  backgroundColor?: string;
  error?: string;
}

const schema = {
  type: 'object',
  properties: {
    darkMode: { type: 'boolean', default: true },
    widgetMode: { type: 'string', enum: ['SWAP', 'PURCHASE', 'LP_DEPOSIT'], default: 'SWAP' },
    outputTokenAddress: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$|NATIVE', default: 'NATIVE' },
    destinationChainId: { type: 'number', minimum: 1, maximum: 100000, default: 1 },
    title: { type: 'string' },
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
    },
    contractAddress: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' },
    presalePrice: { type: 'number', minimum: 0 },
    presaleAmount: { type: 'number', minimum: 0 },
    lpInfo: {
      type: 'object',
      properties: {
        lpChainId: { type: 'number', minimum: 1, maximum: 100000 },
        currencyAAddress: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$|NATIVE' },
        currencyBAddress: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$|NATIVE' },
        routerAddress: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' },
        tokenPairName: { type: 'string' },
      },
    },
    baseColor: { type: 'string', pattern: '^#[A-Fa-f0-9]{6}' },
    hoverColor: { type: 'string', pattern: '^#[A-Fa-f0-9]{6}' },
    backgroundColor: { type: 'string', pattern: '^#[A-Fa-f0-9]{6}' },
  },
  allOf: [
    {
      if: {
        properties: { widgetMode: { enum: ['SWAP'] } },
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
        anyOf: [
          {
            required: ['outputTokenAddress', 'destinationChainId', 'price', 'iCalls'],
          },
          {
            required: ['outputTokenAddress', 'destinationChainId', 'price', 'contractAddress'],
          },
        ],
      },
    },
    {
      if: {
        properties: { widgetMode: { const: 'LP_DEPOSIT' } },
      },
      then: {
        required: ['lpInfo'],
      },
    },
  ],
};

const ajv = new Ajv({ useDefaults: true });

export function encodeUrl(widgetParams: BrydgeWidgetParams): string {
  // set default mode to SWAP if not provided
  let params = { ...widgetParams, widgetMode: widgetParams.widgetMode || 'SWAP' };
  const valid = ajv.validate(schema, params);
  if (valid) {
    return encodeURIComponent(JSON.stringify(params));
  }
  throw new Error(ajv.errorsText());
}

export function decodeUrl(path: string): BrydgeWidgetParams {
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
