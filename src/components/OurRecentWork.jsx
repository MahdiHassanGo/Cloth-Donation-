import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const OurRecentWork = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className="hero bg-howtohelp px-4 md:px-8 
         min-h-screen flex flex-col  mb-10 mt-10 " data-aos="fade-up">
      <div className="hero-content text-center">
        <div className="max-w-md">
        <h1 className="text-5xl font-bold  text-white mt-10">Our Recent Work</h1>
        </div>

       
      </div>
      <div className="flex flex-col lg:flex-row  flex-wrap justify-center gap-10 mt-20  ">
        <div className="card card-compact bg-Profile w-full sm:w-80 md:w-96 shadow-xl" data-aos="fade-up">
  <figure>
    <img className='w-full h-48 object-cover'
      src="https://blog.brac.net/wp-content/uploads/2015/01/w6-768x408.jpg"
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-center">Rangpur </h2>
    <p>We’ve raised $2,000 out of our $3,000 target for the Rangpur  Winter Aid Distribution. Thank you for your support—let’s keep going to reach our goal! </p>

    <progress className="progress w-56" value="70" max="100"></progress>

    <p>2000$</p>
    <Link to='/donatepage' className='btn'>Learn More</Link>


    <div className="card-actions justify-end">
     
    </div>
  </div>
</div> 
<div className="card card-compact bg-Profile w-full sm:w-80 md:w-96 shadow-xl" data-aos="fade-up">
  <figure>
    <img className='w-full h-48 object-cover'
      src="https://www.globalgiving.org/pfil/61993/pict_large.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <h2 className="card-title text-center">Kushtia</h2>
    <p>We’ve raised $3,000 out of our $5,000 target for the Kushtia Winter Aid Distribution. Thank you for your support—let’s keep going to reach our goal! </p>

    <progress className="progress w-56" value="60" max="100"></progress>

    <p>3000$</p>
    <Link to='/donatepage' className='btn'>Learn More</Link>

    <div className="card-actions justify-end">
   
    </div>
  </div>
</div>
<div className="card card-compact bg-Profile w-full sm:w-80 md:w-96 shadow-xl py-2" data-aos="fade-up">
  <figure>
    <img className='w-full h-48 object-cover'
      src="https://www.orphansupportinternational.org/assets/images/20211219_152020_1.36125642_std.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <h2 className="card-title text-center">Mymentsingh</h2>
    <p>We’ve raised $5,000 out of our $3,000 target for the Mymentsingh Winter Aid Distribution. Thank you for your support—let’s keep going to reach our goal! </p>

    <progress className="progress w-56" value="100" max="100"></progress>

    <p>5000$</p>

    <Link to='/donatepage' className='btn'>Learn More</Link>

    <div className="card-actions justify-end">
   
    </div>
  </div>
</div>
        </div>
    </div>
    );
};

export default OurRecentWork;