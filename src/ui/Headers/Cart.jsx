import React from 'react';
import { BsCartDash } from 'react-icons/bs';
import MainButton from '../buttons/MainButton';
const Cart = () => {
  return (
    <div className='flex items-center space-x-4'>
      <div className='bg-primary text-white font-bold text-[20px] p-[15px] rounded-full'>
        <BsCartDash />
      </div>
      <MainButton name='Sign Up' />
    </div>
  );
};

export default Cart;
