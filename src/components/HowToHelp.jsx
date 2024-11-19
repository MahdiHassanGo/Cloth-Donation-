import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const HowToHelp = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto">
                <Navbar />
                <div className="hero bg-howtohelp min-h-screen mb-10 text-white">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src="../../public/assets/how-to-help.jpg"
                            className="max-w-lg rounded-lg shadow-2xl"
                            alt="Help"
                        />
                        <div>
                            <h1 className="text-5xl font-bold">How to Help</h1>
                            <p className="py-6">
                                Making a difference is simple and deeply rewarding. At <strong>CareHive</strong>, we provide multiple ways for you to contribute and bring warmth to those in need. Here’s how you can get involved:
                            </p>
                            <h2 className="text-2xl font-bold py-4">1. Donate Warm Clothing</h2>
                            <p className="py-2">
                                Have extra warm clothes lying around? Donate jackets, sweaters, blankets, or other winter essentials. You can either drop them off at our collection points or schedule a pickup for your convenience.
                            </p>
                            <h2 className="text-2xl font-bold py-4">2. Volunteer Your Time</h2>
                            <p className="py-2">
                                Become a volunteer and help with sorting donations, distributing them to those in need, or organizing community donation drives. Your time can make a tremendous impact.
                            </p>
                            <h2 className="text-2xl font-bold py-4">3. Spread the Word</h2>
                            <p className="py-2">
                                Help us reach more people by sharing our mission. Use social media, email, or word of mouth to let others know about <strong>CareHive</strong> and how they can contribute.
                            </p>
                            <h2 className="text-2xl font-bold py-4">4. Partner with Us</h2>
                            <p className="py-2">
                                Are you part of a business or organization? Partner with us to host clothing drives, sponsor logistics, or provide additional resources to expand our outreach.
                            </p>
                            <h2 className="text-2xl font-bold py-4">5. Financial Contributions</h2>
                            <p className="py-2">
                                Support our mission with monetary donations to help cover operational costs, such as transportation, sorting, and distribution of clothing.
                            </p>
                            <p className="py-6">
                                Together, we can create a ripple effect of kindness and compassion. Whether you choose to donate clothing, volunteer, or spread the word, your actions bring hope and warmth to those who need it most. Every effort counts, and every hand helps.
                            </p>
                            <Link to='/' className="btn bg-Buttons text-white">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HowToHelp;
