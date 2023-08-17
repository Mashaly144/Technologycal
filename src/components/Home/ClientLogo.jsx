import React from 'react';
import brand1 from '../../assets/clientLogo/brand1.svg';
import brand2 from '../../assets/clientLogo/brand2.svg';
import brand3 from '../../assets/clientLogo/brand3.svg';
import brand4 from '../../assets/clientLogo/brand4.svg';
import brand5 from '../../assets/clientLogo/brand5.svg';
const ClientLogo = () => {
  return (
    <div className='py-[100px]'>
      <div className='container mx-auto'>
        <div className='flex lg:justify-between items-center flex-wrap justify-center'>
          <img src={brand3} alt='brand1' />
          <img src={brand5} alt='brand1' />
          <img src={brand1} alt='brand1' />
          <img src={brand2} alt='brand1' />
          <img src={brand4} alt='brand1' />
        </div>
      </div>
    </div>
  );
};

export default ClientLogo;
