import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import { Toaster, toast } from 'react-hot-toast';
import Navbar from '../../components/Navbar/Navbar';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');
    if (email) {
      setEmail(email);
    }
  }, [location]);

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent! Check your inbox.');
      navigate('https://mail.google.com/');
    } catch (error) {
      toast.error('Failed to send password reset email.');
    }
  };

  return (
    <div>
      <Navbar />
      
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold text-center text-green-800 mb-6">Reset Password</h1>

          <input
            type="email"
            className="w-full p-3 mb-4 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={handleResetPassword}
            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-md shadow-md hover:from-yellow-600 hover:to-yellow-700 transition duration-300"
          >
            Send Reset Email
          </button>

          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
