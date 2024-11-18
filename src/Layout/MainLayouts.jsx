import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";


const MainLayouts = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>

            <MainBanner/>


<Outlet  />

       <Footer></Footer>
        </div>
    );
};

export default MainLayouts;