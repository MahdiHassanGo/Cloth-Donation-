import About from "../components/About";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import MainBanner from "../components/MainBanner";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";



const MainLayouts = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>

            <MainBanner/>
            <About></About>
            <HowItWorks></HowItWorks>

       {/* more to come */}


<Outlet  />

       <Footer></Footer>
        </div>
    );
};

export default MainLayouts;