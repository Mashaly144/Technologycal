import React from 'react';
import MainButton from '../buttons/MainButton';
import { AiFillCheckCircle } from 'react-icons/ai';

const Subscribe = () => {
  return (
    <div className='bg-footerCardBg p-[30px] rounded-3xl flex flex-1 justify-center items-center w-fit space-x-[30px]'>
      {/* text */}
      <div className='space-y-[30px]'>
        <MainButton
          name='Popular'
          style='text-white font-bold font-primary bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-400'
        />
        <h1 className='text-white font-semibold'>
          Startup $<span className='text-[60px]'>25</span>
        </h1>
        <MainButton name={'Choose Plan'} style='text-white bg-[#424242]' />
      </div>
      {/* border vertical */}
      <div className='h-full w-[1px] bg-white/40' />
      {/* list */}
      <div>
        <ul className=' space-y-2'>
          <li className='text-white flex items-center'>
            <AiFillCheckCircle className='text-[#31C65B] mr-[10px]' /> 3 social
            set
          </li>
          <li className='text-white flex items-center'>
            <AiFillCheckCircle className='text-[#31C65B] mr-[10px]' /> 150 posts
            per social
          </li>
          <li className='text-white flex items-center'>
            <AiFillCheckCircle className='text-[#31C65B] mr-[10px]' /> 5 users
          </li>
          <li className='text-white flex items-center'>
            <AiFillCheckCircle className='text-[#31C65B] mr-[10px]' /> Phone
            Support
          </li>
          <li className='text-white flex items-center'>
            <AiFillCheckCircle className='text-[#31C65B] mr-[10px]' /> Planning
            & publishing
          </li>
          <li className='text-white flex items-center'>
            <AiFillCheckCircle className='text-[#31C65B] mr-[10px]' /> Analytics
            tools
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Subscribe;
