'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useGetMyItemsQuery } from '../../../items/api/api';
import classNames from 'classnames';
const MyItems = () => {
  const { data, isLoading } = useGetMyItemsQuery();
  console.log(data)
  return (
    <div className="ml-8 sm:ml-40">
      <span className=" text-bold text-[32px] text-buttonColor font-bold">My Items</span>
      <div className="flex flex-col gap-6 mt-8 mb-10">
        {!data && <div>No orders yet</div>}
        {data?.map((item, index) => {
          const statusClassName = classNames('', {
            'text-gray_color': item.status === 'REVIEW',
            'text-green_color': item.status === 'ACTIVE',
            'text-red_button': item.status === 'REMOVED',
          });
          return (
            <div key={index} className="w-4/5 bg-buttonColor h-[140px] rounded-lg">
              <div className="flex gap-6 ml-20 mt-8 items-center">
                <div>
                  <Image src={item.image} alt="" width={150} height={150}></Image>
                </div>
                <div className="flex flex-col">
                  <span className={statusClassName}>Status : {item.status}</span>
                  <span className="text-white font-bold text-[22px]">{item.category_name}</span>
                  <span className='text-buttonPink text-[22px]'>{item.bonus}B</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyItems;
