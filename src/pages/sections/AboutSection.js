import { useState } from "react";
import "../../styles/AboutRem.css";
import AboutDog from "../../styles/assets/images/AboutDog.png";
import AboutDog2 from "../../styles/assets/images/about_dog2.png";
import AboutDog3 from "../../styles/assets/images/about_dog3.png";
import ProblemWidget from "../../styles/assets/images/problem_widget.png";
import Solution2 from "../../styles/assets/images/solution2.png";
import Solution3 from "../../styles/assets/images/solution3.png";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("MISSION"); // State to track active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update active tab when a tab is clicked
  };

  return (
    <div className="about">
      <div className="about-title">
        About
        <span className="green-color"> DODI</span>
      </div>
      <div className="about-segment">
        <div
          className={`about-segment-header ${
            activeTab === "MISSION" ? "active" : ""
          }`}
          onClick={() => handleTabClick("MISSION")}
        >
          MISSION
        </div>
        <div
          className={`about-segment-header ${
            activeTab === "PROBLEM" ? "active" : ""
          }`}
          onClick={() => handleTabClick("PROBLEM")}
        >
          PROBLEM
        </div>
        <div
          className={`about-segment-header ${
            activeTab === "SOLUTION" ? "active" : ""
          }`}
          onClick={() => handleTabClick("SOLUTION")}
        >
          SOLUTION
        </div>
        {/* <div
					className={`about-segment-header ${activeTab === 'GOAL' ? 'active' : ''}`}
					onClick={() => handleTabClick('GOAL')}
				>
					GOAL
				</div> */}
      </div>
      <div className="about-columns">
        {activeTab === "MISSION" && (
          <>
            <div className="about-image-container">
              <div className="about-image-mission"></div>
            </div>
            <div className="about-content-container">
              <div className="about-content-box">
                <div className="about-content-shell">
                  <div className="about-image-column">
                    <img
                      loading="lazy"
                      src={AboutDog}
                      //className="img"
                      alt="about us"
                    />
                  </div>
                  <div className="about-content-column">
                    <div className="about-content-subcolumn">
                      <div className="about-content-title">I AM DODI:</div>
                      <div className="about-content-text">
                        DODI is a Billionaire big DOG we all aspire to be. DODI
                        is the son of DOGE and SHIBA. Follow the story as he
                        unites the DOGLANDS and bring prosperity to all DOGS in
                        the Crypto World.
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-content-box">
                <div className="about-content-shell">
                  <div className="about-image-column">
                    <img
                      loading="lazy"
                      src={AboutDog2}
                      //className="img"
                      alt="about us"
                    />
                  </div>
                  <div className="about-content-column">
                    <div className="about-content-subcolumn">
                      <div className="about-content-title">
                        ALL DOGS UNITED:
                      </div>
                      <div className="about-content-text">
                        DODI and his crew, DROID, ELANA, and DOGA unite other
                        great Dogs, FLOKI, BONK, AKITA, and MYRO, as they fight
                        the Empire of ZANGA to free all DOGS from misfortunes.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-content-box">
                  <div className="about-content-shell">
                    <div className="about-image-column">
                      <img
                        loading="lazy"
                        src={AboutDog3}
                        //className="img"
                        alt="about us"
                      />
                    </div>
                    <div className="about-content-column">
                      <div className="about-content-subcolumn">
                        <div className="about-content-title">THE DOGLANDS:</div>
                        <div className="about-content-text">
                          Join DODI on his mission as we explore the exciting
                          stories of conquest and triumph as he saves the
                          DOGLAND Cities of NEON, CANINE, SOLAN and DOGOPOLIS
                          from the Cartels and Rug pullers while maintaining
                          prosperity for all DOGS (Crypto Hustlers)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {activeTab === "PROBLEM" && (
          <>
            <div className="about-image-container">
              <div className="about-image-problem"></div>
            </div>
            <div className="about-content-container">
              <div className="about-content-box">
                <div className="about-content-shell">
                  <div className="about-image-column">
                    <img
                      loading="lazy"
                      src={AboutDog}
                      //className="img"
                      alt="about us"
                    />
                  </div>
                  <div className="about-content-column">
                    <div className="about-content-subcolumn">
                      <div className="about-content-title">THE SYSTEM:</div>
                      <div className="about-content-text">
                        The Matrix is designed for all DOGS and other Animals in
                        the Crypto World to keep competing against each other.
                        As we fight for profits, they collect fees. Pump and
                        dumps keep Rekting many DOGS, while few pack other DOGS
                        money, as they call it trading.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-content-box">
                <div className="about-content-shell">
                  <div className="about-image-column">
                    <img
                      loading="lazy"
                      src={ProblemWidget}
                      //className="img"
                      alt="about us"
                    />
                  </div>
                  <div className="about-content-column">
                    <div className="about-content-subcolumn">
                      <div className="about-content-title">THE CARTELS:</div>
                      <div className="about-content-text">
                        The whole Crypto World is plagued with Criminals,
                        Scammers, Rug pullers, Shitcoin Shillers. The DOGS have
                        had enough. DODI is here to direct the fortunes of all
                        in DOGLANDS by defeating the evil EMPIRE of ZANGA and
                        its ruler, General GANDOZA.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-content-box">
                  <div className="about-content-shell">
                    <div className="about-image-column">
                      <img
                        loading="lazy"
                        src={AboutDog3}
                        //className="img"
                        alt="about us"
                      />
                    </div>
                    <div className="about-content-column">
                      <div className="about-content-subcolumn">
                        <div className="about-content-title">Your GREED:</div>
                        <div className="about-content-text">
                          The Crypto World is risky because all Animals, the
                          DOGS, Cats, Frogs, Cows, etc.{" "}
                          <span className="green-color">
                            {" "}
                            We All Gonna Make It.{" "}
                          </span>
                          Yes, but without organization and collaboration, very
                          few win and the rest are losing. DODI, the Great Son
                          of DOGE & SHIBA is here with better solutions for all.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {activeTab === "SOLUTION" && (
          <>
            <div className="about-image-container">
              <div className="about-image-solution"></div>
            </div>
            <div className="about-content-container">
              <div className="about-content-box">
                <div className="about-content-shell">
                  <div className="about-image-column">
                    <img
                      loading="lazy"
                      src={AboutDog}
                      //className="img"
                      alt="about us"
                    />
                  </div>
                  <div className="about-content-column">
                    <div className="about-content-subcolumn">
                      <div className="about-content-title">
                        UNIFY & COLLABORATE:
                      </div>
                      <div className="about-content-text">
                        It has become clear to DODI that all DOGS in the Crypto
                        World are being used. They keep shilling nonsense
                        shitcoins, pumps $$ dumps. Follow DODI as he unites all
                        DOGLAND cities and get DOGS to collaborate and win
                        together.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-content-box">
                <div className="about-content-shell">
                  <div className="about-image-column">
                    <img
                      loading="lazy"
                      src={Solution2}
                      //className="img"
                      alt="about us"
                    />
                  </div>
                  <div className="about-content-column">
                    <div className="about-content-subcolumn">
                      <div className="about-content-title">
                        SEGMENTED EXIT PROTOCOL (SEP):
                      </div>
                      <div className="about-content-text">
                        $DODI's efficient exit management prevents chaos and
                        maintains stability. Just as 20 people trying to leave a
                        hall simultaneously would cause chaos, or a bank would
                        crash if all customers withdrew funds at once, the SEP
                        (Segmented Exit Protocol) manages exit times for DOGS
                        staking $DODI. This prevents sudden price drops and
                        ensures $DODI remains scarce, thus supporting its price.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-content-box">
                  <div className="about-content-shell">
                    <div className="about-image-column">
                      <img
                        loading="lazy"
                        src={Solution3}
                        //className="img"
                        alt="about us"
                      />
                    </div>
                    <div className="about-content-column">
                      <div className="about-content-subcolumn">
                        <div className="about-content-title">
                          TIME LEVERAGING:
                        </div>
                        <div className="about-content-text">
                          Everything happens in time. Get rich quick doesn't
                          work. 100X and 1000X happens but with time. No need of
                          jumping from one shitcoin to another, wanting
                          overnight success, meanwhile losing money steady. Join
                          DODI and lets get it right. Buy $DODI, stake and earn
                          daily.{" "}
                          <span className="green-color">
                            {" "}
                            We All Gonna Make It.{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* {activeTab === 'GOAL' && (
					<>
						<div className="about-image-container">
							<div className="about-image-goal">
							</div>
						</div>
						<div className="about-content-container">
							<div className="about-content-box">
								<div className="about-content-shell">
									<div className="about-image-column">
										<img
											loading="lazy"
											src={AboutDog}
											//className="img"
											alt="about us"
										/>
									</div>
									<div className="about-content-column">
										<div className="about-content-subcolumn">
											<div className="about-content-title">
												Goal
											</div>
											<div className="about-content-text">
												Lorem ipsum dolor sit amet consectetur. Egestas tempus vitae
												lorem urna luctus amet leo at. Commodo mattis nisl.  <br />
											</div>
											</div>
										</div>
									</div>
							</div>
							<div className="about-content-box">
								<div className="about-content-shell">
									<div className="about-image-column">
										<img
											loading="lazy"
											src={AboutDog2}
											//className="img"
											alt="about us"
										/>
									</div>
									<div className="about-content-column">
										<div className="about-content-subcolumn">
											<div className="about-content-title">
												Goal
											</div>
											<div className="about-content-text">
												Lorem ipsum dolor sit amet consectetur. Egestas tempus vitae
												lorem urna luctus amet leo at. Commodo mattis nisl.  <br />
											</div>
											</div>
										</div>
									</div>
									<div className="about-content-box">
								<div className="about-content-shell">
									<div className="about-image-column">
										<img
											loading="lazy"
											src={AboutDog3}
											//className="img"
											alt="about us"
										/>
									</div>
									<div className="about-content-column">
										<div className="about-content-subcolumn">
											<div className="about-content-title">
												Goal
											</div>
											<div className="about-content-text">
												Lorem ipsum dolor sit amet consectetur. Egestas tempus vitae
												lorem urna luctus amet leo at. Commodo mattis nisl.  <br />
											</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				)} */}
      </div>
      <a
        className="about-buy-button"
        href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x5211674146FCaD8F4C34dE6bcb60f8C5940D2182"
        target="_blank"
        rel="noreferrer"
      >
        BUY $DODI
      </a>
    </div>
  );
}
