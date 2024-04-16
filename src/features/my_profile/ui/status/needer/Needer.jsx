'use client';
import React, { useState } from 'react';
import { PROFILE } from '../../string';
import FormUpload from '../../../../../shared/form-upload/FormUpload';
import { useNeedFilesMutation } from '../../../api/api';
const Needer = () => {
  const [files, setFiles] = useState([]);
  const [postFiles] = useNeedFilesMutation();
  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('electronic_doc', files[0]);
    formdata.append('benefit_doc', files[1]);
    formdata.append('user_photo', files[2]);

    try {
      const response = await postFiles(formdata);
    
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="ml-8 mt-16 sm:ml-40">
      <span className="text-[32px] font-bold text-buttonColor">{PROFILE.if_needer}</span>
      <div className="mt-4 flex flex-col gap-4">
        <span className="font-bold text-buttonColor">{PROFILE.check_res}</span>
        <div>
          <span className="font-bold">{PROFILE.electronic_id}</span>
          <span dangerouslySetInnerHTML={{ __html: PROFILE.pls_upload }} className="ml-2"></span>
        </div>
        <div>
          <span className="font-bold">{PROFILE.benefit_text}</span>
          <span dangerouslySetInnerHTML={{ __html: PROFILE.benefit }} className="ml-2"></span>
        </div>
        <div>
          <span className="font-bold">{PROFILE.Photos}</span>
          <span dangerouslySetInnerHTML={{ __html: PROFILE.photos_sub }} className="ml-2"></span>
        </div>
      </div>
      <FormUpload
        text="VERIFICATE"
        handleOnSubmit={handleOnSubmit}
        handleFileChange={handleFileChange}
      />
    </div>
  );
};

export default Needer;
