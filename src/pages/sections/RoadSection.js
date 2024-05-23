import "../../styles/Road.css";
// import RoadBg from "../../styles/assets/images/roadmap.png";
import Pilot from "../../styles/assets/images/pilot.png";
import Jet from "../../styles/assets/images/jet.png";
import Plane from "../../styles/assets/images/plane.png";
import Earth from "../../styles/assets/images/earth.png";
import Rocket from "../../styles/assets/images/rocket.png";
import Astro from "../../styles/assets/images/astro.png";

//mobile
import Vector7 from "../../styles/assets/vectors/Vector 7.png";
import Vector7_2 from "../../styles/assets/vectors/Vector 72.png";
import Vector6 from "../../styles/assets/vectors/Vector 6.png";
import Vector7_4 from "../../styles/assets/vectors/Vector 74.png";

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
										(DEGEN)
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
										HUSTLER(CRYPTO)  <br/>
										<span className="green-color">DODI </span> SHOP
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
										GEE(G)  <br/>
										<span className="green-color">DODI </span> Season 1 & 2
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
										OLD GEE(O.G)  <br/>
										<span className="green-color">DODI </span> MUSIC
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
										DOUBLE OLD GEE(D.O.G)  <br/>
										<span className="green-color">DODI </span> World Payments
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
										BOSS (<span className="green-color"> DODI </span>)  <br/>
										Elon Bezoz
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
										(DEGEN)
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
										HUSTLER(CRYPTO)  <br/>
										<span className="green-color">DODI </span> SHOP
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
										GEE(G)  <br/>
										<span className="green-color">DODI </span> Season 1 & 2
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
										OLD GEE(O.G)  <br/>
										<span className="green-color">DODI </span> MUSIC
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
										DOUBLE OLD GEE(D.O.G)  <br/>
										<span className="green-color">DODI </span> World Payments
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
										BOSS (<span className="green-color"> DODI </span>)  <br/>
										Elon Bezoz
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