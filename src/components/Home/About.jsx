import React from 'react';
import aboutImage from '../../assets/about-img.png';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import MainButton from '../../ui/buttons/MainButton';
const About = () => {
  return (
    <div className='py-[100px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0'>
          {/* text */}
          <div className='flex flex-col justify-between flex-1 space-y-6'>
            <h1>The Tool That Feels Like a..</h1>
            <p>
              Building an enterprise level site doesn't need nightmare or cost
              your thousands. Felix is purpose built for ease of use and
              complete flexability to create even the most powerful of products.
            </p>
            {/* list  */}
            <div className='flex flex-col space-y-5'>
              <div className='flex items-center space-x-2'>
                <AiOutlineCheckCircle className='text-green-500' />
                <p>Posting to social media, blogs, and messengers</p>
              </div>
              <div className='flex items-center space-x-2'>
                <AiOutlineCheckCircle className='text-green-500' />
                <p>Working with images and videos</p>
              </div>
              <div className='flex items-center space-x-2'>
                <AiOutlineCheckCircle className='text-green-500' />
                <p>The Future of Writing Blog Articles</p>
              </div>
            </div>
            <MainButton
              name={'Get Started'}
              style={'bg-headerColor text-white'}
            />
          </div>
          {/* image */}
          <div className='flex-1'>
            <img src={aboutImage} alt='about' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
