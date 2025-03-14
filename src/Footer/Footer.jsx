import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#03130D] text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo & About */}
          <div className="max-w-sm text-center md:text-left">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-green-400">D</span>onat
            </h2>
            <p className="mt-2 text-gray-400">
              Our secure online donation platform allows you to make contributions quickly and safely.
            </p>
            <button className="mt-4 px-6 py-2 bg-green-600 rounded-full hover:bg-green-700 transition">
              Donate Now
            </button>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400">About Us</a></li>
              <li><a href="#" className="hover:text-green-400">Our News</a></li>
              <li><a href="#" className="hover:text-green-400">Our Campaign</a></li>
              <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-white">Our Service</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400">Give Donation</a></li>
              <li><a href="#" className="hover:text-green-400">Education Support</a></li>
              <li><a href="#" className="hover:text-green-400">Food Support</a></li>
              <li><a href="#" className="hover:text-green-400">Health Support</a></li>
              <li><a href="#" className="hover:text-green-400">Our Campaign</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <p className="mt-2 text-gray-400">Call us any time:</p>
            <p className="text-green-400 font-semibold">+163-3654-7896</p>
            <p className="mt-2 text-gray-400">Email us any time:</p>
            <p className="text-green-400 font-semibold">info@donat.com</p>
            
            {/* Social Media */}
            <div className="flex mt-4 space-x-3">
              <a href="#" className="text-white bg-gray-800 p-2 rounded-full hover:bg-green-600 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white bg-gray-800 p-2 rounded-full hover:bg-green-600 transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-white bg-gray-800 p-2 rounded-full hover:bg-green-600 transition">
                <FaYoutube />
              </a>
              <a href="#" className="text-white bg-gray-800 p-2 rounded-full hover:bg-green-600 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-10  text-center text-gray-400 border-t border-gray-700 pt-6">
          &copy; Copyright 2025 Donat. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
