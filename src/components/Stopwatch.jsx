import React, { useState, useEffect } from "react";
import "./Stopwatch.css";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="stopwatch-container">
      <h2 className="stopwatch-title">Stopwatch</h2>

      <div className="time-display">
        {seconds} <span>Seconds</span>
      </div>

      <div className="button-group">
        <button className="start-btn" onClick={() => setIsRunning(true)}>
          Start
        </button>
        <button className="stop-btn" onClick={() => setIsRunning(false)}>
          Stop
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            setIsRunning(false);
            setSeconds(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}