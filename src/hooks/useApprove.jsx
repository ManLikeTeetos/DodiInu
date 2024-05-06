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
      await tx.wait()
      refetch();
      alert("Token Approved");
    } catch (err) {
      if (err === undefined) return;
      alert("Opps, something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  function listenForTransactionMine(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash}...`);
    // create a listener for the blockchain
    return new Promise((resolve, reject) => {
      provider.once(transactionResponse.hash, async (transactionReceipt) => {
        await transactionResponse.wait(1);
        resolve();
      });
    });
  }

  return {
    approve,
    loading,
  };
};
