import React from 'react';
import Image from 'next/image';
import subphoto from '../../../../../public/assets/mainSubPhoto.svg'
const SubPhoto = () => {
  return (
    <div>
      <Image src={subphoto} ></Image>
    </div>
  );
};

export default SubPhoto;
