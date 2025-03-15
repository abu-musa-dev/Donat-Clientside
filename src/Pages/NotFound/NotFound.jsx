import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-[180px] font-bold text-green-800">
        4<span className="text-yellow-500">0</span>4
      </h1>
      <h2 className="text-2xl font-bold text-gray-900 mt-4">
        Oops! That Page Can’t be Found
      </h2>
      <p className="text-gray-600 mt-2 text-center">
        It looks like nothing was found at this location. Maybe try one of the links below or a search?
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-green-800 text-white rounded-full shadow-md hover:bg-green-700 transition"
      >
        ⌂ Return To Home
      </a>
    </div>
  );
};

export default NotFoundPage;
