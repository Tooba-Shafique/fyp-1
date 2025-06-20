import React, { useState } from "react";
import dp1 from "../assets/dp1.jpg";

const Depression = () => {
  const [showMore, setShowMore] = useState(false);
  const [showHope, setShowHope] = useState(false);

  return (
    <div className="m-0 p-0 relative z-20 w-full min-h-screen bg-gradient-to-b from-sky-100 to-sky-100 flex items-center justify-center">
      <div className="w-full bg-gradient-to-r from-sky-100 to-sky-100 shadow-lg rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 m-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-orange-500">Understanding Depression</h1>

        <div className="flex justify-center mt-6">
          <img
            src={dp1}
            alt="Depression"
            className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-700 mt-6 leading-relaxed text-base sm:text-lg">
          Depression is a common mental health condition that causes a persistent feeling of sadness and changes in how you think, sleep, eat and act.
          There are several different types. Depression is treatable — usually with talk therapy, medication or both.
        </p>

        <h2 className="text-xl sm:text-2xl text-orange-600 font-semibold mt-6 mb-2">Overview</h2>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest in things and activities you once enjoyed...
        </p>

        {/* Read More Button */}
        {!showMore && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowMore(true)}
              className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
            >
              Read More
            </button>
          </div>
        )}

        {/* Read More Content */}
        {showMore && (
          <>
            <h2 className="text-xl sm:text-2xl text-orange-600 font-semibold mt-6 mb-2">Who does depression affect?</h2>
            <ul className="list-disc pl-6 text-gray-700 text-base sm:text-lg">
              <li>Neurodegenerative diseases like Alzheimer’s and Parkinson’s</li>
              <li>Stroke</li>
              <li>Multiple sclerosis</li>
              <li>Seizure disorders</li>
              <li>Cancer</li>
              <li>Macular degeneration</li>
              <li>Chronic pain</li>
            </ul>

            <h2 className="text-2xl font-semibold text-orange-600 mt-8">Symptoms of Depression</h2>
            <ul className="list-disc pl-6 text-gray-700 mt-4 text-base sm:text-lg">
              <li>Deep sadness, hopelessness, worry</li>
              <li>Loss of interest in enjoyable activities</li>
              <li>Irritability or frustration</li>
              <li>Appetite or sleep changes</li>
              <li>Low energy or fatigue</li>
              <li>Difficulty concentrating or making decisions</li>
              <li>Physical issues like headaches or stomachaches</li>
              <li>Thoughts of self-harm or suicide</li>
            </ul>

            {/* Discover Hope Button (visible only after Read More content is shown) */}
            {!showHope && (
              <div className="mt-6 text-center">
               
              </div>
            )}
          </>
        )}

        {/* Discover Hope Content */}
        {showHope && (
          <>
            <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-2 text-orange-600">Causes of Depression</h2>
            <ul className="list-disc pl-6 text-gray-700 text-base sm:text-lg">
              <li><strong>Brain Chemistry:</strong> Chemical imbalance in the brain</li>
              <li><strong>Genetics:</strong> Family history</li>
              <li><strong>Stressful Events:</strong> Loss, trauma, financial issues</li>
              <li><strong>Medical Conditions:</strong> Chronic illness, pain</li>
              <li><strong>Substance Use:</strong> Alcohol or drug misuse</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-2 text-orange-600">Prevention</h2>
            <ul className="list-disc pl-6 text-gray-700 text-base sm:text-lg">
              <li>Exercise regularly</li>
              <li>Eat a healthy diet</li>
              <li>Maintain strong social ties</li>
              <li>Seek help early when symptoms appear</li>
              <li>Limit alcohol and avoid drugs</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-2 text-orange-600">Treatment</h2>
            <ul className="list-disc pl-6 text-gray-700 text-base sm:text-lg">
              <li><strong>Therapy:</strong> CBT, DBT, Talk therapy</li>
              <li><strong>Medication:</strong> Antidepressants</li>
              <li><strong>Lifestyle changes:</strong> Sleep, routine, stress management</li>
              <li><strong>Support:</strong> Family, groups, mental health professionals</li>
              <li><strong>Advanced methods:</strong> ECT, TMS</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Depression;
