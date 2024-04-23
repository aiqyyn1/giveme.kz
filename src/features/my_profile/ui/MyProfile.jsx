'use client';
import React from 'react';
import CopyCode from './copy-code/CopyCode';
import ProfileData from './profile-data/ProfileData';
import ChangePassword from './change-password/ChangePassword';
import Status from './status/Status';
import MyItems from './my-items/MyItems';
import MyOrders from './my-orders/MyOrders';
import LogOut from './log-out/LogOut'
const MyProfile = () => {
  return (
    <div>
      <CopyCode />
      <ProfileData />
      <ChangePassword />
      <Status />
      <MyItems />
      <MyOrders />
      <LogOut/>
    </div>
  );
};

export default MyProfile;
