import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layout/MainLayouts";
import DonatePage from './../pages/DonatePage';



  const router = createBrowserRouter([
      {
        path: "/",
        element: <MainLayouts></MainLayouts>
        
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