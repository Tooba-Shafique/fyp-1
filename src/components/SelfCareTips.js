import React from 'react';
import sc1 from "../assets/sc1.jpg"
const SelfCareBlog = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 font-sans space-y-10">
        <div className="flex justify-center mt-6">
          <img 
            src={sc1} 
            alt="Depression Image" 
            className="w-full max-w-6xl px-4 rounded-lg shadow-md h-auto max-h-[500px] object-cover"
          />
        </div>
      <h1 className="text-4xl font-bold text-center text-pink-600">
         Daily Self-Care Habits for Well-Being
      </h1>
      <p className="text-lg text-center text-gray-600">
        In our fast-paced world, self-care isn’t a luxury—it’s a necessity.
        Small, consistent habits can uplift your mind, body, and soul. 
      </p>

      <section>
        <h2 className="text-2xl font-semibold text-pink-500 mb-2"> 1. Start Your Morning with Intention</h2>
        <p>
          Begin your day with calm and clarity. Avoid jumping straight into social media.
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
          <li>Try a 5-minute gratitude journal</li>
          <li>Stretch or do mindful breathing</li>
          <li>Hydrate with a full glass of water</li>
        </ul>
      
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-pink-500 mb-2"> 2. Nourish Your Body Kindly</h2>
        <p>
          Your body listens to how you treat it. Feed it with love.
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
          <li>Eat meals that energize you</li>
          <li>Snack on fruits, nuts, smoothies</li>
          <li>Sip calming herbal teas</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-pink-500 mb-2"> 3. Protect Your Energy</h2>
        <p>
          You don’t have to be available 24/7. Guard your peace.
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
          <li>Say no without guilt</li>
          <li>Take breaks from screens</li>
          <li>Respect your mental space</li>
        </ul>
        <p className="italic text-pink-400 mt-2">You’re allowed to choose you. Every time.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-pink-500 mb-2"> 4. Connect With Yourself Daily</h2>
        <p>
          Give space to your inner world. Explore what brings you joy.
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
          <li>Keep a journal or voice notes</li>
          <li>Listen to soul-nourishing music</li>
          <li>Try creative hobbies—drawing, dancing, baking</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-pink-500 mb-2"> 5. Wind Down With Care</h2>
        <p>
          End your day on a peaceful note. Create a calming night ritual.
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
          <li>Dim the lights and unwind</li>
          <li>Read something soothing</li>
          <li>Do gentle stretches before bed</li>
        </ul>
        <p className="italic text-pink-400 mt-2">Rest isn’t lazy—it’s sacred and healing.</p>
      </section>

      <div className="text-center mt-10">
        <h3 className="text-xl font-bold text-pink-600"> Final Thought: Make It Yours</h3>
        <p className="text-gray-700 mt-2">
          Your self-care doesn’t have to mirror anyone else's. Whether it’s tea in silence or a walk in nature, make it yours. 
          You can't pour from an empty cup—so fill yours with love, daily.
        </p>
      </div>
    </div>
  );
};

export default SelfCareBlog;
