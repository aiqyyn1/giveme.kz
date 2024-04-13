'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { CARD_TEXT } from './string';
import SubCard from '../subcard/ui';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedFile, setCategoryId } from '../../lib/slices';
import { useCreateItemMutation } from '../../api/api';
import { data } from '../../../../shared/data/data';
import { useHandleClickActive } from '../../../../shared/utils/functions';
import FormUpload from '../../../../shared/form-upload/FormUpload';
const Card = () => {
  const createItemState = useSelector((state) => state.uploadText);
  console.log(createItemState);
  const handleClickActive = useHandleClickActive();
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
              text={item.text}
              isActive={item.id === createItemState.isActive}
              image={item.image}
              onClick={() => handleClickActive(item.id)}
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
          <FormUpload
            text="SEND"
            onClick={() => dispatch(setSelectedFile(null))}
            handleFileChange={handleFileChange}
            handleOnSubmit={handleOnSubmit}
          />
        </div>
      </div>
    </div>
  );
};
export default Card;
