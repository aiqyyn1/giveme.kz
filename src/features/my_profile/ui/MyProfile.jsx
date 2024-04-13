import React from 'react';
import CopyCode from './copy-code/CopyCode';
import ProfileData from './profile-data/ProfileData';
import ChangePassword from './change-password/ChangePassword';
const MyProfile = () => {
  return (
    <div>
      <CopyCode />
      <ProfileData />
      <ChangePassword />
    </div>
  );
};

export default MyProfile;
