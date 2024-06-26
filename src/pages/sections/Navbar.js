import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

///Assets
import DodiLogo from "../../styles/assets/images/Dodilogo.svg";
import NavIcon from "../../styles/assets/images/NavbarIcon.png";
import Cancel from "../../styles/assets/images/modal_cancel.png";
import Metamask from "../../styles/assets/images/metamask.png";
import WalletConnectImg from "../../styles/assets/images/walletconnect.png";
import TrustWallet from "../../styles/assets/images/trustwallet.png";
import Disconnect from "../../styles/assets/images/disconnect.svg";

///Web3
import Modal from "react-modal";
import { ethers } from "ethers";
import MetaMaskSDK from "@metamask/sdk";
import { useWeb3React } from "@web3-react/core";
import {
  injected,
  walletconnect,
  resetWalletConnector,
  walletlink,
} from "../../Helpers/connectors";
import { Web3Provider } from "@ethersproject/providers";
import Web3 from "web3";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const colorStyle = {
  color: {
    r: 230,
    g: 230,
    b: 230,
    a: 1,
  },
};

const customStyle = {
  overlay: {
    background: "transparent",
  },
};

export default function Navbar() {
  const mounted = useRef(false); // Define the mounted ref

  const [showMenu, setShowMenu] = useState(false); // State to track if the menu is open

  const handleMenuClick = () => {
    setShowMenu(!showMenu); // Toggle the menu visibility on click
  };

  const location = useLocation();

  // Define a function to determine the active class based on the current pathname
  const getClassName = (path) => {
    return location.pathname === path ? "active" : "";
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

  //Metamask mobile
  new MetaMaskSDK({
    useDeeplink: false,
    communicationLayerPreference: "socket",
  });

  let storedData = localStorage.getItem("userdata");
  let initialState;
  if (storedData) {
    initialState = JSON.parse(storedData);
  } else {
    initialState = {
      address: "",
      // Balance: 0.0,
    };
  }

  const [userdata, setUserdata] = useState(initialState);

  const { account, library, activate, deactivate } = useWeb3React();

  // // get balance ethereum
  // const getbalance = (address) => {
  // 	// Requesting balance method
  // 	window.ethereum
  // 		.request({
  // 			method: "eth_getBalance",
  // 			params: [address, "latest"],
  // 		})
  // 		.then((balance) => {
  // 			// Setting balance
  // 			setUserdata({
  // 				Balance:ethers.formatEther(balance),
  // 				address: address
  // 			});
  // 			setIsOpen(false);
  // 		});
  // };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data

    setUserdata({
      address: account,
    });

    // Setting a balance
    //getbalance(account);
  };

  //web3react metamask
  const connectMetamaskSimple = async () => {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  };

  const WalletConnect = new WalletConnectConnector({
    rpcUrl: "https://mainnet.infura.io/v3/c6b3393bb7db40f5b35952f0bb021f3b",
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
  });

  useEffect(() => {
    // Check if account is not empty
    if (account && !mounted.current) {
      mounted.current = true; // Set mounted to true
      accountChangeHandler(account);
    }
  }, [account]);

  useEffect(() => {
    // Check if userdata is present in localStorage
    const userinfo = JSON.parse(localStorage.getItem("userdata"));
    if (userinfo) {
      //alert("connected");
      // If userdata is present, don't show alert and don't run accountChangeHandler
      return;
    }

    // If userdata is not present, check if userdata.address and userdata.Balance are both truthy
    if (userdata.address !== "") {
      localStorage.setItem("userdata", JSON.stringify(userdata));
      // alert("Wallet connected successfully!!");
      setIsOpen(false);
    }
  }, [userdata]);

  async function handleDisconnect() {
    await deactivate();
    localStorage.removeItem("provider");
    localStorage.removeItem("userdata");
  }

  return (
    <>
      <div className="header-desktop">
        <div className="div-2">
          <div className="column">
            <Link className="div-3" to="/">
              <img
                loading="lazy"
                src={DodiLogo}
                className="img"
                alt="Dodi Logo"
              />
              <div className="div-4">
                <span className="green-color">DODI </span>INU
              </div>
            </Link>
          </div>
          <div className="column-2">
            <div className="div-5">
              <Link className={`div-6 ${getClassName("/")}`} to="/">
                Home
              </Link>
              <Link
                className={`div-6 ${getClassName("/staking")}`}
                to="/staking"
              >
                Staking
              </Link>
              <div className="div-8">
                <a
                  style={{ color: "#e6e6e6" }}
                  href="/DODI-Whitepaper.pdf"
                  download
                  target="_blank"
                >
                  White paper
                </a>
              </div>
            </div>
          </div>
          <div className="column-3">
            <div className="div-9">
              <a
                style={{ color: "#fff" }}
                target="_blank"
                href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x5211674146FCaD8F4C34dE6bcb60f8C5940D2182"
              >
                <div className="div-10">BUY $DODI</div>
              </a>
              {userdata.address === "" && (
                <div className="div-11">
                  <span onClick={openModal}> Connect Wallet</span>
                </div>
              )}
              {userdata.address !== "" && (
                // <div className="div-11">
                // 	<span>{data.address}</span>
                // </div>

                <div className="connected">
                  <div className="eth" onClick={handleDisconnect}>
                    <img src={Disconnect} alt="Disconnect" />
                  </div>
                  <div className="connect-add">
                    <div className="add-text">{userdata.address}</div>
                    <div className="eth-logo"></div>
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
            <Link className="div-3" to="/">
              <img
                loading="lazy"
                src={DodiLogo}
                className="img"
                alt="Dodi Logo"
              />
              <div className="div-4">
                <span className="green-color">DODI </span>INU
              </div>
            </Link>
          </div>
          <div className="column-2">
            {/* Hamburger menu icon (positioned to the right) */}
            <div onClick={handleMenuClick}>
              <img loading="lazy" src={NavIcon} alt="hamburger" />
            </div>
          </div>
        </div>
        {/* Navigation links (conditionally rendered based on showMenu state) */}
        {showMenu && (
          <div className="nav-menu">
            <div className="nav-wrapper">
              <Link className={`nav-text ${getClassName("/")}`} to="/">
                Home
              </Link>
              <Link
                className={`nav-text ${getClassName("/staking")}`}
                to="/staking"
              >
                Staking
              </Link>
              <div className="nav-text">
                <a
                  style={{ color: "#e6e6e6" }}
                  href="/DODI-Whitepaper.pdf"
                  download
                  target="_blank"
                >
                  White paper
                </a>
              </div>
              <a
                style={{ color: "#fff" }}
                target="_blank"
                href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x5211674146FCaD8F4C34dE6bcb60f8C5940D2182"
              >
                <div className="div-10">BUY $DODI</div>
              </a>
              {userdata.address === "" && (
                <div className="div-11">
                  <span onClick={openModal}> Connect Wallet</span>
                </div>
              )}
              {userdata.address !== "" && (
                // <div className="div-11">
                // 	<span>{data.address}</span>
                // </div>

                <div className="connected">
                  <div className="eth" onClick={handleDisconnect}>
                    <img src={Disconnect} alt="Disconnect" />
                  </div>
                  <div className="connect-add">
                    <div className="add-text">{userdata.address}</div>
                    <div className="eth-logo"></div>
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
                <div className="modal-nav-header">Connect Wallet</div>
                <span className="modal-nav-text">
                  Please select a wallet and connect to{" "}
                  <span className="green-color"> DODI</span> DApp.
                </span>
              </div>
              <div className="modal-nav-cancel">
                <img src={Cancel} alt="Cancel" onClick={closeModal} />
              </div>
            </div>
            <div className="modal-nav-option">
              <button className="modal-nav-box" onClick={connectMetamaskSimple}>
                <div className="modal-nav-img">
                  <img
                    src={Metamask}
                    alt="Metamask"
                    className="modal-nav-inner-img"
                  />
                </div>
                <span className="modal-nav-opttxt">Metamask</span>
              </button>
              <button className="modal-nav-box">
                <div className="modal-nav-img">
                  <img
                    src={TrustWallet}
                    alt="TrustWallet"
                    className="modal-nav-inner-img"
                  />
                </div>
                <span className="modal-nav-opttxt">Trust Wallet</span>
              </button>
              <button
                className="modal-nav-box"
                onClick={() => {
                  activate(WalletConnect);
                }}
              >
                <div className="modal-nav-img">
                  <img
                    src={WalletConnectImg}
                    alt="Wallet Connect"
                    className="modal-nav-inner-img"
                  />
                </div>
                <span className="modal-nav-opttxt">Wallet Connect</span>
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
  );
}
