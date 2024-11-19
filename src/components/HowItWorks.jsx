const HowItWorks = () => {
    return (
        <div className="hero bg-howitworks min-h-screen mb-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="../../public/assets/about-photo.jpg"
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">How it works</h1>
            <p className="py-6">
              At <strong>CareHive</strong>, we strive to make donating as seamless and impactful as possible. Our platform empowers you to contribute meaningfully while providing flexibility and convenience. Here's how it works:
            </p>
            <h2 className="text-2xl font-bold py-4">Step 1: Choose a Location</h2>
            <p className="py-2">
              Select the region where you’d like your donation to make an impact. Our platform allows you to choose from various supported locations across the country, ensuring your contributions reach those who need them most.
            </p>
            <h2 className="text-2xl font-bold py-4">Step 2: Specify Your Donation Details</h2>
            <p className="py-2">
              Fill out the form to provide detailed information about your donation:
              <ul className="list-disc list-inside py-2">
                <li><strong>Quantity:</strong> Let us know how many items you're donating.</li>
                <li><strong>Cloth Type:</strong> Specify the type of clothing, such as jackets, sweaters, blankets, or general warm clothing.</li>
                <li><strong>Pickup Location:</strong> Can't drop off the items? No problem! Share your address, and we’ll arrange a pickup.</li>
              </ul>
            </p>
            <h2 className="text-2xl font-bold py-4">Step 3: Confirm Your Donation</h2>
            <p className="py-2">
              Once you've entered the details, confirm your donation. Our team will handle the rest—ensuring your contributions are collected, sorted, and delivered to the right place.
            </p>
            <h2 className="text-2xl font-bold py-4">Step 4: Follow the Impact</h2>
            <p className="py-2">
              Stay connected with the progress of your donations. Receive updates about how your contributions are distributed and the lives they touch through our <strong>Impact Stories</strong> page.
            </p>
            <p className="py-6">
              At <strong>CareHive</strong>, we aim to bridge the gap between generosity and need. Together, we can create a warmer, more compassionate community. Let’s make a difference—<strong>one donation at a time.</strong>
            </p>
          </div>
        </div>
      </div>
    );
};

export default HowItWorks;
