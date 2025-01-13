'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Basic (Starting From)",
    nameHi: "बेसिक",
    price: {
      monthly: "₹2,199",
      yearly: "₹21,990",
    },
    description: "Perfect for small businesses looking to get started online.",
    descriptionHi: "ऑनलाइन शुरुआत करने वाले छोटे व्यवसायों के लिए एकदम सही।",
    features: [
      "Professional website",
      "Mobile-responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "Social media integration"
    ]
  },
  {
    name: "Professional",
    nameHi: "प्रोफेशनल",
    price: {
      monthly: "₹4,999",
      yearly: "₹49,990",
    },
    description: "Ideal for growing businesses that need more features.",
    descriptionHi: "बढ़ते व्यवसायों के लिए आदर्श जिन्हें अधिक सुविधाओं की आवश्यकता है।",
    features: [
      "Everything in Basic",
      "Custom mobile app",
      "Advanced SEO strategies",
      "E-commerce functionality",
      "Payment gateway integration"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    nameHi: "एंटरप्राइज",
    price: {
      monthly: "₹9,999",
      yearly: "₹99,990",
    },
    description: "Complete digital solution for established businesses.",
    descriptionHi: "स्थापित व्यवसायों के लिए पूर्ण डिजिटल समाधान।",
    features: [
      "Everything in Professional",
      "Custom web application",
      "Digital marketing strategy",
      "24/7 priority support",
      "Regular performance reports"
    ]
  }
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            Simple, Transparent Pricing
            <span className="block text-2xl sm:text-3xl text-blue-600 mt-1">
              सरल, पारदर्शी मूल्य निर्धारण
            </span>
          </motion.h2>
          <p className="text-lg text-slate-600 mb-8">
            Choose the perfect plan for your business needs
            {/* <span className="block mt-1">
              अपने व्यवसाय की जरूरतों के लिए सही योजना चुनें
            </span> */}
          </p>
          <p className="text-lg text-pink-800 mb-8 font-bold">
            Get your website ready in just 2 days in just ₹2,199 (One Time Payment Only)
            <br />
            We will provide you with a fully functional website and a mobile app.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className={`text-sm ${!annual ? 'text-blue-600 font-semibold' : 'text-slate-600'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                annual ? 'bg-blue-600' : 'bg-slate-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  annual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? 'text-blue-600 font-semibold' : 'text-slate-600'}`}>
              Annual
              <span className="ml-1 text-xs text-green-600">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl bg-white p-8 shadow-lg ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                {/* <p className="text-md text-blue-600 mb-4">{plan.nameHi}</p> */}
                <div className="mt-4 flex items-baseline text-slate-900">
                  <span className="text-4xl font-bold tracking-tight">
                    {annual ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="ml-1 text-sm font-semibold">{annual ? '/year' : '/month'}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
                {/* <p className="text-sm text-slate-500">{plan.descriptionHi}</p> */}
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span className="ml-3 text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full rounded-lg px-4 py-2.5 text-sm font-semibold ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-slate-50 text-slate-900 hover:bg-slate-100'
                } transition-colors duration-200`}
              >
                Get started
                {/* <span className="block text-xs mt-0.5">शुरू करें</span> */}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

