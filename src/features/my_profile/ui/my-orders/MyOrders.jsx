'use client';
import React from 'react';
import { useGetMyOrdersQuery } from '../../../../entities/order/api/api';
import Image from 'next/image';
import classNames from 'classnames';

const MyOrders = () => {
  const { data } = useGetMyOrdersQuery();

  return (
    <div className="ml-8 sm:ml-40">
      <span className="text-bold text-[32px] text-buttonColor font-bold">Orders</span>
      <div className="flex flex-col gap-6 mt-8 mb-10">
        {!data && <div>No orders yet</div>}
        {data?.map((item, index) => {
          const statusClassName = classNames('', {
            'text-gray_color': item.status === 'PENDING',
            'text-green_color': item.status === 'COMPLETED',
            'text-yellow': item.status === 'IN_DELIVERY',
          });
          return (
            <div key={index} className="w-4/5 bg-buttonColor h-[132px] rounded-lg">
              <div className="flex gap-6 ml-20 mt-4 items-center">
                <div className="relative w-[100px] h-[100px]">
                  <Image
                    src={item.item.image}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <span className={statusClassName}>Status : {item.status}</span>
                  <span className="text-white">{item.item.category_name}</span>
                  <span className="text-buttonPink text-[22px]">{item.bonus}B</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
