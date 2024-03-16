import Navbar from '../../components/navbar/Navbar';
import React from 'react';

export default function layout({ children }) {
  return (
    <div className="bg-pink-50 h-screen">
      <Navbar />
      {children}
    </div>
  );
}
