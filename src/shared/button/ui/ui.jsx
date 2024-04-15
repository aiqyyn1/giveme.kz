import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="bg-buttonColor text-center w-[345px] h-[54px] font-DM rounded-lg text-white font-bold text-lg">
        {text}
      </button>
    </div>
  );
};

export default Button;
