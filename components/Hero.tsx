import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className=" text-lg  text-blue-600 uppercase mb-2">
            Welcome to Our Website
          </h3>
          <h1 className=" font-circular text-7xl font-bold text-gray-800 mb-6">
            Discover the Power of Innovation
          </h1>
          <p className="  text-gray-600 mb-8">
            We are a team of passionate professionals dedicated to providing
            cutting-edge solutions that transform businesses. Explore our
            innovative products and services today.
          </p>
          <button className="font-circular text-xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;