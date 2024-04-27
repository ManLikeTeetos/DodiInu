import "../../styles/Road.css";
// import RoadBg from "../../styles/assets/images/roadmap.png";
import Vector42 from "../../styles/assets/vectors/Vector 4.png";
import Vector1 from "../../styles/assets/vectors/Vector 1.png";
import Vector2 from "../../styles/assets/vectors/Vector 2.png";
import Vector3 from "../../styles/assets/vectors/Vector 3.png";

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
					<span className="roadtitle"> Road Map </span>
					{/* <span className="road-subtitle">
						Lorem ipsum dolor sit amet consectetur. Nullam in diam cursus purus vitae lectus a.
						Egestas arcu convallis morbi leo quis velit.
						Dis ut faucibus senectus enim quam ac bibendum porttitor. Mattis eget.
					</span> */}
				</div>
				<div className="road-graph-desktop">
					<div className="frame-118">
						<div className="frame-129">
							<img className="vector-4" src={Vector42} alt="Vector"/>
						</div>
						<div className="road-map-content">
							<div className="road-date">
								Jan 20th 2024
							</div>
							<span className="road-map-title">
								Lorem ipsum dolor sit amet consectetur.
							</span>
						</div>
						<div className="frame-116">
						</div>
						<div className="container-8">
							<div className="frame-126">
								<img className="vector-1" src={Vector1} alt="Vector" />
								<div className="road-map-content-down">
									<div className="road-date">
										Jan 20th 2024
									</div>
									<span className="road-map-title">
										Lorem ipsum dolor sit amet consectetur.
									</span>
								</div>
							</div>
							<div className="frame-127">
								<img className="vector-3" src={Vector3} alt="Vector" />
								<div className="road-map-content-down">
									<div className="road-date">
										Jan 20th 2024
									</div>
									<span className="road-map-title">
										Lorem ipsum dolor sit amet consectetur.
									</span>
								</div>


							</div>
						</div>
						<div className="ellipse-9">
						</div>
						<div className="ellipse-17">
						</div>
						<div className="ellipse-12">
						</div>
						<div className="ellipse-14">
						</div>
						<div className="ellipse-15">
						</div>
						<div className="ellipse-16">
						</div>
						<div className="frame-128">
							<div className="frame-122">
								<div className="road-date">
									Jan 20th 2024
								</div>
								<span className="road-map-title">
									Lorem ipsum dolor sit amet consectetur.
								</span>
							</div>
							<img className="vector-2" src={Vector2} alt="Vector" />
						</div>
					</div>
				</div>

				<div className="road-graph-mobile">
					<div className="container-12">
						<div className="frame-142">
							<div className="frame-1281">
								<div className="road-date">
									Jan 20th 2024
								</div>
								<span className="road-map-title">
									Lorem ipsum dolor sit amet consectetur.
								</span>
							</div>
							<div>
								<img src={Vector7_2} alt="Vector" />
							</div>
						</div>
						<div className="frame-141">
							<div className="frame-128-mobile">
								<div className="road-date">
									Jan 20th 2024
								</div>
								<span className="road-map-title">
									Lorem ipsum dolor sit amet consectetur.
								</span>
							</div>
							<div>
								<img src={Vector6} alt="Vector" />
							</div>
						</div>
					</div>
					<div className="frame-118">
						<div className="frame-116">
						</div>
						<div className="ellipse-9">
						</div>
						<div className="ellipse-17">
						</div>
						<div className="ellipse-12">
						</div>
						<div className="ellipse-14">
						</div>
						<div className="ellipse-15">
						</div>
						<div className="ellipse-16">
						</div>
					</div>
					<div className="container-16">
						<div className="frame-139">
							<div className="road-date">
								Jan 20th 2024
							</div>
							<div className="container-1">
								<img className="vector-7" src={Vector7} alt="Vector" />
								<div className="road-map-title">
									Lorem ipsum dolor sit amet consectetur.
								</div>
							</div>
						</div>
						<div className="frame-140">
							<div className="road-date">
								Jan 20th 2024
							</div>
							<div className="container-2">
								<img className="vector-71" src={Vector7_4} alt="Vector" />
								<div className="road-map-title">
									Lorem ipsum dolor sit amet consectetur.
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}