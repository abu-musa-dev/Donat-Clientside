import React from "react";
import CheldrenImage from'../../assets/cheldren.png'


const CharityHero = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
      {/* Left Side - Image Section */}
      <div className="relative w-full md:w-1/2">
        <img
          src={CheldrenImage}
          alt="Happy Children"
          className="rounded-lg "
        />
        <div className="absolute top-0 left-0 w-full h-full border-4 border-green-600 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-yellow-600 font-semibold text-lg mb-2">About Us Donat</h3>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          We Believe That We Can Save More Life's With You
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Donet is the largest global crowdfunding community connecting nonprofits, donors, and companies. We help nonprofits from Afghanistan to Zimbabwe access tools, training, and support to be more effective and make the world a better place.
        </p>
        
        {/* Charity Categories */}
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="flex items-center gap-2 text-gray-800 font-medium">
            <span className="text-green-500">✔</span> Charity For Foods
          </span>
          <span className="flex items-center gap-2 text-gray-800 font-medium">
            <span className="text-yellow-500">✔</span> Charity For Water
          </span>
          <span className="flex items-center gap-2 text-gray-800 font-medium">
            <span className="text-red-500">✔</span> Charity For Education
          </span>
          <span className="flex items-center gap-2 text-gray-800 font-medium">
            <span className="text-blue-500">✔</span> Charity For Medical
          </span>
        </div>

        {/* Button */}
        <button className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition-all">
          About More ↗
        </button>
      </div>
    </section>
  );
};

export default CharityHero;
