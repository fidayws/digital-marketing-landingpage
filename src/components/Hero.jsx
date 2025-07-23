import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Transform Your Digital Presence</span>
            <span className="block text-indigo-200">Drive Results That Matter</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Boost your online visibility, attract qualified leads, and grow your business with our data-driven digital marketing strategies.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="rounded-md shadow">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
              >
                Get a Free Consultation
              </a>
            </div>
            <div className="ml-3 rounded-md shadow">
              <a
                href="#services"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 