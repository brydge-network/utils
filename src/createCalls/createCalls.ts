import { Contract, BigNumber, ethers } from 'ethers';
import { contractABIs } from './contractABIs';
import { minterABIs } from './minterABIs';

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
  jsonRpcUrl: string,
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
  const provider = new ethers.providers.JsonRpcProvider(jsonRpcUrl);
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
