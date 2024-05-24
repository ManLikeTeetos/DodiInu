import "../../styles/Road.css";
// import RoadBg from "../../styles/assets/images/roadmap.png";
import Pilot from "../../styles/assets/images/pilot.png";
import Jet from "../../styles/assets/images/jet.png";
import Plane from "../../styles/assets/images/plane.png";
import Earth from "../../styles/assets/images/earth.png";
import Rocket from "../../styles/assets/images/rocket.png";
import Astro from "../../styles/assets/images/astro.png";


//SVGS
import { ReactComponent as HomeBoy} from "../../styles/assets/vectors/Homeboy.svg";
import { ReactComponent as Hustler} from "../../styles/assets/vectors/hustler.svg";
import { ReactComponent as Gee} from "../../styles/assets/vectors/Gee.svg";
import { ReactComponent as OldGee} from "../../styles/assets/vectors/oldgee.svg";
import { ReactComponent as DOG} from "../../styles/assets/vectors/DOG.svg";
import { ReactComponent as Boss} from "../../styles/assets/vectors/Boss.svg";


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
										<span className="green-color">DODI </span> LAUNCH  <HomeBoy />
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
										HUSTLER <br/>
										(CRYPTO)  <br/>
										<span className="green-color">DODI </span> SHOP <Hustler />
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
										<span className="green-color">DODI </span> Season 1 & 2 <Gee />
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
										<span className="green-color">DODI </span> MUSIC <OldGee/>
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
										<span className="green-color">DODI </span> World Payments <DOG/>
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
										Elon Bezoz <Boss/>
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
										<span className="green-color">DODI </span> LAUNCH  <HomeBoy />
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
										HUSTLER <br/>
										(CRYPTO)  <br/>
										<span className="green-color">DODI </span> SHOP <Hustler />
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
										<span className="green-color">DODI </span> Season 1 & 2 <Gee />
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
										<span className="green-color">DODI </span> MUSIC <OldGee/>
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
										<span className="green-color">DODI </span> World Payments <DOG/>
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
										Elon Bezoz <Boss/>
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