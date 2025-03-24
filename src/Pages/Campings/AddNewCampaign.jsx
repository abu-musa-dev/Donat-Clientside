import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { Toaster, toast } from "react-hot-toast";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../contexts/AuthContext";
import img from "../../assets/smallbanner.jpg";

const AddNewCampaign = () => {
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    type: "personal issue",
    description: "",
    image: "",
    minimumDonation: "",
    deadline: "",
  });

  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setUserEmail(currentUser.email);
      setUserName(currentUser.displayName);
    } else {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCampaign = async (e) => {
    e.preventDefault();

    const validDonation = parseFloat(formData.minimumDonation);
    if (isNaN(validDonation)) {
      toast.error("Minimum donation must be a valid number.");
      return;
    }

    const validDeadline = new Date(formData.deadline);
    if (isNaN(validDeadline.getTime())) {
      toast.error("Invalid date format for deadline.");
      return;
    }

    const isoDeadline = validDeadline.toISOString();

    const campaignData = {
      ...formData,
      minimumDonation: validDonation,
      deadline: isoDeadline,
      userEmail,
      userName,
    };

    console.log("Campaign data being sent:", campaignData);

    try {
      const response = await fetch("http://localhost:3001/api/campaigns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(campaignData),
      });

      if (!response.ok) {
        throw new Error("Failed to add campaign");
      }

      const data = await response.json();
      toast.success("Campaign added successfully!");
    } catch (error) {
      console.error("Error adding campaign: ", error);
      toast.error("Failed to add campaign");
    }
  };

  return (
    <div className="bg-gray-100">
      <Navbar />
      <Toaster />
      {/* ✅ **ব্যানার সেকশন (গ্রেডিয়েন্ট যোগ করা হয়েছে)** */}
      <div className="relative">
  <img
    src={img}
    alt="Campaign Banner"
    className="w-full h-64 object-cover"
    style={{
      backgroundImage: `linear-gradient(rgba(26, 104, 91, 0.8), rgba(26, 104, 91, 0.8)), url(${img})`,
    }}
  />
  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#092621] ">
    <h2 className="text-white text-3xl font-bold">
      Start a New Campaign
    </h2>
  </div>
</div>


      <div className="max-w-4xl mx-auto mt-8 p-6 m-10 shadow-lg bg-white rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#1A685B]">
          Add New Campaign
        </h2>
        <form onSubmit={handleAddCampaign}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Campaign Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 p-2 block w-full border rounded-md"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label
                htmlFor="minimumDonation"
                className="block text-sm font-medium text-gray-700"
              >
                Minimum Donation Amount
              </label>
              <input
                type="number"
                id="minimumDonation"
                name="minimumDonation"
                className="mt-1 p-2 block w-full border rounded-md"
                value={formData.minimumDonation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="deadline"
                className="block text-sm font-medium text-gray-700"
              >
                Deadline
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                className="mt-1 p-2 block w-full border rounded-md"
                value={formData.deadline}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                Campaign Type
              </label>
              <select
                id="type"
                name="type"
                className="mt-1 p-2 block w-full border rounded-md"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="personal issue">Personal Issue</option>
                <option value="startup">Startup</option>
                <option value="business">Business</option>
                <option value="creative ideas">Creative Ideas</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL (Thumbnail)
              </label>
              <input
                type="text"
                id="image"
                name="image"
                className="mt-1 p-2 block w-full border rounded-md"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="mt-1 p-2 block w-full border rounded-md"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              User Email (Read Only)
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md bg-gray-100"
              value={userEmail}
              readOnly
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#1A685B] text-white px-4 py-2 w-full rounded-full hover:bg-yellow-500 transition duration-300"
            >
              Add Campaign
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddNewCampaign;
