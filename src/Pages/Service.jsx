import React, { useState, useEffect } from 'react'
import { FaDesktop, FaMobileAlt, FaChartLine, FaPalette } from 'react-icons/fa';
import { useAuth } from '../store/auth'
const Service = () => {
  const { services } = useAuth()
  // console.log(services)
  const features = [
    {
      id: 1,
      title: 'Cutting-edge Technology',
      description: 'We use the latest technologies and frameworks to deliver high-quality solutions.',
      icon: <FaDesktop className="text-4xl text-blue-500" />,
    },
    {
      id: 2,
      title: 'Scalable Solutions',
      description: 'Our services are designed to scale with your business as it grows.',
      icon: <FaMobileAlt className="text-4xl text-blue-500" />,
    },
    {
      id: 3,
      title: 'Dedicated Support',
      description: '24/7 customer support to ensure your business operations run smoothly.',
      icon: <FaChartLine className="text-4xl text-blue-500" />,
    },
    {
      id: 4,
      title: 'Affordable Pricing',
      description: 'Competitive pricing plans to suit businesses of all sizes and budgets.',
      icon: <FaPalette className="text-4xl text-blue-500" />,
    },
  ];
  const plans = [
    {
      id: 1,
      name: 'Basic Plan',
      price: 499,
      features: ['Web Development', 'Basic SEO', 'Email Support'],
    },
    {
      id: 2,
      name: 'Standard Plan',
      price: 999,
      features: ['Web + Mobile App Development', 'Advanced SEO', '24/7 Support'],
    },
    {
      id: 3,
      name: 'Premium Plan',
      price: 1499,
      features: ['Custom Web & Mobile Solutions', 'Comprehensive SEO', 'Dedicated Account Manager'],
    },
  ];
  return (
    <section className="bg-indigo-100 text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-black">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-indigo-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <img
                src={`${service.image}`} // Replace with actual service image URL or service-specific image
                alt="Service"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.service}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{service.provider}</span>
                  <span className="text-sm font-semibold">${service.price}</span>
                </div>
              </div>
              <div className="p-4 bg-indigo-700 text-center">
                <button className="text-white font-semibold py-2 px-4 rounded-lg bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        jsx
        Copy code
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-center mb-8 text-black">Choose a Plan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.id} className="bg-indigo-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <div className="flex justify-center items-center mb-4">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                </div>
                <div className="flex justify-center items-center mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                </div>
                <ul className="text-gray-300 mb-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2 flex items-center">
                      <span className="text-green-500 mr-2">&#10003;</span> {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                  <button className="text-white font-semibold py-2 px-4 rounded-lg bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                    Select Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default Service