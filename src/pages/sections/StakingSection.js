import { useState } from "react";
import "../../styles/StakingRem.css";
import StakingDog from "../../styles/assets/images/staking1.png";
import StakingDog2 from "../../styles/assets/images/staking2.png";
import StakingDog3 from "../../styles/assets/images/staking3.png";
import { Link } from "react-router-dom";

export default function StakingSection() {
  const [activeTab, setActiveTab] = useState("HOW IT WORKS"); // State to track active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update active tab when a tab is clicked
  };

  return (
    <div className="staking">
      <div className="staking-title">
        Staking
        <span className="green-color"> DODI</span>
      </div>
      <div className="staking-segment">
        <div
          className={`staking-segment-header ${
            activeTab === "HOW IT WORKS" ? "active" : ""
          }`}
          onClick={() => handleTabClick("HOW IT WORKS")}
        >
          HOW IT WORKS
        </div>
        {/* <div
					className={`staking-segment-header ${activeTab === 'REWARDS' ? 'active' : ''}`}
					onClick={() => handleTabClick('REWARDS')}
				>
					REWARDS
				</div> */}
      </div>
      <div className="staking-columns">
        {activeTab === "HOW IT WORKS" && (
          <>
            <div className="staking-content-container">
              <div className="staking-content-box">
                <div className="staking-content-shell">
                  <div className="staking-image-column">
                    <img
                      loading="lazy"
                      src={StakingDog}
                      //className="img"
                      alt="staking us"
                    />
                  </div>
                  <div className="staking-content-column">
                    <div className="staking-content-subcolumn">
                      <div className="staking-content-title">BUY $DODI:</div>
                      <div className="staking-content-text">
                        Connect your wallet on Metamask, click on the Buy $DODI
                        and get to Birdeye. Ensure your wallet is connected,
                        then swap USDT for $DODI
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="staking-content-box">
                <div className="staking-content-shell">
                  <div className="staking-image-column">
                    <img
                      loading="lazy"
                      src={StakingDog2}
                      //className="img"
                      alt="staking us"
                    />
                  </div>
                  <div className="staking-content-column">
                    <div className="staking-content-subcolumn">
                      <div className="staking-content-title">STAKE $DODI:</div>
                      <div className="staking-content-text">
                        Staking $DODI helps keep $DODI scarce, thereby
                        increasing its value for holders. Stake $DODI, your
                        tokens are locked for 50 days, while you earn $DODI
                        daily.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="staking-content-box">
                  <div className="staking-content-shell">
                    <div className="staking-image-column">
                      <img
                        loading="lazy"
                        src={StakingDog3}
                        //className="img"
                        alt="staking us"
                      />
                    </div>
                    <div className="staking-content-column">
                      <div className="staking-content-subcolumn">
                        <div className="staking-content-title">
                          RELAX & EARN $DODI:
                        </div>
                        <div className="staking-content-text">
                          Earn $DODI daily from the transaction tax earned from
                          buying or selling of $DODI. 100% of the tax is
                          redistributed to holders who staked $DODI, great
                          source of earning passive income.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="staking-image-container">
              <div className="staking-image-how"></div>
            </div>
          </>
        )}

        {/* {activeTab === 'REWARDS' && (
					<>
						<div className="staking-content-container">
							<div className="staking-content-box">
								<div className="staking-content-shell">
									<div className="staking-image-column">
										<img
											loading="lazy"
											src={StakingDog}
											//className="img"
											alt="staking us"
										/>
									</div>
									<div className="staking-content-column">
										<div className="staking-content-subcolumn">
											<div className="staking-content-title">
												Rewards
											</div>
											<div className="staking-content-text">
												Lorem ipsum dolor sit amet consectetur. Egestas tempus vitae
												lorem urna luctus amet leo at. Commodo mattis nisl.<br />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="staking-content-box">
								<div className="staking-content-shell">
									<div className="staking-image-column">
										<img
											loading="lazy"
											src={StakingDog2}
											//className="img"
											alt="staking us"
										/>
									</div>
									<div className="staking-content-column">
										<div className="staking-content-subcolumn">
											<div className="staking-content-title">
												Rewards
											</div>
											<div className="staking-content-text">
												Lorem ipsum dolor sit amet consectetur. Egestas tempus vitae
												lorem urna luctus amet leo at. Commodo mattis nisl.<br />
											</div>
										</div>
									</div>
								</div>
								<div className="staking-content-box">
									<div className="staking-content-shell">
										<div className="staking-image-column">
											<img
												loading="lazy"
												src={StakingDog3}
												//className="img"
												alt="staking us"
											/>
										</div>
										<div className="staking-content-column">
											<div className="staking-content-subcolumn">
												<div className="staking-content-title">
													Rewards
												</div>
												<div className="staking-content-text">
													Lorem ipsum dolor sit amet consectetur. Egestas tempus vitae
													lorem urna luctus amet leo at. Commodo mattis nisl.<br />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="staking-image-container">
							<div className="staking-image-reward"></div>
						</div>
					</>
				)} */}
      </div>
      <Link to="/staking" className="staking-buy-button">
        STAKE $DODI
      </Link>
    </div>
  );
}
