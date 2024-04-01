import React from 'react';
import Image from 'next/image';
import background from '../../../../../public/assets/backgroundMain.svg';
const MainPhoto = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center">
        <Image src={background}></Image>
        <div className="absolute text-center top-24">
          <div className=" text-white text-[44px] font-bold">Welcome to GiveMe.kz!</div>
          <div className="text-white text-lg">
            Where your generosity earns rewards. Donate your unused items and help those in need.{' '}
            <br />
            Let&apos;s make a positive impact together!
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPhoto;
