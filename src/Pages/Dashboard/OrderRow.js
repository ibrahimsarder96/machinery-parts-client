import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const OrderRow = ({index, order, refetch}) => {
  const {customerName, productName, email} = order;
  const navigate = useNavigate();

  const handleDelete = () =>{
    fetch(`https://fast-scrubland-78671.herokuapp.com/order/${email}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.deletedCount){
        toast.success(`order is delete`);
        // setDeletingProduct(null)
        refetch();
      }
    })
  };
  return (
    <div>
      <tr className='text-white'>
          <th>{index + 1}</th>
          <td>{customerName}</td>
          <td>{productName}</td>
          <td>
          {!order.paid && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success '>pay</button></Link>}
          {order.paid && <span className='text-success'>paid</span>}
        </td>
          <td><button onClick={() => handleDelete(email)}  className='btn btn-primary '>remove</button></td>
        </tr>
    </div>
  );
};

export default OrderRow;