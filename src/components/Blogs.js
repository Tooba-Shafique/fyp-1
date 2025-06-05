import React from "react";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Anxiety Symptoms",
    date: "NOV 17",
    author: "Olivia Forman",
    image: "https://source.unsplash.com/300x400/?reading,woman",
    link: "/anxiety-symptoms",
  },
  {
    id: 2,
    title: "Communication Issues",
    date: "NOV 17",
    author: "Olivia Forman",
    image: "https://source.unsplash.com/300x400/?therapy,talking",
    link: "/communication-issues",
  },
  {
    id: 3,
    title: "Online Therapy Benefits",
    date: "NOV 17",
    author: "Olivia Forman",
    image: "https://source.unsplash.com/300x400/?online,session",
    link: "/online-therapy",
  },
  {
    id: 4,
    title: "Mindfulness & Stress",
    date: "NOV 17",
    author: "Olivia Forman",
    image: "https://source.unsplash.com/300x400/?meditation,relax",
    link: "/mindfulness-stress",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-[#F9F6F3] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center md:text-left mb-12">
          <h5 className="text-sm tracking-wider text-gray-500 uppercase">Read and Learn</h5>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2">
            New texts about everyday issues of a modern man.
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl">
            Explore the latest insights on mental health, therapy, and emotional well-being.
          </p>
          <button className="mt-6 bg-indigo-900 text-white px-6 py-3 rounded-md text-lg hover:bg-indigo-700 transition">
            Read More
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-semibold uppercase">
                  {post.date}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm">{post.author} | <span className="text-indigo-700 font-semibold">ONLINE</span></p>
                <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
                <a href={post.link} className="text-indigo-700 font-semibold mt-3 inline-block hover:underline">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
