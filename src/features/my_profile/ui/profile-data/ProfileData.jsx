'use client';
import React from 'react';
import { useGetProfileQuery } from '../../api/api';
const ProfileData = () => {
  const { data } = useGetProfileQuery();
  // const { name, surname, email } = data;
  const textToCopy = '123456789';
  return (
    <div className="ml-8 mt-10 sm:ml-40">
      <div className="text-xl flex flex-col gap-7">
        <div className="flex gap-8">
          <span>Name and Surname:</span>
          <span className="font-bold">
            {data?.name} {data?.surname}
          </span>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:gap-[170px]" >
          <span>Mail:</span>
          <span className="font-bold">{data?.email}</span>
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
