import "../../styles/Road.css";
// import RoadBg from "../../styles/assets/images/roadmap.png";
import Pilot from "../../styles/assets/images/pilot.png";
import Jet from "../../styles/assets/images/jet.png";
import Plane from "../../styles/assets/images/plane.png";
import Earth from "../../styles/assets/images/earth.png";
import Rocket from "../../styles/assets/images/rocket.png";
import Astro from "../../styles/assets/images/astro.png";


//SVGS
import { ReactComponent as RocketEmoji} from "../../styles/assets/vectors/rocket.svg";
import { ReactComponent as Graph} from "../../styles/assets/vectors/graph.svg";
import { ReactComponent as BlueDress} from "../../styles/assets/vectors/blue_dress.svg";
import { ReactComponent as PinkDress} from "../../styles/assets/vectors/pink_dress.svg";
import { ReactComponent as Video} from "../../styles/assets/vectors/video.svg";
import { ReactComponent as Tele} from "../../styles/assets/vectors/tele.svg";
import { ReactComponent as HeadPhones} from "../../styles/assets/vectors/headphones.svg";
import { ReactComponent as Guitar} from "../../styles/assets/vectors/guitar.svg";
import { ReactComponent as EarthEmoji} from "../../styles/assets/vectors/earth.svg";
import { ReactComponent as Phone} from "../../styles/assets/vectors/phone.svg";
import { ReactComponent as Money} from "../../styles/assets/vectors/money.svg";
import { ReactComponent as Heart} from "../../styles/assets/vectors/heart.svg";


export default function Road(){
	return(
		<div className="roadmap">
			<div className="inner-road">
				<div className="road-content">
					<span className="roadtitle"> <span className="green-color">Road</span> Map </span>
					{/* <span className="road-subtitle">
						Lorem ipsum dolor sit amet consectetur. Nullam in diam cursus purus vitae lectus a.
						Egestas arcu convallis morbi leo quis velit.
						Dis ut faucibus senectus enim quam ac bibendum porttitor. Mattis eget.
					</span> */}
				</div>
				<div className="road-graph-desktop">
					<div className="frame-118">

						<div className="frame-116">
						</div>
						<div className="container-8">
							<div className="frame-126">
								<img className="road-graph-img" src={Pilot} alt="Pilot" />
								<div className="road-map-content-down">
									<div className="road-date">
										HOME BOY <br/>
										(DEGEN) <br/>
										<div className="road-emoji"><RocketEmoji /><span classname="emoji-text"><span className="green-color">DODI </span> LAUNCH </span><Graph /> </div>
									</div>
									<span className="road-map-title">
										<span className="green-color"> DODI </span> Community <br/>
										3,000
									</span>
								</div>
							</div>
							<div className="frame-126">
								<img className="road-graph-img" src={Jet} alt="Pilot" />
								<div className="road-map-content-down">
									<div className="road-date">
										CRYPTO <br/>
										(HUSTLER)  <br/>
										<div className="road-emoji"><BlueDress /><span className="emoji-text"><span className="green-color">DODI </span> SHOP </span> <PinkDress/></div>
									</div>
									<span className="road-map-title">
									<span className="green-color"> DODI </span> Community <br/>
										10,000
									</span>
								</div>
							</div>
							<div className="frame-126">
								<img className="road-graph-img" src={Plane} alt="Pilot" />
								<div className="road-map-content-down">
									<div className="road-date">
										GEE <br/>
										(G) <br/>
										<div className="road-emoji"><Video /> <span className="emoji-text"><span className="green-color">DODI </span> Season 1 & 2 </span><Tele/></div>
									</div>
									<span className="road-map-title">
										<span className="green-color"> DODI </span> Community <br/>
										50,000
									</span>
								</div>
							</div>
							<div className="frame-126">
								<img className="road-graph-img" src={Earth} alt="Pilot" />
								<div className="road-map-content-down">
									<div className="road-date">
										OLD GEE <br/>
										(O.G)  <br/>
										<div className="road-emoji"><HeadPhones/><span className="emoji-text"><span className="green-color">DODI </span> MUSIC </span><Guitar/></div>
									</div>
									<span className="road-map-title">
										<span className="green-color"> DODI </span> Community <br/>
										100,000
									</span>
								</div>
							</div>
							<div className="frame-126">
								<img className="road-graph-img" src={Rocket} alt="Pilot" />
								<div className="road-map-content-down">
									<div className="road-date">
										DOUBLE OLD GEE <br/>
										(D.O.G)  <br/>
										<div className="road-emoji"><EarthEmoji/><span className="emoji-text"><span className="green-color">DODI </span> World Payments </span> <Phone/></div>
									</div>
									<span className="road-map-title">
										<span className="green-color"> DODI </span> Community <br/>
										500,000
									</span>
								</div>
							</div>
							<div className="frame-126">
								<img className="road-graph-img" src={Astro} alt="Pilot" />
								<div className="road-map-content-down">
									<div className="road-date">
										BOSS <br/>
										(<span className="green-color"> DODI </span>)  <br/>
										<div className="road-emoji"><Money/><span className="emoji-text">ELON BEZOS</span><Heart/></div>
									</div>
									<span className="road-map-title">
										<span className="green-color"> DODI </span> Community <br/>
										1,000,000
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="road-graph-mobile">

					<div className="frame-118">
						<div className="frame-116">
						</div>
					</div>
					<div className="container-8">
						<div className="frame-126">
							<img className="road-graph-img" src={Pilot} alt="Pilot" />
							<div className="road-map-content-down">
								<div className="road-date">
								        HOME BOY <br/>
										(DEGEN) <br/>
										<div className="road-emoji"><RocketEmoji /><span classname="emoji-text"><span className="green-color">DODI </span> LAUNCH </span><Graph /> </div>
								</div>
								<span className="road-map-title">
										<span className="green-color"> DODI </span> Community  <br/>
										3,000
								</span>
							</div>
						</div>
						<div className="frame-126">
							<img className="road-graph-img" src={Jet} alt="Pilot" />
							<div className="road-map-content-down">
								<div className="road-date">
										CRYPTO <br/>
										(HUSTLER)  <br/>
										<div className="road-emoji"><BlueDress /><span className="emoji-text"><span className="green-color">DODI </span> SHOP </span> <PinkDress/></div>
								</div>
								<span className="road-map-title">
									<span className="green-color"> DODI </span> Community <br/>
										10,000
									
								</span>
							</div>
						</div>
						<div className="frame-126">
							<img className="road-graph-img" src={Plane} alt="Pilot" />
							<div className="road-map-content-down">
								<div className="road-date">
										GEE <br/>
										(G)  <br/>
										<div className="road-emoji"><Video /> <span className="emoji-text"><span className="green-color">DODI </span> Season 1 & 2 </span><Tele/></div>
								</div>
								<span className="road-map-title">
										<span className="green-color"> DODI </span> Community <br/>
										50,000
								</span>
							</div>
						</div>
						<div className="frame-126">
							<img className="road-graph-img" src={Earth} alt="Pilot" />
							<div className="road-map-content-down">
								<div className="road-date">
										OLD GEE <br/>
										(O.G)  <br/>
										<div className="road-emoji"><HeadPhones/><span className="emoji-text"><span className="green-color">DODI </span> MUSIC </span><Guitar/></div>
								</div>
								<span className="road-map-title">
									<span className="green-color"> DODI </span> Community <br/>
										100,000
								</span>
							</div>
						</div>
						<div className="frame-126">
							<img className="road-graph-img" src={Rocket} alt="Pilot" />
							<div className="road-map-content-down">
								<div className="road-date">
										DOUBLE OLD GEE <br/>
										(D.O.G)  <br/>
										<div className="road-emoji"><EarthEmoji/><span className="emoji-text"><span className="green-color">DODI </span> World Payments </span> <Phone/></div>
								</div>
								<span className="road-map-title">
									<span className="green-color"> DODI </span> Community <br/>
										500,000
								</span>		
							</div>
						</div>
						<div className="frame-126">
							<img className="road-graph-img" src={Astro} alt="Pilot" />
							<div className="road-map-content-down">
								<div className="road-date">
										BOSS <br/>
										(<span className="green-color"> DODI </span>)  <br/>
										<div className="road-emoji"><Money/><span className="emoji-text">ELON BEZOS</span><Heart/></div>
								</div>
								<span className="road-map-title">
										<span className="green-color"> DODI </span> Community <br/>
										1,000,000
								</span>
							</div>
						</div>
					</div>

				</div>

			</div>
		</div>
	)
}