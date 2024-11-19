import React from 'react';
import { NavLink } from 'react-router-dom';

const MainBanner = () => {
    return (
      
      <div className='carousel w-full mb-10'>
      {/* slider1 */}
        <div id='slide1' className='carousel-item relative w-full'>
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(../../public/assets/MainPage.jpg)",
        }}>
        <div className="hero-overlay "></div>
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
      <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
      
      </div>
        </div>
        {/* slider2 */}


      
        <div id='slide2' className='carousel-item relative w-full'>
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(../../public/assets/make-impact.jpg)",
        }}>
        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Join the Mission </h1>
            <p className="mb-5">
            Together, we can ensure no one feels the chill this winter. Every contribution helps bring warmth and hope to someone in need. 
            </p>
            <NavLink to='/donatepage'  className="btn bg-Buttons text-white">Donate Now</NavLink>
          </div>
        </div>

        
      </div>
      <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
      
      </div>
        </div>
    

        {/* slider 3 */}
       

        <div id='slide3' className='carousel-item relative w-full'>
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(../../public/assets/Join-mission.jpg)",
        }}>
        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Make Impact</h1>
            <p className="mb-5">
           Your donations can create a ripple effect of kindness , touching lives and fostering a stronger community
            </p>
            <NavLink to='/donatepage'  className="btn bg-Buttons text-white">Donate Now</NavLink>
          </div>
        </div>

        
      </div>
      <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
      
      </div>
        </div>
       
  
      </div>
     
    );
};

export default MainBanner;