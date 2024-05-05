import { useWeb3React } from "@web3-react/core";
import { getStakingContract } from "../Helpers/contract";
import { CONTRACT_ADDRESS } from "../Helpers/constants";
import { fromBigNumber, toBigNumber } from "../Helpers";
import { useEffect, useState } from "react";

export const useContract = () => {
  const { chainId, library, account } = useWeb3React();
  const contract = getStakingContract(CONTRACT_ADDRESS, chainId, library);
  const [balance, setBalance] = useState(0);
  const [transactionHash, setTransactionHash] = useState("");
  const [latestStakes, setLatestStakes] = useState({
    id: "",
    amount: "--",
    deadline: 0,
    staked_time: 0,
    balance: "--",
  });
  const [stakes, setStakes] = useState([]);

  const stake = async (value) => {
    try {
      const amount = toBigNumber(value);
      const signer = contract.connect(library?.getSigner());
      const tx = await signer.stake(amount);
      await listenForTransactionMine(tx, library);
    } catch (err) {
      console.log({ err });
      alert("Opps, Something went wrong");
    }
  };

  const claim = async (id) => {
    try {
      const signer = contract.connect(library?.getSigner());
      const tx = await signer.claim(id);
      await listenForTransactionMine(tx, library);
    } catch (err) {
      alert("Opps, Something went wrong");
    }
  };

  function listenForTransactionMine(transactionResponse, provider) {
    // create a listener for the blockchain
    return new Promise((resolve, reject) => {
      provider.once(transactionResponse.hash, async (transactionReceipt) => {
        await transactionResponse.wait(1);
        setTransactionHash(transactionResponse.hash);
        resolve();
      });
    });
  }

  useEffect(() => {
    const getBalance = async () => {
      try {
        if (!account) return;
        const balance = await contract.totalStaked(account);
        setBalance(fromBigNumber(balance.toString()));
      } catch (err) {
        console.log(err);
        alert("Opps, Something went wrong");
      }
    };

    getBalance();
  }, [transactionHash, account, contract]);

  useEffect(() => {
    const getStakes = async () => {
      try {
        if (!account) return;
        const stakes = await contract.getUserStakes(account);

        const stake = stakes[stakes.length - 1];

        if (stakes.length) {
          setLatestStakes({
            id: stake[0],
            amount: fromBigNumber(stake[1]),
            balance: stake[1],
            staked_time: stake[2].toString(),
            deadline: stake[3].toString(),
          });
        }

        setStakes(() => {
          return stakes.map((stake) => {
            return {
              id: stake[0],
              amount: fromBigNumber(stake[1]),
              balance: stake[1],
              staked_time: stake[2].toString(),
              deadline: stake[3].toString(),
            };
          });
        });
      } catch (err) {
        console.log(err);
        alert("Opps, Something went wrong when retrieving data");
      }
    };

    getStakes();
  }, [account]);

  return { contract, stake, claim, balance, latestStakes, stakes };
};
