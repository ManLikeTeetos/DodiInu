import { utils } from "ethers";

export const toBigNumber = (value) => utils.parseUnits(value.toString(), 10);
export const fromBigNumber = (value, decimal = 10) =>
  utils.formatUnits(value.toString(), (decimal = 10));
export const currentSeconds = new Date().getTime() / 1000;
