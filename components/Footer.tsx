import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary-100">QuickLaunch Digital</h3>
            {/* <h4 className="text-md font-medium text-primary-300 mb-4">क्विकलॉन्च डिजिटल</h4> */}
            <p className="text-primary-200">
              Transforming businesses with fast, affordable, and professional digital solutions.
            </p>
            <p className="text-primary-300 mt-2">
              तेज़, किफायती और पेशेवर डिजिटल समाधानों के साथ व्यवसायों को बदलना।
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary-100">Contact Us</h3>
            {/* <h4 className="text-md font-medium text-primary-300 mb-4">संपर्क करें</h4> */}
            <div className="flex items-center mb-2">
              <Mail className="w-5 h-5 mr-2 text-secondary-400" />
              <a href="mailto:quicklaunchdigital4u@gmail.com" className="text-primary-200 hover:text-secondary-300">
                quicklaunchdigital4u@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-secondary-400" />
              <a href="tel:+917617604486" className="text-primary-200 hover:text-secondary-300">
                +91 7617604486
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary-100">Follow Us</h3>
            <h4 className="text-md font-medium text-primary-300 mb-4">हमें फॉलो करें</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-200 hover:text-secondary-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary-200 hover:text-secondary-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary-200 hover:text-secondary-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-300">
              &copy; {new Date().getFullYear()} QuickLaunch Digital. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link 
                href="/privacy-policy" 
                className="text-primary-300 hover:text-secondary-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-primary-300">•</span>
              <Link 
                href="/terms" 
                className="text-primary-300 hover:text-secondary-300 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-primary-400 mt-2 text-center">
            &copy; {new Date().getFullYear()} क्विकलॉन्च डिजिटल। सर्वाधिकार सुरक्षित।
          </p>
        </div>
      </div>
    </footer>
  )
}

