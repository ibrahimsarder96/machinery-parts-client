import React from 'react';
import BussSum from './BussSum';
import HomeBanner from './HomeBanner';
import Products from './Products';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div className='mx-10'>
      <HomeBanner></HomeBanner>
      <Products></Products>
      <BussSum></BussSum>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;