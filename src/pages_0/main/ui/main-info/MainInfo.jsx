'use client';
import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
const MainInfo = ({ text, isRightAligned, title, buttonText, image }) => {
  const createMarkup = (htmlText) => {
    return { __html: htmlText };
  };
  console.log(title)
  const pathname = usePathname();
  const isLeftAligned = classNames('flex', {
    'mb-[120px]': buttonText === 'ABOUT US',
    'mb-[120px]': title == 'Partnerships </br> with Orphanages and Charities',
    'mb-[120px]':title =="How to use bonuses?",
    'gap-[53px] justify-center': pathname === '/about',
    'justify-around': pathname === '/main',
  });
  const buttonRight = classNames(
    'bg-buttonPink w-[111px] text-white h-[42px] font-bold  rounded-lg',
    {
      'w-[194px]': buttonText === 'CALCULATOR',
    }
  );
  const isRightAlignedClass = classNames('flex', {
    'gap-[53px] justify-center': pathname === '/about',
    'mb-[120px]': title === 'Partnerships </br> with Orphanages and Charities',
    'justify-around': pathname === '/main',
  });

  return (
    <div className="mt-[120px]">
      {isRightAligned ? (
        <div className={isRightAlignedClass}>
          <div className="flex flex-col gap-6">
            <span
              className="text-[32px] font-bold"
              dangerouslySetInnerHTML={{ __html: title }}
            ></span>
            <span dangerouslySetInnerHTML={createMarkup(text)} className="text-lg text-buttonColor"></span>
            {pathname !== '/about' ? (
              <button className={buttonRight}>{buttonText}</button>
            ) : (
              <div></div>
            )}
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
            <span dangerouslySetInnerHTML={createMarkup(text)} className="text-lg text-buttonColor"></span>
            {pathname !== '/about' ? (
              <button className="bg-buttonPink font-bold  text-white w-[111px] h-[42px] rounded-lg">
                {buttonText}
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainInfo;
