import React from 'react';
import { NavLink } from 'react-router-dom';

const MainBanner = () => {
    return (
      
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(../../public/assets/MainPage.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Winter Clothing Donation </h1>
            <p className="mb-5">
            When the weather gets colder, thousands of vulnerable people, especially in rural and low-income areas, struggle to stay warm because they don’t have enough warm clothing. 
            </p>
            <NavLink to='/donatepage'  className="btn bg-Buttons text-white">Donate Now</NavLink>
          </div>
        </div>
      </div>
    );
};

export default MainBanner;