import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" // Add your logo here
                alt="Soon DAO"
                width={40}
                height={40}
                className="w-auto h-8"
              />
              <span className="ml-3 text-xl font-bold text-white">Soon DAO</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="/dao" className="text-gray-300 hover:text-white transition-colors">
                DAO
              </Link>
              <Link href="/governance" className="text-gray-300 hover:text-white transition-colors">
                Governance
              </Link>
              <Link href="/treasury" className="text-gray-300 hover:text-white transition-colors">
                Treasury
              </Link>
              <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
                Docs
              </Link>
            </div>
          </div>

          {/* Connect Wallet Button */}
          <div>
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
