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

const customStyle = {
  overlay: {
    background: "transparent",
  },
};

export default function StakingBody() {
  //Modal functons

  const [modalIsOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("");
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
  } = useContract();
  const { approve } = useApprove();

  const {
    id,
    amount: latest_amount,
    deadline: latest_deadline,
    balance: latest_balance,
    staked_time: latest_staked_time,
  } = latestStakes;

  const duration = latest_deadline;

  function openModal() {
    setIsOpen(true);
  }

  function handleStake() {
    if (hasAllowance(amount)) {
      stake(amount);
    } else {
      approve(amount);
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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  ///External links
  const calcLink =
    "https://www.thecalculatorsite.com/finance/calculators/daily-compound-interest.php";
  const TelegramLink = "https://t.me/DodiinuCoin";
  const TwitterLink = "https://x.com/Dodi_Inu?s=09";

	const formattedBalance = parseFloat(balance).toFixed(10);

	//console.log('check_duration', duration);
	//console.log('check_bal', latest_balance);

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
                    <span> {totalSupply} </span>
                    <span className="stk-green-color">DODI</span>
                  </div>
                </div>
                <div className="stk-earn-frame">
                  <div className="stkearn-num">
                    <div className="stk-lok-heading">Total Earned</div>
                    <div className="stk-lok-text">
                      <span>{totalEarned} </span>
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
                              onChange={(e) => setAmount(e.target.value)}
                              className="stake-bal-amt"
                              value={amount}
                              type="number"
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
                      <button
                        disabled={amount === ""}
                        onClick={handleStake}
                        className={`stake-btn ${amount === "" ? "" : "active"}`}
                      >
                        {allowance >= amount ? (
                          <span className="stake-btn-txt">STAKE</span>
                        ) : (
                          <span className="stake-btn-txt">APPROVE</span>
                        )}
                      </button>
                      <Modal
                        isOpen={modalIsOpen}
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
                              {latest_balance}
                            </span>
                          </div>
                        </div>
                        <div className="stake-time-div">
                          <div className="stake-time">
                            <span className="timer">Timer</span>
                          </div>
                          <CountDown duration={duration} />
                        </div>
                        <div className="stake-red-balance">
                          <div className="stake-bal-field">
                            <div className="stake-bal-label">
                              Redeemable Balance
                            </div>
                            <span className="stake-bal-amt">
                              {latest_balance}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
					 	disabled={latest_balance === "--" }
  						onClick={() => claim(id)}
  						className={`stake-btn ${latest_balance !== "--" ? "active" : ""}`}
 					 >
                        <span className="stake-btn-txt">CLAIM</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="stkconnect-col">
                  <div className="stake-header">
                    <img src={Wallet} alt="Wallet" className="wallet" />
                    <div className="stake-title">Reward</div>
                  </div>
                  <div className="stake-reward">
                    <div className="stake-reward-title">
                      <span className="stake-reward-txt">
                        Here are the records of <br />
                        your rewards
                      </span>
                    </div>
                    <div className="stake-records">Records</div>
                    <div className="stake-records-div">
                      <span className="stake-record-txt">No Record</span>
                    </div>
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
			 <CustomModal error={error} modalIsOpen={modalIsOpen} closeModal={closeModal} />
          </div>
        )}

        {activeTab === "records" && <Records />}
      </div>
    </div>
  );
}
