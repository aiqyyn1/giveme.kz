'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import clothes from '../../../../../public/assets/clothes.svg';
import toys from '../../../../../public/assets/toys.svg';
import shoes from '../../../../../public/assets/shoes.svg';
import addFile from '../../../../../public/assets/addFile.svg';
import deleteLogo from '../../../../../public/assets/delete.svg';
import { CARD_TEXT } from './string';
import SubCard from '../subcard/ui';

const data = [
  {
    text: 'CLOTHES',
    image: clothes,
  },
  {
    text: 'TOYS',
    image: toys,
  },
  {
    text: 'SHOES',
    image: shoes,
  },
];

const Card = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <div className="mt-24 ml-36">
        <span className="text-3xl leading-loose font-bold">{CARD_TEXT.OFFER}</span>
        <div>
          <span className="text-lg">{CARD_TEXT.DONATION}</span>
        </div>
        <div>
          <span>{CARD_TEXT.SEPARTION}</span>
        </div>
        <div className="flex gap-6 mt-5">
          {data.map((item, index) => (
            <SubCard key={index} text={item.text} image={item.image} />
          ))}
        </div>
        <div className="mt-24">
          <div className="text-3xl font-bold">
            <span>{CARD_TEXT.UPLOAD}</span>
          </div>
          <div className="mt-6">
            <span>{CARD_TEXT.SUB_UPLOAD}</span>
          </div>
          <div className="bg-white w-4/5 rounded-lg border h-[220px] mt-4 border-gray-300 flex items-center justify-center space-x-2">
            <label htmlFor="fileInput" className="cursor-pointer">
              <Image src={addFile} width={24} height={24} alt="Add File" />
            </label>
            <input id="fileInput" type="file" className="hidden" onChange={handleFileChange} />
          </div>
          <div className="mt-4">
            {selectedFile && (
              <div className="inline-flex items-center pr-4  bg-white">
                <span className="text-lg">{selectedFile.name}</span>
                <Image src={deleteLogo} className="ml-3" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
