import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth) ;
  // const navigate = useNavigate();

  useEffect( () =>{
    if(user){
      fetch(`http://localhost:5000/order?customer=${user.email}`, 
      {
        method: 'GET',
        headers: {
          'Authorization' : ` Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => {
        if(res.status === 401 || res.status === 403){
          Navigate('/')
          signOut(auth)
          localStorage.removeItem('accessToken');
        }
        return res.json()
      })
      .then(data => {
        setOrders(data)
      })
    }
  },[user])
  return (
    <div>
      <div class="overflow-x-auto mt-5">
    <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr className='text-accent'>
        <th></th>
        <th className='text-2xl'>Name</th>
        <th className='text-2xl'>Product</th>
        <th className='text-2xl'>Order Cancel</th>
      </tr>
    </thead>
    <tbody>
      {
        orders.map((order, index) =>  <tr className='text-white'>
          <th>{index + 1}</th>
          <td>{order.customerName}</td>
          <td>{order.productName}</td>
          <td><button className='btn btn-primary'>remove</button></td>
        </tr>)
      }
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyOrder;