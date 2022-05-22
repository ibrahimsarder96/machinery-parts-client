import React from 'react';

const Product = ({product}) => {
  const {name, img, description, price, minimum, maximum} = product;
  return (
    <div class="card bg-white ">
  <figure class="px-10 pt-10">
    <img src={img} alt="tools" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center text-black">
    <h2 class="card-title">{name}</h2>
    <h2 className=''>${price}</h2>
    <h2 className=''>Minimum Order Quantity: {minimum}</h2>
    <h2 className=''>Available Quantity: {maximum}</h2>
    <p>{description}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default Product;