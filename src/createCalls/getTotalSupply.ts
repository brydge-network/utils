import { minterABIs } from './minterABIs';
import { Contract, ethers } from 'ethers';

export async function getTotalSupply(minterAddress: string, jsonRpcUrl: string) {
  const minterABI = minterABIs[minterAddress];
  if (!minterABI) {
    throw new Error('Minter ABI not found');
  }
  const provider = new ethers.providers.JsonRpcProvider(jsonRpcUrl);
  const minter = new Contract(minterAddress, minterABI, provider);
  const totalSupply = await minter.totalSupply();
  return totalSupply;
}
