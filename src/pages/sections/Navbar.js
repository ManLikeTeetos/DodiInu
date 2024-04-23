import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DodiLogo from '../../styles/assets/images/Dodilogo.svg';
import NavIcon from '../../styles/assets/images/NavbarIcon.png';
const colorStyle = {
	color: {
		r: 230,
		g: 230,
		b: 230,
		a: 1
	}
};



export default function Navbar(){

		const [showMenu, setShowMenu] = useState(false); // State to track if the menu is open

		const handleMenuClick = () => {
			setShowMenu(!showMenu); // Toggle the menu visibility on click
		};

	const location = useLocation();

	// Define a function to determine the active class based on the current pathname
	const getClassName = (path) => {
		return location.pathname === path ? 'active' : '';
	};

	return(
		<>
			<div className="header-desktop">
				<div className="div-2">
					<div className="column">
						<div className="div-3">
							<img
								loading="lazy"
								src={DodiLogo}
								className="img"
								alt="Dodi Logo"
							/>
							<div className="div-4">
								<span className="green-color">DODI </span>INU
							</div>
						</div>
					</div>
					<div className="column-2">
						<div className="div-5">
							<Link className={`div-6 ${getClassName('/')}`} to="/">Home</Link>
							<Link className={`div-6 ${getClassName('/staking')}`} to="/staking">Staking</Link>
							<div className="div-8">White paper</div>
						</div>
					</div>
					<div className="column-3">
						<div className="div-9">
							<div className="div-10">BUY $DODI</div>
							<div className="div-11">Connect Wallet</div>
						</div>
					</div>
				</div>
			</div>
			<div className="header-mobile">
				<div className="div-2">
					<div className="column">
						<div className="div-3">
							<img loading="lazy" src={DodiLogo} className="img" alt="Dodi Logo" />
							<div className="div-4">
								<span className="green-color">DODI </span>INU
							</div>
						</div>
					</div>
					<div className="column-2">
						{/* Hamburger menu icon (positioned to the right) */}
						<div onClick={handleMenuClick}>
							<img
								loading="lazy"
								src={NavIcon}
								alt="hamburger"
							/>
						</div>
					</div>
				</div>
				{/* Navigation links (conditionally rendered based on showMenu state) */}
				{showMenu && (
					<div className="nav-menu">
						<div className='nav-wrapper'>
							<Link className={`nav-text ${getClassName('/')}`} to="/">Home</Link>
							<Link className={`nav-text ${getClassName('/staking')}`} to="/staking">Staking</Link>
							<div className="nav-text">White paper</div>
							<div className="div-10">BUY $DODI</div>
							<div className="div-11">Connect Wallet</div>
						</div>
					</div>
				)}
			</div>
		</>
	)
}