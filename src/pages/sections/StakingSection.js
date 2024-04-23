import { useState } from "react";
import "../../styles/StakingRem.css";
import StakingDog from "../../styles/assets/images/staking1.png";
import StakingDog2 from "../../styles/assets/images/staking2.png";
import StakingDog3 from "../../styles/assets/images/staking3.png";


export default function StakingSection(){
	const [activeTab, setActiveTab] = useState('HOW IT WORKS'); // State to track active tab

	const handleTabClick = (tab) => {
		setActiveTab(tab); // Update active tab when a tab is clicked
	};

	return(
		<div className="staking">
			<div className="staking-title">
				Staking
				<span className="green-color">  DODI</span>
			</div>
			<div className="staking-segment">
				<div
					className={`staking-segment-header ${activeTab === 'HOW IT WORKS' ? 'active' : ''}`}
					onClick={() => handleTabClick('HOW IT WORKS')}
				>
					HOW IT WORKS
				</div>
				<div
					className={`staking-segment-header ${activeTab === 'REWARDS' ? 'active' : ''}`}
					onClick={() => handleTabClick('REWARDS')}
				>
					REWARDS
				</div>
			</div>
			<div className="staking-columns">
				{activeTab === 'HOW IT WORKS' && (
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
												How it Works
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
												How it Works
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
													How it Works
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
							<div className="staking-image-how"></div>
						</div>
					</>
				)}

				{activeTab === 'REWARDS' && (
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
				)}


			</div>
			<div className="staking-buy-button">
				BUY $DODI
			</div>
		</div>
	)
}