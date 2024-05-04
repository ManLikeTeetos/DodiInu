import { Contract, JsonRpcProvider } from "ethers";
import stakingAbi from "../Helpers/stakingAbi";
import erc20Abi from "../Helpers/stakingAbi";


let contract_address = "";


export const readOnlyProvider = (rpc) =>
	new JsonRpcProvider(rpc);

///demo chain
export const select_rpc_url = (chain) => {
	// Logic to select the RPC URL based on the chain
	if (chain === 'mainnet') {
		return 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID';
	} else if (chain === 'ropsten') {
		return 'https://ropsten.infura.io/v3/YOUR_INFURA_PROJECT_ID';
	}
	// Add more conditions as needed for other chains
};

const getContract = (
	abi,
	contract_address,
	chain,
	provider
) => {
	const defaultProvider = readOnlyProvider(select_rpc_url(chain));
	return new Contract(contract_address, abi, provider ?? defaultProvider);
};

export const getStakingContract = (
	chain,
    provider
) => {
	return getContract(
		stakingAbi,
		contract_address, //contracts.staking[chain], //contract adrress
		chain,
		provider
	);
};


export const getERC20Contract = (
	contract_address,
	chain,
	provider
) => {
	return getContract(
		erc20Abi,
		contract_address,
		chain,
		provider
	);
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



