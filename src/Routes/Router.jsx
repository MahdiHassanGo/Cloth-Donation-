import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layout/MainLayouts";
import DonatePage from './../pages/DonatePage';
import DonationDetails from "../pages/DonationDetails";
import HowToHelp from "../components/HowToHelp";



  const router = createBrowserRouter([
      {
        path: "/",
        element: <MainLayouts></MainLayouts>
        
      },
    
      {
        path: "/howtohelp",
        element: <HowToHelp></HowToHelp>
        
      },
    
        {
          path:'/donationdetails/:id',
          element:<DonationDetails></DonationDetails>,
          loader : async ({params}) => {
            const res = await  fetch ('/donation.json');
            const data = await res.json();
            return data.find((donation)=>donation.id === Number (params.id))
          }
        },
        {
          path:'/donatepage',
          element:<DonatePage></DonatePage>,
          loader : async () => {
            const res = await  fetch ('/donation.json');
            return res.json();
          }
        },
     
    ]);


export default router