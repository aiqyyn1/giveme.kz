import React from 'react';
import logo from '../../../public/assets/givemeLogo.svg';
import Image from 'next/image';
import { router } from '../../shared/config/route-map';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="text-white">
      <nav className="bg-black">
        <div className="container  h-20 flex items-center justify-around">
          <div>
            <Image src={logo} alt="logo"></Image>
          </div>
          <div className="flex gap-8">
            <Link href={router.homepage}>Main</Link>
            <Link href={router.homepage}>Give</Link>
            <Link href={router.homepage}>Receive</Link>
            <Link href={router.homepage}>Calculator</Link>
            <Link href={router.about}>About us</Link>
            <div>
              <Link href={router.signin} className="bg-pink-400  w-24 rounded-sm">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
