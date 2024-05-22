import React, { useState, useEffect } from "react";

const CountDown = ({ duration, className }) => {
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

			if (timeRemaining === 1) {
				// Refresh the page when countdown reaches zero
				window.location.reload();
			}

			return () => clearInterval(intervalId);
		}
	}, [timeRemaining]);

	const days = Math.floor(timeRemaining / (3600 * 24));
	const hours = Math.floor((timeRemaining % (3600 * 24)) / 3600);
	const minutes = Math.floor((timeRemaining % 3600) / 60);
	const seconds = Math.floor(timeRemaining % 60);

	return (
		<div className={`stake-count ${className}`}>
			<div className={`stake-count-in ${className}`}>
				<span className={`stake-count-txt ${className}`}>{timeRemaining <= 0 ? 0 : days}</span>
				<span className={`stake-count-title ${className}`}>Days</span>
			</div>
			<div className={`stake-count-divider ${className}`}>:</div>
			<div className="stake-count-in">
				<span className={`stake-count-txt ${className}`}>{timeRemaining <= 0 ? 0 : hours}</span>
				<span className={`stake-count-title ${className}`}>Hours</span>
			</div>
			<div className={`stake-count-divider ${className}`}>:</div>
			<div className="stake-count-in">
				<span className={`stake-count-txt ${className}`}>{timeRemaining <= 0 ? 0 : minutes}</span>
				<span className={`stake-count-title ${className}`}>Minutes</span>
			</div>
			<div className={`stake-count-divider ${className}`}>:</div>
			<div className="stake-count-in">
				<span className={`stake-count-txt ${className}`}>{timeRemaining <= 0 ? 0 : seconds}</span>
				<span className={`stake-count-title ${className}`}>Seconds</span>
			</div>
		</div>
	);
};

export default CountDown;


