import React from 'react';
import './Timer.css';

interface TimerProps {
  timeLeft: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  return (
    <div className="timer">
      <span className="timer-label">Time:</span>
      <span className="timer-value">{timeLeft}s</span>
    </div>
  );
};

export default Timer;
