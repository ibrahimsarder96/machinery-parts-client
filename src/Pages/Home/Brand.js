import React from 'react';
import brand1 from '../../assets/brand/brand-1.png'
import brand2 from '../../assets/brand/brand-2.png'
import brand3 from '../../assets/brand/brand-3.png'
import brand4 from '../../assets/brand/brand-4.png'
import brand5 from '../../assets/brand/brand-5.png'
import brand6 from '../../assets/brand/brand-6.png'
import brand7 from '../../assets/brand/brand-7.png'
import brand8 from '../../assets/brand/brand-8.png'

const Brand = () => {
  return (
<div className='text-center mb-36'>
    <h1 className='text-2xl font-bold text-purple-500'>High quality brands from our assortment.</h1>
    <h2 className='text-black text-xl'>Here we present you our carefully selected brands whose products you will find in our shop.</h2>
    <div className='grid grid-cols-1 lg:grid-cols-6 mt-5'>
     
       <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        {/* <img src={brand5} alt="" />
        <img src={brand6} alt="" /> */}
        <img src={brand7} alt="" />
        <img src={brand8} alt="" />
    </div>
</div>
  );
};

export default Brand;