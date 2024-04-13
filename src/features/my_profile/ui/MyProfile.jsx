import React from 'react';
import CopyCode from './copy-code/CopyCode';
import ProfileData from './profile-data/ProfileData';
import ChangePassword from './change-password/ChangePassword';
import Needer from './needer/Needer';
import MyItems from './my-items/MyItems';
const MyProfile = () => {
  return (
    <div>
      <CopyCode />
      <ProfileData />
      <ChangePassword />
      <Needer />
      <MyItems />
    </div>
  );
};

export default MyProfile;
