import React from "react";
import bg2 from "../assets/bg-2.jpg"; // Make sure this file exists in your assets folder!

const MentalHealthArticle = () => {
  return (
    <div className="bg-gradient-to-b from-sky-100 to-sky-100  min-h-screen px-6 md:px-20 py-12 text-gray-800">
      <div className="max-w-full mx-auto bg-white p-8 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-8">
          <img
            src={bg2}
            alt="Author"
            className="w-28 h-28 object-cover rounded-lg"
          />
          <div>
            <button className="text-blue-700 text-lg font-medium hover:underline cursor-pointer bg-transparent border-none p-0">
              Emma Carter
            </button>
            <p className="text-gray-600 mt-1">
              Mental Health Advocate & Writer at Mindful Life Foundation
            </p>
            <p className="text-gray-400 mt-1 text-sm">Posted 19/04/2025</p>
            <p className="mt-3 text-sm">
              <button className="text-indigo-600 underline bg-transparent border-none p-0 cursor-pointer">
                Sign Up
              </button>{" "}
              to stay updated on mental health and wellness insights.
            </p>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900 mb-4">
          Why Prioritizing Mental Health is Essential for a Balanced Life
        </h1>

        <p className="text-gray-700 text-lg mb-4">
          In today's fast-paced world, mental health is as crucial as physical
          health. Prioritizing self-care, emotional well-being, and mindfulness
          helps individuals maintain balance amidst daily stresses.
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {[
            "SelfCare",
            "EmotionalWellBeing",
            "Mindfulness",
            "MentalHealthMatters",
            "InnerPeace",
            "PersonalGrowth",
          ].map((tag) => (
            <span
              key={tag}
              className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        <article className="text-gray-800 space-y-4 text-[16px] leading-relaxed">
          <p>
            Mental health shapes the way we think, feel, and act. Without
            nurturing our mental state, even the most minor issues can spiral
            into serious challenges that affect relationships, work, and daily
            life.
          </p>
          <p>
            Building resilience, seeking support, and practicing mindfulness
            techniques like meditation and journaling are some of the most
            effective ways to maintain emotional stability.
          </p>
          <p>
            Investing time in understanding your emotions, recognizing stress
            triggers, and making self-love a daily habit are not just modern
            luxuries but necessities for a fulfilled and healthy life.
          </p>
          <p>
            Start small — a walk in nature, deep-breathing exercises, or simply
            opening up to a trusted friend can significantly improve mental
            clarity and emotional strength.
          </p>
        </article>
      </div>
      <section className="bg-gradient-to-b from-sky-100 to-sky-100 py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-3xl md:text-4xl font-serif text-[#1D1441] italic leading-snug">
        “You yourself, as much as anybody in the entire universe, deserve your love and affection.”
        
        </p>
        <p className="text-sm uppercase tracking-widest text-gray-500 mt-3">
        — Buddha
        </p>
      </div>
    </section>
    </div>
  );
};

export default MentalHealthArticle;
