import React from "react";
import an2 from "../assets/an2.jpg"; // Importing local image

const Anxiety = () => {
  return (
    <div className="m-0 p-0 relative z-20 w-full min-h-screen bg-gradient-to-b from-sky-100 to-sky-100 flex items-center justify-center">
      <div className="w-full bg-gradient-to-r from-sky-100 to-sky-100 shadow-lg rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 m-0">
        {/* Title */}
        <h1 className="text-5xl  text-center text-orange-500">
          Understanding Anxiety
        </h1>

        {/* Centered Image */}
        <div className="flex justify-center mt-6">
          <img 
            src={an2} 
            alt="Anxiety Image" 
            className="w-full md:w-6/3 lg:w-1/2 rounded-lg shadow-md"
          />
        </div>

        {/* Introduction */}
        <p className="text-gray-700 mt-6 leading-relaxed text-lg text-center">
          Anxiety is a natural response to stress, but when it becomes overwhelming
          and persistent, it can interfere with daily life. It is characterized by
          excessive worry, fear, and nervousness.
        </p>

        {/* Symptoms Section */}
        <h2 className="text-3xl font-semibold text-purple-600 mt-8">
          Symptoms of Anxiety
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mt-4 text-lg">
          <li>Excessive worry or fear</li>
          <li>Restlessness and difficulty concentrating</li>
          <li>Rapid heartbeat and shortness of breath</li>
          <li>Muscle tension and headaches</li>
          <li>Insomnia and fatigue</li>
          <li>Digestive issues (stomach pain, nausea)</li>
          <li>Feeling irritable or on edge</li>
        </ul>

        {/* Causes & Prevention */}
        <h2 className="text-3xl font-semibold text-purple-600 mt-8">
          Causes and Prevention
        </h2>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          Anxiety can be triggered by <strong>genetics, brain chemistry, traumatic experiences,</strong>
          and <strong>stressful life situations.</strong> Some common causes include:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-4 text-lg">
          <li>Genetic predisposition (family history of anxiety)</li>
          <li>Chronic stress or trauma</li>
          <li>Hormonal imbalances</li>
          <li>Overactive fight-or-flight response</li>
          <li>Substance abuse</li>
        </ul>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          <strong>Prevention</strong> strategies include regular exercise, meditation, deep breathing,
          limiting caffeine intake, and seeking therapy when needed.
        </p>

        {/* Treatment Options */}
        <h2 className="text-3xl font-semibold text-purple-600 mt-8">
          Diagnosis and Treatment
        </h2>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          <strong>Anxiety disorders are treatable,</strong> and many people recover with the right approach.
          Treatment options include:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-4 text-lg">
          <li>
            <strong>Cognitive Behavioral Therapy (CBT):</strong> Helps in identifying and managing anxiety triggers.
          </li>
          <li>
            <strong>Medication:</strong> Anti-anxiety drugs and antidepressants (like SSRIs) may be prescribed in severe cases.
          </li>
          <li>
            <strong>Relaxation Techniques:</strong> Meditation, yoga, and breathing exercises reduce anxiety symptoms.
          </li>
          <li>
            <strong>Support Networks:</strong> Talking to friends, family, or joining support groups can provide emotional relief.
          </li>
        </ul>

        {/* YouTube Videos */}
        <h2 className="text-3xl font-semibold text-orange-600 mt-8 text-center">
          Helpful Videos on Anxiety
        </h2>
        <div className="flex flex-col items-center gap-6 mt-6">
          <div className="w-full max-w-2xl">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/WWloIAQpMcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-center mt-2 text-lg">
              <a
                href="https://www.youtube.com/watch?v=WWloIAQpMcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Watch on YouTube
              </a>
            </p>
          </div>
          <div className="w-full max-w-2xl">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/nCgm1xQa06c"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-center mt-2 text-lg">
              <a
                href="https://www.youtube.com/watch?v=nCgm1xQa06c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Watch on YouTube
              </a>
            </p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="text-center mt-10 space-x-4">
          <a
    href="/"
    className="bg-orange-500 hover:bg-orange-700 text-white font-medium py-1.5 px-4 text-sm rounded-md transition-all duration-300"
  >
    Back to Home
  </a>
</div>
       
      </div>
    </div>
  );
};

export default Anxiety;
