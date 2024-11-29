import { useState, useEffect, useRef } from 'react';

const useCountdownTimer = (initialTime) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null); 

  const start = () => {
    if (!isActive && timeLeft > 0) {
      setIsActive(true);
    }
  };

  const pause = () => {
    setIsActive(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const reset = () => {
    pause();
    setTimeLeft(initialTime);
  };

  useEffect(() => {
    
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            pause(); 
            return 0;
          }
        });
      }, 1000); 
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive]);

  return {
    timeLeft,   
    start,       
    pause,       
    reset,       
    isActive,    
  };
};

export default useCountdownTimer;
