"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 flex justify-center px-4 pt-6">
      <div className="max-w-5xl w-full bg-[#0F0121]/80 backdrop-blur-xl rounded-3xl px-8 py-4 shadow-lg shadow-purple-900/20">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <Image 
                src="/son.svg"
                alt="Soon DAO"
                width={10}
                height={10}
                className="w-auto h-6 group-hover:scale-105 transition-transform"
              />
              <span className="ml-2 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-violet-400">
                DAO
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              <Link href="/dao" className="text-violet-200/80 hover:text-white font-medium tracking-wide hover:scale-105 transition-all">
                DAO
              </Link>
              <Link href="/governance" className="text-violet-200/80 hover:text-white font-medium tracking-wide hover:scale-105 transition-all">
                Governance
              </Link>
              <Link href="/treasury" className="text-violet-200/80 hover:text-white font-medium tracking-wide hover:scale-105 transition-all">
                Treasury
              </Link>
              <Link href="/docs" className="text-violet-200/80 hover:text-white font-medium tracking-wide hover:scale-105 transition-all">
                Docs
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <WalletMultiButton className="text-white px-7 py-2.5 rounded-2xl font-semibold tracking-wide transition-all duration-200 transform hover:scale-105 hover:shadow-lg" />
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-violet-200 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-violet-500/20">
            <div className="flex flex-col space-y-4 pb-3">
              <Link 
                href="/dao" 
                className="text-violet-200/80 hover:text-white font-medium tracking-wide hover:translate-x-2 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                DAO
              </Link>
              <Link 
                href="/governance" 
                className="text-violet-200/80 hover:text-white font-medium tracking-wide hover:translate-x-2 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Governance
              </Link>
              <Link 
                href="/treasury" 
                className="text-violet-200/80 hover:text-white font-medium tracking-wide hover:translate-x-2 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Treasury
              </Link>
              <Link 
                href="/docs" 
                className="text-violet-200/80 hover:text-white font-medium tracking-wide hover:translate-x-2 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </Link>
              <div className="block md:hidden">
                <WalletMultiButton className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white px-7 py-2.5 rounded-2xl font-semibold tracking-wide transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 w-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
