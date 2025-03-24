import React from "react";
import img from "../../assets/story_1_1.png"; // Add your custom styles if required
import { FaArrowRight } from "react-icons/fa";

const SuccessStories = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-around px-6 md:px-12 py-12 bg-white relative">
      {/* Left section with text content */}
      <div className="max-w-lg text-center lg:text-left">
        <p className="text-yellow-600 font-semibold text-sm md:text-lg">Success Story</p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug mt-2">
          We Help Fellow Nonprofits Access The Funding Tools, Training
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-lg">
          Our secure online donation platform allows you to make contributions quickly and safely.
          Choose from various payment methods and set up one-time donations exactly how you want.
        </p>
        <button className="mt-6 px-4 md:px-6 py-2 md:py-3 border border-black text-black rounded-full shadow-lg hover:bg-yellow-400 transition duration-400 flex items-center justify-center group mx-auto lg:mx-0">
          Our Success Story
          <span className="ml-2 transition-transform duration-300 transform rotate-[-60deg] group-hover:rotate-0">
            <FaArrowRight size={16} />
          </span>
        </button>
      </div>

      {/* Right section with image and "Years of Experience" */}
      <div className="relative mt-12 lg:mt-0">
        <img
          className="rounded-lg shadow-xl w-full max-w-sm md:max-w-xl object-cover"
          src={img}
          alt="Children studying"
        />

        {/* Years of Experience box */}
        <div className="absolute -left-6 md:-left-12 top-6 md:top-12 bg-gray-100 p-4 md:p-6 rounded-lg shadow-md w-28 md:w-44 text-center">
          <p className="text-3xl md:text-5xl font-bold text-gray-900">16</p>
          <p className="text-gray-600 text-xs md:text-sm uppercase font-semibold tracking-wide">
            Years <br /> of <br /> Experience
          </p>
        </div>

        {/* Adam Cruz quote box */}
        <div className="absolute -bottom-16 md:-bottom-20 left-4 md:left-10 bg-white p-4 md:p-6 rounded-lg shadow-xl w-64 md:w-80">
          <p className="text-md md:text-lg font-semibold">Adam Cruz</p>
          <p className="text-gray-600 mt-2 text-xs md:text-sm">
            Our success stories highlight the real-life impact of your donations
            & the resilience of those we help. These narratives showcase the power of compassion.
          </p>
          <span className="text-orange-500 text-3xl md:text-4xl font-bold absolute top-0 left-2">
            “
          </span>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
