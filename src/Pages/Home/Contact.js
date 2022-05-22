import React from 'react';
import contact from '../../assets/images/contact.jpg'

const Contact = () => {
  return (
    <section style={{
      background: `url(${contact})`
    }} className='justify-center mt-16 py-10'>
      <div className='text-center'>
        <h1 className='text-primary font-bold text-xl mt-10'>Contact Us</h1>
        <h2 className='text-white text-3xl'>Stay connected with us</h2>
      </div>
      <div className='grid grid-cols-1 gap-3 justify-items-center'>
      <input type="text" placeholder="Email Address" className="input input-bordered input-info w-full max-w-xs my-4 text-white text-xl"/>
      <input type="text" placeholder="Subject" className="input input-bordered input-info w-full max-w-xs text-white text-xl" />
      <textarea type="text" placeholder="Your message" className="input input-bordered input-info w-full max-w-xs h-36 text-white text-xl" />
      </div>
    </section>
  );
};

export default Contact;