'use client';
import React from 'react';
import MainPhoto from '../../main/ui/main-photo/MainPhoto';
import Wrapper from '../../about/ui/wrapper/Wrapper';
import background from '../../../../public/assets/aboutBackground.svg';

export default function About() {

 
  return (
    <div>
      <MainPhoto
        background={background}
        text={'Making the World a Better Place, One <br/> Good Deed at a Time'}
        subtext={
          'Join us on our journey as we strive to make a meaningful difference in the world. <br/>Through acts of kindness, generosity, and compassion, we&apos;re dedicated to creating positive <br/> change, one good deed at a time. Together, let&apos;s build a brighter future for <br/> everyone.'
        }
      ></MainPhoto>
      <Wrapper />
    </div>
  );
}
