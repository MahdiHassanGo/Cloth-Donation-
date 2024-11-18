import React from 'react';
import { BiDonateHeart } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center">
        <div className=""><BiDonateHeart className='text-7xl ml-9 text-Buttons' /></div>
        <div className="nav flex flex-col items-center md:flex-row space-x-0 md:space-x-5 ">
          <Link className='btn bg-Buttons text-white' to="/">Home</Link>
          <Link  className='btn bg-Buttons text-white'  to="/career">Career</Link>
          <Link  className='btn bg-Buttons text-white'  to="/about">About</Link>
          <Link  className='btn bg-Buttons text-white'  to="/dev">Dev Information</Link>
        </div>
        <div className="login flex gap-2 items-center">
          <div className=" ">
           <button className='btn bg-Buttons text-white'>Login</button>
          </div>
     
        </div>
      </div>
    );
};

export default Navbar;