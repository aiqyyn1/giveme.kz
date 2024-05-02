'use client';
import React from 'react';
import logo from '../../../public/assets/givemeLogo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useGetProfileQuery } from '../../features/my_profile/api/api';
import { usePathname } from 'next/navigation';
import { router } from '../../shared/config/route-map';

const Navbar = () => {
  const { data } = useGetProfileQuery();
  const activePathname = usePathname();

  const isActive = (pathname) => pathname === activePathname;
  const linkStyle = (pathname) => (isActive(pathname) ? 'font-bold' : 'font-normal');

  return (
    <div className="text-white">
      <nav className="bg-buttonColor">
        <div className="h-20 flex items-center justify-around">
          <Link href={router.homepage}>
            <Image src={logo} alt="logo" width={150} height={40} />
          </Link>
          <div className="hidden sm:flex gap-8">
            <Link href={router.homepage}>
              <span className={linkStyle(router.homepage)}>Main</span>
            </Link>
            <Link href={router.upload}>
              <span className={linkStyle(router.upload)}>Give</span>
            </Link>
            <Link href={router.items}>
              <span className={linkStyle(router.items)}>Receive</span>
            </Link>
            <Link href={router.calculator}>
              <span className={linkStyle(router.calculator)}>Calculator</span>
            </Link>
            <Link href={router.about}>
              <span className={linkStyle(router.about)}>About us</span>
            </Link>
            {data ? (
              <Link href={router.profile}>
                <span className={`bg-buttonPink rounded-lg pl-2 pr-2 ${linkStyle(router.profile)}`}>
                  {data.name} {data.bonus_count}B
                </span>
              </Link>
            ) : (
              <Link href={router.signin}>
                <span className={`bg-pink-400 rounded-sm ${linkStyle(router.signin)}`}>
                  Sign in
                </span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
