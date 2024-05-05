import React from "react";
import Countdown from "react-countdown";

const CountDown = ({ duration }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    // Render a countdown
    return (
      <div className="stake-count">
        <div className="stake-count-in">
          <span className="stake-count-txt">{completed ? 0 : days}</span>
          <span className="stake-count-title">Days</span>
        </div>
        <div className="stake-count-divider">:</div>
        <div className="stake-count-in">
          <span className="stake-count-txt">{completed ? 0 : hours}</span>
          <span className="stake-count-title">Hours</span>
        </div>
        <div className="stake-count-divider">:</div>
        <div className="stake-count-in">
          <span className="stake-count-txt">{completed ? 0 : minutes}</span>
          <span className="stake-count-title">Minutes</span>
        </div>
        <div className="stake-count-divider">:</div>
        <div className="stake-count-in">
          <span className="stake-count-txt">{completed ? 0 : seconds}</span>
          <span className="stake-count-title">Seconds</span>
        </div>
      </div>
    );
  };

  const dataTime = duration ? duration * 1000 : Date.now() - 5000;

  return <Countdown date={dataTime} renderer={renderer} />;
};

export default CountDown;
