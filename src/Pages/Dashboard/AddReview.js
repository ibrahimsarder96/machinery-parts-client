import React from 'react';

const AddReview = () => {
  const handleSubmit = event => {
    event.preventDefault();
    
    const review = {
    review:event.target.review.value,
    rating:event.target.rating.value,
    name:event.target.name.value,
    }
  };
  return (
    <div>
       <div className='card flex h-screen justify-center items-center'>
     <div className="card w-100  shadow-2xl">
      <div className="card">
      <h2 className="text-3xl text-accent text-center font-bold mt-6">Customer Review</h2>
      <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center lg:p-8'>
      <input type="text" name='review' placeholder='Review'  className="input input-bordered input-success w-full max-w-xs text-lg text-white my-4" />
      <input type="rating" name='rating' placeholder='rating' className="input input-bordered input-success w-full max-w-xs text-lg text-white" />
      <input type="text" name='name' placeholder="Name" className="input input-bordered input-success w-full max-w-xs text-lg text-white" />
     

      <input type="submit" value="Add" className="bg-black btn-sm rounded-md w-full max-w-xs border-accent text-accent text-lg font-bold cursor-pointer"/>
      </form>
      </div>
      </div>
      </div>
    </div>
  );
};

export default AddReview;