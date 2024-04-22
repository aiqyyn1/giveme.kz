import React from 'react';
import Image from 'next/image';
import subphoto from '../../../../../public/assets/mainSubPhoto.svg';
import magnum from '../../../../../public/assets/magnum.svg';
import ideal from '../../../../../public/assets/ideal.svg';
import smartpoint from '../../../../../public/assets/smartpoint.svg';
import small from '../../../../../public/assets/small.svg';
const SubPhoto = () => {
  return (
    <div>
      <div className="relative">
        <Image src={subphoto} className='w-full'></Image>
        <div className="absolute top-0 left-0 text-center right-0 bottom-0 flex flex-col items-center mt-20 text-white  leading-5 font-r">
          <span className="text-[44px]">Our Partners</span>
          <div className="flex flex-col gap-4 text-lg mt-4">
            <span>
              We are glad to cooperate with leading supermarkets, where you can use your <br />
              bonuses to buy groceries and more! Simply visit one of our partners, present your
              <br /> rewards card, and get everything your family needs.
            </span>
            <span>
              {' '}
              To use bonuses in our partner supermarkets, simply present your personal QR code{' '}
              <br /> to the cashier when paying.
            </span>
          </div>
          <div className="flex gap-20 mt-12">
            <Image src={magnum}></Image>
            <Image src={ideal}></Image>
            <Image src={smartpoint}></Image>
            <Image src={small}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubPhoto;
