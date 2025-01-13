'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How long does it take to set up my website?",
    answer: "We pride ourselves on our quick turnaround time. In most cases, we can have your website up and running within 2 days of receiving all necessary information and assets from you."
  },
  {
    question: "Do I need technical knowledge?",
    answer: "Not at all! Our team handles all the technical aspects of setting up and maintaining your website or app. We make the process as simple and straightforward as possible for you."
  },
  {
    question: "What happens after my website is launched?",
    answer: "After launch, we provide ongoing support and maintenance to ensure your website continues to perform optimally. We're always available to make updates or address any issues that may arise."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No, we believe in complete transparency. The price we quote includes all aspects of your project, from design to launch. Any additional services or features will be clearly communicated and agreed upon before implementation."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

