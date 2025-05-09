"use client";
import { FiAlertTriangle, FiCheckCircle, FiClock } from "react-icons/fi";

// ✅ Explicitly exporting TicketProps to be used in other components
export type TicketProps = {
  id: number;
  issue: string;
  priority: "High" | "Medium" | "Low";
  status: string;
  resolutionTime: string;
};

const TicketList = ({ id, issue, priority, status, resolutionTime }: TicketProps) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold">{issue}</h3>
      <p className="text-gray-600 flex items-center">
        Priority:
        {priority === "High" && <FiAlertTriangle className="text-red-500 ml-2" />}
        {priority === "Medium" && <FiClock className="text-yellow-500 ml-2" />}
        {priority === "Low" && <FiCheckCircle className="text-green-500 ml-2" />}
        <span className="ml-2">{priority}</span>
      </p>
      <p className="text-gray-600">Status: {status}</p>
      <p className="text-gray-700 mt-2">Estimated Resolution: {resolutionTime}</p>
    </div>
  );
};

export default TicketList;
