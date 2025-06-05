import React from "react";
import { Link } from "react-router-dom";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video7 from "../assets/video7.mp4";

const Categories = () => {
  const mentalCategories = [
    {
      id: 1,
      video: video3,
      title: "Depression",
      path: "/depression",
      description: "Find hope, healing, and support for dealing with depression.",
    },
    {
      id: 2,
      video: video4,
      title: "Anxiety",
      path: "/anxiety",
      description: "Learn how to calm your mind and manage anxious thoughts.",
    },
    {
      id: 3,
      video: video7,
      title: "Stress",
      path: "/stress",
      description: "Discover effective techniques to handle stress and pressure.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-sky-100 to-sky-100 py-12">
      <section className="mt-16 bg-gradient-to-r from-orange-300 to-orange-100 p-12 rounded-lg shadow-lg max-w-5xl mx-auto text-center backdrop-blur-lg">
        <h2 className="text-3xl font-bold mt-4 text-sky-800">Here to Help You Thrive</h2>
        <p className="text-gray-200 mt-3 max-w-2xl mx-auto text-orange-800">
          Prioritize your mental well-being and embrace a journey of healing and self-care.
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {mentalCategories.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform transform hover:scale-105"
              >
                <video className="w-full h-60 object-cover" autoPlay loop muted playsInline>
                  <source src={item.video} type="video/mp4" />
                </video>
                <div className="p-4 bg-white text-center">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-orange-800 mb-2">{item.description}</p>
                  <Link
                    to={item.path}
                    className="text-sm text-sky-600 hover:text-sky-800 font-medium inline-block"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
