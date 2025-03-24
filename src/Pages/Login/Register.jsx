import React, { useState } from "react";
import { auth } from "../../firebase"; 
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.{6,})/;
    return regex.test(password);
  };

  const handleRegister = async () => {
    setError(null);
    if (!validatePassword(password)) {
      setError("Password must contain at least 6 characters, an uppercase and a lowercase letter.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      toast.success("Registration successful!");
      navigate("/home");
    } catch (error) {
      setError(error.message);
      toast.error("Registration failed! Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold text-center text-green-800 mb-6">Create Account</h1>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <input
            type="text"
            className="w-full p-3 mb-4 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="w-full p-3 mb-4 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="w-full p-3 mb-4 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Profile Photo URL (Optional)"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-3 mb-4 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
            >
              {showPassword ? "👁️" : "🔒"}
            </button>
          </div>

          <button
            onClick={handleRegister}
            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-md shadow-md hover:from-yellow-600 hover:to-yellow-700 transition duration-300"
          >
            Register
          </button>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-green-600 hover:text-yellow-500">Login</a>
          </p>

          <Toaster />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
