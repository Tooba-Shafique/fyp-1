import bg1 from "../assets/bg1.jpg";

const MentalHealthSpecialty = () => {
  return (
    <section className="bg-gradient-to-b from-sky-100 to-sky-100 min-h-screen flex items-center justify-center p-10 font-poppins">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-6xl font-extrabold text-gray-900 tracking-wide leading-tight">
            Mind Care <span className="text-blue-500">Specialty</span>
          </h1>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            Your mental well-being matters. Discover expert insights, therapy sessions, 
            and mindfulness practices tailored just for you.
          </p>

          {/* Stats Section */}
          <div className="mt-6 flex items-center gap-6 justify-center lg:justify-start">
            <div className="text-4xl font-bold text-blue-600">1.2M+</div>
            <p className="text-gray-700 text-lg">
              People seeking wellness through <br /> mindfulness & therapy.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              Discover More
            </button>
          </div>
        </div>

        {/* Right Section - Grid Image Layout */}
        <div className="lg:w-1/2 grid grid-cols-3 gap-3">
          {[...Array(1)].map((_, index) => (
            <div
              key={index}
              className="w-80 h-80 bg-cover bg-center rounded-xl shadow-md transition-transform transform hover:scale-110"
              style={{ backgroundImage: `url(${bg1})` }}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MentalHealthSpecialty;
