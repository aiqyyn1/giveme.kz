import React from 'react';
import logo from '../../../public/assets/givemeLogo.svg';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="text-white">
      <nav className="bg-black">
        <div className="container  h-20 flex items-center justify-around">
          <div>
            <Image src={logo} alt="logo"></Image>
          </div>
          <div className="flex gap-8">
            <span>Main</span>
            <span>Give</span>
            <span>Receive</span>
            <span>Calculator</span>
            <span>About us</span>
            <div>
              <button className="bg-pink-400  w-24 rounded-sm">Sign in</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
