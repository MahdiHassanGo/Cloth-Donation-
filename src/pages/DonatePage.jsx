import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useLoaderData } from 'react-router-dom';


const DonatePage = () => {
  useEffect(() => {
    document.title = "Donate | CareHive";
}, []);
    const dontaionData = useLoaderData();


    return (
      <div>
<div className=' mb-10'>
            <Navbar></Navbar>
            <h2 className='text-3xl font-bold text-center my-8'>Donation Campaigns</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-10'>
                {
                    dontaionData.map((campaign)=>{
                       return( <div key={campaign.id} className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure>
                          <img className='h-60 w-full object-cover'
                            src={campaign.image}
                             />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{campaign.title}</h2>
                          <p>{campaign.description}</p>
                          <p>{campaign.division}</p>
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