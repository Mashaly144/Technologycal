import React from 'react';
import MainButton from '../../ui/buttons/MainButton';

const WorkProcces = () => {
  return (
    <div className='py-[100px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-between space-y-[20px] lg:space-y-0 lg:flex-row md:flex-col gap-[20px]'>
          <div className='workProccesBackground flex-col lg:w-[30%] '>
            <h1 className='text-white'>
              Our Working Process - How We Work For Our Customers
            </h1>
            <p className='text-white/70 my-4'>
              We currently support Facebook, Instagram, LinkedIn and Twitter.
              More to come.
            </p>
            <MainButton name={'Get Started'} style={'bg-white font-semibold'} />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 flex-1  '>
            <div className='p-[10px] flex flex-col justify-between space-y-2'>
              <span className='text-4xl font-bold mb-3'>01</span>

              <h1 className='text-xl'>Create your free account</h1>
              <p>
                Building enterprise doesn't need nightmare or cost your
                thousands. Felix is purpose built.
              </p>
            </div>
            <div className='p-[10px] flex flex-col justify-between space-y-2'>
              <span className='text-4xl font-bold mb-3'>02</span>

              <h1 className='text-xl'>Create your free account</h1>
              <p>
                Building enterprise doesn't need nightmare or cost your
                thousands. Felix is purpose built.
              </p>
            </div>
            <div className='p-[10px] flex flex-col justify-between space-y-2'>
              <span className='text-4xl font-bold mb-3'>03</span>

              <h1 className='text-xl'>Create your free account</h1>
              <p>
                Building enterprise doesn't need nightmare or cost your
                thousands. Felix is purpose built.
              </p>
            </div>
            <div className='p-[10px] flex flex-col justify-between space-y-2'>
              <span className='text-4xl font-bold mb-3'>04</span>

              <h1 className='text-xl'>Create your free account</h1>
              <p>
                Building enterprise doesn't need nightmare or cost your
                thousands. Felix is purpose built.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcces;
