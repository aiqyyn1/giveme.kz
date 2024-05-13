'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTimer } from '../lib/slice'; // Ensure this is the correct import path

const CountdownTimer = () => {
  const duration = 48 * 60 * 60 * 1000; // 48 hours in milliseconds
  const dispatch = useDispatch();

  const [endTime, setEndTime] = useState(() => {
    const storedEndTime = localStorage.getItem('endTime');
    if (storedEndTime) {
      return new Date(parseInt(storedEndTime, 10));
    } else {
      const newEndTime = new Date().getTime() + duration;
      localStorage.setItem('endTime', newEndTime.toString());
      return new Date(newEndTime);
    }
  });

  const [timeLeft, setTimeLeft] = useState(() => {
    const now = new Date();
    const difference = endTime - now;
    return Math.max(difference, 0);
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = endTime - now;
      if (difference > 0) {
        setTimeLeft(difference);
        dispatch(setTimer(difference)); // Dispatch the time left to the Redux store
      } else {
        const newEndTime = new Date().getTime() + duration;
        localStorage.setItem('endTime', newEndTime.toString());
        setEndTime(new Date(newEndTime));
        setTimeLeft(duration);
        dispatch(setTimer(duration)); // Reset the timer in the Redux store
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(timer);
      dispatch(setTimer(0)); // Ensure cleanup dispatch when component unmounts
    };
  }, [endTime, dispatch]);

  // Format the time left into days, hours, minutes, and seconds
  const formatTimeLeft = (time) => {
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / (1000 * 60)) % 60);
    let hours = Math.floor((time / (1000 * 60 * 60)) % 48); // Use modulo 24 for hours within a day
    let days = Math.floor(time / (1000 * 60 * 60 * 24));

    seconds = ('0' + seconds).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    hours = ('0' + hours).slice(-2); // Keep leading zero for formatting

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex gap-2">
      <span className="bg-red_button text-white text-xl pl-2 pr-2 rounded-lg">
        {formatTimeLeft(timeLeft)}
      </span>
      <span className="text-black text-xl">Attention! You can take one item per 48 hours</span>
    </div>
  );
};

export default CountdownTimer;
