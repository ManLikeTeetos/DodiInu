import { useState, useEffect, createContext } from 'react';
import { BrowserRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Routing from "./components/Routes";
import { ethers } from "ethers";






function App() {
	return (
		<BrowserRouter>
			<div>
				<Routing/>
			</div>
		</BrowserRouter>
	);
}

export default App;
