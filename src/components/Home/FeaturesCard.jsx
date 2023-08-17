import React from 'react';
import MainButton from '../../ui/buttons/MainButton';

import { features } from '../../constant/data';
const FeaturesCard = () => {
  return (
    <div className='featuresCard'>
      {features.map((item, index) => {
        return (
          <div className='p-[40px] flex flex-col justify-between space-y-[30px] rounded-3xl border border-neutral-200'>
            <MainButton name={item.state} style={'bg-[#F6F6F6]'} />
            <div>
              <h1 className='text-2xl mb-3'>{item.title}</h1>
              <p>{item.description}</p>
            </div>
            <div className='flex justify-between items-center'>
              <img src={item.img} alt={item.title} />
              <MainButton name='Get Started' style={'bg-[#F6F6F6]'} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesCard;
