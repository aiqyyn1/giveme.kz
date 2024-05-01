import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

function Timer() {
  const initialTime = 48 * 60 * 60; // 48 hours in seconds
  const router = useRouter();

  const getInitialTimeLeft = () => {
    const storedStartTime = localStorage.getItem('startTime');


    if (storedStartTime ) {
      const now = Math.floor(Date.now() / 1000);
      const elapsed = now - parseInt(storedStartTime, 10);
      const timeLeft = Math.max(initialTime - elapsed, 0);
      if (timeLeft === 0) {
        localStorage.removeItem('startTime');
        localStorage.removeItem('timerToken');
        router.push('/main');
      }
      return timeLeft;
    } else {
      localStorage.setItem('startTime', Math.floor(Date.now() / 1000).toString());

      return initialTime;
    }
  };

  const [timeLeft, setTimeLeft] = useState(getInitialTimeLeft());

  useEffect(() => {
    if (timeLeft === 0) {
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTimeLeft = prevTime - 1;
        if (newTimeLeft === 0) {
          clearInterval(intervalId);
          localStorage.removeItem('startTime');
          localStorage.removeItem('timerToken');
          router.push('/main');
        }
        return newTimeLeft;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, router]);

  const formatTime = () => {
    let seconds = timeLeft % 60;
    let minutes = Math.floor(timeLeft / 60) % 60;
    let hours = Math.floor(timeLeft / 3600);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div className="flex gap-2">
      <span className="bg-red_button text-white text-xl pl-2 pr-2 rounded-lg">{formatTime()}</span>
      <span className="text-black text-xl">Attention! You can take one item per 48 hours</span>
    </div>
  );
}

export default Timer;
