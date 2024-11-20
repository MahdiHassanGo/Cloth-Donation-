const HowItWorks = () => {
    return (
      <div
      className="hero min-h-screen mb-10"
      style={{
        backgroundImage: "url(../../public/assets/how-to-help.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
      <div>
            <h1 className="text-5xl font-bold">How It Works</h1>
            <p className="py-6">
            Choose a location where your donation will make an impact.
Provide details like item quantity, type (jackets, blankets, etc.), and pickup location if needed.
Confirm your donation, and we’ll take care of the rest—collection, sorting, and delivery.
Track the impact through updates and stories on how your contributions make a difference.

Together, we can build a warmer, more compassionate community!
            </p>



        </div>
      </div>
    </div>
    );
};

export default HowItWorks;
