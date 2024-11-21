import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useLoaderData } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';



const DonatePage = () => {
  useEffect(() => {
    document.title = "Donate | CareHive";
}, []);
useEffect(() => {
  Aos.init({ duration: 1000 });
}, []);

useEffect(() => {
  window.scrollTo(0, 0);
}, []);
    const dontaionData = useLoaderData();


    return (
      <div>
<div className=' mb-10'>
            <Navbar></Navbar>
            <h2 className='text-2xl md:text-3xl font-bold text-center my-8'>Donation Campaigns</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 'data-aos="fade-up" >
                {
                    dontaionData.map((campaign)=>{
                       return( <div key={campaign.id} className="card card-compact bg-base-100 shadow-xl">
                        <figure>
                          <img className='h-60 w-full object-cover'
                            src={campaign.image}
                             />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title text-lg md:text-xl font-semibold">{campaign.title}</h2>
                          <p className='text-sm md:text-base'>{campaign.description}</p>
                          <p className='text-sm font-medium text-gray-500'>{campaign.division}</p>
                          <div className="card-actions justify-end">
                            <Link to= {`/donationdetails/${campaign.id}`}className="btn bg-Buttons text-white">Donate Now</Link>

                        
                          </div>
                        </div>
                      </div>)
                    })
                }
     
            </div>
    

          
        
        </div>
        <Footer></Footer>
      </div>
        
        
    );
};

export default DonatePage;