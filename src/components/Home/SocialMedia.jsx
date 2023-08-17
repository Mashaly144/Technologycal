import React from 'react';
import socialImage from '../../assets/socialMedia-img.png';
import MainButton from '../../ui/buttons/MainButton';
const SocialMedia = () => {
  return (
    <div className='py-[100px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0'>
          {/* text */}
          <div className='flex flex-col justify-between flex-1 space-y-6'>
            <h1>Connect all the social networks you love</h1>
            <p>
              We currently support Facebook, Instagram, LinkedIn and Twitter.
              More to come. Felix is purpose built for ease of use and complete
              flexability.
            </p>
            <MainButton
              name={'Get Started'}
              style={'bg-headerColor text-white'}
            />
          </div>
          {/* image */}
          <div className='flex-1'>
            <img src={socialImage} alt='about' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
