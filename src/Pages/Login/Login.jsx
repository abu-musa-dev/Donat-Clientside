import React, { useState } from "react";
import { auth } from "../../firebase";  
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful!");
      navigate("/home");
    } catch (error) {
      setError(error.message);
      toast.error("Login failed! Please check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Google Login Successful!");
      navigate("/home");
    } catch (error) {
      toast.error("Google Login failed! Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen ">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold text-center text-[#1A685B] mb-6">Login to Your Account</h1>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              className="w-full p-3 border border-[#1A685B] rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="w-full p-3 border border-[#1A685B] rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="text-right text-sm text-[#1A685B] hover:text-yellow-500 cursor-pointer">
              <a href="/forgot-password">Forgot Password?</a>
            </p>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-md shadow-md hover:from-yellow-600 hover:to-yellow-700 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account? <a href="/register" className="text-[#1A685B] hover:text-yellow-500">Register</a>
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={handleGoogleLogin}
              className="w-full py-3 bg-gradient-to-r from-[#1A685B] to-[#1A685B] text-white font-bold rounded-md shadow-md hover:from-[#1A685B] hover:to-[#1A685B] transition duration-300"
            >
              Login with Google
            </button>
          </div>

          <Toaster />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
