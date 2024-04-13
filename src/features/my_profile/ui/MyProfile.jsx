import React from 'react';
import CopyCode from './copy-code/CopyCode';
import ProfileData from './profile-data/ProfileData';
import ChangePassword from './change-password/ChangePassword';
import Needer from './needer/Needer';
const MyProfile = () => {
  return (
    <div>
      <CopyCode />
      <ProfileData />
      <ChangePassword />
      <Needer />
    </div>
  );
};

export default MyProfile;
