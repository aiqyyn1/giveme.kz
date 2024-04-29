import React from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
const LogOut = () => {
  const router = useRouter();
  const handleDeleteToken = () => {
    router.push('/login');
    Cookies.remove('access');
  };
  return (
    <div className="ml-40 mt-[90px] mb-[90px]">
      <button
        onClick={handleDeleteToken}
        className="bg-buttonPink w-4/5 h-[61px] rounded-lg text-center text-white text-[22px] font-bold"
      >
        LOG OUT
      </button>
    </div>
  );
};

export default LogOut;
