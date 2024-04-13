'use client';
import React from 'react';
import { useGetProfileQuery } from '../../api/api';
const ProfileData = () => {
  const { data } = useGetProfileQuery();
  const { name, surname, email } = data;
  const textToCopy = '123456789';
  return (
    <div className="ml-40 mt-10">
      <div className="text-xl flex flex-col gap-7">
        <div className="flex gap-8">
          <span>Name and Surname:</span>
          <span className="font-bold">
            {name} {surname}
          </span>
        </div>

        <div className="flex gap-[170px]">
          <span>Mail:</span>
          <span className="font-bold">{email}</span>
        </div>
        <div className="flex gap-[160px]">
          <span>Code:</span>
          <span className="font-bold">{textToCopy}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
