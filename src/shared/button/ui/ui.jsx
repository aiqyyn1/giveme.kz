import React from 'react';

const Button = ({ text }) => {
  return (
    <div>
      <button className="bg-buttonColor text-center w-[345px] h-[54px] rounded-lg text-white font-bold text-lg">
        {text}
      </button>
    </div>
  );
};

export default Button;
