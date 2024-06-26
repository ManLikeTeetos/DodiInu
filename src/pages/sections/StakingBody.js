import { useState, useEffect } from "react";
import Trophy from "../../styles/assets/images/trophy.png";
import Twitter from "../../styles/assets/images/twitter_stake.png";
import Telegram from "../../styles/assets/images/telegram_stake.png";
import Wallet from "../../styles/assets/images/wallet.png";
import Modal from "react-modal";
import ModalCheck from "../../styles/assets/images/modal_correct.png";
import "../../styles/StakingBody.css";
import Records from "./RecordSection.js";
import { useAllowance } from "./../../hooks/useAllowance";
import { useContract } from "../../hooks/useContract.jsx";
import StakingSection from "./StakingSection.js";
import { useApprove } from "../../hooks/useApprove.jsx";
import CountDown from "../../components/CountDown.js";
import CustomModal from "../../components/CustomModal.js";
import { currentSeconds } from "../../Helpers";

const customStyle = {
  overlay: {
    background: "transparent",
  },
};

export default function StakingBody() {
  //Modal functons

  const [IsOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [formattedAmount, setFormattedAmount] = useState("");
  const { hasAllowance, allowance } = useAllowance();
  const {
    balance,
    stake,
    latestStakes,
    claim,
    records,
    totalSupply,
    totalEarned,
    error,
    redeemable,
    claimAll,
    totalLocked,
    loading,
    fetching,
    setTransactionHash,
  } = useContract();
  const { approve } = useApprove();

  let {
    id,
    amount: latest_amount,
    deadline: latest_deadline,
    balance: latest_balance,
    staked_time: latest_staked_time,
    duration: check_duration,
  } = latestStakes;

  // const balance = 24.715046;

  //const duration = latest_deadline - latest_staked_time;
  //const check_duration = latest_deadline - currentSeconds;

  //console.log(23, check_duration);

  //console.log("error_message",error);
  //if(error !== "") setModalIsOpen(true);

  // const records = [
  //   createdAt => 1234554434,
  //   amount => 12.3445,
  // ]

  ////dummy data section
  // const dummyRecords = [
  //   { createdAt: 1627830000, amount: 50000000 },
  //   { createdAt: 1627833600, amount: 3000 },
  //   { createdAt: 1627837200, amount: 7000 },
  //   { createdAt: 1627840800, amount: 6000 },
  //   { createdAt: 1627844400, amount: 8000 },
  // ];

  // const [ records, setRecords] = useState(dummyRecords);

  function openModal() {
    setIsOpen(true);
  }

  async function handleStake() {
    if (hasAllowance(+amount)) {
      await stake(amount);
      setAmount("");
      setFormattedAmount("");
    } else {
      await approve(amount);
    }
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  //staking and records tab
  const [activeTab, setActiveTab] = useState("stake");
  const [showMore, setShowMore] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setTransactionHash(tab + "random_hash_simulator");
    setShowMore(false);
  };

  ///External links
  const calcLink =
    "https://www.thecalculatorsite.com/finance/calculators/daily-compound-interest.php";
  const TelegramLink = "https://t.me/DodiinuCoin";
  const TwitterLink = "https://x.com/Dodi_Inu?s=09";

  console.log("check_duration", check_duration);
  //console.log('check_bal', latest_balance);

  useEffect(() => {
    if (check_duration === 1) {
      // Refresh the page when countdown reaches zero
      window.location.reload();
    }

    if (check_duration > 180) {
      check_duration = 180;
    }
  }, [check_duration]);

  function convertClaimsSecondsToDateTime(timestamp) {
    // Convert timestamp to milliseconds
    const milliseconds = timestamp * 1000;
    // Create a new Date object
    const dateObject = new Date(milliseconds);

    // Define month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Extract date components
    const month = monthNames[dateObject.getMonth()];
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();

    // Format date as "Month DD, YYYY"
    const formattedDate = `${month} ${day}, ${year}`;

    // Extract time components
    let hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    // Format time as "HH:MM AM/PM"
    const formattedTime = `${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${ampm}`;

    return { claim_date: formattedDate, claim_timestamp: formattedTime };
  }

  const dollarValue = 0.0000137;

  ///fornat balances

  const formattedBalance = Number(Math.floor(balance * 100000) / 100000)
    .toFixed(5)
    .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  const formattotalLocked = Number(Math.floor(totalLocked * 100000) / 100000)
    .toFixed(5)
    .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  const formatredeemable = Number(Math.floor(redeemable * 100000) / 100000)
    .toFixed(5)
    .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");

  const formattotalEarned = Number(Math.floor(totalEarned * 100) / 100)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  const formattotalSupply = Number(Math.floor(totalSupply * 100) / 100)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/,/g, ""); // Remove existing commas
    if (!isNaN(value) && value !== "") {
      setAmount(value); // Set the internal value without commas
      const formattedValue = Number(value).toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 20,
      });
      setFormattedAmount(formattedValue); // Set the formatted value with commas for display
    } else {
      setAmount("");
      setFormattedAmount("");
    }
  };

  ///show more for records
  const [showAllRecords, setShowAllRecords] = useState(false);
  const handleShowMore = () => {
    setActiveTab("records");
    setShowMore(true);
  };
  const recordsToShow = records.length < 3 ? records : records.slice(-3);

  return (
    <div className="stkbody">
      <div className="stkshadow">
        <div className="stknav">
          <div className="stknav-wrapper">
            <div
              className={`stktab ${activeTab === "stake" ? "active" : ""}`}
              onClick={() => handleTabClick("stake")}
            >
              STAKING
            </div>
            <div
              className={`stktab ${activeTab === "records" ? "active" : ""}`}
              onClick={() => handleTabClick("records")}
            >
              RECORDS
            </div>
          </div>
        </div>

        {activeTab === "stake" && (
          <div className="stkwrapper">
            <div className="stkcore">
              <div className="stk-tot-lock">
                <div className="stk-tot-frame">
                  <div className="stk-lok-heading">Total Locked</div>
                  <div className="stk-lok-text">
                    <span> {formattotalSupply} </span>
                    <span className="stk-green-color">DODI</span>
                  </div>
                </div>
                <div className="stk-earn-frame">
                  <div className="stkearn-num">
                    <div className="stk-lok-heading">Total Earned</div>
                    <div className="stk-lok-text">
                      <span>{formattotalEarned} </span>
                      <span className="stk-green-color">DODI</span>
                    </div>
                  </div>
                  <img src={Trophy} alt="Trophy" className="stk-trophy" />
                </div>
              </div>
              <div className="stkconnect">
                <div className="stkconnect-col">
                  <div className="stake-header">
                    <img src={Wallet} alt="Wallet" className="wallet" />
                    <div className="stake-title">Start Staking</div>
                  </div>
                  <div className="stake-inner">
                    <div className="stake-bio">
                      <span className="stake-bio-text">
                        Stake any amount of{" "}
                        <span className="green-color">$DODI</span> get daily
                        staking rewards.
                      </span>
                    </div>
                    <div className="stake-card">
                      <div className="stake-inner-card">
                        <div className="stake-balance">
                          <div className="stake-bal-field">
                            <div className="stake-bal-label">Balance</div>
                            <span className="stake-bal-amt">
                              {formattedBalance || "--"}
                            </span>
                          </div>
                        </div>
                        <div className="stake-tax">
                          <div className="stake-amount-field">
                            <div className="stake-bal-label">
                              Staking Amount
                            </div>
                            <input
                              onChange={handleAmountChange}
                              className="stake-bal-amt"
                              value={formattedAmount}
                              type="text"
                              step={0.1}
                              inputMode="decimal"
                              autoComplete="off"
                              autoCorrect="off"
                              pattern="^[0-9]*[.,]?[0-9]*$"
                              minLength={1}
                              maxLength={79}
                              spellCheck="false"
                              placeholder="--"
                            />
                          </div>
                          {/* <div className="stake-tax-field">
                            <div className="stake-bal-label">Tax</div>
                            <span className="stake-bal-amt">3%</span>
                          </div> */}
                        </div>
                        <div className="stake-date">
                          <span className="stake-days-lockup">
                            Lock up Period
                          </span>
                          <span className="stake-days-txt">
                            <span className="green-color">50 Days</span>
                          </span>
                        </div>
                      </div>
                      {loading && (
                        <div style={{ color: "#fff" }}>loading...</div>
                      )}
                      <button
                        disabled={amount === ""}
                        onClick={handleStake}
                        className={`stake-btn ${amount === "" ? "" : "active"}`}
                      >
                        {+allowance >= amount ? (
                          <span className="stake-btn-txt">STAKE</span>
                        ) : (
                          <span className="stake-btn-txt">APPROVE</span>
                        )}
                      </button>
                      <Modal
                        isOpen={IsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        className="modal"
                        style={customStyle}
                      >
                        <div className="modal-body">
                          <div className="modal-inner">
                            <div className="modal-check">
                              <img
                                className="modal-image"
                                src={ModalCheck}
                                alt="Congratulations"
                              />
                            </div>
                            <div className="modal-header">Congratulations!</div>
                            <span className="modal-text">
                              Your <span className="green-color">$DODI</span> is
                              staked.
                            </span>
                          </div>
                          <div className="modal-option">
                            <div className="modal-btn-green">
                              <span
                                className="modal-btn-txt"
                                onClick={closeModal}
                              >
                                Continue
                              </span>
                            </div>
                            <div className="modal-btn">
                              <span className="modal-btn-txt">See Record</span>
                            </div>
                          </div>
                        </div>
                      </Modal>
                    </div>
                  </div>
                </div>
                <div className="stkconnect-col">
                  <div className="stake-header">
                    <img src={Wallet} alt="Wallet" className="wallet" />
                    <div className="stake-title">Staking Account</div>
                  </div>
                  <div className="stake-inner">
                    <div className="stake-bio">
                      <span className="stake-bio-text">
                        See how much is locked and claim when done staking.
                      </span>
                    </div>
                    <div className="stake-card">
                      <div className="stake-inner-card">
                        <div className="stake-balance">
                          <div className="stake-bal-field">
                            <div className="stake-bal-label">
                              Locked Staking
                            </div>
                            <span className="stake-bal-amt">
                              {formattotalLocked}
                            </span>
                          </div>
                        </div>
                        <div className="stake-time-div">
                          <div className="stake-time">
                            <span className="timer">Timer </span>
                          </div>
                          {fetching ? (
                            <CountDown duration={0} />
                          ) : (
                            <CountDown duration={check_duration} />
                          )}
                        </div>
                        <div className="stake-red-balance">
                          <div className="stake-bal-field">
                            <div className="stake-bal-label">
                              Redeemable Balance
                            </div>
                            <span className="stake-bal-amt">
                              {formatredeemable}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        disabled={
                          latest_balance === "--" ||
                          +redeemable == 0 ||
                          check_duration > 0
                        }
                        onClick={() => claimAll()}
                        className={`stake-btn ${
                          latest_balance === "--" ||
                          +redeemable == 0 ||
                          check_duration > 0
                            ? ""
                            : "active"
                        }`}
                      >
                        <span className="stake-btn-txt">CLAIM</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="stkconnect-col">
                  <div className="stake-header">
                    <img src={Wallet} alt="Wallet" className="wallet" />
                    <div className="stake-title">Rewards</div>
                  </div>
                  <div className="stake-reward">
                    <div className="stake-reward-title">
                      <span className="stake-reward-txt">
                        Here are the records of <br />
                        your rewards
                      </span>
                    </div>
                    {Object.keys(records).length === 0 && (
                      <>
                        <div className="stake-records">Records</div>
                        <div className="stake-records-div">
                          <span className="stake-record-txt">No Record</span>
                        </div>
                      </>
                    )}

                    {Object.keys(records).length !== 0 && (
                      <div className="stake-record-pop">
                        {recordsToShow.map((claims, i) => {
                          const { claim_date, claim_timestamp } =
                            convertClaimsSecondsToDateTime(claims.createdAt);

                          return (
                            <div className="stake-rec-popdiv">
                              <div className="stake-rec-popdate">
                                <span>{claim_timestamp}</span>
                                <span>{claim_date}</span>
                              </div>
                              <div className="stake-rec-popamt">
                                <div className="stake-rec-amt">
                                  {/* <span className="green-color">DODI </span> */}
                                  <span>
                                    {Number(claims.amount).toLocaleString(
                                      "en-US",
                                      {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      }
                                    )}
                                  </span>
                                </div>
                                <div className="stake-rec-dollar">
                                  <span className="green-color">
                                    $
                                    {Number(
                                      claims.amount * dollarValue
                                    ).toLocaleString("en-US", {
                                      minimumFractionDigits: 2,
                                      maximumFractionDigits: 2,
                                    })}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        {/* {records.length > 3 && !showAllRecords && (
                          <button
                            onClick={handleShowMore}
                            className="stake-btn active"
                          >
                            <span className="stake-btn-txt">SEE ALL</span>
                          </button>
                        )} */}
                      </div>
                    )}
                  </div>

                  {/* TODO POPULATE REWARDS RECORDS */}
                </div>
              </div>
            </div>
            <div className="stkcalc">
              <div className="earning">
                <a
                  className="calculate-earnings"
                  href={calcLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Calculate Earnings
                </a>
              </div>
              <div className="stk-contract">
                CA: 0x5211674146FCaD8F4C34dE6bcb60f8C5940D2182
              </div>
              <div className="stk-social-div">
                <a
                  className="stk-social-inner"
                  href={TwitterLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="stk-image-div">
                    <img src={Twitter} alt="Twitter" />
                  </div>
                  <div className="stk-social-name">Twitter</div>
                </a>
                <a
                  className="stk-social-inner"
                  href={TelegramLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="stk-image-div">
                    <img src={Telegram} alt="Telegram" />
                  </div>
                  <div className="stk-social-name">Telegram</div>
                </a>
              </div>
            </div>
            {/* <CustomModal
              error={error}
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
            /> */}
          </div>
        )}

        {activeTab === "records" && <Records showMore={showMore} />}
      </div>
    </div>
  );
}
