import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

function Timer() {
  // Initial time in seconds (48 hours)
  const initialTime = 48 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const router = useRouter();
  useEffect(() => {
    if (!timeLeft) {
      router.push('/main');
      return;
    }
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);
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
      <span className="bg-red_button text-white text-xl  pl-2 pr-2 rounded-lg">{formatTime()}</span>
      <span className="text-black text-xl">Attention! You can take one item per 48 hours</span>
    </div>
  );
}

export default Timer;
