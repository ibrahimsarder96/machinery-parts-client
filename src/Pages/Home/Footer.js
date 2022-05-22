import React from 'react';
import payment from '../../assets/payments.png'

const Footer = () => {
  return (
  <div>
      <footer className="footer p-10 bg-white text-black mt-8 ">
    <div>
      <span className="footer-title">CUSTOMER SERVICES</span> 
      <a className="link link-hover">Privacy Policy</a> 
      <a className="link link-hover">Terms & Conditions</a> 
      <a className="link link-hover">Return/ Refund Policy</a> 
      <a className="link link-hover">Delivery Terms</a>
    </div> 
    <div>
      <span className="footer-title">Services</span> 
      <a className="link link-hover">Shop</a> 
      <a className="link link-hover">Cart</a> 
      <a className="link link-hover">My Account</a> 
      <a className="link link-hover">About</a> 
      <a className="link link-hover">Contact Us</a>
    </div> 
    <div>
      <span className="footer-title">Company</span> 
      <a className="link link-hover">Home</a> 
      <a className="link link-hover">Blog & Articles</a> 
      <a className="link link-hover">Customer Review</a>
    </div> 
    <div>
      <span className="footer-title">Our Payment Option</span> 
      <div className="form-control w-80">
        <img src={payment} alt="" />
      </div>
    </div>
  </footer>
  <div className='text-black text-center pb-5'>
  <p>Copyright © 2022 - All right reserved</p>
  </div>
  </div>
  );
};

export default Footer;