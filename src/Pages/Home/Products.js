import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect( () => {
    fetch(`products.json`)
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  return (
    <div className='bg-white'>
      <h2 className='text-black text-center text-2xl font-bold'>Machinery Tools</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {
          products.map(product => <Product
          key={product._id}
          product={product}
          ></Product>)
        }
      </div>
    </div>
  );
};

export default Products;