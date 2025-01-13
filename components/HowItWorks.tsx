'use client'

import { motion } from 'framer-motion'
import { ClipboardCheck, Palette, Rocket } from 'lucide-react'

const steps = [
  {
    icon: ClipboardCheck,
    title: {
      en: "Sign Up",
      hi: "साइन अप करें"
    },
    description: {
      en: "Easy registration, no technical experience needed.",
      hi: "आसान पंजीकरण, कोई तकनीकी अनुभव की आवश्यकता नहीं।"
    }
  },
  {
    icon: Palette,
    title: {
      en: "Customization",
      hi: "अनुकूलन"
    },
    description: {
      en: "Tailor your website/app with the help of our team.",
      hi: "हमारी टीम की मदद से अपनी वेबसाइट/ऐप को अनुकूलित करें।"
    }
  },
  {
    icon: Rocket,
    title: {
      en: "Launch",
      hi: "लॉन्च"
    },
    description: {
      en: "Get your website or app live within 2 days.",
      hi: "2 दिनों के भीतर अपनी वेबसाइट या ऐप को लाइव करें।"
    }
  }
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-primary-800 mb-4"
        >
          How It Works
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl font-semibold text-center text-secondary-500 mb-12"
        >
          यह कैसे काम करता है
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="bg-primary-100 rounded-full p-4 mb-4">
                <step.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">{step.title.en}</h3>
              {/* <h4 className="text-lg font-medium text-secondary-500 mb-2">{step.title.hi}</h4> */}
              <p className="text-primary-700 mb-2">{step.description.en}</p>
              {/* <p className="text-primary-600">{step.description.hi}</p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

