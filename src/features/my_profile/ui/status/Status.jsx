import React from 'react';
import { useSelector } from 'react-redux';
import Needer from './needer/Needer';
import Pending from './pending/Pending';
import Success from './success/Success';
const Status = () => {
  const need_status = useSelector((state) => state.isLoading.needer_status);
  return (
    <div>
      {need_status === 'SUCCESS' &&<Success /> }
      {need_status === 'NULL' && <Needer />}
      {need_status === 'PENDING' && <Pending />}
      {need_status === "ERROR" && <div className='text-center'>Попробуйте еще раз</div>}
    </div>
  );
};

export default Status;
