'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { sendEmailNotification } from '@/app/actions/email'
import { toast } from 'sonner'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await sendEmailNotification(email)
      
      if (result.success) {
        toast.success('Thank you for your interest! We\'ll be in touch soon.')
        setEmail('')
      } else {
        toast.error('Something went wrong. Please try again later.')
      }
    } catch (error) {
      toast.error('Failed to submit. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl mb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white mb-2"
            >
              Ready to Get Started?
            </motion.h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-0 md:flex md:gap-4 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full md:w-96 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                required
                disabled={isLoading}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto bg-secondary-500 text-white text-lg font-semibold py-3 px-8 rounded-md hover:bg-secondary-600 transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Get Started Now'}
              </motion.button>
            </form>

            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>30 days free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          {/* Right side image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://i.ibb.co/C9mSK1t/image.png"
              alt="Dashboard Preview"
              className="w-full rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

