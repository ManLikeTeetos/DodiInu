import { Contract, JsonRpcProvider } from "ethers";
import stakingAbi from "../Helpers/stakingAbi.json";
import erc20Abi from "../Helpers/erc20Abi.json";

let contract_address = "";

export const readOnlyProvider = (rpc) => new JsonRpcProvider(rpc);

export const defaultRPCs = {
  1: `https://rpc.ankr.com/eth`,
  56: "https://bsc-dataseed.binance.org/",
  11155111: "https://eth-sepolia.api.onfinality.io/public",
};
// https://rpc.ankr.com/optimism_sepolia

export function select_rpc_url(chain: Blockchain) {
  return defaultRPCs[chain];
}

const getContract = (abi, contract_address, chain, provider) => {
  const defaultProvider = readOnlyProvider(select_rpc_url(chain));

  return new Contract(contract_address, abi, provider ?? defaultProvider);
};

export const getStakingContract = (contract_address, chain, provider) => {
  return getContract(
    stakingAbi,
    contract_address, //contracts.staking[chain], //contract adrress
    chain,
    provider
  );
};

export const getERC20Contract = (contract_address, chain, provider) => {
  return getContract(erc20Abi, contract_address, chain, provider);
};

// const getAllowance = async () => {
// 	const contract: any = getERC20Contract(
// 		contracts.staking_token[chainId], //erc20 token address
// 		chainId as any,
// 		provider
// 	);

// 	if (!address) return;
// 	const allowance = await contract.allowance(
// 		address,
// 		contracts.staking_v2[chainId] //contract address
// 	);

// 	const value = fromBigNumber(
// 		allowance.toString(),
// 		stakingToken[chainId].decimal
// 	);

// 	setAllowance(value);
// }; '
