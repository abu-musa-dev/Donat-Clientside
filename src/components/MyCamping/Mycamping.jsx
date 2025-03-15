import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import img from '../../assets/smallbanner.jpg';

const Mycamping = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [campaignToDelete, setCampaignToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });
  }, []);

  useEffect(() => {
    if (userEmail) {
      fetch(`http://localhost:3001/api/myCampaigns/${userEmail}`)
        .then(response => response.json())
        .then(data => {
          setCampaigns(data);
          setLoading(false);
        });
    }
  }, [userEmail]);

  const handleUpdate = (id) => {
    navigate(`/updateCampaign/${id}`);
  };

  const handleDeleteClick = (id) => {
    setCampaignToDelete(id);
    setShowModal(true);
  };

  const handleDelete = () => {
    fetch(`http://localhost:3001/api/campaigns/${campaignToDelete}`, {
      method: 'DELETE',
    })
      .then(() => {
        setCampaigns(campaigns.filter(campaign => campaign._id !== campaignToDelete));
        setShowModal(false);
      });
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  if (loading) {
    return <div className="flex justify-center py-10"><span className="loading loading-spinner text-success"></span></div>;
  }

  return (
    <div>
      <Navbar />
      <div className="relative bg-[#1A685B] text-white py-20 text-center shadow-md rounded-lg">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(26, 104, 91, 0.8), rgba(26, 104, 91, 0.8)), url(${img})` }}></div>
        <div className="relative z-10">
          <h2 className="text-5xl font-extrabold tracking-wide">My Campaigns</h2>
          <p className="mt-4 text-xl opacity-90">Easily manage, update, and track your campaigns</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto m-10 p-10 bg-white shadow-2xl rounded-xl mt-12">
        {campaigns.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#1A685B] text-white text-lg">
                  <th className="px-6 py-4 text-left">Campaign Name</th>
                  <th className="px-6 py-4 text-left">Description</th>
                  <th className="px-6 py-4 text-left">Deadline</th>
                  <th className="px-6 py-4 text-left">Minimum Donation</th>
                  <th className="px-6 py-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map(campaign => (
                  <tr key={campaign._id} className="border-b hover:bg-gray-100 transition duration-200">
                    <td className="px-6 py-4 text-gray-900 font-semibold">{campaign.title}</td>
                    <td className="px-6 py-4 text-gray-700 truncate max-w-xs">{campaign.description}</td>
                    <td className="px-6 py-4 text-gray-600">{new Date(campaign.deadline).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-gray-600">${campaign.minimumDonation}</td>
                    <td className="px-6 py-4 flex gap-4">
                      <button
                        onClick={() => handleUpdate(campaign._id)}
                        className="px-5 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDeleteClick(campaign._id)}
                        className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-2xl text-gray-500 font-medium">No campaigns found.</div>
        )}
      </div>

      {/* Modal for Deletion Confirmation */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-70">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirm Deletion</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to permanently delete this campaign?</p>
            <div className="flex justify-center gap-6">
              <button
                onClick={handleDelete}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
              >
                Yes, Delete
              </button>
              <button
                onClick={handleCancel}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Mycamping;
