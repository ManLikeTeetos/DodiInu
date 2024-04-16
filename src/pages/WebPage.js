import "../styles/WebPage.css";
import "../styles/Hero.css";
import "../styles/StakingRem.css";
import AboutSection from "./sections/AboutSection.js";
import StakingSection from "./sections/StakingSection.js";
import Navbar from "./sections/Navbar.js";
import HeroSection from "./sections/HeroSection.js";
import TokenSection from "./sections/TokenSection.js";
import PopularSection from "./sections/PopularSection.js";
import RoadSection from "./sections/RoadSection.js";

function WebPage(){
  return(
	<div className="body">
		<Navbar/>
		<HeroSection/>
		<AboutSection/>
		<StakingSection/>
		<TokenSection/>
		<PopularSection/>
		<RoadSection/>
	</div>
  )
}

export default WebPage;
