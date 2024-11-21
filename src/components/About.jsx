
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1000 });
}, []);
    return (
      <div className="hero bg-About min-h-screen" data-aos="fade-up">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="/assets/about-photo.jpg"
      className="md:max-w-lg rounded-lg shadow-2xl" />
    <div>
    <h1 className="text-5xl font-bold ">About Us</h1>
            <p className="py-6 font-thin">
            At CareHive, we believe in the power of community and compassion to make a difference. Founded with the vision of creating a warmer, more inclusive world, we strive to address the challenges faced by vulnerable individuals, especially during harsh winters.

Our mission is simple yet impactful: to provide essential support, such as warm clothing and resources, to those in need. Through collaborative efforts and the generosity of donors like you, we’ve been able to transform lives and bring hope to countless communities.

We’re more than just an organization—we’re a movement. A movement fueled by kindness, determination, and the shared goal of ensuring no one is left behind. Whether it’s through a single donation or joining our campaigns, you’re playing a vital role in spreading warmth and care.

Together, let’s create a brighter future, one step at a time.
            </p>
           
    </div>
  </div>
</div>
    );
};

export default About;