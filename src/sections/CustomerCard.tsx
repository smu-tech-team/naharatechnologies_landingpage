import React from 'react'
import Image from 'next/image'

type Customer = {
  id: string
  name: string
  email: string
  phone: string
  location: string
  image: string
}

export const CustomerCard = ({ customer }: { customer: Customer }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition-all">
      <div className="flex items-center space-x-4">
        <Image
          src={customer.image}
          alt={customer.name}
          width={64}
          height={64}
          className="rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{customer.name}</h2>
          <p className="text-sm text-gray-500">{customer.location}</p>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Phone:</strong> {customer.phone}</p>
      </div>
    </div>
  )
}
