// import React from "react";
// import Countdown from "react-countdown";

// const CountDown = ({ duration }) => {
//   const renderer = ({ days, hours, minutes, seconds, completed }) => {
//     // Render a countdown
//     return (
//       <div className="stake-count">
//         <div className="stake-count-in">
//           <span className="stake-count-txt">{completed ? 0 : days}</span>
//           <span className="stake-count-title">Days</span>
//         </div>
//         <div className="stake-count-divider">:</div>
//         <div className="stake-count-in">
//           <span className="stake-count-txt">{completed ? 0 : hours}</span>
//           <span className="stake-count-title">Hours</span>
//         </div>
//         <div className="stake-count-divider">:</div>
//         <div className="stake-count-in">
//           <span className="stake-count-txt">{completed ? 0 : minutes}</span>
//           <span className="stake-count-title">Minutes</span>
//         </div>
//         <div className="stake-count-divider">:</div>
//         <div className="stake-count-in">
//           <span className="stake-count-txt">{completed ? 0 : seconds}</span>
//           <span className="stake-count-title">Seconds</span>
//         </div>
//       </div>
//     );
//   };

//   const dataTime = duration ? duration * 1000 : Date.now() - 5000;

//   return <Countdown date={dataTime} renderer={renderer} />;
// };


import React, { useState, useEffect } from "react";

const CountDown = ({ duration }) => {
	let time = 0;
	if(duration > 0){
		time = duration;
	}
	const [timeRemaining, setTimeRemaining] = useState(time);

	//console.log(44, time);

	useEffect(() => {
		setTimeRemaining(Math.floor(time));
	}, [time]);

	useEffect(() => {
		if (timeRemaining > 0) {
			const intervalId = setInterval(() => {
				setTimeRemaining(prevTime => prevTime - 1);
			}, 1000);

			return () => clearInterval(intervalId);
		}
	}, [timeRemaining]);

	const days = Math.floor(timeRemaining / (3600 * 24));
	const hours = Math.floor((timeRemaining % (3600 * 24)) / 3600);
	const minutes = Math.floor((timeRemaining % 3600) / 60);
	const seconds = Math.floor(timeRemaining % 60);

	return (
		<div className="stake-count">
			<div className="stake-count-in">
				<span className="stake-count-txt">{timeRemaining <= 0 ? 0 : days}</span>
				<span className="stake-count-title">Days</span>
			</div>
			<div className="stake-count-divider">:</div>
			<div className="stake-count-in">
				<span className="stake-count-txt">{timeRemaining <= 0 ? 0 : hours}</span>
				<span className="stake-count-title">Hours</span>
			</div>
			<div className="stake-count-divider">:</div>
			<div className="stake-count-in">
				<span className="stake-count-txt">{timeRemaining <= 0 ? 0 : minutes}</span>
				<span className="stake-count-title">Minutes</span>
			</div>
			<div className="stake-count-divider">:</div>
			<div className="stake-count-in">
				<span className="stake-count-txt">{timeRemaining <= 0 ? 0 : seconds}</span>
				<span className="stake-count-title">Seconds</span>
			</div>
		</div>
	);
};

export default CountDown;


