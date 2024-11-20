import React, { useContext } from 'react';
import { BiDonateHeart } from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
const {user ,logOut} =useContext(AuthContext);
  return (
      
        <div className="flex flex-col md:flex-row justify-between items-center">
        <Link to='/' className="flex items-center justify-center"><BiDonateHeart className='text-7xl ml-9 text-Buttons' /> 
        <div>
          <h1 className='font-bold text-4xl '>CareHive </h1></div> </Link>
        <div className="nav flex flex-col items-center md:flex-row space-x-0 md:space-x-5 ">
          <Link className='btn bg-Buttons text-white' to="/">Home</Link>
          <Link  className='btn bg-Buttons text-white'  to="/donatepage">Donation Campaigns</Link>
          
          <Link  className='btn bg-Buttons text-white'  to="/howtohelp">How to Help</Link>
          <Link  className='btn bg-Buttons text-white'  to="/dev">Dashboard</Link>
         
        </div>
        <div className="login flex  gap-2 items-center">
          <div className="flex items-center gap-4 ">
            <div>{user&&user.email}</div>
            {
              user &&  user?.email ? (<button onClick={logOut} className='btn bg-Buttons text-white'>Log OUT</button> ):( <NavLink to='/auth/login' className='btn bg-Buttons text-white'>Login</NavLink>)
            }
          
          </div>
     
        </div>
      </div>
    );
};

export default Navbar;