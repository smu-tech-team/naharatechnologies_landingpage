"use client";
import { useState } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import ContactLink from "./ContactLink";
import LiveChatButton from "./LiveChatButton";
import ChatModal from "./ChatModal";

const ContactCard: React.FC = () => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div className="mt-12 px-4 py-6 bg-gray-100 rounded-lg shadow-lg text-center">
      <h3 className="text-xl sm:text-2xl font-semibold text-red-900">💻 IT Support Contact</h3>
      <p className="text-gray-700 mt-2 text-sm sm:text-base">
        Get in touch with our team for advanced technical assistance.
      </p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
        <ContactLink
          href="mailto:support@naharatechnologies.com"
          icon={FiMail}
          text="support@naharatechnologies.com"
        />
        <ContactLink
          href="tel:+2349078781812"
          icon={FiPhone}
          text="+234 9078781812"
        />
        <LiveChatButton onClick={() => setOpenChat(true)} />
      </div>

      <ChatModal isOpen={openChat} onClose={() => setOpenChat(false)} />
    </div>
  );
};

export default ContactCard;
