import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-white text-lg font-bold">Soon Labs</h3>
          <p className="text-sm">Make more SVM L2s on any L1</p>
          <div className="flex space-x-4">
            <a href="https://x.com/soon_svm" className="hover:text-white transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com/soonlabs" className="hover:text-white transition-colors">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://soo.network" className="hover:text-white transition-colors">
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-white text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://x.com/soon_svm" className="hover:text-white transition-colors">
                <i className="fab fa-twitter mr-2"></i>Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com/soonlabs" className="hover:text-white transition-colors">
                <i className="fab fa-github mr-2"></i>GitHub
              </a>
            </li>
            <li>
              <a href="https://soo.network" className="hover:text-white transition-colors">
                <i className="fas fa-globe mr-2"></i>Website
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        {/* <div className="space-y-4">
          <h3 className="text-white text-lg font-bold">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>123 Business Street</li>
            <li>City, State 12345</li>
            <li>Phone: (555) 123-4567</li>
            <li>Email: info@company.com</li>
          </ul>
        </div> */}

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-white text-lg font-bold">Newsletter</h3>
          <p className="text-sm">Subscribe to our newsletter for updates</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-center md:flex md:justify-between">
          <p>© 2024 CollectiveX. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
