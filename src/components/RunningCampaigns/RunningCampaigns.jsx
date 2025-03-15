import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai"; // Arrow icon import

const RunningCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchRunningCampaigns();
  }, []);

  const fetchRunningCampaigns = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/runningCampaigns");
      setCampaigns(response.data);
    } catch (error) {
      console.error("Error fetching running campaigns: ", error);
    }
  };

  // Button Color Array
  const buttonColors = [
    "bg-[#1A685B] hover:bg-green-700 text-white",
    "bg-yellow-500 hover:bg-green-500 text-white",
    "bg-[#1A685B] hover:bg-green-700 text-white",
    "bg-yellow-500 hover:bg-green-500 text-white"
  ];

  // Deadline Color Logic (based on how close the deadline is)
  const getDeadlineColor = (deadline) => {
    const currentDate = new Date();
    const campaignDeadline = new Date(deadline);
    const diffTime = campaignDeadline - currentDate;

    if (diffTime < 0) {
      return "text-red-600"; // Past deadline
    } else if (diffTime < 86400000) { // Less than 1 day left
      return "text-yellow-500"; // Approaching deadline
    } else {
      return "text-green-500"; // More than 1 day left
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        Running Campaigns
      </h2>
      {campaigns.length === 0 ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner text-success"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {campaigns.map((campaign, index) => (
            <div
              key={campaign._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden "
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-56 p-4 rounded-lg object-cover transform transition duration-300 hover:scale-105"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{campaign.title}</h3>
                <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                  {campaign.description}
                </p>
                <div className="mt-4 text-gray-700 text-sm flex justify-between">
                  <p><strong>Min Donation:</strong> ${campaign.minimumDonation}</p>
                  <p className={`font-semibold ${getDeadlineColor(campaign.deadline)}`}>
                    <strong>Deadline:</strong> {new Date(campaign.deadline).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex justify-left pl-4 pb-4">
                <Link
                  to={`/campaign/${campaign._id}`}
                  className={`w-[200px] items-start text-center font-bold py-2 rounded-full transition duration-300 ${buttonColors[index % buttonColors.length]} group`} // Added group class here
                >
                  See More 
                  <AiOutlineArrowRight className="inline-block transition-transform duration-300 transform ml-2 group-hover:rotate-0  rotate-[-55deg]" /> {/* Arrow icon */}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RunningCampaigns;
