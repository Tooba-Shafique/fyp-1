import React from "react";
import st1 from "../assets/st1.jpg"; // Importing local image

const Stress = () => {
  return (
    <div className="m-0 p-0 relative z-20 w-full min-h-screen bg-gradient-to-b from-sky-100 to-sky-100 flex items-center justify-center">
      <div className="w-full bg-gradient-to-r from-sky-100 to-sky-100 shadow-lg rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 m-0">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-orange-600">
          Understanding Stress
        </h1>

        {/* Centered Image */}
        <div className="flex justify-center mt-6">
          <img 
            src={st1} 
            alt="Stress Image" 
            className="w-full md:w-6/3 lg:w-1/2 rounded-lg shadow-md"
          />
        </div>

        {/* Introduction */}
        <p className="text-gray-700 mt-6 leading-relaxed text-lg text-center">
          Stress is a natural response to challenges and demands. However, chronic stress
          can negatively impact mental and physical health, leading to various health
          problems.
        </p>

        {/* Symptoms Section */}
        <h2 className="text-3xl font-semibold text-pink-600 mt-8">
          Symptoms of Stress
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mt-4 text-lg">
          <li>Frequent headaches and muscle tension</li>
          <li>Feeling overwhelmed or anxious</li>
          <li>Fatigue and difficulty sleeping</li>
          <li>Digestive problems</li>
          <li>Increased heart rate and high blood pressure</li>
          <li>Changes in appetite</li>
          <li>Irritability and mood swings</li>
        </ul>

        {/* Causes & Prevention */}
        <h2 className="text-3xl font-semibold text-pink-600 mt-8">
          Causes and Prevention
        </h2>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          Stress can be triggered by <strong>work pressure, financial issues, relationship conflicts,</strong>
          and <strong>major life changes.</strong> Some common causes include:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-4 text-lg">
          <li>Job-related pressure or burnout</li>
          <li>Personal or family conflicts</li>
          <li>Financial difficulties</li>
          <li>Health problems</li>
          <li>Major life transitions</li>
        </ul>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          <strong>Prevention</strong> strategies include mindfulness, exercise, maintaining a healthy diet,
          proper time management, and seeking professional help if necessary.
        </p>

        {/* Treatment Options */}
        <h2 className="text-3xl font-semibold text-pink-600 mt-8">
          Managing and Reducing Stress
        </h2>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          <strong>Stress management is essential</strong> for maintaining overall well-being. Some effective methods include:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-4 text-lg">
          <li>
            <strong>Meditation and Deep Breathing:</strong> Helps to calm the mind and reduce tension.
          </li>
          <li>
            <strong>Physical Activity:</strong> Exercise releases endorphins, improving mood and reducing stress.
          </li>
          <li>
            <strong>Healthy Lifestyle:</strong> A balanced diet and adequate sleep enhance resilience to stress.
          </li>
          <li>
            <strong>Social Support:</strong> Talking to friends, family, or a counselor helps relieve stress.
          </li>
        </ul>

        {/* YouTube Videos */}
        <h2 className="text-3xl font-semibold text-pink-600 mt-8 text-center">
          Helpful Videos on Stress Management
        </h2>
        <div className="flex flex-col items-center gap-6 mt-6">
          <div className="w-full max-w-2xl">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/WuyPuH9ojCE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-center mt-2 text-lg">
              <a
                href="https://www.youtube.com/watch?v=WuyPuH9ojCE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Watch on YouTube
              </a>
            </p>
          </div>
          <div className="w-full max-w-2xl">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/I6402QJp52M"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-center mt-2 text-lg">
              <a
                href="https://www.youtube.com/watch?v=I6402QJp52M"
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
            href="/Home2"
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg"
          >
            Back to Home
          </a>

          <a
            href="/discover-hope"
            className="bg-red-600 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg"
          >
            Discover Hope
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stress;
