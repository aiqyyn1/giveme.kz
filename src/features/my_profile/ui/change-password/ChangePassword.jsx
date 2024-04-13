import React from 'react';
import ButtonPink from '../../../../shared/buttonPink/ButtonPink';
import {PROFILE} from '../string'
const ChangePassword = () => {
  return (
    <div className='flex flex-col ml-40  text-[28px] gap-8 font-bold mt-20'>
      <span>{PROFILE.change_pass}</span>
      <ButtonPink text='CHANGE PASSWORD' />
    </div>
  );
};

export default ChangePassword;
