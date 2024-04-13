'use client'
import React from 'react';
import {useGetMyItemsQuery} from '../../../items/api/api'
const MyItems = () => {
  const {data} = useGetMyItemsQuery()
  console.log(data)
  return (
    <div>
      
    </div>
  );
};

export default MyItems;