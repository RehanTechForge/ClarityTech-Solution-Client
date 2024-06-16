import React from 'react'

const Analytics = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center border-b md:border-b-0 md:border-r lg:border-r-2 border-gray-300 py-4">
            <h2 className="text-3xl font-bold text-indigo-600">50+</h2>
            <p className="text-gray-700">Registered Companies</p>
          </div>
          <div className="flex flex-col items-center border-b md:border-b-0 md:border-r lg:border-r-2 border-gray-300 py-4">
            <h2 className="text-3xl font-bold text-indigo-600">100,000+</h2>
            <p className="text-gray-700">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center border-b md:border-b-0 md:border-r lg:border-r-2 border-gray-300 py-4">
            <h2 className="text-3xl font-bold text-indigo-600">50+</h2>
            <p className="text-gray-700">Well Known Developers</p>
          </div>
          <div className="flex flex-col items-center py-4">
            <h2 className="text-3xl font-bold text-indigo-600">24/7</h2>
            <p className="text-gray-700">Service</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Analytics