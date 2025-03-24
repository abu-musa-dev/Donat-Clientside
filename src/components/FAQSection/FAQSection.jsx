import React from "react";
import img1 from '../../assets/faq_1_1.png';
import img2 from '../../assets/faq_1_2.png';

const FAQSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-12 lg:p-16 gap-8">
      {/* Left Side - Images */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <img
          src={img1}
          alt="Smiling Kids"
          className="rounded-lg w-full max-w-md md:max-w-lg"
        />
        <div className="absolute bottom-4 right-4 md:right-8 lg:right-12 rounded-lg">
          <img
            src={img2}
            alt="Sad Child"
            className="rounded-full grayscale w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Right Side - FAQ Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h4 className="text-yellow-500 font-semibold mb-2 text-sm sm:text-base md:text-lg">
          Frequently Asked Questions
        </h4>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Have Any Questions For Us?
        </h2>
        
        <div className="space-y-4">
          {/* FAQ Items */}
          {faqData.map((faq, index) => (
            <div key={index} className="collapse collapse-arrow border border-gray-200 rounded-lg">
              <input type="radio" name="faq" defaultChecked={index === 0} />
              <div className="collapse-title text-base md:text-lg font-semibold">
                {faq.question}
              </div>
              <div className="collapse-content text-gray-600">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "What motivates you to donate to our charity?",
    answer: "We believe in helping those in need and making a difference in society."
  },
  {
    question: "How did you hear about our organization?",
    answer: "Through social media, word of mouth, and our community events."
  },
  {
    question: "How frequently do you prefer to volunteer?",
    answer: "We encourage volunteering as often as possible based on availability."
  },
  {
    question: "What motivated you to participate in this event?",
    answer: "Our passion for social welfare and making a positive impact."
  }
];

export default FAQSection;