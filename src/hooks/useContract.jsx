import { useWeb3React } from "@web3-react/core";
import { getStakingContract, getERC20Contract } from "../Helpers/contract";
import { CONTRACT_ADDRESS, TOKEN_ADDRESS } from "../Helpers/constants";
import { fromBigNumber, toBigNumber } from "../Helpers";
import { useEffect, useState } from "react";

import CustomModal from "../components/CustomModal";




export const useContract = () => {
  const { chainId, library, account } = useWeb3React();
  const contract = getStakingContract(CONTRACT_ADDRESS, chainId, library);
  const tokenContract = getERC20Contract(TOKEN_ADDRESS, chainId, library);
  const [balance, setBalance] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [totalEarned, setTotalEarned] = useState(0);
  const [transactionHash, setTransactionHash] = useState("");
  const [latestStakes, setLatestStakes] = useState({
    id: "",
    amount: "--",
    deadline: 0,
    staked_time: 0,
    balance: "--",
  });

  const [stakes, setStakes] = useState([]);
  const [records, setRecords] = useState([]);


	// //modal const
	// Modal state and functions
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [error, setError] = useState("");

	const closeModal = () => {
		setModalIsOpen(false);
		setError("");
	};

  const stake = async (value) => {
    try {
      const amount = toBigNumber(value);
      const signer = contract.connect(library?.getSigner());
      const tx = await signer.stake(amount);
      const transaction = await tx.wait();
      setTransactionHash(transaction.transactionHash);
    } catch (err) {
      console.log({ err });
     // alert("Opps, Something went wrong");
		setError("Oops, something went wrong");
		setModalIsOpen(true);
    }
  };

  const claim = async (id) => {
    try {
      const signer = contract.connect(library?.getSigner());
      const tx = await signer.claim(id);
      await listenForTransactionMine(tx, library);
    } catch (err) {
      //alert("Opps, Something went wrong");
		setError("Oops, something went wrong");
		setModalIsOpen(true);
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
        const balance = await tokenContract.balanceOf(account);
        setBalance(fromBigNumber(balance.toString()));
      } catch (err) {
        console.log(err);
       setError("Oops, something went wrong");
		setModalIsOpen(true);
      }
    };

    getBalance();
  }, [transactionHash, account]);

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
            balance: fromBigNumber(stake[2]),
            staked_time: stake[3].toString(),
            deadline: stake[4].toString(),
          });
        }

        setStakes(() => {
          return stakes.map((stake) => {
            return {
              id: stake[0],
              amount: fromBigNumber(stake[1]), // Balance
              balance: fromBigNumber(stake[2]), // Balance
              staked_time: stake[3].toString(), // Start time
              deadline: stake[4].toString(), // End time
            };
          });
        });
      } catch (err) {
       // alert("Opps, Something went wrong when retrieving data");
		  setError("Opps, Something went wrong when retrieving data");
		  setModalIsOpen(true);
      }
    };

    const getRecords = async () => {
      try {
        if (!account) return;
        const records = await contract.getUserRecords(account);

        setRecords(() => {
          return records.map((record, i) => {
            return {
              id: i,
              amount: fromBigNumber(record[0]),
              createdAt: record[1].toString(),
            };
          });
        });

        setTotalEarned(() => {
          return records.reduce((acc, curr) => {
            return fromBigNumber(curr[0]) + acc;
          }, 0);
        });
      } catch (err) {
		  //alert("Opps, Something went wrong when retrieving data");
		   setError("Opps, Something went wrong when retrieving data");
		  setModalIsOpen(true);
      }
    };

    const getTotalSupply = async () => {
      try {
        const totalSupply = await contract.totalSupply(account);
        setTotalSupply(fromBigNumber(totalSupply));
      } catch (err) {
       // alert("Opps, Something went wrong when retrieving data");
		  setError("Opps, Something went wrong when retrieving data");
		  setModalIsOpen(true);
      }
    };

    getStakes();
    getRecords();
    getTotalSupply();
  }, [account, transactionHash]);

  return {
    contract,
    stake,
    claim,
    balance,
    latestStakes,
    stakes,
    records,
    totalSupply,
    totalEarned,
	  modalIsOpen,
	  error,
	  closeModal,
  };
};
