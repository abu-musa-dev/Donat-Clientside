import React from "react";
import Serviceimg from '../../assets/service-card-icon1-1.png';
import Educationimg from '../../assets/service-card-icon1-2.png';
import Medicineimg from '../../assets/service-card-icon1-3.png';
import BgImage from '../../assets/bground.png';

const services = [
  {
    title: "Electrical Inspections",
    description:
      "Share stories and experiences from current volunteers to inspire others to join. Allow user to sign up for volunteer opportunities.",
    icon: Serviceimg,
  },
  {
    title: "Educations",
    description:
      "Explore our charity website to discover impactful projects, opportunities, and ways to donate, helping those in need thrive.",
    icon: Educationimg,
  },
  {
    title: "Medical Help",
    description:
      "Join us in making a difference! Our charity website connects you with volunteer, donation options, and inspiring stories.",
    icon: Medicineimg,
  },
];

const CharityServices = () => {
  return (
    <section className="relative py-16 px-6 text-center">
      {/* Overlay div to add color over background image */}
      <div
        style={{ backgroundImage: `url(${BgImage})` }}
        className="absolute inset-0 bg-black opacity-40 z-0"
      ></div>

      <div className="relative z-10">
        <h3 className="text-yellow-500 text-lg font-semibold uppercase tracking-wide">
         ---- Charity Services ----
        </h3>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          We Do It For All People
        </h2>
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Humanist Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center border-t-4 border-yellow-400 relative transition-all duration-300 hover:shadow-xl"
            >
              {/* Icon container */}
              <div className="absolute -top-10 flex justify-center w-full transition-transform duration-300 group-hover:-translate-y-3">
                <div className="bg-white p-4 rounded-full border-4 border-yellow-400 shadow-md">
                  {/* Image flips horizontally on hover */}
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-14 h-14 transition-transform duration-300 group-hover:scale-x-[-1]"
                  />
                </div>
              </div>
              {/* Title color change on hover */}
              <h3 className="text-xl font-semibold text-gray-800 mt-10 group-hover:text-[rgb(22,163,74)] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm px-4">
                {service.description}
              </p>
              {/* Button with Side-Fade Hover Effect */}
              <button className="mt-6 text-xs bg-yellow-500 text-white py-1.5 px-4 rounded-full border border-yellow-600 shadow-md transition-all duration-500 
                relative overflow-hidden hover:text-white hover:border-none
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-[rgba(22,163,74,0)] before:via-[rgba(22,163,74,0.7)] before:to-[rgba(22,163,74,0)] 
                before:transition-all before:duration-500 before:scale-x-0 hover:before:scale-x-100">
                Learn More <span className="text-sm transition-transform duration-300 group-hover:-rotate-90">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharityServices;
