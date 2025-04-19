import React from 'react';
import HeroImage from '../assets/HeroPage.png'; 
import HeroImages from '../assets/HeroImages.png';

function Hero() {
  return (
    <section 
      className="h-screen flex items-center px-20 grid grid-cols-2 bg-cover bg-center" 
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      
      <div className="max-w-xl">
        <div className="w-full bg-gradient-to-r from-dark-green to-yellow-green bg-clip-text">
          <p className="font-semibold text-2xl tracking-wider text-[#9D9F0D]">CROP CARE SOLUTIONS</p>
          <p className="font-bold text-5xl text-transparent bg-clip-text">
            Reduce Post-Harvest Losses, Improve Your Profits!
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Learn the best crop storage techniques, connect with experts, and find nearby storage solutions.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex items-center space-x-6">
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-green to-dark-green rounded-full text-white text-lg font-medium">
            Learn Storage Techniques
          </button>
          <a href="" className="text-lg  text-[#13595B] font-medium">
            Find Storage Facilities
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-end">
        <img src={HeroImages} alt="Hero Images" className="max-w-md" />
      </div>
    </section>
  );
}

export default Hero;
