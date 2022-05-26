import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect( () => {
    fetch(`https://fast-scrubland-78671.herokuapp.com/product`)
    .then(res => res.json())
    .then(data => setProducts(data))
  },[]);
  return (
    <div className='bg-white'>
      <div>
      <h2 className='text-purple-500 text-center text-3xl font-bold'>Machinery Tools</h2>
      </div>
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