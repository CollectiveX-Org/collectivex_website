'use client'
import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    title: "Multisig",
    description: "Secure assets in a trustless programmable multi-signature wallet and require multiple approving signatures for transactions.",
    icon: "🔐"
  },
  {
    title: "Lightning Fast",
    description: "Experience the speed and efficiency of the SOON SVM, delivering unparalleled transaction speeds.",
    icon: "⚡"
  },
  {
    title: "All Assets in One Place",
    description: "Manage all your assets seamlessly in one unified platform, simplifying your DAO operations.",
    icon: "💼"
  },
  {
    title: "Secure and Robust",
    description: "Take advantage of the CollectiveX protocol - combining the security of ETC and the speed of SOL.",
    icon: "🛡️"
  }
];

const Page = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3EA0F4] via-[#4CEBBB] to-[#3EA0F4]">
            Key Features
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Empowering your DAO with cutting-edge technology
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="bg-[#1A202C]/80 backdrop-blur-xl p-6 rounded-xl border border-[#3EA0F4]/20 h-full">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#3EA0F4]/0 to-[#4CEBBB]/0 group-hover:from-[#3EA0F4]/10 group-hover:to-[#4CEBBB]/10 transition-all duration-300 -z-10 blur-xl" />
                
                <div className="text-4xl mb-4 text-[#4CEBBB]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#4CEBBB] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
