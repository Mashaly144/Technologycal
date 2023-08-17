import React from 'react';
import MainButton from '../../ui/buttons/MainButton';
import BlogCard from './BlogCard';

const Blog = () => {
  return (
    <div className='py-[100px]'>
      <div className='container mx-auto'>
        <div>
          {/* text */}
          <div className='flex justify-between items-center py-[50px]'>
            <div className='space-y-5 w-[50%]'>
              <h1 className='text-4xl'>Latest News and Articles</h1>
              <p>
                We currently support Facebook, Instagram, LinkedIn and Twitter.
                More to come. Felix is purpose built for ease of use and
                complete flexability.
              </p>
            </div>
            <MainButton name={'See More News'} />
          </div>
          {/* cards */}
          <div>
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
