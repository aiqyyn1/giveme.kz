'use client';
import React, { useEffect } from 'react';
import { useGetProfileQuery } from '../../api/api';
import { setNeederStatus } from '../../lib/slice';
import { useDispatch } from 'react-redux';
import { setTextToCopy } from '../../lib/slice';
const ProfileData = () => {
  const { data } = useGetProfileQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNeederStatus(data?.needer_status));
    dispatch(setTextToCopy(data?.bar_code));
  }, [data?.needer_status, data?.bar_code]);
  return (
    <div className="ml-8 mt-10 sm:ml-40">
      <div className="text-xl flex flex-col gap-7">
        <div className="flex gap-8">
          <span>Name and Surname:</span>
          <span className="font-bold">
            {data?.name} {data?.surname}
          </span>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:gap-[170px]">
          <span>Mail:</span>
          <span className="font-bold">{data?.email}</span>
        </div>
        <div className="flex gap-[160px]">
          <span>Code:</span>
          <span className="font-bold">{data?.bar_code}</span>
        </div>
        <div className="flex gap-[160px]">
          <span>Bonuses:</span>
          <span className="font-bold">{data?.bonus_count}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
