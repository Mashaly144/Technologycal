import React from 'react';
import logo from './../assets/logo.png';
const Logo = () => {
  return (
    <div className='flex items-center'>
      <img className='w-[40px]' src={logo} alt='logo' />
      <h1 className='text-2xl'>Technologycal</h1>
    </div>
  );
};

export default Logo;
