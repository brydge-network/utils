import { Contract, BigNumber, ethers, getDefaultProvider } from 'ethers';
import { delegateABIs } from './delegateABIs';
import { minterABIs } from './minterABIs';
import { ICall } from '../constants';
import Ajv from 'ajv';

const ajv = new Ajv();

interface CallParams {
  mintPrice: number;
  mintAmount?: number;
  contractAddress: string;
  minterAddress: string;
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
    minterAddress: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' },
    jsonRpcUrl: { type: 'string' },
    chainId: { type: 'number', minimum: 1, maximum: 100000 },
    userAddress: {
      type: 'string',
      pattern: '^0x[a-fA-F0-9]{40}$',
      default: '0x0123456789abcdeffedcba9876543210deadbeef',
    },
  },
  required: ['mintPrice', 'mintAmount', 'contractAddress', 'minterAddress'],
  anyOf: [{ required: ['jsonRpcUrl'] }, { required: ['chainId'] }],
};

// Regular Mint ICall
export function createMintICall(callParams: CallParams): ICall[] {
  // Validate the params
  if (!ajv.validate(schema, callParams)) {
    throw new Error('No chainId or jsonRpcUrl provided');
  }
  const contractABI = delegateABIs[callParams.contractAddress];
  if (!contractABI) {
    throw new Error('Contract ABI not found');
  }
  const minterABI = minterABIs[callParams.minterAddress];
  if (!minterABI) {
    throw new Error('Minter ABI not found');
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

  const contract = new Contract(callParams.contractAddress, contractABI, provider);
  const minter = new Contract(callParams.minterAddress, minterABI, provider);
  const mintData = contract.interface.encodeFunctionData('mint', [callParams.mintAmount]);
  const mintAndTransferData = minter.interface.encodeFunctionData('handleERC721Transfer', [
    mintData,
    callParams.userAddress,
  ]);
  const ICall = [
    {
      _to: callParams.contractAddress,
      _value: BigNumber.from(callParams.mintPrice).mul(BigNumber.from(callParams.mintAmount)),
      _calldata: mintAndTransferData,
    },
  ];
  return ICall;
}
