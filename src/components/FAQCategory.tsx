"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type FaqCategoryProps = {
  id: number;
  title: string;
  faqs: string[];
};

const FAQCategory = ({ id, title, faqs }: FaqCategoryProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mb-6 transition-transform hover:scale-105">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <h3 className="text-xl font-semibold">{title}</h3>
        <FiChevronDown className={`text-gray-600 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </div>
      {expanded && (
        <ul className="mt-2">
          {faqs.map((faq, index) => (
            <li key={index} className="text-gray-700 py-1">• {faq}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FAQCategory;
