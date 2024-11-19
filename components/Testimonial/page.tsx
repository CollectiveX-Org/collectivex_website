import React from 'react'
import Image from 'next/image'

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Aditya Varshney",
      role: "DeFi Enthusiast",
      image: "/profile.jpg",
      quote: "Soon DAO has revolutionized how I think about decentralized governance. Their innovative approach sets them apart.",
    },
    {
      name: "Alex Rivera",
      role: "Crypto Investor",
      image: "/profile.jpg",
      quote: "The transparency and community-first approach of Soon DAO gave me the confidence to fully commit to their ecosystem.",
    },
    {
      name: "Maria Kim",
      role: "Blockchain Developer",
      image: "/testimonials/maria.jpg",
      quote: "As a developer, I appreciate the technical excellence and forward-thinking architecture of Soon DAO.",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Innovators Worldwide
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-700/50"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-14 h-14 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-blue-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              <div className="mt-6 flex justify-end">
                <svg
                  className="w-8 h-8 text-blue-500/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
