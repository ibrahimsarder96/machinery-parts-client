import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingProduct, refetch, setDeletingProduct}) => {
  const {name, email} = deletingProduct;

  
  const handleDelete = () =>{
    fetch(`https://fast-scrubland-78671.herokuapp.com/product/${email}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount){
        toast.success(`doctor ${name} is delete`);
        setDeletingProduct(null)
        refetch();
      }
      console.log(data)
    })
  };

  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete ${name}!</h3>
          <p class="py-4 text-accent">You've been selected Product</p>
          <div class="modal-action">
          <button onClick={handleDelete} class="btn btn-xs btn-error">Delete</button>
            <label for="delete-confirm-modal" class="btn btn-xs btn-accent">cancel</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;