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
    if (data) {
      dispatch(setNeederStatus(data.needer_status));
      dispatch(setTextToCopy(data.bar_code));
    }
  }, [data, dispatch]);

  return (
    <div className="ml-8 mt-10 sm:ml-40">
      <div className="text-xl grid gap-7">
        {data && (
          <>
            <div className="grid grid-cols-[200px_auto] gap-12">
              <span>Name and Surname:</span>
              <span className="font-bold">
                {data.name} {data.surname}
              </span>
            </div>
            <div className="grid grid-cols-[200px_auto] gap-12">
              <span>Bonuses:</span>
              <span className="font-bold">{data.bonus_count}</span>
            </div>
            <div className="grid grid-cols-[200px_auto] gap-12">
              <span>Mail:</span>
              <span className="font-bold">{data.email}</span>
            </div>

            <div className="grid grid-cols-[200px_auto] gap-12">
              <span>Code:</span>
              <span className="font-bold">{data.bar_code}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileData;
