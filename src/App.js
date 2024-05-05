import { useState, useEffect, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Routing from "./components/Routes";
import { ethers } from "ethers";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import MetamaskProvider from "./providers/matamask";

function App() {
  const getLibrary = (provider) => {
    const library = new Web3Provider(provider, "any");
    library.pollingInterval = 15000;
    return library;
  };

  return (
    <BrowserRouter>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetamaskProvider>
          <div>
            <Routing />
          </div>
        </MetamaskProvider>
      </Web3ReactProvider>
    </BrowserRouter>
  );
}

export default App;
