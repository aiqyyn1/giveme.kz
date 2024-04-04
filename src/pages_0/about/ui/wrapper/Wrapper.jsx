import React from 'react';
import MainInfo from '../../../main/ui/main-info/MainInfo';
import about1 from '../../../../../public/assets/about1.svg';
const data = [
  {
    image: about1,
    title: 'Our Mission',
    text: 'We are a team of passionate people committed to making <br/> the world a better place one good deed at a time. GiveMe.kz <br/> is an online platform where everyone can contribute to <br/> supporting those who need help. Our mission is to bring <br/> together those who want to help and those who need help, <br/> creating a path to kindness and well-being.',
  },
  {
    image: about1,
    title: 'Contribution and Support',
    text: 'On our platform, you can share your unwanted items,<br/> knowing that they will find a new life and bring joy to those in <br/> need. Clothes, shoes, books, toys - every item can become a <br/> source of smiles and support for those who are in difficult <br/> life situations.',
  },
  {
    image: about1,
    title: 'Transparency and Honesty',
    text: 'We strive for transparency and honesty in our work. All items <br/> received through our platform are carefully checked for <br/> quality and usability before they reach the hands of those in <br/> need.',
  },
  {
    image: about1,
    title: 'Partnerships </br> with Orphanages and Charities',
    text: 'We also collaborate closely with orphanages and charitable <br/> organizations to ensure that our assistance effectively <br/> reaches those who need it most, making a tangible <br/> difference in their lives.',
  },
];
export default function Wrapper() {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <MainInfo
            key={index}
            isRightAligned={index % 2 == 0 ? false : true}
            image={item.image}
            title={item.title}
            text={item.text}
          />
        );
      })}
    </div>
  );
}
