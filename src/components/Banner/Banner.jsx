import React from "react";
import Slider from "react-slick"; // Importing react-slick for the carousel
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css"; // Import slick carousel css
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg"; // Updated image for the second slide
import banner3 from "../../assets/banner3.jpg";

const Banner = () => {
  const slides = [
    {
      url: banner1,
      header: "Welcome to Donate City", // Fixed typo
      title: "Every Donation Counts, Every Heart Matters", // Fixed typo
    },
    {
      url: banner2,
      header: "Give Hope for Homeless",
      title: "Helping Each Other Can Make the World Better",
    },
    {
      url: banner3,
      header: "Join Donate City", // Fixed typo
      title: "Helping Others Today Creates a Better Tomorrow for All",
    },
  ];

  // Settings for react-slick
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Display one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto play slides
    autoplaySpeed: 3000, // Time between slides
    arrows: true, // Show arrows
    pauseOnHover: true, // Pause when hovering
  };

  return (
    <section className="h-screen w-full relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen w-full">
            <img
              src={slide.url}
              className="w-full h-full object-cover transition-transform duration-1000 ease-in-out transform hover:scale-105"
              alt={slide.title}
            />
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
            {/* Centering text using flexbox */}
            <div className="absolute top-1/2 left-1/2 w-3/4 mx-auto transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-6 space-y-6">
              {/* Header with HR lines on both sides */}
              <div className="flex justify-center items-center space-x-4">
                {/* Left side line */}
                <hr className="w-16 border-t-2 border-yellow-500" />
                {/* Text */}
                <span className="text-lg text-yellow-500 font-italic sm:text-xl md:text-2xl">{slide.header}</span>
                {/* Right side line */}
                <hr className="w-16 border-t-2 border-yellow-500" />
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
                {slide.title}
              </h2>
            </div>
            {/* Call-to-action button at the bottom of the screen */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <button className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition-all">
          Donate Now ↗
        </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
