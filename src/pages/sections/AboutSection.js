import "../../styles/AboutRem.css";
import AboutDog from "../../styles/assets/images/AboutDog.png";

export default function AboutSection(){
	return(
			  <div className="about">
			<div className="about-title">
				About
				<span className="green-color">  DODI</span>
			</div>
			<div className="about-segment">
				<div className="about-segment-header">MISSION</div>
				<div className="about-segment-header">PROBLEM</div>
				<div className="about-segment-header">SOLUTION</div>
				<div className="about-segment-header">GOAL</div>
			</div>
			<div className="about-columns">
				<div className="about-image-container">
					  <div className="about-image">
					  </div>
				</div>
				<div className="about-content-container">
					<div className="about-content-box">
						<div className="about-content-shell">
							<div className="about-image-column">
								  <img
									  loading="lazy"
									  src={AboutDog}
									  //className="img"
									  alt="about us"
								  />
							</div>
							  <div className="about-content-column">
								<div className="about-content-subcolumn">
									<div className="about-content-title">
										About Us
									</div>
									<div className="about-content-text">
										Lorem ipsum dolor sit amet consectetur. Egestas tempus vitae
										lorem urna luctus amet leo at. Commodo mattis nisl.  <br />
									</div>
									</div>
								</div>
							</div>
					</div>
					<div className="about-content-box">
						<div className="about-content-shell">
							<div className="about-image-column">
								  <img
									  loading="lazy"
									  src={AboutDog}
									  //className="img"
									  alt="about us"
								  />
							</div>
							<div className="about-content-column">
								<div className="about-content-subcolumn">
									<div className="about-content-title">
										About Us
									</div>
									<div className="about-content-text">
										Lorem ipsum dolor sit amet consectetur. Egestas tempus vitae
										lorem urna luctus amet leo at. Commodo mattis nisl.  <br />
									</div>
									</div>
								</div>
							</div>
							<div className="about-content-box">
						<div className="about-content-shell">
							<div className="about-image-column">
								  <img
									  loading="lazy"
									  src={AboutDog}
									  //className="img"
									  alt="about us"
								  />
							</div>
							<div className="about-content-column">
								<div className="about-content-subcolumn">
									<div className="about-content-title">
										About Us
									</div>
									<div className="about-content-text">
										Lorem ipsum dolor sit amet consectetur. Egestas tempus vitae
										lorem urna luctus amet leo at. Commodo mattis nisl.  <br />
									</div>
									</div>
								</div>
							</div>
					</div>
					</div>
				</div>
			</div>
			<div className="about-buy-button">
				BUY DODI
			</div>
	   </div>

	)
}
