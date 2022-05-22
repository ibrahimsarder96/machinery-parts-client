import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
  const {productId} = useParams();

  const [user, loading, error] = useAuthState(auth);
  const handleOrder = event => {
    event.preventDefault()
    const phone = event.target.phone.value;
    const address = event.target.address.value;
    const order = event.target.order.value;
    console.log(phone, address, order)
  }
 
  return (
    <div className='card flex h-screen justify-center items-center'>
     <div className="card w-100  shadow-2xl">
      <div className="card">
      <h2 className="text-3xl text-accent text-center font-bold mt-6">Order Purchase</h2>
      <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center lg:p-8'>
      <input type="text" name='name' readOnly value={user?.displayName || ''} className="input input-bordered input-success w-full max-w-xs text-lg text-white my-4" />
      <input type="email" name='email' readOnly value={user?.email || ''} className="input input-bordered input-success w-full max-w-xs text-lg text-white" />
      <input type="text" name='phone' placeholder="Phone" className="input input-bordered input-success w-full max-w-xs text-lg text-white" />
      <input type="text" name='address' placeholder="Address" className="input input-bordered input-success w-full max-w-xs text-lg text-white" />
      <input type="text" name='order' placeholder="order" className="input input-bordered input-success w-full max-w-xs text-lg text-white" />
      <input type="submit" value="Order" className="bg-black btn-sm rounded-md w-full max-w-xs border-accent text-accent text-lg font-bold cursor-pointer"/>

      </form>
      </div>
      </div>
    </div>
  );
};

export default Purchase;