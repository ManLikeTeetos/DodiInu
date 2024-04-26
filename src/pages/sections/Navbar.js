import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DodiLogo from '../../styles/assets/images/Dodilogo.svg';
import NavIcon from '../../styles/assets/images/NavbarIcon.png';
import Cancel from '../../styles/assets/images/modal_cancel.png';
import Metamask from '../../styles/assets/images/metamask.png';
import WalletConnect from '../../styles/assets/images/walletconnect.png'
import TrustWallet from '../../styles/assets/images/trustwallet.png';
import Modal from 'react-modal';
import { ethers } from "ethers";




const colorStyle = {
	color: {
		r: 230,
		g: 230,
		b: 230,
		a: 1
	}
};


const customStyle = {
	overlay: {
		background: 'transparent'
	}
}



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


	//Modal
	let subtitle;
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setShowMenu(false);
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		//subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}



	///Metamask connect
	const [data, setdata] = useState({
		address: "",
		Balance: 0.0,
	});

	// Button handler button for handling a
	// request event for metamask
	const btnhandler = () => {
		// Asking if metamask is already present or not
		if (window.ethereum) {
			// res[0] for fetching a first wallet
			window.ethereum
				.request({ method: "eth_requestAccounts" })
				.then((res) =>
					accountChangeHandler(res[0])
				);
		} else {
			alert("install metamask extension!!");
		}
	};

	// getbalance function for getting a balance in
	// a right format with help of ethers
	const getbalance = (address) => {
		// Requesting balance method
		window.ethereum
			.request({
				method: "eth_getBalance",
				params: [address, "latest"],
			})
			.then((balance) => {
				// Setting balance
				setdata({
					Balance:
						ethers.utils.formatEther(balance),
						address: address
				});

				alert("Wallet connected successfully!!")

				setIsOpen(false);
			});
	};

	// Function for getting handling all events
	const accountChangeHandler = (account) => {
		// Setting an address data
		setdata({
			address: account,
		});

		// Setting a balance
		getbalance(account);
	};

	 console.log(3, data);
	// alert(data.address);


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
							{data.address === "" && (
								<div className="div-11">
									<span onClick={openModal}> Connect Wallet</span>
								</div>
							)}
							{data.address !== "" && (
								// <div className="div-11">
								// 	<span>{data.address}</span>
								// </div>

								<div className="connected">
									<div className="eth">
										<span className="eth-amt">{data.Balance}</span>ETH
									</div>
									<div className="connect-add">
										<div className="add-text">
											{data.address}
										</div>
										<div className="eth-logo">
										</div>
									</div>
								</div>
							)}

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
							{data.address === "" && (
								<div className="div-11">
									<span onClick={openModal}> Connect Wallet</span>
								</div>
							)}
							{data.address !== "" && (
								// <div className="div-11">
								// 	<span>{data.address}</span>
								// </div>

								<div className="connected">
									<div className="eth">
										<span className="eth-amt">{data.Balance}</span>ETH
									</div>
									<div className="connect-add">
										<div className="add-text">
											{data.address}
										</div>
										<div className="eth-logo">
										</div>
									</div>
								</div>
							)}

						</div>
					</div>
				)}
				<Modal
					isOpen={modalIsOpen}
					onAfterOpen={afterOpenModal}
					onRequestClose={closeModal}
					contentLabel="Example Modal"
					className="modal"
					style={customStyle}
				>
					<div className="modal-nav-body">
						<div className="modal-nav-desc">
							<div className="modal-nav-inner-desc">
								<div className="modal-nav-header">
									Connect wallet
								</div>
								<span className="modal-nav-text">
									Please select a wallet and connect to <span className="green-color"> DODI</span> DApp.
								</span>
							</div>
							<div className="modal-nav-cancel">
								<img src={Cancel} alt="Cancel" onClick={closeModal} />
							</div>
						</div>
						<div className="modal-nav-option">
							<button className="modal-nav-box" onClick={btnhandler}>
								<div className="modal-nav-img">
									<img src={Metamask} alt="Metamask" className="modal-nav-inner-img" />
								</div>
								<span className="modal-nav-opttxt">
									Metamask
								</span>
							</button>
							<button className="modal-nav-box">
								<div className="modal-nav-img">
									<img src={TrustWallet} alt="TrustWallet" className="modal-nav-inner-img" />
								</div>
								<span className="modal-nav-opttxt">
									Trust Wallet
								</span>
							</button>
							<button className="modal-nav-box">
								<div className="modal-nav-img">
									<img src={WalletConnect} alt="Wallet Connect" className="modal-nav-inner-img" />
								</div>
								<span className="modal-nav-opttxt">
									Wallet Connect
								</span>
							</button>
						</div>
						{/* <div className="modal-nav-cert">

								<input type="checkbox" name="certify" id="certify" className="modal-nav-check"/>
								<div className="modal-nav-content">
								I certify that i have read and accept the Terms of Use and Privacy Notice.
								</div>
						</div> */}
					</div>

				</Modal>
			</div>
		</>
	)
}