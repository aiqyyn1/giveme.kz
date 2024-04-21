import React from 'react';
import Image from 'next/image';
import addFile from '../../../public/assets/addFile.svg';
const FormUpload = ({
  onClick,
  text,
  handleOnSubmit,
  handleFileChange,
  handleDataChange,
  file,
}) => {
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
      {file && (
        <div className="bg-black w-96 mt-5 h-10 text-center rounded-lg text-white">{file}</div>
      )}
      <div>
        <button
          type="button"
          className="bg-red_button w-4/5 mt-4 h-14 text-white rounded-lg"
          onClick={onClick}
        >
          DELETE
        </button>
      </div>
      {text === 'SEND' && (
        <div className="flex flex-col gap-6 mt-7">
          <span className="text-[32px] font-bold text-buttonColor">Write info</span>
          <span className="text-lg text-buttonColor ">
            Write your address and phone number so we can pick up this item.
          </span>
          <input
            placeholder="Address"
            className="h-12 bg-buttonColor rounded-lg p-4 w-4/5"
            name="contact_phone_number"
            onChange={handleDataChange}
          ></input>
          <input
            placeholder="Phone number"
            className="h-12 bg-buttonColor rounded-lg p-4 w-4/5"
            name="contact_address"
            onChange={handleDataChange}
          ></input>
        </div>
      )}
      <button type="submit" className="bg-buttonPink mt-8 mb-36 w-4/5 h-14 text-white rounded-lg">
        {text}
      </button>
    </form>
  );
};

export default FormUpload;
