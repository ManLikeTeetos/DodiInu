import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { getERC20Contract } from "../Helpers/contract";
import { CONTRACT_ADDRESS, TOKEN_ADDRESS } from "../Helpers/constants";
import { toBigNumber } from "../Helpers";
import { useAllowance } from "./useAllowance";

export const useApprove = () => {
  const [loading, setLoading] = useState(false);
  const { chainId, library } = useWeb3React();
  const { refetch } = useAllowance();

  const approve = async (amount) => {
    try {
      setLoading(true);
      const contract = getERC20Contract(TOKEN_ADDRESS, chainId, library);
      const value = toBigNumber(amount);
      const signer = contract.connect(library?.getSigner());
      const tx = await signer.approve(CONTRACT_ADDRESS, value);
      await tx.wait();
      // window.location.reload();
      refetch();
    } catch (err) {
      if (err === undefined) return;
      alert(err.reason || err.message);
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  return {
    approve,
    loading,
  };
};
