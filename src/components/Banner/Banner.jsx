import React from "react";
import Slider from "react-slick"; // Importing react-slick for the carousel
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css"; // Import slick carousel css
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme
import { AiOutlineArrowRight } from "react-icons/ai";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg"; // Updated image for the second slide
import banner3 from "../../assets/banner3.jpg";

const Banner = () => {
  const slides = [
    {
      url: banner1,
      header: "Welcome to Donate City",
      title: "Every Donation Counts, Every Heart Matters",
    },
    {
      url: banner2,
      header: "Give Hope for Homeless",
      title: "Helping Each Other Can Make the World Better",
    },
    {
      url: banner3,
      header: "Join Donate City",
      title: "Helping Others Today Creates a Better Tomorrow for All",
    },
  ];

  // Settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <section className="w-full relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen">
            <img
              src={slide.url}
              className="w-full h-full object-cover transition-transform duration-1000 ease-in-out transform hover:scale-105"
              alt={slide.title}
            />
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
            {/* Centered text */}
            <div className="absolute top-1/2 left-1/2 w-[90%] sm:w-3/4 mx-auto transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4 sm:p-6 space-y-4 sm:space-y-6">
              <div className="flex justify-center items-center space-x-2 sm:space-x-4">
                <hr className="w-10 sm:w-16 border-t-2 border-yellow-600" />
                <span className="text-sm sm:text-lg md:text-2xl text-[#B47D19] font-semibold">
                  {slide.header}
                </span>
                <hr className="w-10 sm:w-16 border-t-2 border-yellow-600" />
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
                {slide.title}
              </h2>
            </div>
            {/* Call-to-action button */}
            <div className="absolute bottom-10 sm:bottom-20 left-1/2 transform -translate-x-1/2">
              <button className="bg-[#1A685B] text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg rounded-full shadow-md hover:bg-white hover:text-black transition-all flex items-center group">
                Donate Now{" "}
                <AiOutlineArrowRight className="inline-block rotate-[-45deg] transition-transform duration-300 transform ml-2 group-hover:rotate-0" />
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
