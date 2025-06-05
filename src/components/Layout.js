import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import bg2 from "../assets/bg2.jpg"
const backgrounds = {
  "/": {
    image: "url('/assets/bg2.jpg')",
    title: "Nurturing Minds",
    subtitle: "Strengthening Hearts",
    description: "Prioritize your mental well-being and embrace a journey of healing and self-care.",
  },
  "/categories": {
    image: "url('/images/anxiety-bg.jpg')",
    title: "",
    subtitle: "Managing Worries Effectively",
    description: "Anxiety is a normal response to stress, but excessive worry may need professional support.",
  },
  "/depression": {
    image: "url('/images/depression-bg.jpg')",
    title: "Coping with Depression",
    subtitle: "Finding Hope in Difficult Times",
    description: "Depression affects millions, but treatment and support can bring recovery.",
  },
  "/selfcare": {
    image: "url('/images/selfcare-bg.jpg')",
    title: "Self-Care Practices",
    subtitle: "Embrace a Healthier Lifestyle",
    description: "Self-care routines improve mental and emotional well-being.",
  },
  "/blog": {
    image: "url('/images/blog-bg.jpg')",
    title: "Mental Health Blogs",
    subtitle: "Stay Informed & Inspired",
    description: "Read expert insights, personal stories, and self-care tips for mental health.",
  },
};

const Layout = ({ children }) => {
  const location = useLocation();
  const { image, title, subtitle, description } = backgrounds[location.pathname] || backgrounds["/"];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: image }}
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center h-[80vh] px-4">
        <h1 className="text-5xl font-bold">
          <span className="text-blue-500">{title}</span> <span className="text-orange-500">{subtitle}</span>
        </h1>
        <p className="mt-4 text-lg max-w-2xl">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default Layout;
