import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO, Example Company',
      message: 'Muhammad Rehan provided exceptional service and delivered exactly what we needed. Highly recommend!',
      image: 'images/testimonialsone.jpeg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Marketing Director, ABC Corp',
      message: 'Working with Muhammad Rehan was a pleasure. They exceeded our expectations and were very professional.',
      image: 'images/testimonialstwo.jpeg',
    },
    {
      id: 3,
      name: 'Michael Brown',
      position: 'Founder, XYZ Startup',
      message: 'The team at Muhammad Rehan is talented and dedicated. They helped us achieve our goals effectively.',
      image: 'images/testimonialsthree.jpeg',
    },
  ];
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={testimonial.image} alt={testimonial.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <p className="text-gray-700 mb-4">{testimonial.message}</p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img src={testimonial.image} alt={testimonial.name} className="h-10 w-10 rounded-full" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials