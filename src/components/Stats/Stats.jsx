import React from "react";

const Stats = () => {
  return (
    <div className="w-full bg-white py-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        
        <div className="flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800">15K+</h2>
          <p className="text-gray-500 text-base sm:text-lg">Incredible Volunteers</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500">1K+</h2>
          <p className="text-gray-500 text-base sm:text-lg">Successful Campaigns</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800">15+</h2>
          <p className="text-gray-500 text-base sm:text-lg">Monthly Donors</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500">35K+</h2>
          <p className="text-gray-500 text-base sm:text-lg">Team Support</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;
