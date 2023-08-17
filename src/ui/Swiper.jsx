import React, { useEffect } from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import Rating from './Rating';
import user1 from '../assets/Testimonial/user-1.jpg';

const Testimonial = () => {
  useEffect(() => {
    new Swiper('.testimonial-slider', {
      slidesPerView: 1,
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      },
      loop: true,
      navigation: {
        prevEl: '.testimonial-slider-prev',
        nextEl: '.testimonial-slider-next',
      },
    });
  }, []);

  return (
    <div className='py-[100px]'>
      <div className='container mx-auto'>
        <div className='swiper-container testimonial-slider relative'>
          <div className='swiper-wrapper'>
            {/* Testimonial 1 */}
            <div className='swiper-slide'>
              <div className='flex flex-col justify-between items-center flex-1'>
                <h1>Our Happy Family</h1>
                <div className='mb-6 mt-12 flex justify-center'>
                  <img
                    src={user1}
                    className='h-24 w-24 rounded-full shadow-lg dark:shadow-black/30'
                    alt='sample image'
                  />
                </div>
                <p className='text-neutral-500 dark:text-neutral-300 mb-[15px]'>
                  <span>Mick G.</span>, Head of Sales and Marketing
                </p>
                <Rating />
                <p className='mx-auto max-w-xl text-xl italic text-neutral-700 dark:text-neutral-300 mt-[15px]'>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident voluptate esse
                  quasi,"
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className='swiper-slide'>
              <div className='flex flex-col justify-between items-center flex-1'>
                <h1>Our Happy Family</h1>
                <div className='mb-6 mt-12 flex justify-center'>
                  <img
                    src={user1}
                    className='h-24 w-24 rounded-full shadow-lg dark:shadow-black/30'
                    alt='sample image'
                  />
                </div>
                <p className='text-neutral-500 dark:text-neutral-300 mb-[15px]'>
                  <span>Mick G.</span>, Head of Sales and Marketing
                </p>
                <Rating />
                <p className='mx-auto max-w-xl text-xl italic text-neutral-700 dark:text-neutral-300 mt-[15px]'>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident voluptate esse
                  quasi,"
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className='swiper-slide'>
              <div className='flex flex-col justify-between items-center flex-1'>
                <h1>Our Happy Family</h1>
                <div className='mb-6 mt-12 flex justify-center'>
                  <img
                    src={user1}
                    className='h-24 w-24 rounded-full shadow-lg dark:shadow-black/30'
                    alt='sample image'
                  />
                </div>
                <p className='text-neutral-500 dark:text-neutral-300 mb-[15px]'>
                  <span>Mick G.</span>, Head of Sales and Marketing
                </p>
                <Rating />
                <p className='mx-auto max-w-xl text-xl italic text-neutral-700 dark:text-neutral-300 mt-[15px]'>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident voluptate esse
                  quasi,"
                </p>
              </div>
            </div>
          </div>
          <h1 className='text-4xl text-center mt-[50px]'>Swipe</h1>
          {/* Switch buttons for scrolling */}
          {/* <button
            className='testimonial-slider-prev absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white'
            type='button'
          >
            <div className='w-[70px] h-[70px] rounded-full flex justify-center items-center hover:bg-primary hover:text-white'>
              <AiOutlineLeft className='text-4xl' />
            </div>
          </button>
          <button
            className='testimonial-slider-next absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white'
            type='button'
          >
            <div className='w-[70px] h-[70px] rounded-full flex justify-center items-center hover:bg-primary hover:text-white'>
              <AiOutlineRight className='text-4xl' />
            </div>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
