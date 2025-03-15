import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const CampaignDetails = ({ refreshDonations }) => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [donationAmount, setDonationAmount] = useState("");

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/campaigns/${id}`
        );
        setCampaign(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch campaign details.");
        setLoading(false);
      }
    };
    fetchCampaign();
  }, [id]);

  const handleDonate = async () => {
    if (isNaN(parseFloat(donationAmount)) || donationAmount <= 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Amount",
        text: "Please enter a valid donation amount.",
      });
      return;
    }
    try {
      await axios.post("http://localhost:3001/api/donate", {
        campaignId: id,
        amount: parseFloat(donationAmount),
        donorName: "John Doe",
        donorEmail: "john.doe@example.com",
      });
      Swal.fire({
        icon: "success",
        title: "Thank You!",
        text: "Your donation has been successfully processed.",
      });
      setDonationAmount("");
      refreshDonations("john.doe@example.com");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Donation Failed",
        text: "There was an issue processing your donation. Please try again.",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Loading campaign details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F4F4F9] h-50 py-10">
      <Navbar></Navbar>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <figure className="w-full">
          <img
            src={campaign.image}
            alt={campaign.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </figure>
        <div className="p-6">
          <h1 className="text-3xl font-semibold text-[#1A685B] mb-4">{campaign.title}</h1>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">{campaign.description}</p>
          <div className="text-lg mb-4 bg-gray-100 p-3 rounded-lg shadow-sm">
            <span className="font-bold text-[#1A685B]">Type:</span> {campaign.type} | 
            <span className="font-bold text-[#1A685B]"> Minimum Donation:</span> ${campaign.minimumDonation} | 
            <span className="font-bold text-[#1A685B]"> Deadline:</span> {new Date(campaign.deadline).toLocaleDateString()}
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text text-lg font-semibold text-[#1A685B]">Enter Donation Amount:</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full text-xl py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A685B]"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder={`Minimum $${campaign.minimumDonation}`}
            />
          </div>

          <div className="mt-6">
            <button
              className="btn btn-primary w-full py-3 text-white bg-[#1A685B] hover:bg-[#145b4b] rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={handleDonate}
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CampaignDetails;