import { Route, Routes } from 'react-router-dom';
import LandingPage from "../pages/WebPage"
import StakingPage from "../pages/StakingPage"


export default function Routing(){
	return(
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/staking" element={<StakingPage />} />
		</Routes>
	)
}