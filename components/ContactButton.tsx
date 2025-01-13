'use client'

import { useState } from 'react'
import { Phone, MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-72"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <button onClick={toggleMenu}>
                <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
              </button>
            </div>
            
            <a 
              href="tel:+919011411919" 
              className="flex items-center gap-3 bg-emerald-500 text-white p-3 rounded-lg mb-3 hover:bg-emerald-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <div>
                <div className="font-semibold">Call Us Now</div>
                <div className="text-sm">+91 8083285661</div>
              </div>
            </a>

            <a 
              href="https://wa.me/918083285661" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <div>
                <div className="font-semibold">Send Message</div>
                <div className="text-sm">We'll reply within 30min</div>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleMenu}
        className="bg-blue-500 hover:bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  )
} 