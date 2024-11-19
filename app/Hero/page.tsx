'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1C2936] to-[#0F0121]">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          {/* Add particle effect or geometric patterns here */}
        </motion.div>
      </div>

      {/* Main hero content */}
      <div className="container mx-auto px-4 pt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4CEBBB] to-[#3EA0F4]"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Soon DAO
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Building the future of decentralized governance and community-driven innovation
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="mt-10 flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button className="px-8 py-3 bg-[#4CEBBB] hover:bg-[#3dd6a9] rounded-full text-[#1C2936] font-semibold transition-all">
              Join Now
            </button>
            <button className="px-8 py-3 border border-[#4CEBBB] rounded-full text-[#4CEBBB] hover:bg-[#4CEBBB]/10 transition-all">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
