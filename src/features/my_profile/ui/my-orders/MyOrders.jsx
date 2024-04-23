'use client'
import React from 'react';
import {useGetMyOrdersQuery} from '../../../../entities/order/api/api'
import Image from 'next/image'
const MyOrders = () => {
  const {data} =  useGetMyOrdersQuery()
  return (
    <div className="ml-8 sm:ml-40">
      <span className=" text-bold text-[32px] text-buttonColor font-bold">Orders</span>
      <div className="flex flex-col gap-6 mt-8 mb-10">
        {!data && <div>No orders yet</div>}
        {data?.map((item, index) => {
       
          return (
            <div key={index} className="w-4/5 bg-buttonColor h-[132px] rounded-lg">
              <div className="flex gap-6 ml-20 mt-8 items-center">
                <div>
                  <Image src={item.image} alt="" width={100} height={100}></Image>
                </div>
                <div className="flex flex-col">
                  <span >Status : {item.status}</span>
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

export default MyOrders;