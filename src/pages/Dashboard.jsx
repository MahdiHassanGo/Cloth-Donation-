
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Aos from 'aos';
import 'aos/dist/aos.css';


import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { updateProfile } from 'firebase/auth';

const Dashboard = () => {
    

 useEffect(() => {
    Aos.init({ duration: 1000 });
}, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        document.title = "Dashboard | CareHive";
    }, []);
    
  
    const { user, setUser } = useContext(AuthContext);
    const [newDisplayName, setNewDisplayName] = useState('');
    const [newPhotoURL, setNewPhotoURL] = useState('');



    const handleProfileUpdate = () => {
        if (!user) return;

        updateProfile(user, {
            displayName: newDisplayName || user.displayName,
            photoURL: newPhotoURL || user.photoURL,
        })
            .then(() => {
            
                setUser({ ...user, displayName: newDisplayName, photoURL: newPhotoURL });
                setNewDisplayName('');
                setNewPhotoURL('');
            })
            .catch((error) => {
               
            });
    };

    return (
        <div className="bg-gradient-to-b min-h-screen text-white" >

            <Navbar></Navbar>

           
            <div className="flex flex-col items-center justify-center min-h-screen py-12" data-aos="fade-up">

                <div className="group bg-Buttons p-8 rounded-lg shadow-lg hover:shadow-2xl  ease-in-out w-full max-w-md mx-auto">

                    <h2 className="text-center font- text-Profile text-5xl mb-6 ">
                        My Profile
                    </h2>

                    {user && (
                        <>
                            <img
                                src={user?.photoURL || "https://via.placeholder.com/150"}
                                alt={user?.displayName || "User"}
                                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-Buttons shadow-xl "
                            />
                            <h3 className="text-center text-xl font-semibold">
                                {user?.displayName || "Anonymous User"}
                            </h3>
                            <p className="text-center text-Profile">
                                {user.email}
                            </p>

                            {}
                            <div className="mt-6 space-y-4">
                                <input
                                    type="text"
                                    placeholder="New Display Name"
                                    value={newDisplayName}
                                    onChange={(e) => setNewDisplayName(e.target.value)}
                                    className="input input-bordered input-black w-full text-lg py-3 px-5  text-black rounded-lg shadow-md "
                                />
                                <input
                                    type="text"
                                    placeholder="New Photo URL"
                                    value={newPhotoURL}
                                    onChange={(e) => setNewPhotoURL(e.target.value)}
                                    className="input input-bordered input-black w-full text-lg py-3 px-5 text-black rounded-lg shadow-md "
                                />
                                <button
                                    onClick={handleProfileUpdate}
                                    className="btn bg-Footer  text-black w-full py-3 px-6 rounded-full font-semibold text-xl "
                                >
                                    Update Profile
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;