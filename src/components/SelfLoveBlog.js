import React from "react";
import sl4 from "../assets/sl4.jpg"
const SelfCareBlog = () => {
  return (
    <div className="w-full bg-[#f4eee8] py-10">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48">
      <div className="flex justify-center mt-6">
  <img 
    src={sl4} 
    alt="Depression Image" 
    className="w-full max-w-6xl px-4 rounded-lg shadow-md h-auto max-h-[500px] object-cover"
  />
</div>



<br />
        <h1 className="text-4xl font-bold text-center text-sky-800 mb-10">
          The Practice Of Loving Yourself
        </h1>

        <div className="text-justify text-gray-700 text-[17px] leading-relaxed space-y-6">
          <p>
            We had a wonderful first meeting of the year in our newly named Self-care Tuesdays group.
            We dove into the territory of the emotions and explored how your body and your awareness can
            be a spacious, loving container to hold your emotions.
          </p>

          <h2 className="text-2xl font-semibold text-sky-700">Being held</h2>
          <p>
            It's important to learn how to hold yourself so that you don't feel like you're on an emotional roller coaster.
            The possibility is to love yourself through it all, to be kind and compassionate.
          </p>

          <h2 className="text-2xl font-semibold text-sky-700">Tools and things to remember:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Meditation can help you hold the space for yourself</li>
            <li>Journaling is useful, especially when you write about what is happening in the present moment</li>
            <li>Recognize that everything is out of control.</li>
          </ul>

          <p>
            You might want to read the book, <span className="italic">“Comfortable with Uncertainty”</span> by Pema Chodron.
          </p>

          <h2 className="text-2xl font-semibold text-sky-700">Practice self-compassion</h2>
          <p>
            Take time to acknowledge yourself as a person not just as a caregiver, and when emotional pain arises,
            take the time to feel it.
          </p>
          <p>
            Slow down and listen to your heart. Offer yourself what you need and be tender towards yourself.
            Sometimes there is a lot to feel. Be with your anger and disappointment and possibly guilt.
            When you feel what’s here, you unburden yourself.
          </p>

          <h2 className="text-2xl font-semibold text-sky-700">Your kids hit the jackpot!</h2>
          <p>
            You are an amazing human being. Practice affirming yourself and receiving all of the goodness you
            bring into the world because the ones you care for most likely can't do it. By doing this, you are feeding yourself.
          </p>

          <h2 className="text-2xl font-semibold text-sky-700">Coming Up Next Week:</h2>
          <p>
            <span className="font-medium">The Places We Go When Things Are Uncertain or Too Much</span>
          </p>
          <p>
            Every day we experience different emotions. When things feel uncertain or too much,
            it can take us into stress, overwhelm, anxiety, worry and many more places.
            When we better understand how these emotions feel and show up in our lives,
            we can label them from a distance instead of being wrapped up in them.
            I invite you in to dismantle the definitions we’ve given ourselves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelfCareBlog;
