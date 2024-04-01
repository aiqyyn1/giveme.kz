import React from 'react';
import MainPhoto from './main-photo/MainPhoto';
import MainInfo from './main-info/MainInfo';
import image1 from '../../../../public/assets/maininfo1.svg';
import image2 from '../../../../public/assets/maininfo2.svg';
import image3 from '../../../../public/assets/maininfo3.svg';
import image4 from '../../../../public/assets/maininfo4.svg';
import SubPhoto from './sub-photo/SubPhoto';
const data = [
  {
    title: 'Hand over things',
    text: 'Want to do a good deed and get a bonus for your <br/> generosity? Simply click the button below to be taken to the <br/> Give page where you can fill out the form and send us <br/> information about your items to donate. We will take care of <br/>  all the organization and delivery. ',
    buttonText: 'GIVE',
    image: image1,
  },
  {
    title: 'Receive Items',
    text: 'Discover a variety of items, from clothing to other essentials,<br/> generously offered by our community, with the opportunity <br/> to receive assistance once every 48 hours.',
    buttonText: 'RECIEVE',
    image: image2,
  },
  {
    title: 'Calculate bonus',
    text: 'Want to know how much bonus you can get for your <br/> donations? Just use our bonus calculator! Enter your item <br/> information and we&apos;ll tell you how many bonus points you&apos;ll <br/> earn. ',
    buttonText: 'CALCULATOR',
    image: image3,
  },
  {
    title: 'How to use bonuses?',
    text: 'On the Main page there is a list of partners whose stores <br/> accept bonus orders.<br/> Addresses can be found on the <br/> About Us page.',
    buttonText: 'ABOUT US',
    image: image4,
  },
];
const Main = () => {
  return (
    <div>
      <MainPhoto />
      <div className="flex flex-col gap-40">
        {data.map((item, index) => {
          return (
            <MainInfo
              key={index}
              isRightAligned={index % 2 == 0 ? true : false}
              text={item.text}
              buttonText={item.buttonText}
              title={item.title}
              image={item.image}
            />
          );
        })}
      </div>
      <SubPhoto />
    </div>
  );
};

export default Main;
