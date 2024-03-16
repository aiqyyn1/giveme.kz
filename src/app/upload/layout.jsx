import Navbar from '@/components/navbar/Navbar';
import React from 'react';

export default function layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
