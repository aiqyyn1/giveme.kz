import React from 'react';
import clothes from '../../../../public/assets/clothes.svg';
import toys from '../../../../public/assets/toys.svg';
import shoes from '../../../../public/assets/shoes.svg';
import { CARD_TEXT } from './string';
import SubCard from './SubCard';
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
          {data.map((item, index) => {
            return <SubCard key={index} text={item.text} image={item.image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
