import React from "react";
import dp1 from "../assets/dp1.jpg"; // Importing local image

const Depression = () => {
  return (
    <div className="m-0 p-0 relative z-20 w-full min-h-screen bg-gradient-to-b from-sky-100 to-sky-100 flex items-center justify-center">
      <div className="w-full bg-gradient-to-r from-sky-100 to-sky-100 shadow-lg rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 m-0">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-orange-500">Understanding Depression</h1>

        {/* Centered Image */}
        <div className="flex justify-center mt-6">
          <img 
            src={dp1} 
            alt="Depression Image" 
            className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-md"
          />
        </div>

        {/* Introduction */}
        <p className="text-gray-700 mt-6 leading-relaxed text-base sm:text-lg">
          Depression is a common mental health condition that causes a persistent feeling of sadness and changes in how you think, sleep, eat and act.
          There are several different types. Depression is treatable — usually with talk therapy, medication or both. Seeking medical help as soon as you have symptoms is essential.
        </p>

        <h2 className="text-xl sm:text-2xl text-orange-600 font-semibold mt-6 mb-2">Overview</h2>
        <p className="text-gray-700 mt-6 leading-relaxed text-base sm:text-lg">
          Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest in things and activities you once enjoyed...
        </p>

        <h2 className="text-xl sm:text-2xl text-orange-600 font-semibold mt-6 mb-2">Who does depression affect?</h2>
        <p className="text-gray-700 mt-6 leading-relaxed text-base sm:text-lg">
          Depression can affect anyone — including children and adults.<br />
          Conditions associated with higher rates of depression include:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-6 leading-relaxed text-base sm:text-lg">
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
          <li>Persistent sadness or a feeling of emptiness</li>
          <li>Poor concentration and decision-making difficulties</li>
          <li>Feelings of excessive guilt or low self-worth</li>
          <li>Loss of interest in activities once enjoyed</li>
          <li>Insomnia or excessive sleeping</li>
          <li>Significant weight loss or gain</li>
          <li>Fatigue, low energy, and slowed movements</li>
          <li>Recurrent thoughts of death or suicide</li>
        </ul>

        <section className="mb-10 mt-8 text-base sm:text-lg text-gray-700 leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-600">Causes of Depression</h2>
          <p>
            Researchers don't know the exact cause of depression. However, it’s widely accepted that a combination of genetic, biological, environmental, and psychological factors can lead to its development.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Brain Chemistry:</strong> Imbalances in brain chemicals...</li>
            <li><strong>Genetics:</strong> People with a family history...</li>
            <li><strong>Stressful Life Events:</strong> Events like...</li>
            <li><strong>Medical Conditions:</strong> Chronic illnesses...</li>
            <li><strong>Medications:</strong> Certain prescription drugs...</li>
            <li><strong>Substance Use:</strong> Abuse of alcohol or drugs...</li>
            <li><strong>Lack of Social Support:</strong> Isolation and loneliness...</li>
          </ul>
        </section>

        <section className="mb-10 text-base sm:text-lg text-gray-700 leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-orange-600">Prevention of Depression</h2>
          <p>
            Depression isn’t always preventable, especially when it's due to genetics or serious health conditions...
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Maintain a Healthy Sleep Routine:</strong> Aim for 7–9 hours...</li>
            <li><strong>Exercise Regularly:</strong> Physical activity stimulates...</li>
            <li><strong>Eat a Balanced Diet:</strong> Nutrient-rich foods...</li>
            <li><strong>Manage Stress:</strong> Learn healthy ways to handle stress...</li>
            <li><strong>Limit Alcohol and Avoid Drugs:</strong> Alcohol can worsen...</li>
            <li><strong>Stay Connected:</strong> Regular interaction with friends...</li>
            <li><strong>Seek Early Treatment:</strong> If you've had depression...</li>
            <li><strong>Practice Self-care:</strong> Schedule time for activities...</li>
          </ul>
        </section>

        <section className="mb-10 text-base sm:text-lg text-gray-700 leading-relaxed">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-orange-600">Depression: Diagnosis & Treatment</h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-orange-600">Treatment of Depression</h2>
          <p className="mb-4">Treatment plans vary by individual and severity but typically include:</p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Psychotherapy (Talk Therapy):</strong> CBT, IPT, DBT</li>
            <li><strong>Medication:</strong> SSRIs, SNRIs, Tricyclics, Atypical Antidepressants</li>
            <li><strong>Lifestyle Modifications:</strong> Exercise, diet, sleep, stress management</li>
            <li><strong>Support Systems:</strong> Support groups, family therapy, apps</li>
            <li><strong>Advanced Treatments:</strong> ECT, TMS, Ketamine Therapy</li>
          </ul>
        </section>

        <div className="text-center mt-8 space-x-2">
 

  
</div>

      </div>
    </div>
  );
};

export default Depression;
