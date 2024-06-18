'use client'
import React, { memo, useState, useCallback } from 'react';
import { setText } from '../../lib/slices';
import Image from 'next/image';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

const SubCard = memo(({ text, image, onClick, isActive, activeImage }) => {
  const [backgroundBlack, setBackgroundBlack] = useState(false);
  const dispatch = useDispatch();
  const backgroundBlackClass = classNames('w-[328px] rounded-lg h-[191px]', {
    'bg-white': !isActive,
    'bg-buttonColor text-white': isActive,
  });


  const handleClick = useCallback(() => {
    onClick();
    dispatch(setText(text));
  }, [dispatch, onClick, text]);  // Dependencies

  return (
    <div className={backgroundBlackClass} onClick={handleClick}>
      <div className="mt-10">
        <div className="flex justify-center items-center">
          <Image src={!isActive ? image : activeImage} alt="photos" />
        </div>
        <div className="text-center mt-5 text-lg">{text}</div>
      </div>
    </div>
  );
});

export default SubCard;
