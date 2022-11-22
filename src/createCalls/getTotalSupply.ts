import { integrationRegistry } from './integrationResistry';
import { Contract, ethers, getDefaultProvider, BigNumber } from 'ethers';
import Ajv from 'ajv';

const ajv = new Ajv();

interface SupplyParams {
  contractAddress: string;
  jsonRpcUrl?: string;
  chainId?: number;
}

const schema = {
  type: 'object',
  properties: {
    contractAddress: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' },
    jsonRpcUrl: { type: 'string' },
    chainId: { type: 'number', minimum: 1, maximum: 100000 },
  },
  anyOf: [{ required: ['contractAddress', 'jsonRpcUrl'] }, { required: ['contractAddress', 'chainId'] }],
};

export async function getTotalSupply(supplyParams: SupplyParams): Promise<number> {
  // Validate the params
  if (!ajv.validate(schema, supplyParams)) {
    throw new Error('Invalid params');
  }
  const integrationData = integrationRegistry[supplyParams.contractAddress];
  if (!integrationData) {
    throw new Error('Integration not found');
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

  const contract = new Contract(supplyParams.contractAddress, integrationData.contractAbi, provider);
  const totalSupply = (await contract.totalSupply()) as BigNumber;
  return totalSupply.toNumber();
}
