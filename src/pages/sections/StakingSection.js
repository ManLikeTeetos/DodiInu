import "../../styles/StakingRem.css";
import stakingDog from "../../styles/assets/images/AboutDog.png";

export default function StakingSection(){
	return(
		<div className="staking">
			<div className="staking-title">
				Staking
				<span className="green-color">  DODI</span>
			</div>
			<div className="staking-segment">
				<div className="staking-segment-header">HOW IT WORKS</div>
				<div className="staking-segment-header">REWARDS</div>
			</div>
			<div className="staking-columns">
				<div className="staking-content-container">
					<div className="staking-content-box">
						<div className="staking-content-shell">
							<div className="staking-image-column">
								<img
									loading="lazy"
									src={stakingDog}
									//className="img"
									alt="staking us"
								/>
							</div>
							<div className="staking-content-column">
								<div className="staking-content-subcolumn">
									<div className="staking-content-title">
										About Us
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
									src={stakingDog}
									//className="img"
									alt="staking us"
								/>
							</div>
							<div className="staking-content-column">
								<div className="staking-content-subcolumn">
									<div className="staking-content-title">
										About Us
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
										src={stakingDog}
										//className="img"
										alt="staking us"
									/>
								</div>
								<div className="staking-content-column">
									<div className="staking-content-subcolumn">
										<div className="staking-content-title">
											About Us
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
					<div className="staking-image"></div>
				</div>
			</div>
			<div className="staking-buy-button">
				BUY DODI
			</div>
		</div>
	)
}