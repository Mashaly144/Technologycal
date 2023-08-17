import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='hidden lg:block'>
      <ul className='flex justify-between items-center space-x-2'>
        <li className='p-[20px]'>
          <Link to='/'>Home</Link>
        </li>
        <li className='p-[20px]'>
          <Link to='/features'>Features</Link>
        </li>
        <li className='p-[20px]'>
          <Link to='/resources'>Resources</Link>
        </li>
        <li className='p-[20px]'>
          <Link to='/pricing'>Pricing</Link>
        </li>
        <li className='p-[20px]'>
          <Link to='/blog'>Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
