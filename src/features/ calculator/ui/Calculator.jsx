'use client'
import React from 'react';
import { data } from '../../../shared/data/data';
import { setIsActive } from '../../../pages_0/upload-page/lib/slices';
import { useDispatch, useSelector } from 'react-redux';
import {SubCard} from '../../../pages_0/upload-page/ui';
const Calculator = () => {
  const isActive = useSelector((state) => state.uploadText.isActive)
  const dispatch = useDispatch()
  const handleClickActive = (id) => {
    dispatch(setIsActive(id))
  };
  return (
    <div className='mt-24 ml-36'>
        <div className="flex gap-6 mt-5">
          {data.map((item, index) => (
            <SubCard
              key={index}
              text={item.text}
              isActive={item.id === isActive}
              image={item.image}
              onClick={() => handleClickActive(item.id)}
            />
          ))}
        </div>
    </div>
  );
};

export default Calculator;