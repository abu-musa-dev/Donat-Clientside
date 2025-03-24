import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="bg-[#122F2A] text-white text-center py-12 md:py-16 px-4 md:px-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
        Our Doors Are Always Open <br className="hidden md:block" />
        To More People Who Want <br className="hidden md:block" />
        To Support Each Other!
      </h2>
      <button className="mt-6 px-4 sm:px-6 py-2 sm:py-3 transition duration-400 group bg-yellow-500 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400 flex items-center justify-center mx-auto">
        Get Involved{" "}
        <span className="ml-2 transition-transform duration-300 transform rotate-[-60deg] group-hover:rotate-0">
          <FaArrowRight size={15} />
        </span>
      </button>
    </section>
  );
};

export default CallToAction;
