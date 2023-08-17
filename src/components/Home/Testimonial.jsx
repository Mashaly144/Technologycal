import React from 'react';
import { Carousel, initTE } from 'tw-elements';
import Rating from '../../ui/Rating';
import user1 from '../../assets/Testimonial/user-1.jpg';

// Initialize the Carousel from tw-elements
initTE({ Carousel });

const Testimonial = () => {
  return (
    <div className='py-[100px]'>
      <div className='container mx-auto'>
        {/* Carousel wrapper */}
        <div
          id='carouselExampleCaptions'
          className='relative'
          data-te-carousel-init
          data-te-carousel-slide
        >
          {/* Carousel content */}
          <div className='relative w-full overflow-hidden after:clear-both after:block after:content-[""]'>
            {/* Testimonial 1 */}
            <div
              className='relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
              data-te-carousel-active
              data-te-carousel-item
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div>
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
            <div
              className='relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
              data-te-carousel-item
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div>
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
            <div
              className='relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
              data-te-carousel-item
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div>
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

          {/* Switch buttons for scrolling */}
          <button
            className='absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white'
            type='button'
            data-te-target='#carouselExampleCaptions'
            data-te-slide='prev'
          >
            <span className='inline-block h-8 w-8'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 19.5L8.25 12l7.5-7.5'
                />
              </svg>
            </span>
            <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
              Previous
            </span>
          </button>

          <button
            className='absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white'
            type='button'
            data-te-target='#carouselExampleCaptions'
            data-te-slide='next'
          >
            <span className='inline-block h-8 w-8'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            </span>
            <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
              Next
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
