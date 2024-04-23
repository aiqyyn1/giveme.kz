import React from 'react';
import Cookies from 'js-cookie';
const LogOut = () => {
  const handleDeleteToken = () => {
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
