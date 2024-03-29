import React from 'react';
import Order from '../../../entities/order/ui/Order';
const page = ({ params }) => {
  return (
    <div>
      <Order id={params.id} />
    </div>
  );
};

export default page;
