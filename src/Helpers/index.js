import { utils } from "ethers";

const DECIMAL = 18;

export const toBigNumber = (value) =>
  utils.parseUnits(value.toString(), DECIMAL);
export const fromBigNumber = (value, decimal = DECIMAL) =>
  utils.formatUnits(value.toString(), (decimal = DECIMAL));
export const currentSeconds = new Date().getTime() / 1000;
