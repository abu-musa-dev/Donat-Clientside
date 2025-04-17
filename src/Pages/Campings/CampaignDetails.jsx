import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { auth } from "../../firebase"; // Firebase auth import
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaSpinner } from "react-icons/fa";

const CampaignDetails = ({ refreshDonations }) => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [donationAmount, setDonationAmount] = useState("");
  const [donationTitle, setDonationTitle] = useState(""); 

  // Fetch campaign data
  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await axios.get(`https://donat-serverside.vercel.app/api/campaigns/${id}`);
        setCampaign(response.data);
        setDonationTitle(response.data.title);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch campaign details.");
        setLoading(false);
      }
    };
    fetchCampaign();
  }, [id]);

  // Donation submit function
  const handleDonate = async () => {
    const user = auth.currentUser; // Firebase থেকে ইউজার তথ্য নিয়ে আসা

    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Unauthorized",
        text: "You must be logged in to donate.",
      });
      return;
    }

    if (isNaN(parseFloat(donationAmount)) || donationAmount <= 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Amount",
        text: "Please enter a valid donation amount.",
      });
      return;
    }

    try {
      const response = await axios.post("https://donat-serverside.vercel.app/api/donate", {
        campaignId: id,
        amount: parseFloat(donationAmount),
        donationTitle: donationTitle,
        donorName: user.displayName || "Anonymous", // ইউজারের নাম
        donorEmail: user.email, // ইউজারের ইমেইল পাঠাচ্ছি
      });

      Swal.fire({
        icon: "success",
        title: "Thank You!",
        text: "Your donation has been successfully processed.",
      });

      setDonationAmount("");
      setDonationTitle("");

      if (refreshDonations) {
        refreshDonations(user.email); // ইউজারের ইমেইল দিয়ে ডাটা রিফ্রেশ
      }
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
        <FaSpinner className="animate-spin text-green-600 text-5xl" /> {/* Added spinner here */}
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
    <div className="bg-[#F4F4F9] h-50 ">
      <Navbar></Navbar>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <figure className="w-full">
          <img src={campaign.image} alt={campaign.title} className="w-full h-64 object-cover rounded-t-lg" />
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
              className="input input-bordered w-full text-xl py-2 px-4 rounded-lg"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder={`Minimum $${campaign.minimumDonation}`}
            />
          </div>

          <div className="mt-6">
            <button
              className="btn  hover:bg-yellow-500 w-full py-3 text-white bg-[#1A685B] rounded-full"
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
