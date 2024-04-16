'use client';
import React from 'react';
import logo from '../../../public/assets/givemeLogo.svg';
import Image from 'next/image';
import { router } from '../../shared/config/route-map';
import Link from 'next/link';
import { useGetProfileQuery } from '../../features/my_profile/api/api';
const Navbar = () => {
  const { data, isLoading, isFetching } = useGetProfileQuery();

  return (
    <div className="text-white">
      <nav className="bg-black">
        <div className="  h-20 flex items-center justify-around">
          <div>
            <Image src={logo} alt="logo"></Image>
          </div>
          <div className="hidden sm:flex gap-8">
            <Link href={router.homepage}>Main</Link>
            <Link href={router.upload}>Give</Link>
            <Link href={router.items}>Receive</Link>
            <Link href={router.calculator}>Calculator</Link>
            <Link href={router.about}>About us</Link>
            <div>
              {data ? (
                <Link href={router.profile}>
                  <div className="bg-buttonPink rounded-lg pl-2 pr-2">
                    {data.name} {data.bonus_count}B
                  </div>
                </Link>
              ) : (
                <Link href={router.signin} className="bg-pink-400   rounded-sm">
                  Sign in
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
