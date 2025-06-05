import React from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/bg-1.jpg";
import bg2 from "../assets/bg-2.jpg";
import bg3 from "../assets/bg-3.jpg";

const Blogs2 = () => {
  return (
    <div className="bg-gradient-to-b from-sky-100 to-sky-100 px-6 md:px-16 lg:px-24 py-16 text-[#1a133b]">
      <h1 className="text-4xl md:text-5xl font-light text-center leading-tight mb-4">
        New articles about mental health, <br /> self-care, and self-love.
      </h1>
      <p className="text-center text-base md:text-lg text-[#5e5a66] mb-8">
        Discover meaningful insights on emotional well-being, learn how to
        prioritize self-care, and explore the importance of self-love in
        everyday life.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[
          {
            date: "NOV 17",
            author: "Olivia Forman",
            topic: "The Importance of Mental Health",
            image: bg3,
            link: "/mentalhealtharticle",
          },
          {
            date: "NOV 17",
            author: "Olivia Forman",
            topic: "Building Self-Love & Inner Strength",
            image: bg2,
            link: "/selfloveblog",
          },
          {
            date: "NOV 17",
            author: "Olivia Forman",
            topic: "Daily Self-Care Habits for Well-Being",
            image: bg1,
            link: "/selfcaretips",
          },
        ].map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.topic}
                className="w-full h-60 object-cover"
              />
              <span className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded-full uppercase font-medium">
                {post.date}
              </span>
            </div>
            <div className="p-5">
              <p className="text-sm text-[#5e5a66] mb-1">
                {post.author} <span className="mx-2">|</span> Online
              </p>
              <h3 className="text-lg font-light text-[#1a133b] mb-2">
                {post.topic}
              </h3>
              <Link
                to={post.link}
                className="text-sm text-sky-600 hover:text-sky-800 font-medium inline-block mt-2"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs2;
