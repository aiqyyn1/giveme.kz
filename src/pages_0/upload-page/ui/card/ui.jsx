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
import axios from 'axios';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

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
  const [categoryId, setCategoryId] = useState(0);
  const stateText = useSelector((state) => state.uploadText);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('item_file', selectedFile);
    if (stateText === 'CLOTHES') {
      setCategoryId(1);
    } else if (stateText === 'TOYS') {
      setCategoryId(2);
    } else {
      setCategoryId(3);
    }
    formData.append('category_id', categoryId);
    const response = axios.post('https://giveme-kz-backend-2.onrender.com/item/create', formData, {
      headers: {
        Authorization: `Bearer ${Cookies.get('access')}`,
      },
    });
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
            <SubCard
              key={index}
              onClick={() => console.log('dewdew')}
              text={item.text}
              image={item.image}
            />
          ))}
        </div>
        <div className="mt-24">
          <div className="text-3xl font-bold">
            <span>{CARD_TEXT.UPLOAD}</span>
          </div>
          <div className="mt-6">
            <span>{CARD_TEXT.SUB_UPLOAD}</span>
          </div>
          <form onSubmit={handleOnSubmit}>
            <label htmlFor="fileInput" className="cursor-pointer">
              <div className="bg-white w-4/5 rounded-lg border h-[220px] mt-4 border-gray-300 flex items-center justify-center space-x-2">
                <Image src={addFile} width={70} height={70} alt="Add File" />
                <input id="fileInput" type="file" className="hidden" onChange={handleFileChange} />
              </div>
            </label>
            <button type="submit">send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Card;
