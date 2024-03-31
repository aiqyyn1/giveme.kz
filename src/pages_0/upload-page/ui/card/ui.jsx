'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import clothes from '../../../../../public/assets/clothes.svg';
import toys from '../../../../../public/assets/toys.svg';
import shoes from '../../../../../public/assets/shoes.svg';
import addFile from '../../../../../public/assets/addFile.svg';
import deleteLogo from '../../../../../public/assets/delete.svg';
import { CARD_TEXT } from './string';
import SubCard from '../subcard/ui';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedFile, setCategoryId } from '../../lib/slices';
import { useCreateItemMutation } from '../../api/api';

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
  const createItemState = useSelector((state) => state.uploadText);
  console.log(createItemState);
  const [postCreate] = useCreateItemMutation();
  const dispatch = useDispatch();
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    dispatch(setSelectedFile(file));
  };

  useEffect(() => {
    if (createItemState.text === 'CLOTHES') {
      dispatch(setCategoryId(1));
    } else if (createItemState.text === 'TOYS') {
      dispatch(setCategoryId(2));
    } else if (createItemState.text === 'SHOES') {
      dispatch(setCategoryId(3));
    }
  }, [createItemState.text]);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('item_file', createItemState.selectedFile);
    formData.append('category_id', createItemState.categoryId);
    try {
      const response = await postCreate(formData).unwrap();
      console.log(response);
    } catch (e) {
      console.log(e);
    }
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
            <div>
              <button
                type="button"
                className="bg-red_button w-4/5 mt-4 h-14 text-white rounded-lg"
                onClick={() => dispatch(setSelectedFile(null))}
              >
                DELETE
              </button>
            </div>
            <button
              type="submit"
              className="bg-buttonPink mt-20 mb-36 w-4/5 h-14 text-white rounded-lg"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Card;
