'use client';
import React, { useState } from 'react';
import { setText } from '../../lib/slices';
import Image from 'next/image';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

const SubCard = ({ text, image, onClick, isActive }) => {
  const [backgroundBlack, setBackgroundBlack] = useState(false);
  const dispatch = useDispatch();
  const backgroundBlackClass = classNames('w-[328px] h-[191px]', {
    'bg-white': !isActive,
    'bg-black': isActive,
  });

  const handleClick = () => {
    onClick();
    dispatch(setText(text));
  };

  return (
    <div className={backgroundBlackClass} onClick={handleClick}>
      <div className="mt-10">
        <div className="flex justify-center items-center">
          <Image src={image} alt="photos" />
        </div>
        <div className="text-center mt-5 text-lg">{text}</div>
      </div>
    </div>
  );
};

export default SubCard;
