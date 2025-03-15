import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/campaigns")
      .then((response) => {
        const campaignsData = Array.isArray(response.data) ? response.data : [];
        setCampaigns(campaignsData);
        setFilteredCampaigns(campaignsData); // Initially set filtered campaigns to all campaigns
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching campaigns", error);
        setError("Failed to load campaigns. Please try again later.");
        setLoading(false);
      });
  }, []);

  const sortCampaigns = () => {
    const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
      return sortOrder === "asc"
        ? a.minimumDonation - b.minimumDonation
        : b.minimumDonation - a.minimumDonation;
    });
    setFilteredCampaigns(sortedCampaigns);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = campaigns.filter((campaign) =>
      campaign.title.toLowerCase().includes(query)
    );
    setFilteredCampaigns(filtered);
  };

  if (loading)
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-spinner text-green-600"></span>
      </div>
    );
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="bg-gray-100 min-h-screen text-[#144D43]">
      <Navbar />
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#144D43]">All Campaigns</h1>

        <div className="flex justify-between mb-8">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search by Title..."
              className="px-6 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-[#144D43]"
            />
          </div>

          <button
            onClick={sortCampaigns}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
          >
            Sort by Minimum Donation (
            {sortOrder === "asc" ? "Ascending" : "Descending"})
          </button>
        </div>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full table-auto text-left">
            <thead className="bg-[#144D43] text-white">
              <tr>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Minimum Donation</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCampaigns.length > 0 ? (
                filteredCampaigns.map((campaign) => (
                  <tr key={campaign._id} className="hover:bg-gray-200">
                    <td className="px-6 py-4">{campaign.title}</td>
                    <td className="px-6 py-4">{campaign.type}</td>
                    <td className="px-6 py-4">${campaign.minimumDonation}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => navigate(`/campaign/${campaign._id}`)}
                        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                      >
                        See More
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-4 text-xl text-gray-500"
                  >
                    No campaigns available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllCampaigns;
