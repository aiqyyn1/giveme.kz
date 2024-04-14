'use client';
import React from 'react';
import CopyCode from './copy-code/CopyCode';
import ProfileData from './profile-data/ProfileData';
import ChangePassword from './change-password/ChangePassword';
import Needer from './needer/Needer';
import MyItems from './my-items/MyItems';
import { useGetMyItemsQuery } from '../../items/api/api';
const MyProfile = () => {
  const { isLoading } = useGetMyItemsQuery();
  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <CopyCode />
          <ProfileData />
          <ChangePassword />
          <Needer />
          <MyItems />
        </div>
      )}
    </div>
  );
};

export default MyProfile;
