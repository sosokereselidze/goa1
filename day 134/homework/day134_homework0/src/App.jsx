import React from 'react';
import useCountdownTimer from './useCountdownTimer';

const TimerComponent = () => {
  const { timeLeft, start, pause, reset, isActive } = useCountdownTimer(60);

  return (
    <div>
      <h1>Countdown: {timeLeft}s</h1>

      <button onClick={start} disabled={isActive}>
        Start
      </button>
      <button onClick={pause} disabled={!isActive}>
        Pause
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default TimerComponent;