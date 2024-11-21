import React, { useContext } from 'react';
import { BiDonateHeart  } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="bg-Profile shadow-md w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">
        {}
        <Link to="/" className="flex items-center gap-2">
          <BiDonateHeart className="text-6xl text-Buttons" />
          <h1 className="font-extrabold text-4xl text-Buttons">CareHive</h1>
        </Link>

        {/* Navigation Links */}
        <div className="nav flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-4 md:mt-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-Buttons font-semibold border-b-2 border-Buttons pb-1'
                : 'text-gray-600 hover:text-Buttons'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/donatepage"
            className={({ isActive }) =>
              isActive
                ? 'text-Buttons font-semibold border-b-2 border-Buttons pb-1'
                : 'text-gray-600 hover:text-Buttons'
            }
          >
            Donation Campaigns
          </NavLink>
          <NavLink
            to="/howtohelp"
            className={({ isActive }) =>
              isActive
                ? 'text-Buttons font-semibold border-b-2 border-Buttons pb-1'
                : 'text-gray-600 hover:text-Buttons'
            }
          >
            How to Help
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? 'text-Buttons font-semibold border-b-2 border-Buttons pb-1'
                : 'text-gray-600 hover:text-Buttons'
            }
          >
            Dashboard
          </NavLink>
        </div>

        {/* User Login Section */}
        <div className="login flex items-center gap-4 mt-4 md:mt-0">
          <div>
            {user && user?.email ? <div><img className='w-10 rounded-full' src={user?.photoURL} alt="" /></div>: <FaUser />}
            
            </div>
          <div className="text-gray-600">{user?.displayName}</div>
          {user ? (
            <button
              onClick={logOut}
              className="bg-Buttons text-white py-2 px-4 rounded hover:bg-opacity-90 transition"
            >
              Log Out
            </button>
          ) : (
            <NavLink
              to="/auth/login"
              className="bg-Buttons text-white py-2 px-4 rounded hover:bg-opacity-90 transition"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
