import React from "react";
import "../../styles/Footer.css";
import DodiLogo from '../../styles/assets/images/Dodilogo.svg';
import Twitter from '../../styles/assets/images/footer_twitter.png';
import Telegram from '../../styles/assets/images/footer-telegram.png';
import Instagram from '../../styles/assets/images/instagram_footer.png';
import YouTube from '../../styles/assets/images/youtube_footer.png';


///External links
const TelegramLink = "https://t.me/DodiinuCoin";
const TwitterLink = "https://x.com/Dodi_Inu?s=09";
const YoutubeLink = " https://www.youtube.com/@DODIINUWORLD";
const InstagramLink  = "https://www.instagram.com/dodi.inu/";


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
					<a className="footer-linkmargin" href={TwitterLink} target="_blank" rel="noreferrer">
						<img className="footer-icon" src={Twitter} alt="Twitter" />
					</a>
					<a className="footer-linkmargin" href={TelegramLink} target="_blank" rel="noreferrer">
						<img className="footer-icon" src={Telegram} alt="Telegram" />
					</a>
					<a className="footer-linkmargin" href={InstagramLink} target="_blank" rel="noreferrer">
						<img className="footer-icon" src={Instagram} alt="Discord" />
					</a>
					<a className="footer-linkmargin" href={YoutubeLink} target="_blank" rel="noreferrer">
						<img className="footer-icon" src={YouTube} alt="Youtube" />
					</a>
				</div>
				<div className="footer-p">
					<span className="footer-content">
						Decentralized Game for DOGS fed up with nonsense 
						Shitcoins out there. This is for Fun and Entertainment purposes only. 
						$DODI Token is Useless and only Valuable to the DOGS in Cryptoverse.
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
							<a className="footer-link-xtwitter" href={TwitterLink} target="_blank" rel="noreferrer">
								X (Twitter)
							</a>
						</div>
						<div className="footer-item">
							<a className="footer-link-telegram" href={TelegramLink} target="_blank" rel="noreferrer">
								Telegram
							</a>
						</div>
						<div className="footer-item">
						    <a className="footer-link-telegram" href={InstagramLink} target="_blank" rel="noreferrer">
								Instagram
							</a>
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
								Bird Eye
							</span>
						</div>
					</div>
				</div>
				<div className="footer-div-column-15">
					<div className="footer-psubtitle-6">
						<span className="footer-developers">
							Brand Assets
						</span>
					</div>
					<div className="footer-list-2">
						<div className="footer-item">
							<span className="footer-link-docs">
								<span className="green-color">DODI</span> Shop
							</span>
						</div>
						<div className="footer-item">
							<span className="footer-link-docs">
								<span className="green-color">DODI</span> Music
							</span>
						</div>
						<div className="footer-item">
							<span className="footer-link-docs">
								 Youtube
							</span>
						</div>
					</div>
				</div>
				{/* <div className="footer-div-column-16">
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
				</div> */}
			</div>
		</div>
	)
}