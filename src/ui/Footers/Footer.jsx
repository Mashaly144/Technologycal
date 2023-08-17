import React from 'react';
import Logo from '../Logo';
import MainButton from '../buttons/MainButton';
import {
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitch,
  IoLogoLinkedin,
} from 'react-icons/io';

import { resources, utilityPages } from '../../constant/data';
import Subscribe from './Subscribe';
const Footer = () => {
  return (
    <footer className=''>
      <div className='container mx-auto '>
        <div className='flex flex-col justify-between gap-[30px] '>
          {/* top footer */}
          <hr />
          <div className='flex justify-between items-center'>
            <Logo />
            <MainButton name='See our Case Studies' />
          </div>
          <hr />
          {/* text footer */}
          <div className='flex flex-col lg:flex-row items-center'>
            {/* linls groub */}
            <div className='flex flex-1 flex-col  gap-16 lg:flex-row'>
              {/* resources */}
              <div className='w-full text-center lg:text-left'>
                <h1 className='mb-6 text-2xl font-medium'>Resources</h1>
                <ul className='space-y-4 text-xl  text-gray'>
                  {resources.map((item, index) => {
                    return (
                      <li
                        className='transition-all duration-300 hover:text-blue'
                        key={index}
                      >
                        <a href={item.href}>{item.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* nav links */}
              <div className='w-full text-center lg:text-left'>
                <h1 className='mb-6 text-2xl font-medium'>Utility Pages</h1>
                <ul className=' space-y-4 text-xl  text-gray'>
                  {utilityPages.map((item, index) => {
                    return (
                      <li
                        className='transition-all duration-300 hover:text-blue'
                        key={index}
                      >
                        <a href={item.href}>{item.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* card subscribe */}
            <Subscribe />
          </div>
          <hr />
          {/* botton footer */}
          <div className='flex flex-col items-center lg:flex-row lg:justify-between'>
            <h1 className='mb-5 text-[20px]'>
              ©2021 CRAPPO. All rights reserved
            </h1>
            <div className='flex gap-x-8 text-2xl'>
              <IoLogoFacebook className='transition w-[30px] h-[30px] hover:text-primary cursor-pointer' />
              <IoLogoInstagram className='transition w-[30px] h-[30px] hover:text-primary cursor-pointer' />
              <IoLogoYoutube className='transition w-[30px] h-[30px] hover:text-primary cursor-pointer' />
              <IoLogoTwitch className='transition w-[30px] h-[30px] hover:text-primary cursor-pointer' />
              <IoLogoLinkedin className='transition w-[30px] h-[30px] hover:text-primary cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
