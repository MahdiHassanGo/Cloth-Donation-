import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const DonationDetails = () => {

  React.useEffect(() => {
    document.title = "Details | CareHive";
}, []);
    const  data = useLoaderData();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const[quantity,setQuantity]=React.useState('');
  const[itemType,setItemType]=React.useState('');
  const[pickupLocation,setPickupLocation]=React.useState('');
   const isFormValid = quantity.trim() && itemType.trim() && pickupLocation.trim();

    return (
        <div className="">
             <Navbar>/</Navbar>
   <div className='w-full lg:w-8/12 mx-auto py-16 bg-gray-100 mb-10 shadows-lg'>
           

           <h2 className='text-2xl sm:text-4xl font-bold text-center text-Buttons mb-6'>
               {data?.title}
           </h2>
   
           <div className="flex items-center justify-center mb-6">
               <img
                   src={data?.image}
                  
                   className="w-11/12 lg:w:1/2  object-cover rounded-lg mb-6"
               />
           </div>
           
           <p className='text-black text-lg sm:text-xl px-4 mb-4 font-bold text-center'>
               {data?.description}
           </p>
   
           <div className="text-center space-y-2">
           <p className='text-black mb-4 '>
               <strong>Division:</strong> {data?.division}
           </p>
           <p className='text-black mb-4 '>
               <strong>Contact Info:</strong> {data?.contactInfo}
           </p>
           </div>
          
           <div className="flex flex-wrap justify-center gap-4 mt-6 ">
           <label className="form-control w-full sm:w-1/2 lg:1/3">
  <div className="label ">
    <span className="label-text block mb-1">Quantity</span>
 
  </div>
  <input type="text" placeholder="Enter your Quantity" className="input input-bordered w-full max-w-xs" value={quantity} onChange={(e) =>setQuantity(e.target.value)} />
  <div className="label">
    
  </div>
</label>
           <label className="form-control w-full max-w-xs">
  <div className="label ">
    <span className="label-text">Item type</span>
 
  </div>
  <input type="text" placeholder="Enter your Item type" className="input input-bordered w-full max-w-xs" value={itemType} onChange={(e) =>setItemType(e.target.value)} />
  <div className="label">
    
  </div>
</label>
           <label className="form-control w-full max-w-xs">
  <div className="label ">
    <span className="label-text">Pickup Location</span>
 
  </div>
  <input type="text" placeholder="Enter your Pickup Location" className="input input-bordered w-full max-w-xs" value={pickupLocation} onChange={(e) =>setPickupLocation(e.target.value)} />
  <div className="label">
    
  </div>
</label>
           </div>

<div className="flex justify-center gap-10">
<Link to='/donatepage' className="btn bg-Buttons text-white">Back</Link>
<button className={`btn bg-Buttons text-white ${!isFormValid ?"opacity-50 cursor-not-allowed":''}`}
onClick={handleOpen}
disabled={!isFormValid}>Donate</button>

</div>
      
           
       </div>

       <Footer></Footer>

       <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="thank-you-modal-title" variant="h6" component="h2"className="text-center font-bold mb-4">
            Thank You
            </Typography>
            <Typography
            className="text-center" id="transition-modal-description" sx={{ mt: 2 }}>
             We will reach your destination soon
            </Typography>
            <div className="flex justify-center mt-4">
              <Link to='/'>
              <button className="btn bg-Buttons text-white"
              variant="contained"
              color="primary"
              onClick={handleClose}
              >
Done
              </button>
              </Link>
           
            </div>
          </Box>
        </Fade>
      </Modal>

        </div>
       
     
      
    );
};

export default DonationDetails;