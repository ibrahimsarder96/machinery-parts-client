import React from 'react';
import home from '../../assets/home.webp'

const HomeBanner = () => {
  return (
    <div className="hero min-h-screen bg-white">
  <div className="hero-content flex-col lg:flex-row-reverse xl:max-w-screen-2xl">
    <img src={home} className="max-w-sm rounded-lg shadow-2xl" alt=""/>
    <div>
      <h1 className="text-5xl font-bold text-purple-300">Your New Brand Machine Tools</h1>
      <p className="py-6 text-black">Bhavya has been at the forefront of machine tool technology since its foundation, supplying a unique range of intelligent precision engineering technologies and solutions to a variety of industrial applications. The portfolio includes a broad range of high quality, highly productive products. It is a professional, internationally renowned company known for its unsurpassed dedication, reliability and superior quality. New ideas and designs are put forward, to reach new levels of excellence. The company offers a full delivery service. This is backed up by a dedicated service team. This sets the company apart and gives it an edge. Supplying all over the world to all fields of engineering, Bhavya is now going global and has an office in Dubai. Its machines fit the biggest of companies and the best of brands. Another feather to the Bhavya cap is that the best engineering institutes of India have started training students on Bhavya’s modern machines.</p>
      <button className="btn btn-outline btn-primary uppercase">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default HomeBanner;