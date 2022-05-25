import React from 'react';

const Review = ({review}) => {
  return (
    <section>
      <div className="card lg:max-w-lg  bg-white shadow-2xl">
        <div className="card-body">
        <p className='text-black'>{review.review}</p>
        <div className="flex items-center">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-6">
            <img src={review.img} alt=""/>
          </div>
            </div>
          <div>
            <h1 className='text-black text-xl font-bold'>{review.name}</h1>
            <h2 className='text-black'>{review.rating}</h2>
          </div>
        </div>
          </div>
        </div>
    </section>
  );
};

export default Review;