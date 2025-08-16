"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FAQCategory from "@/components/FAQCategory";
import TicketList, { TicketProps } from "@/components/TicketList"; 
import ContactCard from "@/components/ContactCard";
import SearchBar from "@/components/SearchBar";
import { FiArrowLeft } from "react-icons/fi";

const faqCategories = [
  { id: 1, title: "General Questions", faqs: ["How do I create an account?", "How can I reset my password?", "Where can I access support?"] },
  { id: 2, title: "Billing & Payments", faqs: ["How do I update payment information?", "What happens if my payment fails?", "Are refunds available?"] },
  { id: 3, title: "Technical Issues", faqs: ["Why is my app not working?", "How do I report a bug?", "Where do I find system requirements?"] },
];
const mockTickets: TicketProps[] = [
  { id: 1, issue: "App crashing on startup", priority: "High", status: "Open", resolutionTime: "24 hours" },
  { id: 2, issue: "Billing error on my account", priority: "Medium", status: "Pending", resolutionTime: "48 hours" },
  { id: 3, issue: "Slow network connectivity", priority: "Low", status: "Resolved", resolutionTime: "N/A" },
];
export default function Help() {
  const [searchTerm, setSearchTerm] = useState("");
  const [ticketSearch, setTicketSearch] = useState("");
  const router = useRouter();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-8">Need Help?</h2>
      <SearchBar  placeholder="Search for help topics..." onChange={(e) => setSearchTerm(e.target.value)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqCategories.map((category) => (
          <FAQCategory key={category.id} {...category} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTickets
          .filter((ticket) => ticket.issue.toLowerCase().includes(ticketSearch.toLowerCase()))
          .map((ticket) => (
            <TicketList key={ticket.id} {...ticket} />
          ))}
      </div>
      <ContactCard />
      <div className="text-center mt-8">
        <button className="bg-gray-800 text-white px-6 py-3 hover:bg-gray-900 flex items-center gap-2 mx-auto" onClick={() => router.push("/")}>
          <FiArrowLeft /> Go Back
        </button>
      </div>
    </div>
  );
}
