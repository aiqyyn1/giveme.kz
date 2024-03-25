import React from 'react';
import Navbar from '../../widgets/navbar/ui';
export default function layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
