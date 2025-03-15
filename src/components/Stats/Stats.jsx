import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full bg-white py-10 px-6 md:space-x-10 space-y-6 md:space-y-0">
      
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-green-800">15K+</h2>
        <p className="text-gray-500 text-lg">Incredible Volunteers</p>
      </div>

      {/* Border - Show only on large screens */}
      <div className="hidden md:block border-r border-gray-300 h-16"></div>

      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-yellow-500">1K+</h2>
        <p className="text-gray-500 text-lg">Successful Campaigns</p>
      </div>

      <div className="hidden md:block border-r border-gray-300 h-16"></div>

      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-green-800">15+</h2>
        <p className="text-gray-500 text-lg">Monthly Donors</p>
      </div>

      <div className="hidden md:block border-r border-gray-300 h-16"></div>

      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-yellow-500">35K+</h2>
        <p className="text-gray-500 text-lg">Team Support</p>
      </div>

    </div>
  );
};

export default Stats;
