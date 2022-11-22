import { Contract, BigNumber, ethers, getDefaultProvider } from 'ethers';
import { integrationRegistry } from './integrationResistry';
import { ICall } from '../constants';
import Ajv from 'ajv';

const ajv = new Ajv({ useDefaults: true });

interface CallParams {
  mintPrice: number;
  mintAmount?: number;
  contractAddress: string;
  jsonRpcUrl?: string;
  chainId?: number;
  userAddress?: string;
}

const schema = {
  type: 'object',
  properties: {
    mintPrice: { type: 'number', minimum: 0 },
    mintAmount: { type: 'number', minimum: 1, default: 1 },
    contractAddress: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' },
    jsonRpcUrl: { type: 'string' },
    chainId: { type: 'number', minimum: 1, maximum: 100000 },
    userAddress: {
      type: 'string',
      pattern: '^0x[a-fA-F0-9]{40}$',
      default: '0x0123456789abcdeffedcba9876543210deadbeef',
    },
  },
  required: ['mintPrice', 'contractAddress'],
  anyOf: [{ required: ['jsonRpcUrl'] }, { required: ['chainId'] }],
};

// Regular Mint ICall
export function createMintICall(callParams: CallParams): ICall[] {
  // Validate the params
  const valid = ajv.validate(schema, callParams);
  if (!valid) {
    throw new Error(ajv.errorsText());
  }
  const integrationData = integrationRegistry[callParams.contractAddress];
  if (!integrationData) {
    throw new Error('Integration not found');
  }

  // Create a provider
  let provider: ethers.providers.BaseProvider;
  if (callParams.jsonRpcUrl) {
    provider = new ethers.providers.JsonRpcProvider(callParams.jsonRpcUrl);
  } else if (callParams.chainId) {
    provider = getDefaultProvider(callParams.chainId);
  } else {
    throw new Error('Invalid params');
  }

  console.log('MINT AMOUNT', callParams.mintAmount);

  const price = BigNumber.from(callParams.mintPrice);
  const amount = BigNumber.from(callParams.mintAmount);

  const contract = new Contract(callParams.contractAddress, integrationData.contractAbi, provider);
  const delegate = new Contract(integrationData.delegateAddress, integrationData.delegateAbi, provider);
  const mintData = contract.interface.encodeFunctionData('mint', [amount]);
  const mintAndTransferData = delegate.interface.encodeFunctionData('handleERC721Transfer', [
    mintData,
    callParams.userAddress,
  ]);
  const iCall: ICall[] = [
    {
      _to: integrationData.delegateAddress,
      _value: price.mul(amount),
      _calldata: mintAndTransferData,
    },
  ];
  return iCall;
}
