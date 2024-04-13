import React from 'react';
import Image from 'next/image';
import addFile from '../../../public/assets/addFile.svg';
const FormUpload = ({  onClick, text, handleOnSubmit, handleFileChange }) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="fileInput" className="cursor-pointer">
        <div className="bg-white w-4/5 rounded-lg border h-[220px] mt-4 border-gray-300 flex items-center justify-center space-x-2">
          <Image src={addFile} width={70} height={70} alt="Add File" />
          <input
            id="fileInput"
            type="file"
            className="hidden"
            {...(text === 'VERIFICATE' ? { multiple: true } : {})}
            onChange={handleFileChange}
          />
        </div>
      </label>
      <div>
        <button
          type="button"
          className="bg-red_button w-4/5 mt-4 h-14 text-white rounded-lg"
          onClick={onClick}
        >
          DELETE
        </button>
      </div>
      <button type="submit" className="bg-buttonPink mt-8 mb-36 w-4/5 h-14 text-white rounded-lg">
        {text}
      </button>
    </form>
  );
};

export default FormUpload;
