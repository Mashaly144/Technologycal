import React from 'react';
import MainButton from '../../ui/buttons/MainButton';

const Banners = () => {
  return (
    <div className=''>
      <div className='container mx-auto bannerBackground h-[500px] flex justify-center items-center'>
        <div className='flex flex-col justify-between items-center space-y-7 '>
          <h1 className='text-white text-3xl text-center leading-[50px]'>
            All In One Social Media Management Solution For Businesses
          </h1>
          <p className='text-white'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <MainButton
            name='Create Free Account'
            style={'bg-white text-black'}
          />
        </div>
      </div>
    </div>
  );
};

export default Banners;
