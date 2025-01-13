'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    content: "QuickLaunch Digital has revolutionized the way we connect with students. Their work on our website and app was outstanding, and we saw a significant increase in inquiries.",
    author: "Ravi Mehta",
    role: "Coaching Center Director",
    rating: 5,
    image: "https://i.postimg.cc/63HPtGDb/image.png"
  },
  {
    content: "The team at QuickLaunch Digital truly understands the needs of educational institutions. Our school website and online platform are now more user-friendly and accessible than ever!",
    author: "Neha Verma",
    role: "School Principal",
    rating: 5,
    image: "https://i.postimg.cc/1RBmVCZb/image.png"
  },
  {
    content: "QuickLaunch Digital transformed my restaurant's online presence. The website was ready in just 2 days, and it's beautifully designed!",
    author: "Priya Sharma",
    role: "Restaurant Owner",
    rating: 5,
    image: "https://i.postimg.cc/k5W9Jwc1/image.png"
  },
  {
    content: "The team's expertise and quick turnaround time helped my business reach new customers. The mobile app is exactly what we needed.",
    author: "Rajesh Kumar",
    role: "Retail Business Owner",
    rating: 5,
    image: "https://i.postimg.cc/nzH8HxMr/image.png"
  },
  {
    content: "Exceptional service! They made the whole process so simple, and now my boutique has a strong online presence.",
    author: "Anita Patel",
    role: "Fashion Boutique Owner",
    rating: 5,
    image: "https://i.postimg.cc/CMryVW0M/image.png"
  },
  
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#f8f9ff]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Top Reviews
          </h2>
          <p className="text-lg text-gray-600">
            Check reviews to discover what clients have
            <br />
            to say about our capabilities and results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="mb-6">
                <span className="text-[#4361ee] text-6xl font-serif">"</span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <div className="flex items-center">
                    <span className="text-gray-700 mr-2">{testimonial.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(testimonial.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

