import React from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({index, order, refetch}) => {
  const {customerName, productName, email} = order;

  const handleDelete = () =>{
    fetch(`http://localhost:5000/order/${email}`, {
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
          <td><button onClick={() => handleDelete(email)}  className='btn btn-primary '>remove</button></td>
        </tr>
    </div>
  );
};

export default OrderRow;