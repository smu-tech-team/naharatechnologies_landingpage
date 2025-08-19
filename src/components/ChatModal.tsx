"use client";

import { useEffect } from "react";
import { FiX } from "react-icons/fi";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Create script dynamically
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://embed.tawk.to/68a11ac79a68c0192a7e29fe/1j2ql17mi"; // 🔑 replace with your real Tawk.to ID
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.body.appendChild(script);

      return () => {
        // cleanup: remove script when modal closes
        const existing = document.querySelector(
          `script[src="https://embed.tawk.to/68a11ac79a68c0192a7e29fe/1j2ql17mi"]`
        );
        if (existing) {
          existing.remove();
        }
        // also remove iframe if needed
        const iframe = document.querySelector("iframe[title='chat widget']");
        if (iframe) iframe.remove();
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-2xl shadow-xl overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-800"
        >
          <FiX size={22} />
        </button>

        {/* Header */}
        <div className="bg-red-800 text-white px-6 py-3 text-lg font-semibold">
          Live Support Chat
        </div>

        {/* Chat Container */}
        <div
          id="tawk-container"
          className="p-4 h-[450px] flex justify-center items-center"
        >
          <p className="text-gray-600">Loading live chat...</p>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
