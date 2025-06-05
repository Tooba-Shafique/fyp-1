import React from "react";
import video8 from "../assets/video8.mp4"; // Importing the video

const Exercise = () => {
  return (
    <section className="bg-[#FAF7F2] py-16 px-6 md:px-12 font-['Playfair_Display']">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section - Mental Health Details */}
        <div className="max-w-xl">
          <h5 className="text-sm tracking-widest text-gray-500 uppercase mb-2">
            Read & Learn
          </h5>
          <h2 className="text-5xl font-bold text-[#252525] leading-snug">
            Importance of Mental Health
          </h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            Mental health is as important as physical health. Engaging in activities like meditation, 
            exercise, and social interactions can help reduce stress and improve overall well-being.
          </p>
          <p className="text-lg text-gray-700 mt-2 leading-relaxed">
            Practicing self-care, seeking therapy, and maintaining a balanced lifestyle are crucial steps in 
            achieving mental wellness.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 border-l-4 border-gray-400 pl-4">
            Exercises for Mental Well-Being
          </h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-lg text-gray-700">
              ✅ <span className="ml-2">Meditation & Deep Breathing</span>
            </li>
            <li className="flex items-center text-lg text-gray-700">
              ✅ <span className="ml-2">Regular Physical Activity</span>
            </li>
            <li className="flex items-center text-lg text-gray-700">
              ✅ <span className="ml-2">Journaling & Expressing Thoughts</span>
            </li>
            <li className="flex items-center text-lg text-gray-700">
              ✅ <span className="ml-2">Listening to Relaxing Music</span>
            </li>
            <li className="flex items-center text-lg text-gray-700">
              ✅ <span className="ml-2">Spending Time in Nature</span>
            </li>
          </ul>

          <button className="mt-6 px-8 py-3 bg-[#252525] text-white text-lg rounded-md hover:bg-[#444] transition-all shadow-md">
            Read More
          </button>
        </div>

        {/* Right Section - Video with Modern Styling */}
        <div className="relative flex justify-center">
          <video
            src={video8}
            autoPlay
            loop
            muted
            playsInline
            className="w-full md:w-[85%] rounded-xl shadow-xl border-4 border-gray-300"
          />
          {/* Date Tag */}
          <div className="absolute top-4 left-4 bg-white text-gray-800 text-sm px-3 py-1 rounded-md shadow-md">
            NOV 17
          </div>
        </div>

      </div>
    </section>
  );
};

export default Exercise;
