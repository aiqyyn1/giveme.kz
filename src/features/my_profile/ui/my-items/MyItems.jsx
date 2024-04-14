'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useGetMyItemsQuery } from '../../../items/api/api';
import classNames from 'classnames';
const MyItems = () => {
  const { data, isLoading } = useGetMyItemsQuery();
  return (
    <div className="ml-40">
      <span className=" text-bold text-[32px] text-buttonColor font-bold">Orders</span>
      <div className="flex flex-col gap-6 mt-8 mb-10">
        {data?.map((item, index) => {
          const statusClassName = classNames('', {
            'text-white': item.status === 'REVIEW',
            'text-green_color': item.status === 'ACTIVE',
            'text-red_button': item.status === 'REMOVED',
          });
          return (
            <div key={item.user_id} className="w-4/5 bg-buttonColor h-[132px] rounded-lg">
              <div className="flex gap-6 ml-20 mt-8 items-center">
                <div>
                  <Image src={item.image} alt="" width={100} height={100}></Image>
                </div>
                <div className="flex flex-col">
                  <span className={statusClassName}>Status : {item.status}</span>
                  <span className="text-white">{item.category_name}</span>
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
