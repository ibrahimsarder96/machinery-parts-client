import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProducts from '../../hooks/useProducts';
import Loading from '../Shared/Loading';
import { toast} from 'react-toastify';


const Purchase = () => {
  const {productId} = useParams();
  const [product] = useProducts(productId);
  const [quantity, setQuantity] = useState()

  const [user, loading, error] = useAuthState(auth);
  if(loading){
    return <Loading></Loading>
  }
  const handleOrder = event => {
    event.preventDefault();
    if(event.target.quantity.value > 200 && event.target.quantity.value < 1000){
      setQuantity(event.target.quantity.value);
    }
    else{
      return alert(`please, min order ${product.minimum} and max ${product.maximum}`)
    }
    console.log(quantity)
    const order = {
      productId: product._id,
      productName: product.name,
      quantity,
      customerName: user.displayName,
      customer: user.email,
      phone: event.target.phone.value,
      address: event.target.address.value
    }
    fetch('https://fast-scrubland-78671.herokuapp.com/order',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      toast('order successfully!')
    })
  }
 
  return (
   <div>
     <div className='flex justify-center items-center mt-5'>
     <div class="card w-96 bg-black shadow-xl">
      <div class="card-body items-center text-center">
        
        <h2 class="card-title text-white">{product.name}</h2>
        <h2 className='text-white'>${product.price}</h2>
        <h2 className='text-white'>minimum order quantity: {product.minimum}</h2>
        <h2 className='text-white'>available quantity: {product.maximum}</h2>
        <p className='text-white'>{product.description}</p>
        </div>
      </div>
     </div>
      {/* below order part*/}
      <div className='card flex h-screen justify-center items-center'>
     <div className="card w-100  shadow-2xl">
      <div className="card">
      <h2 className="text-3xl text-accent text-center font-bold mt-6">Order Purchase</h2>
      <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center lg:p-8'>
      <input type="text" name='name' readOnly value={product.name} className="input input-bordered input-success w-full max-w-xs text-lg text-white my-4" />
      <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered input-success w-full max-w-xs text-lg text-white" />
      <input type="text" name='name' readOnly value={user?.displayName || ''} className="input input-bordered input-success w-full max-w-xs text-lg text-white my-4" />
      <input type="email" name='email' readOnly value={user?.email || ''} className="input input-bordered input-success w-full max-w-xs text-lg text-white" />
      <input type="text" name='phone' placeholder="Phone" className="input input-bordered input-success w-full max-w-xs text-lg text-white" />
      <input type="text" name='address' placeholder="Address" className="input input-bordered input-success w-full max-w-xs text-lg text-white" />

      <input type="submit" value="Order" className="bg-black btn-sm rounded-md w-full max-w-xs border-accent text-accent text-lg font-bold cursor-pointer"/>
      </form>
      </div>
      </div>
    </div>
   </div>
  );
};

export default Purchase;