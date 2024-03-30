import React from 'react';
import logo from '../../../public/assets/givemeLogo.svg';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="bg-buttonColor h-[364px] ">
      <div className="flex justify-around w-11/12 items-center pt-28">
        <div>
          <Image src={logo} alt="" width={204} height={144}></Image>
        </div>
        <div className="flex flex-col text-lg text-white gap-2">
          <Link href={''}>Main</Link>
          <Link href={''}>Give</Link>
          <Link href={''}>Receive</Link>
          <Link href={''}>Calculator</Link>
          <Link href={''}>About us</Link>
        </div>
        <div className="flex flex-col text-lg text-white gap-2">
          <span>+7 706 606 91 16</span>
          <span>+7 7122 36 64 98</span>
          <span>help@giveme.kz</span>
          <span>Almaty, Al-Farabi 132b</span>
        </div>
        <div className="flex flex-col text-lg text-white gap-2">
          <span>instagram</span>
          <span>telegram</span>
          <span>youtube</span>
          <span>vk</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
