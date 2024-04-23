'use client';
import React, { useEffect, useState } from 'react';
import { CARD_TEXT } from './string';
import SubCard from '../subcard/ui';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedFile, setCategoryId } from '../../lib/slices';
import { useCreateItemMutation } from '../../api/api';
import { data } from '../../../../shared/data/data';
import { useHandleClickActive } from '../../../../shared/utils/functions';
import FormUpload from '../../../../shared/form-upload/FormUpload';
import Modal from '../../../../shared/modal/Modal';
import Image from 'next/image';
import right from '../../../../../public/assets/right.svg';
import wrong from '../../../../../public/assets/wrong.svg';
const Card = () => {
  const createItemState = useSelector((state) => state.uploadText);

  const handleClickActive = useHandleClickActive();
  const [postCreate] = useCreateItemMutation();
  const [isRight, setIsRight] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const dispatch = useDispatch();
  const [data1, setData] = useState({
    contact_phone_number: '',
    contact_address: '',
  });
  const handleDataChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
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
    formData.append('contact_phone_number', data1.contact_phone_number);
    formData.append('contact_address', data1.contact_address);
    try {
      const response = await postCreate(formData).unwrap();
      console.log('frefer', response)
      if (response.success === true) {
        setIsRight(true);
        return
      }
     
    
    } catch (e) {
      console.log(e);
      setIsWrong(true)
    }
  };
  console.log(isWrong);
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
              activeImage={item.isActiveImage}
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
            handleDataChange={handleDataChange}
            file={createItemState.selectedFile?.name}
          />
        </div>
      </div>
      {isRight && (
        <Modal isOpen={isRight} text="Congratulations" onClose={() => setIsRight(false)}>
          <div className="flex justify-center flex-col items-center gap-6">
            <Image src={right} className="mt-2"></Image>
            <p className="text-lg font-semibold text-[22px] text-green_color">
              Congratulations, you have <br /> successfully shipped <br /> your item. Moderators are{' '}
              <br /> reviewing this request. The process will take up to 15 <br /> minutes.
            </p>
          </div>
        </Modal>
      )}
      {isWrong && (
        <Modal isOpen={isWrong} text="Try" onClose={() => setIsWrong(false)}>
          <div className="flex justify-center flex-col items-center gap-6">
            <Image src={wrong} className="mt-2"></Image>
            <p className="text-lg font-semibold text-[22px] text-red_button">
              Try again. Something went wrong.
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};
export default Card;
