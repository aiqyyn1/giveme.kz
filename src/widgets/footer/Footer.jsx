import React from 'react';
import logo from '../../../public/assets/givemeLogo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { router } from '../../shared/config/route-map';
const Footer = () => {
  return (
    <div className="bg-buttonColor font-DM">
      <div className="flex justify-around w-11/12 items-center pt-16 pb-16">
        <div>
          <Image src={logo} alt="" width={204} height={144}></Image>
        </div>
        <div className="flex flex-col text-lg text-white gap-2">
          <Link href={router.homepage}>Main</Link>
          <Link href={router.upload}>Give</Link>
          <Link href={router.items}>Receive</Link>
          <Link href={router.calculator}>Calculator</Link>
          <Link href={router.about}>About us</Link>
        </div>
        <div className="flex flex-col text-lg text-white gap-2">
          <span>+7 706 606 91 16</span>
          <span>+7 7122 36 64 98</span>
          <span>help@giveme.kz</span>
          <span>Almaty, Al-Farabi 132b</span>
        </div>
        <div className="flex flex-col text-lg text-white gap-2">
          <Link
            href="https://www.instagram.com/givemekz/
"
          >
            instagram
          </Link>
          <Link
            href="https://t.me/givemekz
"
          >
            telegram
          </Link>
          <Link href=" https://www.youtube.com/channel/">youtube</Link>
          <Link href="https://vk.com/giveme_kz">vk</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
