import React from 'react';
import MainButton from '../../ui/buttons/MainButton';
import blog1 from '../../assets/blog/blog-1.png';
import blog2 from '../../assets/blog/blog-2.png';
import blog3 from '../../assets/blog/blog-3.png';

const BlogCard = () => {
  return (
    <div className='featuresCard'>
      <div className='space-y-5'>
        {/* image */}
        <div className='relative overflow-hidden bg-cover bg-no-repeat'>
          <img className='rounded-[20px] w-full' src={blog1} alt='' />
          <div className='absolute bottom-4 left-4'>
            <MainButton name={'View More'} style={'bg-white'} />
          </div>
        </div>
        {/* date */}
        <div className='flex justify-between items-center'>
          <p>December 05, 2021</p>
          <span>3 min read</span>
        </div>
        {/* content */}
        <div className=' space-y-5'>
          <h5>Detailed insights for your social media</h5>
          <p>
            Lorem Ipsum is simply dummy text the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy.
          </p>
          <MainButton name={'View More'} />
        </div>
      </div>
      <div className='space-y-5'>
        {/* image */}
        <div className='relative overflow-hidden bg-cover bg-no-repeat'>
          <img className='rounded-[20px] w-full' src={blog2} alt='' />
          <div className='absolute bottom-4 left-4'>
            <MainButton name={'View More'} style={'bg-white'} />
          </div>
        </div>
        {/* date */}
        <div className='flex justify-between items-center'>
          <p>December 05, 2021</p>
          <span>3 min read</span>
        </div>
        {/* content */}
        <div className=' space-y-5'>
          <h5>Detailed insights for your social media</h5>
          <p>
            Lorem Ipsum is simply dummy text the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy.
          </p>
          <MainButton name={'View More'} />
        </div>
      </div>
      <div className='space-y-5'>
        {/* image */}
        <div className='relative overflow-hidden bg-cover bg-no-repeat'>
          <img className='rounded-[20px] w-full' src={blog3} alt='' />
          <div className='absolute bottom-4 left-4'>
            <MainButton name={'View More'} style={'bg-white'} />
          </div>
        </div>
        {/* date */}
        <div className='flex justify-between items-center'>
          <p>December 05, 2021</p>
          <span>3 min read</span>
        </div>
        {/* content */}
        <div className=' space-y-5'>
          <h5>Detailed insights for your social media</h5>
          <p>
            Lorem Ipsum is simply dummy text the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy.
          </p>
          <MainButton name={'View More'} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
