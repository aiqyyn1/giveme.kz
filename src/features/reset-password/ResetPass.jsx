import React, { Suspense } from 'react';
import ResetForm from './ui/ResetForm';

const ResetPass = () => {
  return (
    <Suspense>
      <div>
        <ResetForm></ResetForm>
      </div>
    </Suspense>
  );
};

export default ResetPass;
