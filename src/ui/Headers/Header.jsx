import React from 'react';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Cart from './Cart';
import Logo from '../Logo';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  return (
    <header className='py-[10px]'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <Logo />
          {/* nav bar */}
          <Nav />
          {/* nav mobile */}
          <AiOutlineMenu className='lg:hidden text-2xl' />
          <NavMobile />
          {/* card buttons */}
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
