import React from "react";

const Stats = () => {
  return (
    <div className="flex justify-evenly items-center w-full space-x-10 bg-white py-10">
      <div className="text-center">
        <h2 className="text-6xl font-bold text-green-800">15K+</h2>
        <p className="text-gray-500">Incredible Volunteers</p>
      </div>
      <div className="border-r border-gray-300 h-16"></div>

      <div className="text-center">
        <h2 className="text-6xl font-bold text-yellow-500">1K+</h2>
        <p className="text-gray-500">Successful Campaigns</p>
      </div>
      <div className="border-r border-gray-300 h-16"></div>

      <div className="text-center">
        <h2 className="text-6xl font-bold text-green-800">15+</h2>
        <p className="text-gray-500">Monthly Donors</p>
      </div>
      <div className="border-r border-gray-300 h-16"></div>

      <div className="text-center">
        <h2 className="text-6xl font-bold text-yellow-500">35K+</h2>
        <p className="text-gray-500">Team Support</p>
      </div>
    </div>
  );
};

export default Stats;
