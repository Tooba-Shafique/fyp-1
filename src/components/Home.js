import React from "react";
import { useLocation } from "react-router-dom";
import bg1 from "../assets/bg1.jpg"; // Home page background
import bg2 from "../assets/bg2.jpg"; // Depression background
import bg3 from "../assets/bg3.jpg"; // Self-care background
import bg4 from "../assets/bg4.jpg"; // Blog background
import backpic1 from "../assets/backpic1.jpg"

const backgrounds = {
  "/": { image: bg2, title1: "Nurturing Minds", title2: "Strengthening Hearts", description: "Prioritize your mental well-being and embrace a journey of healing and self-care. A healthier mind leads to a happier life." },
  "/depression": { image: backpic1, title1: "Understanding Depression", title2: "Finding Hope", description: "Learn about depression, its effects, and ways to cope with it. You are not alone." },
  "/anxiety": { image: backpic1, title1: "Understanding Anxiety", title2: "Finding Hope", description: "Learn about anxiety, its effects, and ways to cope with it. You are not alone." },
  "/stress": { image: backpic1, title1: "Understanding Stress", title2: "Finding Hope", description: "Learn about stress, its effects, and ways to cope with it. You are not alone." },
  "/selflove": { image: bg3, title1: "Self-Care & Healing", title2: "Nurturing Yourself", description: "Explore self-care strategies to improve mental well-being and bring positivity to life." },
  "/mentalhealtharticle": { image: bg4, title1: "Mental Health Blogs", title2: "Insights & Stories", description: "Read articles, experiences, and expert insights on mental well-being and growth." },
  "/selfloveblog": { image: bg4, title1: "Mental Health Blogs", title2: "Insights & Stories", description: "Read articles, experiences, and expert insights on mental well-being and growth." },
  "/selfcaretips": { image: bg4, title1: "Mental Health Blogs", title2: "Insights & Stories", description: "Read articles, experiences, and expert insights on mental well-being and growth." },
};

const Home = () => {
  const location = useLocation();
  const { image, title1, title2, description } = backgrounds[location.pathname] || backgrounds["/"];

  return (
    <div>
      <div
        className="relative flex flex-col items-left justify-center min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 px-10 lg:mt-20">
          <h1 className="text-4xl sm:text-6xl lg:text-6xl text-left tracking-wide">
            <span className="bg-gradient-to-r from-sky-200 to-sky-400 text-transparent bg-clip-text">
              {title1}
              <br />
            </span>
            <span className="bg-gradient-to-r from-orange-300 to-orange-600 text-transparent bg-clip-text">
              {title2}
            </span>
          </h1>

          <p className="mt-10 text-lg text-white text-left max-w-4xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
