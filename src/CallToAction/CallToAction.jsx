import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="bg-[#1A685B] text-white text-center py-16 px-6">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Our Door Are Always Open <br />
        To More People Who Want <br />
        To Support Each Others!
      </h2>
      <button className="mt-6 px-6 py-3 transition duration-400 group bg-yellow-500 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400 flex items-center mx-auto">
        Get Involved{" "}
        <span className="ml-2 transition-transform duration-300 transform rotate-[-60deg] group-hover:rotate-0">
          <FaArrowRight size={15} />
        </span>
      </button>
    </section>
  );
};

export default CallToAction;
