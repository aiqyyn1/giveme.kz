import React from 'react';
import Image from 'next/image';
const SubCard = ({ text, image }) => {
  return (
    <div className="bg-white w-[328px] h-[191px]">
      <div className="mt-10">
        <div className="flex justify-center items-center">
          <Image src={image} alt="photos"></Image>
        </div>
        <div className="text-center mt-5 text-lg">{text}</div>
      </div>
    </div>
  );
};

export default SubCard;
