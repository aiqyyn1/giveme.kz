import React from 'react';
import Link from 'next/link'
import {router} from '../../../../../shared/config/route-map'
const Success = () => {
  return (
    <div className="bg-green_open_color  w-2/3 ml-40 text-center items-center flex flex-col gap-6 mt-[90px] mb-[90px] ">
      <span className="text-[32px] font-bold mt-2">
        Congratulations! <br /> You have been verified as someone in need.
      </span>
      <span className="text-xl ">
        To receive the items you need, you can go to the Receive page.
      </span>
      <Link href={router.items}>
        <button className="bg-buttonPink flex justify-center items-center mt-5 mb-4 ml-2  w-[228px] h-[48px] rounded-lg text-white">
          RECIEVE
        </button>
      </Link>
    </div>
  );
};

export default Success;
