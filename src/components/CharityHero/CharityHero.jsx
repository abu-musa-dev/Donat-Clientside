import React from "react";
import CheldrenImage from "../../assets/cheldren.png";
import { AiOutlineArrowRight } from "react-icons/ai"; // Arrow icon import
import { FaCheck } from "react-icons/fa"; // Checkmark icon import

const CharityHero = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
      {/* Left Side - Image Section */}
      <div className="relative w-full md:w-1/2">
        <img src={CheldrenImage} alt="Happy Children" className="rounded-lg " />
        <div className="absolute top-0 left-0 w-full h-full border-4 border-green-600 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 text-left">
        <div className="flex items-center mb-4">
          <h3 className="text-yellow-600 font-semibold text-lg inline-block">
            About Us Donat
          </h3>
          <hr className="w-16 border-t-2 border-yellow-500 mx-4" />
        </div>

        <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          We Believe That We Can Save More Life's With You
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Donet is the largest global crowdfunding community connecting
          nonprofits, donors, and companies. We help nonprofits from Afghanistan
          to Zimbabwe access tools, training, and support to be more effective
          and make the world a better place.
        </p>

        {/* Charity Categories */}
        <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
          <span className="flex items-center gap-2 text-gray-800 font-medium">
            <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center">
              <FaCheck className="text-white" />
            </span>{" "}
            Charity For Foods
          </span>
          <span className="flex items-center gap-2 text-gray-800 font-medium">
            <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center">
              <FaCheck className="text-white" />
            </span>{" "}
            Charity For Water
          </span>
          <span className="flex items-center gap-2 text-gray-800 font-medium">
            <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center">
              <FaCheck className="text-white" />
            </span>{" "}
            Charity For Education
          </span>
          <span className="flex items-center gap-2 text-gray-800 font-medium">
            <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
              <FaCheck className="text-white" />
            </span>{" "}
            Charity For Medical
          </span>
        </div>

        {/* Line before "About More" button */}
        <hr className="border-t-2 border-gray-300 w-1/4 mx-auto mb-4" />

        {/* Button with hover effect for arrow rotation */}
        <button className="flex items-center bg-[#1A685B] text-white px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition-all group">
          <span className="text-left">About More</span>
          <AiOutlineArrowRight className="inline-block transition-transform rotate-[-60deg] duration-300 transform ml-2 group-hover:rotate-0" /> {/* Arrow icon */}
        </button>
      </div>
    </section>
  );
};

export default CharityHero;
