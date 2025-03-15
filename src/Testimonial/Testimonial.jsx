import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import img1 from '../assets/faq_1_1.png';
import img2 from '../assets/faq_1_1.png';
import img3 from '../assets/faq_1_1.png';
import img4 from '../assets/faq_1_1.png';

const testimonials = [
  {
    id: 1,
    name: "Alex Furnandes",
    role: "CEO, Founder",
    rating: 5.0,
    text: `This charity truly changes lives. The support and transparency they offer are unmatched. I am proud to contribute and be a part of this mission.`,
    image: img1,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    rating: 4.8,
    text: `A well-organized charity that actually delivers on its promises. Their events are impactful, and their initiatives are genuinely helping communities.`,
    image: img2,
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Business Owner",
    rating: 5.0,
    text: `I have donated to many causes, but this organization stands out due to its commitment and integrity. Highly recommended for anyone looking to make a real difference!`,
    image: img3,
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "NGO Volunteer",
    rating: 4.9,
    text: `Volunteering here has been a life-changing experience. The team is dedicated, and the impact they create is inspiring.`,
    image: img4,
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8">
      <h3 className="text-yellow-500 text-center font-semibold text-lg">Testimonials</h3>
      <h2 className="text-2xl sm:text-3xl font-bold text-center mt-2">
        What People Say About <br className="hidden sm:block" /> Our Charity
      </h2>

      <div className="flex flex-col md:flex-row items-center mt-8 bg-gray-100 rounded-lg p-6">
        {/* Image Section */}
        <div className="relative flex-shrink-0 w-full sm:w-1/2 md:w-1/3">
          <div className="relative bg-green-500 rounded-full p-2 w-16 h-16 sm:w-20 sm:h-20 absolute -top-5 -left-5">
            <FaStar className="text-yellow-400 mt-4 ml-3 text-lg" />
            <span className="absolute top-1 left-8 mt-5 ml-2 text-white font-bold">{testimonials[index].rating}</span>
          </div>
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="rounded-lg w-full"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 mt-4 md:mt-0 md:pl-6 text-center md:text-left">
          <p className="text-gray-700 italic mb-4 text-sm sm:text-base">
            "{testimonials[index].text}"
          </p>
          <h4 className="font-bold text-lg">{testimonials[index].name}</h4>
          <p className="text-sm text-gray-500">{testimonials[index].role}</p>
          <FaQuoteRight className="text-green-500 text-2xl mt-2 mx-auto md:mx-0" />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center mt-6 gap-4">
        <button
          onClick={prevTestimonial}
          className="p-4 bg-gray-200 rounded-full hover:bg-yellow-500 transition duration-300"
        >
          ←
        </button>
        <span className="text-green-500 font-semibold text-lg">{index + 1}</span>
        <span className="text-gray-400">/ {testimonials.length}</span>
        <button
          onClick={nextTestimonial}
          className="p-4 bg-gray-200 rounded-full hover:bg-yellow-500 transition duration-300"
        >
          →
        </button>
      </div>
    </div>
  );
}
