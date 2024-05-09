import { utils } from "ethers";

export const toBigNumber = (value) => utils.parseEther(value.toString());
export const fromBigNumber = (value, decimal = 18) =>
  utils.formatUnits(value.toString(), decimal);