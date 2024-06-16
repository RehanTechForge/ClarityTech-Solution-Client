import React from 'react'

const ChooseUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-indigo-50 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src="/images/info.png" alt="Expertise" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">Expertise</h3>
            <p className="text-gray-700 text-center">
              Our team comprises industry experts with years of experience, ensuring top-notch solutions for your business.
            </p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src="/images/support.png" alt="Support" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">24/7 Support</h3>
            <p className="text-gray-700 text-center">
              We provide round-the-clock support to ensure your business operations run smoothly without any interruptions.
            </p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src="/images/webdev.png" alt="Innovation" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">Innovation</h3>
            <p className="text-gray-700 text-center">
              We leverage the latest technologies and innovative approaches to deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs