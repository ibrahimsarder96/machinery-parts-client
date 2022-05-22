import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  const {productId} = useParams();
  return (
    <div className='bg-white'>
      <h1 className='text-black text-4xl'>Hello Purchase: {productId}</h1>
    </div>
  );
};

export default Purchase;