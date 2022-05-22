import React from 'react';
import payment from '../../assets/payments.png'

const Footer = () => {
  return (
  <div>
      <footer class="footer p-10 bg-white text-black mt-8 ">
    <div>
      <span class="footer-title">CUSTOMER SERVICES</span> 
      <a class="link link-hover">Privacy Policy</a> 
      <a class="link link-hover">Terms & Conditions</a> 
      <a class="link link-hover">Return/ Refund Policy</a> 
      <a class="link link-hover">Delivery Terms</a>
    </div> 
    <div>
      <span class="footer-title">Services</span> 
      <a class="link link-hover">Shop</a> 
      <a class="link link-hover">Cart</a> 
      <a class="link link-hover">My Account</a> 
      <a class="link link-hover">About</a> 
      <a class="link link-hover">Contact Us</a>
    </div> 
    <div>
      <span class="footer-title">Company</span> 
      <a class="link link-hover">Home</a> 
      <a class="link link-hover">Blog & Articles</a> 
      <a class="link link-hover">Customer Review</a>
    </div> 
    <div>
      <span class="footer-title">Our Payment Option</span> 
      <div class="form-control w-80">
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