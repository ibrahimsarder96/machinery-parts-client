import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';




const AddProduct = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  
  //imgbb api key
  const imageStorageKey = '79656a0791bc06b38b44a5b134949945';

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(result => {
      if(result.success){
        const img = result.data.url;
          const product = {
            name: data.name,
            price: data.price,
            minimum: data.minimum,
            available: data.available,
            description: data.description,
            img: img
          }
          // send database----
          fetch('https://fast-scrubland-78671.herokuapp.com/product', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
          })
          .then(res => res.json())
          .then(inserted =>{
            if(inserted.insertedId){
              toast.success('product added successfully');
              reset();
            }
            else{
              toast.error('Failed to add the product')
            }
          })
        }
    })
  };

  return (
    <div>
        <div className='card flex h-screen justify-center items-center'>
     <div className="card w-100 lg:p-10 shadow-2xl">
      <div className="card">
         <h2 className='text-3xl text-accent text-center mt-10'>Add A New Product</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-control w-full max-w-xs">
      <input 
      type="text" 
      placeholder="Name" 
      className="input input-bordered w-full max-w-xs border-accent text-accent text-xl" 
      {...register("name", {
        required: {
          value: true,
          message: 'Name is Required'
        }
      }
      )}
      />
      <label className="label">
      {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
      </label>
    </div>

    <div className="form-control w-full max-w-xs">
      <input 
      type="text" 
      placeholder="Price" 
      className="input input-bordered w-full max-w-xs border-accent text-accent text-xl" 
      {...register("price", {
        required: {
          value: true,
          message: 'Price is Required'
        }
      }
      )}
      />
      <label className="label">
      {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
      </label>
    </div>
     
    <div className="form-control w-full max-w-xs">
      <input 
      type="text" 
      placeholder="minimum order quantity" 
      className="input input-bordered w-full max-w-xs border-accent text-accent text-xl" 
      {...register("minimum", {
        required: {
          value: true,
          message: 'minimum quantity is Required'
        }
      }
      )}
      />
      <label className="label">
      {errors.minimum?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimum.message}</span>}
      </label>
    </div>
     
    <div className="form-control w-full max-w-xs">
      <input 
      type="text" 
      placeholder="available quantity" 
      className="input input-bordered w-full max-w-xs border-accent text-accent text-xl" 
      {...register("available", {
        required: {
          value: true,
          message: 'available quantity is Required'
        }
      }
      )}
      />
      <label className="label">
      {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
      </label>
    </div>
     
    <div className="form-control w-full max-w-xs">
      <input 
      type="text" 
      placeholder="description" 
      className="input input-bordered w-full max-w-xs border-accent text-accent text-xl" 
      {...register("description", {
        required: {
          value: true,
          message: 'description is Required'
        }
      }
      )}
      />
      <label className="label">
      {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
      </label>
    </div>
     
    <div className="form-control w-full max-w-xs">
      <input 
      type="file" 
      placeholder="image" 
      className="input input-bordered w-full max-w-xs border-accent text-accent text-xl" 
      {...register("image", {
        required: {
          value: true,
          message: 'Image is Required'
        }
      }
      )}
      />
      <label className="label">
      {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
      </label>
    </div>  
    {/* {signInError} */}
      <input className='btn w-full max-w-xs bg-accent text-white' type="submit" value="Add" />
    </form>
    </div>
    </div>
  </div>
</div>
  );
};

export default AddProduct;