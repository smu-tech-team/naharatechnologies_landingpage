"use client";
import { FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";

const ContactCard = () => {
  return (
    <div className="mt-12 px-4 py-6 bg-gray-100 rounded-lg shadow-lg text-center">
      <h3 className="text-xl sm:text-2xl font-semibold">💻 IT Support Contact</h3>
      <p className="text-gray-600 mt-2 text-sm sm:text-base">Get in touch with our team for advanced technical assistance.</p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
        <a href="mailto:support@naharatechnologies.com" className="text-blue-600 flex items-center gap-2 justify-center hover:underline">
          <FiMail className="text-lg" />
          <span className="text-sm sm:text-base">support@naharatechnologies.com</span>
        </a>

        <a href="tel:+2349078781812" className="text-blue-600 flex items-center gap-2 justify-center hover:underline">
          <FiPhone className="text-lg" />
          <span className="text-sm sm:text-base">+234 9078781812</span>
        </a>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2 text-sm sm:text-base">
          <FiMessageSquare className="text-lg" />
          Live Chat
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
