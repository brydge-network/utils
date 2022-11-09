import { minterABIs } from './minterABIs';
import { Contract, ethers, getDefaultProvider } from 'ethers';
import Ajv from 'ajv';

const ajv = new Ajv();

interface SupplyParams {
  minterAddress: string;
  jsonRpcUrl?: string;
  chainId?: number;
}

const schema = {
  type: 'object',
  properties: {
    minterAddress: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' },
    jsonRpcUrl: { type: 'string' },
    chainId: { type: 'number', minimum: 1, maximum: 100000 },
  },
  anyOf: [{ required: ['minterAddress', 'jsonRpcUrl'] }, { required: ['minterAddress', 'chainId'] }],
};

export async function getTotalSupply(supplyParams: SupplyParams): Promise<number> {
  // Validate the params
  if (!ajv.validate(schema, supplyParams)) {
    throw new Error('Invalid params');
  }
  const minterABI = minterABIs[supplyParams.minterAddress];
  if (!minterABI) {
    throw new Error('Minter ABI not found');
  }
  // Create a provider
  let provider: ethers.providers.BaseProvider;
  if (supplyParams.jsonRpcUrl) {
    provider = new ethers.providers.JsonRpcProvider(supplyParams.jsonRpcUrl);
  } else if (supplyParams.chainId) {
    provider = getDefaultProvider(ethers.providers.getNetwork(supplyParams.chainId));
  } else {
    throw new Error('No network or jsonRpcUrl provided');
  }

  const minter = new Contract(supplyParams.minterAddress, minterABI, provider);
  const totalSupply = await minter.totalSupply();
  return totalSupply;
}
