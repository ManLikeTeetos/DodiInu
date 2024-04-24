import { useState } from "react"
import Trophy from "../../styles/assets/images/trophy.png"
import Twitter from "../../styles/assets/images/twitter_stake.png"
import Telegram from "../../styles/assets/images/telegram_stake.png"
import Wallet from "../../styles/assets/images/wallet.png"
import Modal from 'react-modal';
import ModalCheck from "../../styles/assets/images/modal_correct.png"
import "../../styles/StakingBody.css"



export default function StakingBody(){
//Modal functons
	let subtitle;
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		//subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}


	return(
		<div className="stkbody">
			<div className="stkshadow">
				<div className="stknav">
					<div className="stknav-wrapper">
						<div className="stktab">
							STAKING
						</div>
						<div className="stktab">
							RECORDS
						</div>
					</div>
				</div>
				<div className="stkwrapper">
					<div className="stkcore">
						<div className="stk-tot-lock">
							<div className="stk-tot-frame">
								<div className="stk-lok-heading">
									Total Locked
								</div>
								<div className="stk-lok-text">
									<span>2,358,800,529 </span><span className="stk-green-color">DODI</span>
								</div>
							</div>
							<div className="stk-earn-frame">
								<div className="stkearn-num">
									<div className="stk-lok-heading">
										Total Earned
									</div>
									<div className="stk-lok-text">
										<span>70,450,845 </span><span className="stk-green-color">DODI</span>
									</div>
								</div>
								<img
									src={Trophy}
									alt="Trophy"
									className="stk-trophy"
								 />
							</div>
						</div>
						<div className="stkconnect">
							<div className="stkconnect-col">
								<div className="stake-header">
									<img
										src={Wallet}
										alt="Wallet"
										className="wallet"
									/>
									<div className="stake-title">
										Start Staking
									</div>
								</div>
								<div className="stake-inner">
									<div className="stake-bio">
										<span className="stake-bio-text">
											Stake any amount of DODI get daily staking rewards.
										</span>
									</div>
									<div className="stake-card">
										<div className="stake-inner-card">
											<div className="stake-balance">
												<div className="stake-bal-field">
													<div className="stake-bal-label">
														Balance
													</div>
													<span className="stake-bal-amt">
														--
													</span>
												</div>
											</div>
											<div className="stake-tax">
												<div className="stake-amount-field">
													<div className="stake-bal-label">
														Staking Amount
													</div>
													<span className="stake-bal-amt">
														--
													</span>
												</div>
												<div className="stake-tax-field">
													<div className="stake-bal-label">
														Tax
													</div>
													<span className="stake-bal-amt">
														3%
													</span>
												</div>
											</div>
											<div className="stake-date">
												<div className="stake-days">
													<span className="stake-days-txt">
														10 Days
													</span>
												</div>
												<div className="stake-days">
													<span className="stake-days-txt">
														50 Days
													</span>
												</div>
											</div>
										</div>
										<div className="stake-btn">
											<span className="stake-btn-txt" onClick={openModal}>
												STAKE
											</span>
											<Modal
												isOpen={modalIsOpen}
												onAfterOpen={afterOpenModal}
												onRequestClose={closeModal}
												contentLabel="Example Modal"
												className="modal"
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
														<div className="modal-header">
															Congratulations!
														</div>
														<span className="modal-text">
															Your staking on DIODI INU have been set.
														</span>
													</div>
													<div className="modal-option">
														<div className="modal-btn-green">
															<span className="modal-btn-txt" onClick={closeModal}>
																Continue
															</span>
														</div>
														<div className="modal-btn">
															<span className="modal-btn-txt">
																See Record
															</span>
														</div>
													</div>
												</div>

											</Modal>
										</div>
									</div>
								</div>
							</div>
							<div className="stkconnect-col">
								<div className="stake-header">
									<img
										src={Wallet}
										alt="Wallet"
										className="wallet"
									/>
									<div className="stake-title">
										Staking Account
									</div>
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
														--
													</span>
												</div>
											</div>
											<div className="stake-time-div">
												<div className="stake-time">
													<span className="timer">
														Timer
													</span>
												</div>
												<div className="stake-count">
													<div className="stake-count-in">
														<span className="stake-count-txt">
															--
														</span>
														<span className="stake-count-title">
															Days
														</span>
													</div>
													<div className="stake-count-divider">
														:
													</div>
													<div className="stake-count-in">
														<span className="stake-count-txt">
															--
														</span>
														<span className="stake-count-title">
															Hours
														</span>
													</div>
													<div className="stake-count-divider">
														:
													</div>
													<div className="stake-count-in">
														<span className="stake-count-txt">
															--
														</span>
														<span className="stake-count-title">
															Minutes
														</span>
													</div>
													<div className="stake-count-divider">
														:
													</div>
													<div className="stake-count-in">
														<span className="stake-count-txt">
															--
														</span>
														<span className="stake-count-title">
															Seconds
														</span>
													</div>
												</div>
											</div>
											<div className="stake-red-balance">
												<div className="stake-bal-field">
													<div className="stake-bal-label">
														Redeemable Balance
													</div>
													<span className="stake-bal-amt">
														--
													</span>
												</div>
											</div>
										</div>
										<div className="stake-acc-btn-div">
											<div className="stake-acc-btn">
												<span className="stake-btn-txt">
													RESTAKE
												</span>
											</div>
											<div className="stake-acc-btn">
												<span className="stake-btn-txt">
													CLAIM
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="stkconnect-col">
								<div className="stake-header">
									<img
										src={Wallet}
										alt="Wallet"
										className="wallet"
									/>
									<div className="stake-title">
										Reward
									</div>
								</div>
								<div className="stake-reward">
									<div className="stake-reward-title">
										<span className="stake-reward-txt">
											Here are the records of <br />
											your rewards
										</span>
									</div>
									<div className="stake-records">
										Records
									</div>
									<div className="stake-records-div">
										<span className="stake-record-txt">
											No Record
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="stkcalc">
						<div className="earning">
							<span className="calculate-earnings">
								Calculate Earnings
							</span>
						</div>
						<div className="stk-contract">
							CA: D6NewxS3SPkeEEbvGQax2E4MiCjuvjAhTUkboXZLwKM1
						</div>
						<div className="stk-social-div">
							<div className="stk-social-inner">
								<div className="stk-image-div">
									<img src={Twitter} alt="Twitter" />
								</div>
								<div className="stk-social-name">
									Twitter
								</div>
							</div>
							<div className="stk-social-inner">
								<div className="stk-image-div">
									<img src={Telegram} alt="Telegram"/>
								</div>
								<div className="stk-social-name">
									Telegram
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}