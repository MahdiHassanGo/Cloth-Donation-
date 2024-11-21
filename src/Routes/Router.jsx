import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layout/MainLayouts";
import DonatePage from './../pages/DonatePage';
import DonationDetails from "../pages/DonationDetails";
import HowToHelp from "../components/HowToHelp";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AuthLayout from "../Layout/AuthLayout";
import Dashboard from "../pages/Dashboard";
import ForgetPassword from "../pages/ForgetPassword";
import ErrorPage from "../pages/ErrorPage";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";



  const router = createBrowserRouter([
      {
        path: "/",
        element: <MainLayouts></MainLayouts>
        
      },
      {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
            {
              path:'/auth/forgetpassword',
              element:<ForgetPassword></ForgetPassword>
                  },
        ],
    },
    {
      path:'/dashboard',
      element:<PrivateRoute>
        <Dashboard></Dashboard>
        </PrivateRoute>
    },
 {
  path:'/about',
  element:<About></About>
 },
      {
        path: "/howtohelp",
        element: <HowToHelp></HowToHelp>
        
      },
      {
        path: "/howitworks",
        element: <HowItWorks></HowItWorks>
        
      },
    
      {
        path: "/donationdetails/:id",
        element: 
          <PrivateRoute>
            <DonationDetails />
          </PrivateRoute>
        ,
        loader: async ({ params }) => {
          const res = await fetch("/donation.json");
          const data = await res.json();
          return data.find((donation) => donation.id === Number(params.id));
        },
      },
      
        {
          path:'/donatepage',
          element:<DonatePage></DonatePage>,
          loader : async () => {
            const res = await  fetch ('/donation.json');
            return res.json();
          }
        },
        {
          path: "*",
          element: <ErrorPage></ErrorPage>
      }
     
    ]);


export default router