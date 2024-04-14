'use client';
import React from 'react';
import { useGetMyItemsQuery } from '../../../items/api/api';
const MyItems = () => {
  const { data } = useGetMyItemsQuery();
  console.log(data)
  return (
    <div>
      <span className="ml-40">Orders</span>
      
    </div>
  );
};

export default MyItems;
