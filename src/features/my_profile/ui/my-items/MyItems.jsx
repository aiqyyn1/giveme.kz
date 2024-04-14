'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useGetMyItemsQuery } from '../../../items/api/api';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading } from '../../lib/slice';
const MyItems = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetMyItemsQuery();
  const isLoadingState = useSelector((state) => state.isLoading.isLoading)
  console.log(isLoadingState)
    dispatch(setIsLoading(isLoading));

   
  return (
    <div className="ml-40">
      <span className=" text-bold text-[32px] text-buttonColor font-bold">Orders</span>
      {data?.map((item, index) => {
        return (
          <div key={item.id}>
            <Image src={item.image} alt="" width={50} height={50}></Image>
          </div>
        );
      })}
    </div>
  );
};

export default MyItems;
