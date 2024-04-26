import React from "react";
import "../../styles/Footer.css";
import DodiLogo from '../../styles/assets/images/Dodilogo.svg';
import Twitter from '../../styles/assets/images/footer_twitter.png';
import Telegram from '../../styles/assets/images/footer-telegram.png';
import Discord from '../../styles/assets/images/footer_discord.png';


export default function Footer(){
	return(
		<div className="footer-footer">
			<div className="footer-div-columnmargin-3">
				<div className="footer-frame-95">
					<img className="footer-logo-diodi-inu-3" src={DodiLogo} alt="Dodi" />
					<p className="footer-dodi-inu">
						<span className="green-color"> DODI </span><span> INU </span>
					</p>
				</div>
				<div className="footer-div-buttons">
					<div className="footer-linkmargin">
						<img className="footer-icon" src={Twitter} alt="Twitter" />
					</div>
					<div className="footer-linkmargin">
						<img className="footer-icon" src={Telegram} alt="Telegram" />
					</div>
					<div className="footer-linkmargin">
						<img className="footer-icon" src={Discord} alt="Discord" />
					</div>
				</div>
				<div className="footer-p">
					<span className="footer-content">
						Lorem ipsum dolor sit amet consectetur. Sed ac quis euismod vivamus et vitae a cras. Velit pharetra bibendum magnis mauris in luctus viverra blandit mollis.
					</span>
				</div>
			</div>
			<div className="footer-div-columnmargin-4">
				<div className="footer-div-column-13">
					<div className="footer-psubtitle-4">
						<span className="footer-community">
							Community
						</span>
					</div>
					<div className="footer-list">
						<div className="footer-item">
							<span className="footer-link-xtwitter">
								X (Twitter)
							</span>
						</div>
						<div className="footer-item">
							<span className="footer-link-telegram">
								Telegram
							</span>
						</div>
						<div className="footer-item">
							<span className="footer-link-discord">
								Instagram
							</span>
						</div>
					</div>
				</div>
				<div className="footer-div-column-14">
					<div className="footer-psubtitle-5">
						<span className="footer-external">
							External
						</span>
					</div>
					<div className="footer-list-1">
						<div className="footer-item">
							<span className="footer-link-coin-gecko">
								CoinGecko
							</span>
						</div>
						<div className="footer-item">
							<span className="footer-link-coin-market-cap">
								Coin Market Cap
							</span>
						</div>
						<div className="footer-item">
							<span className="footer-link-defi-llama">
								Defi Llama
							</span>
						</div>
						<div className="footer-item">
							<span className="footer-link-yield-yak-analytics">
								DODI Analytics
							</span>
						</div>
					</div>
				</div>
				<div className="footer-div-column-15">
					<div className="footer-psubtitle-6">
						<span className="footer-developers">
							Developers
						</span>
					</div>
					<div className="footer-list-2">
						<div className="footer-item">
							<span className="footer-link-docs">
								Docs
							</span>
						</div>
						<div className="footer-item">
							<span className="footer-link-brand-assets">
								Brand Assets
							</span>
						</div>
					</div>
				</div>
				<div className="footer-div-column-16">
					<div className="footer-psubtitle-7">
						<span className="footer-beginners">
							Beginners
						</span>
					</div>
					<div className="footer-list-3">
						<div className="footer-item">
							<span className="footer-link-intro-to-yy-you-tube">
								What is DODI(YouTube)
							</span>
						</div>
						<div className="footer-item">
							<span className="footer-what-is-staking">
								What is Staking?
							</span>
						</div>
						<div className="footer-item">
							<span className="footer-link-docs-1">
								Docs
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}