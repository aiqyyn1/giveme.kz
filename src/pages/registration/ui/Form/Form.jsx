'use client';
import React from 'react';
import Input from '../../../../shared/ui/input/ui';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../../../../public/assets/givemeBlack.svg';
import Link from 'next/link';

const Form = () => {
  const data = useSelector((state) => state.auth);

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white w-[400px] h-[626.67px] ">
        <div className="flex justify-center items-center gap-7 flex-col">
          <div className="mt-4">
            <Image src={logo} alt="logo"></Image>
          </div>
          <div className="flex gap-3 justify-center">
            <Link href="/register">Войти</Link>
            <Link href="/register">Зарегистрироваться</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
