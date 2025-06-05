import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaSpa, FaSmile, FaUsers, FaLeaf, FaHandsHelping } from "react-icons/fa";

const sections = [
  {
    title: "Embrace Self-Love",
    description: "Acknowledge your worth, practice positive affirmations, and celebrate your uniqueness.",
    icon: <FaHeart className="text-red-500 text-3xl" />,
  },
  {
    title: "Prioritize Self-Care",
    description: "Take time for yourself, nourish your body, and engage in activities that bring joy.",
    icon: <FaSpa className="text-blue-500 text-3xl" />,
  },
  {
    title: "Find Inner Peace",
    description: "Practice meditation, let go of negativity, and focus on the present moment.",
    icon: <FaSmile className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Surround Yourself with Positivity",
    description: "Connect with supportive people, engage in uplifting conversations, and express gratitude.",
    icon: <FaUsers className="text-green-500 text-3xl" />,
  },
  {
    title: "Reconnect with Nature",
    description: "Spend time outdoors, appreciate the beauty of nature, and breathe in fresh air.",
    icon: <FaLeaf className="text-purple-500 text-3xl" />,
  },
  {
    title: "Offer Kindness & Compassion",
    description: "Be gentle with yourself, extend love to others, and embrace acts of kindness.",
    icon: <FaHandsHelping className="text-pink-500 text-3xl" />,
  },
];

const SelfLoveCare = () => {
  return (
    <section className="bg-gradient-to-b from-sky-100 to-sky-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-orange-600 mb-10">
          Self-Love & Self-Care 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Link to="/selfLoveSection" key={index} className="block h-full">
              <div className="p-6 rounded-lg shadow-md text-center bg-white cursor-pointer hover:shadow-lg transition flex flex-col h-full">
                <div className="flex justify-center mb-4">{section.icon}</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{section.title}</h3>
                <p className="text-gray-600 flex-grow">{section.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelfLoveCare;
