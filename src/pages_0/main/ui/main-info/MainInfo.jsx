import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
const MainInfo = ({ text, isRightAligned, title, buttonText, image }) => {
  const createMarkup = (htmlText) => {
    return { __html: htmlText };
  };
  const isLeftAligned = classNames('flex justify-around', {
    'mb-[120px]': buttonText === 'ABOUT US',
  });
  const buttonRight = classNames(
    'bg-buttonPink w-[111px] text-white h-[42px] font-bold  rounded-lg',
    {
      'w-[194px]': buttonText === 'CALCULATOR',
    }
  );
  return (
    <div className="mt-[120px]">
      {isRightAligned ? (
        <div className="flex justify-around">
          <div className="flex flex-col gap-6">
            <span className="text-[32px] font-bold">{title}</span>
            <span dangerouslySetInnerHTML={createMarkup(text)} className="text-lg"></span>
            <button className={buttonRight}>{buttonText}</button>
          </div>
          <div>
            <Image src={image} alt="" />
          </div>
        </div>
      ) : (
        <div className={isLeftAligned}>
          <div>
            <Image src={image} alt="" />
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-[32px] font-bold">{title}</span>
            <span dangerouslySetInnerHTML={createMarkup(text)} className="text-lg"></span>
            <button className="bg-buttonPink font-bold  text-white w-[111px] h-[42px] rounded-lg">
              {buttonText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainInfo;
