'use client'
import React from 'react'
import { motion } from 'framer-motion'
// import Image from 'next/image'

const Hero = () => {
  return (
    <>
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

      {/* Features Section */}
      <section className="py-20 bg-[#1C2936]">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-[#4CEBBB] mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Soon DAO?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-[#243446] hover:bg-[#2a3e54] transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-[#4CEBBB] text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-[#0F0121]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#4CEBBB] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#1C2936]">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-[#4CEBBB] mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            How It Works
          </motion.h2>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center max-w-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
              >
                <div className="w-16 h-16 rounded-full bg-[#4CEBBB] flex items-center justify-center text-[#1C2936] text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Add these arrays at the top of your file, after the imports
const features = [
  {
    icon: "🌟",
    title: "Decentralized Voting",
    description: "Secure and transparent voting system for all community decisions"
  },
  {
    icon: "💎",
    title: "Token Economics",
    description: "Fair and sustainable token distribution with clear utility"
  },
  {
    icon: "🤝",
    title: "Community First",
    description: "Driven by and for the community, with clear governance rules"
  }
]

const stats = [
  { value: "10K+", label: "Community Members" },
  { value: "$5M+", label: "Total Value Locked" },
  { value: "100+", label: "Proposals Passed" },
  { value: "24/7", label: "Support" }
]

const steps = [
  {
    title: "Connect Wallet",
    description: "Link your Web3 wallet to join the DAO"
  },
  {
    title: "Get Tokens",
    description: "Acquire governance tokens to participate"
  },
  {
    title: "Start Voting",
    description: "Vote on proposals and shape the future"
  }
]

export default Hero
