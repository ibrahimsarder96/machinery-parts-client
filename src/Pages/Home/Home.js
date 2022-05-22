import React from 'react';
import Brand from './Brand';

import BussSum from './BussSum';
import Contact from './Contact';
import Footer from './Footer';
import HomeBanner from './HomeBanner';
import Products from './Products';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div className='mx-10'>
      <HomeBanner></HomeBanner>
      <Brand></Brand>
      <Products></Products>
      <BussSum></BussSum>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;