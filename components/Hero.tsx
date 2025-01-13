'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import ContactForm from '@/components/ui/ContactForm'

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  
  return (
    <section className="relative pt-20 lg:pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_500px_at_50%_200px,#e3f2ff,transparent)]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600 ring-1 ring-inset ring-blue-600/20 mb-6">
              <span>Launch in 48 Hours</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Transform Your Business Online in Just 2 Days
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 pt-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                मात्र 2 दिनों में अपने व्यवसाय को ऑनलाइन बदलें
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Simple, fast, and affordable websites & apps for small businesses. No tech skills required.
              {/* <span className="block mt-2 text-lg">
                छोटे व्यवसायों के लिए सरल, तेज़ और किफायती वेबसाइट और ऐप्स। कोई तकनीकी कौशल की आवश्यकता नहीं।
              </span> */}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                onClick={() => setIsFormOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Get Started Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center px-6 py-3 rounded-full bg-white text-slate-900 text-lg font-semibold ring-1 ring-slate-200 hover:bg-slate-50 transition-colors duration-200"
              >
                <a 
              href="https://wa.me/918083285661" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
              
            >
              <MessageCircle className="w-5 h-5" />
              <div>
                <div className="font-semibold">Send Message</div>
                <div className="text-sm">We'll reply within 30min</div>
              </div>
            </a>
                {/* <span className="block text-sm mt-0.5">डेमो देखें</span> */}
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
              <div className="relative">
                <img
                  src="https://i.postimg.cc/htgNrFtP/image.png"
                  alt="Small business going digital"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12"
        >
          {[
            { number: "500+", label: "Satisfied Clients", labelHi: "संतुष्ट ग्राहक" },
            { number: "48hrs", label: "Delivery Time", labelHi: "डिलीवरी का समय" },
            { number: "100%", label: "Success Rate", labelHi: "सफलता दर" },
            { number: "24/7", label: "Support", labelHi: "सहायता" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-slate-900">{stat.number}</div>
              <div className="text-sm text-slate-600">
                {stat.label}
                <span className="block text-xs mt-0.5">{stat.labelHi}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </section>
  )
}

