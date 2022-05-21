import React from 'react';
import countries from '../../assets/countries.jpg'
import project from '../../assets/project.png'
import client from '../../assets/client.png'
import feedback from '../../assets/feedback.png'

const BussSum = () => {
  return (
    <div className='my-12'>
      <h2 className='text-center text-3xl font-bold text-purple-500'>Business summary</h2>
      <div className='grid grid-cols-1 lg:grid-cols-4 mt-8'>
        <div className='flex justify-center items-center my-3'>
         <div>
         <div class="avatar">
            <div class="w-24 mask mask-squircle">
              <img src={countries} alt=""/>
            </div>
          </div>
          <h1 className='text-5xl text-black my-3 font-bold'>56</h1>
          <h2 className='text-green-400 text-2xl'>Countries</h2>
         </div>
        </div>
        <div className='flex justify-center items-center'>
         <div>
         <div class="avatar">
            <div class="w-24 mask mask-squircle">
              <img src={project} alt=""/>
            </div>
          </div>
         <h2 className='text-5xl text-black my-3 font-bold'>450+</h2>
          <h2 className='text-green-400 text-2xl'>Complete Project</h2>
         </div>
        </div>
        <div className='flex justify-center items-center'>
         <div>
         <div class="avatar">
            <div class="w-24 mask mask-squircle">
              <img src={client} alt=""/>
            </div>
          </div>
          <h2 className='text-5xl text-black my-3 font-bold'>320+</h2>
         <h2 className='text-green-400 text-2xl'>Happy Clients</h2>
         </div>
        </div>
        <div className='flex justify-center items-center'>
         <div>
         <div class="avatar">
            <div class="w-24 mask mask-squircle">
              <img src={feedback} alt=""/>
            </div>
          </div>
          <h2 className='text-5xl text-black my-3 font-bold'>220+</h2>
         <h2 className='text-green-400 text-2xl'>Feedback</h2>
         </div>
        </div>
      </div>
    </div>
  );
};

export default BussSum;