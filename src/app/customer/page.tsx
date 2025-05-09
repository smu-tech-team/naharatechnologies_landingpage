'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import Image from 'next/image';


// Define Customer Type
type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  image: string;
};

const customers: Customer[] = [
  { id: '1', name: 'Jane Doe', email: 'jane@example.com', phone: '+1 234 567 8901', location: 'New York, USA', image: '/customers/jane.jpg' },
  { id: '2', name: 'John Smith', email: 'john@example.com', phone: '+1 345 678 9012', location: 'London, UK', image: '/customers/john.jpg' },
  { id: '3', name: 'Alice Johnson', email: 'alice@example.com', phone: '+1 456 789 0123', location: 'Paris, France', image: '/customers/alice.jpg' },
  { id: '4', name: 'Bob Martin', email: 'bob@example.com', phone: '+1 567 890 1234', location: 'Berlin, Germany', image: '/customers/bob.jpg' },
  { id: '5', name: 'Clara Lee', email: 'clara@example.com', phone: '+1 678 901 2345', location: 'Tokyo, Japan', image: '/customers/clara.jpg' },
];

export default function CustomerPage() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const filteredCustomers = useMemo(() => {
    setLoading(true);
    const results = customers.filter((c) =>
      [c.name, c.email, c.location].some((field) =>
        field.toLowerCase().includes(query.toLowerCase())
      )
    );
    setLoading(false);
    return results;
  }, [query]);

  return (
    <div className="p-6  min-h-screen">
      {/* Go Home Button */}
      <div className="mb-4">
        <button
          onClick={() => router.push('/')}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200 flex items-center gap-2"
        >
          <FiArrowLeft /> Go Back Home
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">🌟 Our Valued Customers</h1>

      <p className="text-center text-gray-600 mb-6">
        We cherish every connection and provide the best experience for our customers worldwide.
      </p>

      {/* Search Bar */}
      <div className="mb-6 max-w-md mx-auto relative">
        <FiSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search by name, email, or location..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
      </div>

      {/* Loading State */}
      {loading && <p className="text-center text-gray-500">Loading customers...</p>}

      {/* Customer Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCustomers.length > 0 ? (
          filteredCustomers.map((customer) => (
            <div key={customer.id} className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-all">
              <Image
                src={customer.image || "/customers/default.jpg"}
                alt={customer.name}
                width={64}  // Adjust as needed
                height={64} // Adjust as needed
                className="w-16 h-16 rounded-full mx-auto mb-3"
              />

              <h2 className="text-lg font-bold text-center">{customer.name}</h2>
              <p className="text-gray-600 text-center">{customer.location}</p>
              <p className="text-gray-500 text-sm text-center">{customer.email}</p>
              <p className="text-gray-500 text-sm text-center">{customer.phone}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No customers found.</p>
        )}
      </div>
    </div>
  );
}
