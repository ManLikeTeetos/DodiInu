import "../../styles/Column.css";
import BirdEyeLogo from "../../styles/assets/images/birdeye_logo.png";
import DexLogo from "../../styles/assets/images/dex.jpeg";

import CMC from "../../styles/assets/images/cmc.png.png";
import CG from "../../styles/assets/images/coingeko.png";
import Pancake from "../../styles/assets/images/pancakeswap.png";
import Dexscreener from "../../styles/assets/images/dex-screener.png";
import Binance from "../../styles/assets/images/Binance.png";

///External links
const TelegramLink = "https://t.me/DodiinuCoin";
const TwitterLink = "https://x.com/Dodi_Inu?s=09";
const YoutubeLink = "https://www.youtube.com/@DODIINUWORLD";
const InstagramLink = "https://www.instagram.com/dodi.inu/";

export default function Column() {
  return (
    <div className="csection">
      <div className="csection-title">
        <span className="green-color"> DODI </span> Community
      </div>
      <div className="csection-media">
        <a href={TwitterLink} target="_blank" rel="noreferrer">
          <div className="csection-media-box">
            <div className="csection-media-card">
              <div className="media-img">
                <div className="twitter-png"></div>
              </div>
              <div className="media-content">
                <div className="media-title">
                  <span className="media-name">twitter</span>
                </div>
                {/* <div className="media-subtitle">
									<span className="followers">
										25,000+ followers
									</span>
								</div> */}
              </div>
            </div>
          </div>
        </a>

        <a href={TelegramLink} target="_blank" rel="noreferrer">
          <div className="csection-media-box">
            <div className="csection-media-card">
              <div className="media-img">
                <div className="telegram-png"></div>
              </div>
              <div className="media-content">
                <div className="media-title">
                  <span className="media-name">telegram</span>
                </div>
                {/* <div className="media-subtitle">
								<span className="followers">
									3,000+ members
								</span>
							</div> */}
              </div>
            </div>
          </div>
        </a>

        <a href={InstagramLink} target="_blank" rel="noreferrer">
          <div className="csection-media-box">
            <div className="csection-media-card">
              <div className="media-img">
                <div className="instagram-png"></div>
              </div>
              <div className="media-content">
                <div className="media-title">
                  <span className="media-name">instagram</span>
                </div>
                {/* <div className="media-subtitle">
									<span className="followers">
										COMING SOON
									</span>
								</div> */}
              </div>
            </div>
          </div>
        </a>

        <a href={YoutubeLink} target="_blank" rel="noreferrer">
          <div className="csection-media-box">
            <div className="csection-media-card">
              <div className="media-img">
                <div className="youtube-png"></div>
              </div>
              <div className="media-content">
                <div className="media-title">
                  <span className="media-name">Youtube</span>
                </div>
                {/* <div className="media-subtitle">
									<span className="followers">
										COMING SOON
									</span>
								</div> */}
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="section">
        <div className="csection-title-uni">
          <span className="green-color"> DODI </span> Universe
        </div>
        <div className="container-8-col grid-3-2">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://birdeye.so/token/0x5211674146FCaD8F4C34dE6bcb60f8C5940D2182/0x628aB3618c27Ef45D1273ac355aD20B3483Bb952?chain=bsc"
            className="div-column-23"
          >
            <div className="frame-101">
              <img
                className="clip-path-group"
                src={BirdEyeLogo}
                alt="Birdeye"
              />
            </div>
            <div className="coin-name">
              Bird<span className="coin-name-light">eye</span>
            </div>
          </a>

          <a
            href="https://www.dextools.io/app/en/bnb/pair-explorer/0x628ab3618c27ef45d1273ac355ad20b3483bb952?t=1718202201056"
            className="div-column-23"
            target="_blank"
            rel="noreferrer"
          >
            <div className="frame-101">
              <img className="clip-path-group" src={DexLogo} alt="Dextools" />
            </div>
            <div className="coin-name">
              DEX<span className="coin-name-light">Tools</span>
            </div>
          </a>

          {/* <div className="div-column-23">
            <img className=" " src={CMC} alt="CMC" />
          </div> */}
          <div href="#" className="div-column-23">
            <img className="clip-path-group" src={CG} alt="CG" />
            <div className="coin-name">
              Coin<span className="coin-name-light">Gecko</span>
            </div>
          </div>

          <a
            href="https://dexscreener.com/bsc/0x628ab3618c27ef45d1273ac355ad20b3483bb952"
            className="div-column-23"
          >
            <img
              className="clip-path-group"
              src={Dexscreener}
              alt="Dexscreener"
            />
            <div className="coin-name">
              Dex<span className="coin-name-light">Screener</span>
            </div>
          </a>
          <a
            href="https://pancakeswap.finance/swap?inputCurrency=0x5211674146FCaD8F4C34dE6bcb60f8C5940D2182&outputCurrency=0x55d398326f99059fF775485246999027B3197955"
            className="div-column-23"
          >
            <div className="idt-jyootra-1">
              <img
                className="clip-path-group"
                src={Pancake}
                alt="PancakeSwap"
              />
            </div>
            <div className="coin-name">
              Pancake<span className="coin-name-light">Swap</span>
            </div>
          </a>

          <a
            href="https://bscscan.com/token/0x5211674146FCaD8F4C34dE6bcb60f8C5940D2182"
            target="_blank"
            className="div-column-23"
            rel="noreferrer"
          >
            <img className="clip-path-group" src={Binance} alt="Binance" />
            <div className="coin-name-binance">
              <span>Binance </span>
              <span className="coin-name-light">Smart Chain</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
