import React from 'react';
import FeaturesCard from './FeaturesCard';

const Features = () => {
  return (
    <div className='py-[100px]'>
      <div className='container mx-auto'>
        <div>
          <h1 className='text-5xl text-center pb-10'>
            Simple, yet Powerful Features
          </h1>
          <FeaturesCard />
        </div>
      </div>
    </div>
  );
};

export default Features;
