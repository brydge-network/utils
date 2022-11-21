import { Contract, BigNumber, ethers, getDefaultProvider } from 'ethers';
import { integrationRegistry } from './integrationResistry';
import { ICall } from '../constants';
import Ajv from 'ajv';

const ajv = new Ajv();

interface CallParams {
  mintPrice: number;
  mintAmount?: number;
  contractAddress: string;
  delegateAddress: string;
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
    delegateAddress: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' },
    jsonRpcUrl: { type: 'string' },
    chainId: { type: 'number', minimum: 1, maximum: 100000 },
    userAddress: {
      type: 'string',
      pattern: '^0x[a-fA-F0-9]{40}$',
      default: '0x0123456789abcdeffedcba9876543210deadbeef',
    },
  },
  required: ['mintPrice', 'mintAmount', 'contractAddress', 'delegateAddress'],
  anyOf: [{ required: ['jsonRpcUrl'] }, { required: ['chainId'] }],
};

// Regular Mint ICall
export function createMintICall(callParams: CallParams): ICall[] {
  // Validate the params
  if (!ajv.validate(schema, callParams)) {
    throw new Error('No chainId or jsonRpcUrl provided');
  }
  const integrationData = integrationRegistry[callParams.delegateAddress];
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

  const contract = new Contract(callParams.contractAddress, integrationData.contractAbi, provider);
  const delegate = new Contract(callParams.delegateAddress, integrationData.delegateAbi, provider);
  const mintData = contract.interface.encodeFunctionData('mint', [callParams.mintAmount]);
  const mintAndTransferData = delegate.interface.encodeFunctionData('handleERC721Transfer', [
    mintData,
    callParams.userAddress,
  ]);
  const iCall: [ICall] = [
    {
      _to: integrationData.delegateAddress,
      _value: BigNumber.from(callParams.mintPrice).mul(BigNumber.from(callParams.mintAmount)),
      _calldata: mintAndTransferData,
    },
  ];
  return iCall;
}
