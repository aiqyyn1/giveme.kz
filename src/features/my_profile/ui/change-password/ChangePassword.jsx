import React from 'react';
import ButtonPink from '../../../../shared/buttonPink/ButtonPink';
import Link from 'next/link';
import { PROFILE } from '../string';
const ChangePassword = () => {
  return (
    <div className="flex flex-col ml-8 sm:ml-40 text-[28px] gap-8 font-bold mt-20">
      <span>{PROFILE.change_pass}</span>
      <Link href="/change-password">
        <ButtonPink text="CHANGE PASSWORD" />
      </Link>
    </div>
  );
};

export default ChangePassword;
