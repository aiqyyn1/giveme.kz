'use client';
import React from 'react';
import code from '../../../../../public/assets/code.svg';
import Image from 'next/image';
import Button from '../../../../shared/buttonPink/ButtonPink';
import { PROFILE } from '../string';
const CopyCode = () => {
  const textToCopy = '123456789';

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="ml-40 mt-32">
      <div className="flex flex-col gap-8">
        <span className="text-buttonColor font-bold text-[32px]">{PROFILE.my_profile}</span>
        <span className="text-red_button text-[22px] font-bold">{PROFILE.for_payment}</span>
        <Image src={code} alt="code" />
        <Button text="COPY CODE" onClick={handleCopyClick}></Button>
      </div>
    </div>
  );
};

export default CopyCode;
