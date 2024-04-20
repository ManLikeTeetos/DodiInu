import "../../styles/StakingBody.css"
import Trophy from "../../styles/assets/images/trophy.png"
import Twitter from "../../styles/assets/images/twitter_stake.png"
import Telegram from "../../styles/assets/images/telegram_stake.png"


export default function StakingBody(){
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
									<span className="stk-green-color">DIODI</span><span>3,069,702</span>
								</div>
							</div>
							<div className="stk-earn-frame">
								<div className="stkearn-num">
									<div className="stk-lok-heading">
										Total Earned
									</div>
									<div className="stk-lok-text">
										<span className="stk-green-color">DIODI</span><span>3,069,702</span>
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
							</div>
							<div className="stkconnect-col">
							</div>
							<div className="stkconnect-col">
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