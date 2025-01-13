'use client'

import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

const teamMembers = [
  {
    name: "Ashish Kumar",
    role: "CEO & Co-founder",
    image: "https://i.postimg.cc/R017L8q9/image.png",
    linkedin: "https://www.linkedin.com/in/ashish-kumar-nitp/"
  },
  {
    name: "Diya Agrawal",
    role: "CTO & Co-founder",
    image: "https://i.postimg.cc/GttvrmKh/image.png",
    
  },
  {
    name: "Amit Kumar",
    role: "Lead Developer",
    image: "https://i.postimg.cc/nhb9SkyL/image.png",
    
  },
  {
    name: "Neha Gupta",
    role: "UX Designer",
    image: "https://i.postimg.cc/fTxYNpjd/image.png",
    
  }
]

export default function Team() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Meet Our Expert Team
        </motion.h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our team is made up of IITians and NITians who bring their technical expertise to help your business succeed.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                {member.linkedin && <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <Linkedin className="w-5 h-5 mr-1" />
                  LinkedIn Profile
                </a>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

