'use client'

import { motion } from 'framer-motion'
import { Globe, Smartphone, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Professional, responsive websites that work on any device."
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Custom apps that help your business engage with customers."
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing Solutions",
    description: "Strategies to help you attract and retain more customers."
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white text-center align-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

