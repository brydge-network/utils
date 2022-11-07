import { Contract, BigNumber, ethers, getDefaultProvider } from 'ethers';
import { contractABIs } from './contractABIs';
import { minterABIs } from './minterABIs';
import Ajv from 'ajv';

const ajv = new Ajv();

interface CallParams {
  mintPrice: number;
  mintAmount: number;
  contractAddress: string;
  minterAddress: string;
  jsonRpcUrl?: string;
  networkId?: number;
  userAddress?: string;
}

const schema = {
  type: 'object',
  properties: {
    mintPrice: { type: 'number', minimum: 0 },
    mintAmount: { type: 'number', minimum: 0 },
    contractAddress: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' },
    minterAddress: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' },
    jsonRpcUrl: { type: 'string' },
    networkId: { type: 'number', minimum: 1, maximum: 100000 },
    userAddress: {
      type: 'string',
      pattern: '^0x[a-fA-F0-9]{40}$',
      default: '0x0123456789abcdeffedcba9876543210deadbeef',
    },
  },
  required: ['mintPrice', 'mintAmount', 'contractAddress', 'minterAddress'],
  anyOf: [{ required: ['jsonRpcUrl'] }, { required: ['networkId'] }],
};

export type ICall = {
  _to: string;
  _value: any;
  _calldata: string;
};

// Regular Mint ICall
export function CreateMintICall(
  mintPrice: BigNumber,
  mintAmount: number,
  contractAddress: string,
  minterAddress: string,
  jsonRpcUrl: string = '',
  networkId: number = 0,
  userAddress: string = '0x0123456789abcdeffedcba9876543210deadbeef',
): ICall[] {
  const contractABI = contractABIs[contractAddress];
  if (!contractABI) {
    throw new Error('Contract ABI not found');
  }
  const minterABI = minterABIs[minterAddress];
  if (!minterABI) {
    throw new Error('Minter ABI not found');
  }

  // Create a provider
  let provider: ethers.providers.BaseProvider;
  if (jsonRpcUrl) {
    provider = new ethers.providers.JsonRpcProvider(jsonRpcUrl);
  } else if (networkId) {
    provider = getDefaultProvider(networkId);
  } else {
    throw new Error('No network or jsonRpcUrl provided');
  }

  const contract = new Contract(contractAddress, contractABI, provider);
  const minter = new Contract(minterAddress, minterABI, provider);
  const mintData = contract.interface.encodeFunctionData('mint', [mintAmount]);
  const mintAndTransferData = minter.interface.encodeFunctionData('handleERC721Transfer', [mintData, userAddress]);
  const ICall = [
    {
      _to: contractAddress,
      _value: mintPrice.mul(mintAmount),
      _calldata: mintAndTransferData,
    },
  ];
  return ICall;
}
