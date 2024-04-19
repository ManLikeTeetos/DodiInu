import "../../styles/Column.css";
import Dextools from "../../styles/assets/images/Dextools.png"
import CMC from "../../styles/assets/images/cmc.png.png"
import CG from "../../styles/assets/images/coingeko.png"
import Pancake from "../../styles/assets/images/pancakeswap.png"
import Dexscreener from "../../styles/assets/images/dex-screener.png"
import Binance from "../../styles/assets/images/Binance.png"


export default function Column(){
	return(
		<div className="csection">
			<div className="csection-title">
				<span className="green-color"> DODI </span> Community
			</div>
			<div className="csection-media">
				<div className="csection-media-box">
					<div className="csection-media-card">
						<div className="media-img">
							<div className="twitter-png">
							</div>
						</div>
						<div className="media-content">
							<div className="media-title">
								<span className="media-name">
									twitter
								</span>
							</div>
							<div className="media-subtitle">
								<span className="followers">
									25,000+ followers
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="csection-media-box">
					<div className="csection-media-card">
						<div className="media-img">
							<div className="telegram-png">
							</div>
						</div>
						<div className="media-content">
							<div className="media-title">
								<span className="media-name">
									telegram
								</span>
							</div>
							<div className="media-subtitle">
								<span className="followers">
									3,000+ members
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="csection-media-box">
					<div className="csection-media-card">
						<div className="media-img">
							<div className="instagram-png">
							</div>
						</div>
						<div className="media-content">
							<div className="media-title">
								<span className="media-name">
									instagram
								</span>
							</div>
							<div className="media-subtitle">
								<span className="followers">
									COMING SOON
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section">
				<div className="csection-title-uni">
					<span className="green-color"> DODI </span> Universe
				</div>
				<div className="div-columns-4">
					<div className="container-8-col">
						<div className="div-column-23">
							<div className="frame-101">
								<img className="clip-path-group" src={Dextools} alt="Dextools" />
							</div>
							<div className="coin-name">
								Dex<span className="coin-name-light">Tools</span>
							</div>
						</div>
						<div className="div-column-23">
							<img className=" " src={CMC} alt="CMC" />
						</div>
						<div className="div-column-23">
							<img className="clip-path-group" src={CG} alt="CG" />
							<div className="coin-name">
								Coin<span className="coin-name-light">Geko</span>
							</div>
						</div>
					</div>
					<div className="container-2-col">
						<div className="div-column-23">
							<img className="clip-path-group" src={Dexscreener} alt="Dexscreener" />
							<div className="coin-name">
								Dex<span className="coin-name-light">Screener</span>
							</div>
						</div>
						<div className="div-column-23">
							<div className="idt-jyootra-1">
								<img className="clip-path-group" src={Pancake} alt="PancakeSwap" />
							</div>
							<div className="coin-name">
								Pancake<span className="coin-name-light">Swap</span>
							</div>
						</div>
						<div className="div-column-23">
							<img className="clip-path-group" src={Binance} alt="Binance" />
							<div className="coin-name-binance">
								<span>Binance </span>
								<span className="coin-name-light">Smart Chain</span>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}