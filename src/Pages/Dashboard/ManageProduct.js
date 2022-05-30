import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ProductRow from './ProductRow'

const ManageProduct = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
  const {data: products, isLoading, refetch} = useQuery('products', () => fetch('https://fast-scrubland-78671.herokuapp.com/product', {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))

  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <div class="overflow-x-auto mt-3">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
   {
     products.map((product, index) => <ProductRow
     key={product._id}
     product={product}
     index={index}
     refetch={refetch}
     setDeletingProduct={setDeletingProduct}
     ></ProductRow>)
   }
    </tbody>
  </table>
  </div>
  {deletingProduct && <DeleteConfirmModal
   deletingDoctor={deletingProduct}
   setDeletingDoctor={setDeletingProduct}
   refetch={refetch}
   ></DeleteConfirmModal>}
    </div>
  );
};

export default ManageProduct;