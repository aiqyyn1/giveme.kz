import React from 'react';
import Image from 'next/image';

const MainPhoto = ({ background, text, subtext }) => {
  return (
    <div>
      <div className="relative flex justify-center items-center">
        <Image src={background}  className='w-auto h-auto'></Image>
        <div className="absolute text-center top-24">
          <div className=" text-white text-[44px] font-bold" dangerouslySetInnerHTML={{__html:text}}></div>
          <div className="text-white text-lg" dangerouslySetInnerHTML={{ __html: subtext }}></div>
        </div>
      </div>
    </div>
  );
};

export default MainPhoto;
