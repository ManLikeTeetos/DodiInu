import { useState } from "react";
import "../../styles/AboutRem.css";
import AboutDog from "../../styles/assets/images/AboutDog.png";
import AboutDog2 from "../../styles/assets/images/about_dog2.png";
import AboutDog3 from "../../styles/assets/images/about_dog3.png";
import ProblemWidget from "../../styles/assets/images/problem_widget.png";
import Solution2 from "../../styles/assets/images/solution2.png";
import Solution3 from "../../styles/assets/images/solution3.png";



export default function AboutSection(){
	const [activeTab, setActiveTab] = useState('MISSION'); // State to track active tab

	const handleTabClick = (tab) => {
		setActiveTab(tab); // Update active tab when a tab is clicked
	};


	return(
			  <div className="about">
			<div className="about-title">
				About
				<span className="green-color">  DODI</span>
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
				{/* <div
					className={`about-segment-header ${activeTab === 'GOAL' ? 'active' : ''}`}
					onClick={() => handleTabClick('GOAL')}
				>
					GOAL
				</div> */}
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
												I AM DODI:
											</div>
											<div className="about-content-text">
												DODI is a Billionaire big DOG we all aspire to be. 
												DODI is the son of DOGE and SHIBA. Follow the story 
												as he unites the DOGLANDS and bring prosperity to all dogs in the crypto world.<br />
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
												ALL DOGS UNITED:
											</div>
											<div className="about-content-text">
												DODI and his crew, DROID, ELANA, and DOGA unite other great Dogs, FLOKI, BONK, AKITA, and MYRO, 
												as they fight the Empire of ZANGA to free all DOGS from misfortunes.
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
												THE DOGLANDS:
											</div>
											<div className="about-content-text">
												Join DODI on his mission as we explore the exciting stories 
												of conquest and triumph as he saves the DOGLAND Cities of 
												NEON, CANINE, SOLAN and DOGOPOLIS from the Cartels 
												and Rug pullers while maintaining prosperity for all DOGS (Crypto Hustlers)
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
											src={ProblemWidget}
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
											src={Solution2}
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
											src={Solution3}
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
				{/* {activeTab === 'GOAL' && (
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
											src={AboutDog2}
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
											src={AboutDog3}
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
				)} */}
			</div>
			<div className="about-buy-button">
				BUY $DODI
			</div>
	   </div>

	)
}
