import { useEffect } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import MainBanner from "../components/MainBanner";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";



const MainLayouts = () => {
    useEffect(() => {
        document.title = "Main | CareHive";
    }, []);
    return (
        <div>
 <div className="">
            <Navbar></Navbar>

            <MainBanner/>
            <About></About>
            <HowItWorks></HowItWorks>

       {/* more to come */}


<Outlet  />

      
        </div>
        <Footer></Footer>
        </div>
       
    );
};

export default MainLayouts;