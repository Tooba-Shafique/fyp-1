import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import bg4 from "../assets/bg4.jpg";
import Depression from "./Depression";
import Stress from "./Stress";
import Anxiety from "./Anxiety";

const Home2 = () => {
  return (
    <div>
      <div
        className="relative flex flex-col items-left justify-center min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${bg4})` }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 px-10 lg:mt-20">
          <h1 className="text-4xl sm:text-6xl lg:text-6xl text-left tracking-wide">
            <span className="bg-gradient-to-r from-orange-100 to-sky-400 text-transparent bg-clip-text">
              Connect with all parts <br />
              of yourself & start new life
            </span>
          </h1>

          <p className="mt-10 text-lg text-white text-left max-w-4xl">
            Prioritize your mental well-being and embrace a journey of healing and self-care.  
            A healthier mind leads to a happier life.
          </p>

          {/* Navigation Links for Mental Health Categories */}
          <div className="mt-6 space-x-6">
            <Link to="depression" className="text-blue-300 hover:text-blue-500">Depression</Link>
            <Link to="stress" className="text-blue-300 hover:text-blue-500">Stress</Link>
            <Link to="anxiety" className="text-blue-300 hover:text-blue-500">Anxiety</Link>
          </div>
        </div>
      </div>

      {/* Nested Routes for Depression, Stress, and Anxiety */}
      <div className="p-6 bg-gray-900 text-white">
        <Routes>
          <Route path="depression" element={<Depression />} />
          <Route path="stress" element={<Stress />} />
          <Route path="anxiety" element={<Anxiety />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home2;
