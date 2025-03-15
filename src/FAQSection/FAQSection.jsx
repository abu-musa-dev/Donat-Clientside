import React from "react";
import img1 from '../assets/faq_1_1.png'
import img2 from '../assets/faq_1_2.png'


const FAQSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-8 md:p-16">
      {/* Left Side - Images */}
      <div className="relative  md:w-1/2">
        <img
          src={img1}
          alt="Smiling Kids"
          className="rounded-lg w-full"
        />
        <div className="absolute bottom-4  right-5   rounded-lg">
          <img
            src={img2}
            alt="Sad Child"
            className=" rounded-full grayscale w-56 h-56"
          />
        </div>
      </div>

      {/* Right Side - FAQ Section */}
      <div className="w-full md:w-1/2 md:pl-12">
        <h4 className="text-yellow-500 font-semibold mb-2">Frequently Asked Questions</h4>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Have Any Questions For Us?
        </h2>
        
        <div className="space-y-4">
          {/* FAQ Item */}
          <div className="collapse collapse-arrow border border-gray-200 rounded-lg">
            <input type="radio" name="faq" defaultChecked />
            <div className="collapse-title text-lg font-semibold">
              What motivates you to donate to our charity?
            </div>
            <div className="collapse-content text-gray-600">
              <p>We believe in helping those in need and making a difference in society.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow border border-gray-200 rounded-lg">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-semibold">
              How did you hear about our organization?
            </div>
            <div className="collapse-content text-gray-600">
              <p>Through social media, word of mouth, and our community events.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow border border-gray-200 rounded-lg">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-semibold">
              How frequently do you prefer to volunteer?
            </div>
            <div className="collapse-content text-gray-600">
              <p>We encourage volunteering as often as possible based on availability.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow border border-gray-200 rounded-lg">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-semibold">
              What motivated you to participate in this event?
            </div>
            <div className="collapse-content text-gray-600">
              <p>Our passion for social welfare and making a positive impact.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
