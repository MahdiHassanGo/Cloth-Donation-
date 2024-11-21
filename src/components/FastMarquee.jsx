import Marquee from "react-fast-marquee"; // Ensure you have installed react-fast-marquee
import { Link } from "react-router-dom";
import myImage1 from "../../public/assets/brac-logo.png"; // Example: Adjust path according to your project structure
import myImage2 from "../../public/assets/care-social.jpg";
import myImage3 from "../../public/assets/grameen-bank-logo.png";
import myImage4 from "../../public/assets/ICT-logo.jpg";
import myImage5 from "../../public/assets/bangladesh-accord-logo.png";
import myImage6 from "../../public/assets/Friendship-logo.png";
import myImage7 from "../../public/assets/Sawab-logo.png";
import myImage8 from "../../public/assets/Sunnah-Foundation.png";
import myImage9 from "../../public/assets/Biddanondo.jpg";
import myImage10 from "../../public/assets/Charity-logo.jpg";
import myImage11 from "../../public/assets/fcab-logo.png";
import myImage12 from "../../public/assets/Chief Advisor of Bangladesh_Revised.png";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const brands = [
    { _id: 1, brand_name: "Brand 1", brand_logo: myImage1 },
    { _id: 2, brand_name: "Brand 2", brand_logo: myImage2 },
    { _id: 3, brand_name: "Brand 3", brand_logo: myImage3 },
    { _id: 4, brand_name: "Brand 4", brand_logo: myImage4 },
    { _id: 5, brand_name: "Brand 5", brand_logo: myImage5 },
    { _id: 6, brand_name: "Brand 6", brand_logo: myImage6 },
    { _id: 7, brand_name: "Brand 7", brand_logo: myImage7 },
    { _id: 8, brand_name: "Brand 8", brand_logo: myImage8 },
    { _id: 9, brand_name: "Brand 9", brand_logo: myImage9 },
    { _id: 10, brand_name: "Brand 10", brand_logo: myImage10 },
    { _id: 11, brand_name: "Brand 11", brand_logo: myImage11 },
    { _id: 12, brand_name: "Brand 12", brand_logo: myImage12 },
];

const FastMarquee = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <Marquee data-aos="fade-up"  speed={100} className="rounded-lg shadow-lg border mb-10 mt-10" >
            {brands.map((brand) => (
                <Link
                    key={brand._id}
                    
                    className="p-4 inline-block"
                    title={brand.brand_name}
                >
                    <img
                        src={brand.brand_logo}
                        alt={brand.brand_name}
                        className="h-24 w-24 object-contain hover:scale-110 transition-transform duration-300"
                    />
                </Link>
            ))}
        </Marquee>
    );
};

export default FastMarquee;
