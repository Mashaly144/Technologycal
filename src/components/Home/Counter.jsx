import React from 'react';
import MainButton from '../../ui/buttons/MainButton';

const Counter = () => {
  return (
    <div className='py-[100px]'>
      <div className='container mx-auto'>
        <div>
          <h1 className='text-3xl lg:text-5xl text-center mb-[40px]'>
            Businesses all over the world trust Buffer to build their brand
          </h1>
          <hr />
          {/* status */}
          <div className='py-[105px] flex flex-col lg:flex-row md:flex-row justify-between items-center gap-4'>
            <div className='text-center'>
              <h1 className='text-primary text-4xl mb-3'>10 years</h1>
              <p>In Business</p>
            </div>
            <div className='text-center'>
              <h1 className='text-primary text-4xl mb-3'>75,000+</h1>
              <p>Customers</p>
            </div>
            <div className='text-center'>
              <h1 className='text-primary text-4xl mb-3'>100k+</h1>
              <p>Monthly Blog Readers</p>
            </div>
            <div className='text-center'>
              <h1 className='text-primary text-4xl mb-3'>1.2m+</h1>
              <p>Social Followers</p>
            </div>
          </div>
          <hr />
          {/* footer */}
          <div className='flex flex-col justify-between items-center gap-[20px] mt-[40px]'>
            <h3 className='text-center'>
              Join 160,000+ small businesses like yours
            </h3>
            <MainButton
              name={'Select a plan'}
              style={'bg-headerColor text-white'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
