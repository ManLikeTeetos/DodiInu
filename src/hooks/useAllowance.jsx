import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { fromBigNumber } from "../Helpers";
import { getERC20Contract } from "../Helpers/contract";
import { CONTRACT_ADDRESS, TOKEN_ADDRESS } from "../Helpers/constants";

export const useAllowance = () => {
  const [loading, setLoading] = useState(false);
  const { account, chainId, library } = useWeb3React();
  const [allowance, setAllowance] = useState("");
  const [toggle, setRefetch] = useState(false);
  useEffect(() => {
    const getAllowance = async () => {
      if (!account) return;
      setLoading(true);
      const contract = getERC20Contract(TOKEN_ADDRESS, chainId, library);

      const allowance = await contract.allowance(account, CONTRACT_ADDRESS);

      setAllowance(fromBigNumber(allowance.toString()));
    };
    getAllowance();
  }, [account, toggle, chainId]);

  const hasAllowance = (amount) => {
    if (allowance >= amount) {
      return true;
    }
    return false;
  };

  const refetch = () => {
    setRefetch((prev) => !prev);
  };

  return { allowance, hasAllowance, loading, refetch };
};
