import { useState } from "react";
import "../../styles/AboutRem.css";
import AboutDog from "../../styles/assets/images/AboutDog.png";
import AboutDog2 from "../../styles/assets/images/about_dog2.png";
import AboutDog3 from "../../styles/assets/images/about_dog3.png";

export default function AboutSection(){
	const [activeTab, setActiveTab] = useState('MISSION'); // State to track active tab

	const handleTabClick = (tab) => {
		setActiveTab(tab); // Update active tab when a tab is clicked
	};


	return(
			  <div className="about">
			<div className="about-title">
				About
				<span className="green-color">  $DODI</span>
			</div>
			<div className="about-segment">
				<div
					className={`about-segment-header ${activeTab === 'MISSION' ? 'active' : ''}`}
					onClick={() => handleTabClick('MISSION')}
				>
					MISSION
				</div>
				<div
					className={`about-segment-header ${activeTab === 'PROBLEM' ? 'active' : ''}`}
					onClick={() => handleTabClick('PROBLEM')}
				>
					PROBLEM
				</div>
				<div
					className={`about-segment-header ${activeTab === 'SOLUTION' ? 'active' : ''}`}
					onClick={() => handleTabClick('SOLUTION')}
				>
					SOLUTION
				</div>
				<div
					className={`about-segment-header ${activeTab === 'GOAL' ? 'active' : ''}`}
					onClick={() => handleTabClick('GOAL')}
				>
					GOAL
				</div>
			</div>
			<div className="about-columns">
				{activeTab === 'MISSION' && (
					<>
						<div className="about-image-container">
							<div className="about-image-mission">
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
												Mission
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
											src={AboutDog2}
											//className="img"
											alt="about us"
										/>
									</div>
									<div className="about-content-column">
										<div className="about-content-subcolumn">
											<div className="about-content-title">
												Mission
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
											src={AboutDog3}
											//className="img"
											alt="about us"
										/>
									</div>
									<div className="about-content-column">
										<div className="about-content-subcolumn">
											<div className="about-content-title">
												Mission
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
					</>
				)}
				{activeTab === 'PROBLEM' && (
					<>
						<div className="about-image-container">
							<div className="about-image-problem">
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
												Problem
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
											src={AboutDog2}
											//className="img"
											alt="about us"
										/>
									</div>
									<div className="about-content-column">
										<div className="about-content-subcolumn">
											<div className="about-content-title">
												Problem
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
											src={AboutDog3}
											//className="img"
											alt="about us"
										/>
									</div>
									<div className="about-content-column">
										<div className="about-content-subcolumn">
											<div className="about-content-title">
												Problem
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
					</>
				)}
				{activeTab === 'SOLUTION' && (
					<>
						<div className="about-image-container">
							<div className="about-image-solution">
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
												Solution
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
											src={AboutDog2}
											//className="img"
											alt="about us"
										/>
									</div>
									<div className="about-content-column">
										<div className="about-content-subcolumn">
											<div className="about-content-title">
												Solution
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
											src={AboutDog3}
											//className="img"
											alt="about us"
										/>
									</div>
									<div className="about-content-column">
										<div className="about-content-subcolumn">
											<div className="about-content-title">
												Solution
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
					</>
				)}
				{activeTab === 'GOAL' && (
					<>
						<div className="about-image-container">
							<div className="about-image-goal">
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
												Goal
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
												Goal
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
												Goal
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
					</>
				)}
			</div>
			<div className="about-buy-button">
				BUY $DODI
			</div>
	   </div>

	)
}
