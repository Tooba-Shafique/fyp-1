import React from "react";
import bg3 from "../assets/bg3.jpg"; // Replace with your actual image path

const ModernPsychology = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Section - Image with Overlay */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="absolute top-6 left-6 w-72 h-96 bg-purple-200 rounded-lg shadow-lg transform rotate-[-5deg]"></div>
          <div className="relative z-10 w-72 h-96 bg-white rounded-lg shadow-2xl overflow-hidden">
            <img src={bg3} alt="Modern Psychology Book" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 bg-indigo-900 text-white w-full py-4 text-center font-semibold text-lg">
              Olivia Forman <br /> <span className="text-sm">Modern Psychology</span>
            </div>
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h5 className="text-sm tracking-wider text-gray-500 uppercase">Read & Learn</h5>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2">
            Modern Psychology
          </h1>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco.
          </p>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          
          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
            <button className="bg-pink-200 text-gray-900 px-6 py-3 rounded-full font-semibold text-lg hover:bg-pink-300 transition">
              Buy Now
            </button>
            <button className="text-indigo-800 font-semibold text-lg flex items-center gap-2 hover:underline">
              Download First Part <span>🔗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernPsychology;
