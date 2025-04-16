import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { Toaster, toast } from "react-hot-toast";
import logo from '../../assets/logo.png';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [loginToastShown, setLoginToastShown] = useState(
    sessionStorage.getItem("loginToastShown") === "true"
  );

  // Dark mode setup for navbar only
  useEffect(() => {
    const savedTheme = localStorage.getItem("navbarTheme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // User authentication check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);

      // ✅ Toast only when user logs in for the first time
      if (currentUser && !loginToastShown) {
        toast.success("Logged in successfully!", { duration: 8000, position: "top-center" });
        setLoginToastShown(true);
        sessionStorage.setItem("loginToastShown", "true");
      }
    });

    return () => unsubscribe();
  }, [loginToastShown]);

  // Logout function
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate('/');
        toast.success("Logged out successfully!", { duration: 8000, position: "top-center" });
        sessionStorage.removeItem("loginToastShown");
      })
      .catch((error) => {
        console.error("Logout failed: ", error);
        toast.error("Logout failed! Please try again.", { duration: 8000, position: "top-center" });
      });
  };

  // Theme toggle function for navbar only
  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      const theme = newMode ? "dark" : "light";
      localStorage.setItem("navbarTheme", theme);
      return newMode;
    });
  };

  return (
    <>
      <div className={`navbar p-5 sticky shadow-lg flex justify-between items-center ${isDarkMode ? "bg-[#1A685B]" : "bg-[#1A685B]"}`}>
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-xl">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={`text-white font-bold hover:text-yellow-400 transition duration-300 ${isDarkMode ? 'hover:text-gray-300' : ''}`}>Home</Link>
          <Link to="/allcamping" className={`text-white font-bold hover:text-yellow-400 transition duration-300 ${isDarkMode ? 'hover:text-gray-300' : ''}`}>All Camping</Link>
          <Link to="/AddNewCampaign" className={`text-white font-bold hover:text-yellow-400 transition duration-300 ${isDarkMode ? 'hover:text-gray-300' : ''}`}>Add New Camping</Link>
          <Link to="/mycamping" className={`text-white font-bold hover:text-yellow-400 transition duration-300 ${isDarkMode ? 'hover:text-gray-300' : ''}`}>My Campaign</Link>
          <Link to="/my-donations" className={`text-white font-bold hover:text-yellow-400 transition duration-300 ${isDarkMode ? 'hover:text-gray-300' : ''}`}>My Donations</Link>
        </div>

        {/* Right Side (Theme Toggle + Login/Logout + Hamburger) */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button onClick={handleThemeToggle} className="p-2 rounded-full bg-[#FFAC00] text-black transition duration-300">
            {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </button>

          {/* Login / Logout Button */}
          {user ? (
            <div className="hidden md:flex items-center space-x-2">
              <img src={user.photoURL || "https://via.placeholder.com/40"} alt="Profile" className="w-10 h-10 rounded-full border-2 border-yellow-400" />
              <button onClick={handleLogout} className="px-5 py-2 bg-[#FFAC00] text-white font-bold rounded-full shadow-md transition duration-300">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="hidden md:flex px-5 py-2 bg-[#FFAC00] text-white font-bold rounded-full shadow-md hover:bg-yellow-600 transition duration-300">
              Login
            </Link>
          )}

          {/* Mobile Hamburger Menu */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#1A685B] p-4 space-y-4 absolute top-16 right-0 w-full shadow-lg z-10">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-white font-bold hover:text-yellow-400 transition duration-300">Home</Link>
          <Link to="/allcamping" onClick={() => setIsMenuOpen(false)} className="text-white font-bold hover:text-yellow-400 transition duration-300">All Camping</Link>
          <Link to="/AddNewCampaign" onClick={() => setIsMenuOpen(false)} className="text-white font-bold hover:text-yellow-400 transition duration-300">Add New Camping</Link>
          <Link to="/mycamping" onClick={() => setIsMenuOpen(false)} className="text-white font-bold hover:text-yellow-400 transition duration-300">My Campaign</Link>
          <Link to="/my-donations" onClick={() => setIsMenuOpen(false)} className="text-white font-bold hover:text-yellow-400 transition duration-300">My Donations</Link>
          {user ? (
            <button onClick={handleLogout} className="px-5 py-2 bg-yellow-500 text-white font-bold rounded-full shadow-md hover:bg-yellow-600 transition duration-300">
              Logout
            </button>
          ) : (
            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="px-5 py-2 bg-[#FFAC00] text-white font-bold rounded-full shadow-md hover:bg-yellow-600 transition duration-300">
              Login
            </Link>
          )}
        </div>
      )}

      <Toaster />
    </>
  );
};

export default Navbar;
