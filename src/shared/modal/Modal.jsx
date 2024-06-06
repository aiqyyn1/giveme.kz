import classNames from 'classnames';
import React from 'react';

const Modal = ({ isOpen, onClose, children, text }) => {
  if (!isOpen) return null;
  console.log(text);
  const childrenClassname = classNames(
    't-4 mb-2 w-[311px] h-[57px] text-white text-center rounded',
    {
      'bg-green_color': text === 'Congratulations, you have successfully changed your password',
      'bg-red_button': text === 'Try again. Something went wrong.',
      'bg-green_color':
        text ==
        'Congratulations',
        "bg-red_button  " : text == "Try"
    }
  );
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4  text-center flex flex-col justify-center items-center  gap-6 rounded-md shadow-lg max-w-sm mx-auto">
        <div className='mt-2'>{children}</div>
        <button onClick={onClose} className={childrenClassname}>
          Back
        </button>
      </div>
    </div>
  );
};
export default Modal;
