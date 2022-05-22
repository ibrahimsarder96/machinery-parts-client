import React from 'react';
import { useNavigate} from 'react-router-dom';

const Product = ({product}) => {
  const {_id, name, img, description, price, minimum, maximum} = product;
  const navigate = useNavigate();

  const handlePurchase = id => {
    navigate(`/purchase/${id}`)
  }
  return (
    <div className="card bg-white ">
  <figure className="px-10 pt-10">
    <img src={img} alt="tools" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center text-black">
    <h2 className="card-title">{name}</h2>
    <h2 className=''>${price}</h2>
    <h2 className=''>Minimum Order Quantity: {minimum}</h2>
    <h2 className=''>Available Quantity: {maximum}</h2>
    <p>{description}</p>
    <div className="card-actions">
      <button onClick={() => handlePurchase(_id)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default Product;