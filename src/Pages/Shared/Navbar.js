import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {

  const [user, loading, error] = useAuthState(auth);
  const logout= () => {
    signOut(auth)
    localStorage.removeItem('accessToken');
  }
  
  const menuItems = <>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/blogs">Blogs</Link></li>
  <li><Link to="/portfolio">My Portfolio</Link></li>
  <li><Link to="/reviews">Reviews</Link></li>
  <li><Link to="/contact us">Contact Us</Link></li>
  {
    user &&  <li><Link to="/dashboard">Dashboard</Link></li>
  }
  {
      user?  <button onClick={logout} className="btn btn-ghost text-black">SIGN OUT</button> :  <li><Link to="/login">Login</Link></li>
    }
</>

  return (
    <div className="navbar bg-white">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
        </ul>
      </div>
      <button className='text-black text-3xl font-bold italic'>Machinery-Tools</button>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0 pl-96 ml-64 text-black">
     {menuItems}
      </ul>
    </div>
    <div className="navbar-end">
  <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  </div>
  </div>
  );
};

export default Navbar;