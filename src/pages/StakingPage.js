import "../styles/WebPage.css";
import Navbar from "./sections/Navbar.js";
import StakingBody from "./sections/StakingBody.js";
import Footer from "./sections/Footer.js";




export default function Staking(){
	return(
		<div className="body">
			<Navbar />
			<StakingBody/>
			<Footer/>
		</div>
	)
}