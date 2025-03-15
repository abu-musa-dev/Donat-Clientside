import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSpinner, FaExclamationCircle } from "react-icons/fa";
import bannerimg from '../../assets/smallbanner.jpg';
import Footer from "../../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MyDonations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        // **API থেকে ডাটা ফেচ করার জন্য নিচের কোডটি আনকমেন্ট করুন**
        // const response = await axios.get("http://localhost:3001/api/my-donations", {
        //   params: { email: "john.doe@example.com" }, // **এখানে ইউজারের ইমেইল যুক্ত করুন**
        // });
        // setDonations(response.data);

        // **ডেমো ডাটা**
        const demoDonations = [
          { campaignTitle: "Help Flood Victims", amount: 50, date: "2024-03-01" },
          { campaignTitle: "Education for Kids", amount: 100, date: "2024-02-20" },
          { campaignTitle: "Medical Aid for Orphans", amount: 75, date: "2024-01-15" },
        ];

        setDonations(demoDonations);
        setLoading(false);
      } catch (err) {
        setError("Failed to load donations.");
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* ✅ **ব্যানার সেকশন (গ্রেডিয়েন্ট যোগ করা হয়েছে)** */}
      <div className="relative w-full h-64">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 104, 91, 0.8), rgba(26, 104, 91, 0.8)), url(${bannerimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold drop-shadow-lg">My Donations</h1>
        </div>
      </div>

      {/* ✅ **লোডিং এবং এরর হ্যান্ডলিং** */}
      {loading && (
        <div className="flex flex-col items-center justify-center h-96">
          <FaSpinner className="animate-spin text-green-500 text-5xl mb-3" />
          <p className="text-lg font-semibold text-gray-700">Loading your donations...</p>
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center justify-center h-96">
          <FaExclamationCircle className="text-red-500 text-5xl mb-3" />
          <p className="text-lg font-semibold text-red-600">{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg mt-10 p-6">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
            Your Donation History
          </h2>

          {donations.length === 0 ? (
            <p className="text-center text-gray-600 py-6 text-lg">
              You have not made any donations yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="py-4 px-6 border">Campaign</th>
                    <th className="py-4 px-6 border">Amount</th>
                    <th className="py-4 px-6 border">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {donations.map((donation, index) => (
                    <tr
                      key={index}
                      className="text-center bg-gray-50 even:bg-gray-100 hover:bg-green-50 transition"
                    >
                      <td className="py-4 px-6 border">{donation.campaignTitle}</td>
                      <td className="py-4 px-6 border text-green-600 font-semibold">
                        ${donation.amount}
                      </td>
                      <td className="py-4 px-6 border text-gray-500">
                        {new Date(donation.date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MyDonations;
