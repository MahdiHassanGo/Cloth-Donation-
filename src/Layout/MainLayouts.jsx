import { useEffect } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import MainBanner from "../components/MainBanner";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import OurRecentWork from "../components/OurRecentWork";
import FastMarquee from "../components/FastMarquee";



const MainLayouts = () => {
    useEffect(() => {
        document.title = "Home | CareHive";
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div  >
             <Navbar></Navbar>
 <div className="w-11/12 mx-auto">
           
 <FastMarquee></FastMarquee>
            <MainBanner/>
            <About></About>
            <OurRecentWork></OurRecentWork>
        
            <HowItWorks></HowItWorks>

       {/* more to come */}


<Outlet  />

      
        </div>
        <Footer></Footer>
        </div>
       
    );
};

export default MainLayouts;