import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import OrderRow from './OrderRow';


const MyOrder = () => {
  // const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth) ;


  const {data: orders, isLoading, refetch} = useQuery('orders', () => fetch(`https://fast-scrubland-78671.herokuapp.com/order?customer=${user.email}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  })
  .then(res => {
          if(res.status === 401 || res.status === 403){
            navigate('/')
            signOut(auth)
            localStorage.removeItem('accessToken');
          }
          return res.json()
        }))

  if(isLoading){
    return <Loading></Loading>
  }



  return (
    <div>
      <h1 className='text-purple-400 mt-12 text-2xl font-bold'>Customer Order</h1>
      <div class="overflow-x-auto mt-5">
    <table class="table w-full">
    {/* <!-- head --> */}
    {/* <thead>
      <tr className='text-accent'>
        <th></th>
        <th className='text-2xl'>Name</th>
        <th className='text-2xl'>Product</th>
        <th className='text-2xl'>Order Cancel</th>
      </tr>
    </thead> */}
    <tbody>
      {
        orders.map((order, index) => <OrderRow
        order={order}
        key={order._id}
        index={index}
        refetch={refetch}
        ></OrderRow> )
      }
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyOrder;