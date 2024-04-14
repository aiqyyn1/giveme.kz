
import React from 'react';
const ButtonPink = ({ text, onClick }) => {
  return (
    <button
      className="bg-buttonPink h-[61px] rounded-lg w-3/4 text-[22px] text-white text-center font-bold"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonPink;
