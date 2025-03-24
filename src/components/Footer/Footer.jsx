import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#03130D] text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left md:text-left">
      {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold flex justify-center md:justify-start items-center gap-2">
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
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              {['About Us', 'Our News', 'Our Campaign', 'Privacy Policy', 'Contact Us'].map((item, index) => (
                <li key={index}><a href="#" className="hover:text-green-400">{item}</a></li>
              ))}
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold">Our Service</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              {['Give Donation', 'Education Support', 'Food Support', 'Health Support', 'Our Campaign'].map((item, index) => (
                <li key={index}><a href="#" className="hover:text-green-400">{item}</a></li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2 text-gray-400">Call us any time:</p>
            <p className="text-green-400 font-semibold">+163-3654-7896</p>
            <p className="mt-2 text-gray-400">Email us any time:</p>
            <p className="text-green-400 font-semibold">info@donat.com</p>
            
            {/* Social Media */}
            <div className="flex justify-center md:justify-start mt-4 space-x-3">
              {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedin].map((Icon, index) => (
                <a key={index} href="#" className="text-white bg-gray-800 p-2 rounded-full hover:bg-green-600 transition">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-10 text-center text-gray-400 border-t border-gray-700 pt-6">
          &copy; Copyright 2025 Donat. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;