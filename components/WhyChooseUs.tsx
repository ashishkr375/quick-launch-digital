'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const reasons = [
  {
    en: "We are a team of IITians and NITians committed to helping your business grow online.",
    hi: "हम IITians और NITians की एक टीम हैं जो आपके व्यवसाय को ऑनलाइन बढ़ाने के लिए प्रतिबद्ध है।"
  },
  {
    en: "Quick delivery: Get your website/app in just 2 days.",
    hi: "त्वरित डिलीवरी: मात्र 2 दिनों में अपनी वेबसाइट/ऐप प्राप्त करें।"
  },
  {
    en: "Affordable pricing with no hidden fees.",
    hi: "किफायती मूल्य, कोई छिपा शुल्क नहीं।"
  },
  {
    en: "User-friendly designs with easy-to-manage platforms.",
    hi: "उपयोगकर्ता-अनुकूल डिज़ाइन और आसानी से प्रबंधन करने योग्य प्लेटफॉर्म।"
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#4361ee]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">A brand-new level of security</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <CheckCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <p className="text-lg font-semibold text-gray-900 mb-2">{reason.en}</p>
              {/* <p className="text-md text-gray-600">{reason.hi}</p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

