import React from 'react';
import HeroPicture from '../assets/hero.webp';

const Hero = () => {
  return (
    <div className="flex justify-center py-10 px-4 bg-gray-100 mb-20 mt-10 mx-20 rounded-xl">
      <div className="flex flex-col md:flex-row items-center justify-between rounded-xl max-w-7xl w-full p-8 gap-6">
        
        {/* Text section - left (stacked on mobile) */}
        <div className="flex flex-col justify-center w-full md:w-1/2 space-y-4 text-center md:text-left bg-white p-6 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Welcome to PickMyPC</h1>
          <p className="text-base md:text-lg text-gray-700">
            The ultimate destination for all your PC building needs. Discover, compare, and create your dream PC with ease.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Image section - right (stacked below on mobile) */}
        <div className="w-full ml md:w-1/2 flex justify-center">
          <img src={HeroPicture} alt="Hero" className="w-4/5 h-auto" />
        </div>

      </div>
    </div>
  );
};

export default Hero;
