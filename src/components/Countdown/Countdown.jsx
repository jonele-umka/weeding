// src/components/Countdown.js
import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-09-19T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="countdown">
      <div className="time-box">
        <div className="time">{timeLeft.days || "0"}</div>
        <div className="label">Дни</div>
      </div>
      <div className="time-box">
        <div className="time">{timeLeft.hours || "0"}</div>
        <div className="label">Часы</div>
      </div>
      <div className="time-box">
        <div className="time">{timeLeft.minutes || "0"}</div>
        <div className="label">Минуты</div>
      </div>
      <div className="time-box">
        <div className="time">{timeLeft.seconds || "0"}</div>
        <div className="label">Секунды</div>
      </div>
    </div>
  );
};

export default Countdown;
