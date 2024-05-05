import { ethers } from "ethers";

export const toBigNumber = (value: any) => ethers.parseEther(value.toString());
export const fromBigNumber = (value: any, decimal = 18) =>
  ethers.formatUnits(value.toString(), decimal);
