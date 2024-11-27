'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const TrustedBy = () => {
  return (
    <section className="py-24 bg-[#1C2936]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4CEBBB] to-[#3EA0F4]">
            Trusted by the Best
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Join the leading projects and DAOs building with Soon
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-[#243446] rounded-xl p-6 h-full transition-all duration-300 hover:bg-[#2a3e54] border border-[#4CEBBB]/10 hover:border-[#4CEBBB]/30">
                <div className="flex flex-col items-center space-y-4">
                  {/* Partner Logo */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain filter brightness-90 group-hover:brightness-100"
                    />
                  </div>
                  
                  {/* Partner Name */}
                  <h3 className="text-white font-semibold text-lg">
                    {partner.name}
                  </h3>
                  
                  {/* Partner Description */}
                  <p className="text-gray-400 text-sm text-center">
                    {partner.description}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-between w-full pt-4 border-t border-[#4CEBBB]/10">
                    {partner.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-[#4CEBBB] font-bold">{stat.value}</div>
                        <div className="text-gray-400 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-[#4CEBBB] hover:bg-[#3dd6a9] rounded-full text-[#1C2936] font-semibold transition-all">
            Join These Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}

const partners = [
  {
    name: "Solana Foundation",
    logo: "/images/partners/solana.svg", // You'll need to add these images
    description: "Leading blockchain platform for scalable applications",
    stats: [
      { value: "$2B+", label: "TVL" },
      { value: "1M+", label: "Users" }
    ]
  },
  {
    name: "Uniswap",
    logo: "/images/partners/uniswap.svg",
    description: "Largest decentralized exchange protocol",
    stats: [
      { value: "$5B+", label: "Volume" },
      { value: "2M+", label: "Traders" }
    ]
  },
  {
    name: "Aave",
    logo: "/images/partners/aave.svg",
    description: "Leading DeFi lending protocol",
    stats: [
      { value: "$3B+", label: "Locked" },
      { value: "500K+", label: "Users" }
    ]
  },
  {
    name: "Compound",
    logo: "/images/partners/compound.svg",
    description: "Algorithmic interest rate protocol",
    stats: [
      { value: "$1B+", label: "Assets" },
      { value: "300K+", label: "Users" }
    ]
  },
  {
    name: "MakerDAO",
    logo: "/images/partners/maker.svg",
    description: "Decentralized stablecoin protocol",
    stats: [
      { value: "$8B+", label: "Locked" },
      { value: "100K+", label: "Vaults" }
    ]
  },
  {
    name: "Chainlink",
    logo: "/images/partners/chainlink.svg",
    description: "Decentralized oracle network",
    stats: [
      { value: "1000+", label: "Integrations" },
      { value: "$5T+", label: "Secured" }
    ]
  },
  {
    name: "Arbitrum",
    logo: "/images/partners/arbitrum.svg",
    description: "Leading Layer 2 scaling solution",
    stats: [
      { value: "$2B+", label: "TVL" },
      { value: "200K+", label: "Users" }
    ]
  },
  {
    name: "Optimism",
    logo: "/images/partners/optimism.svg",
    description: "Ethereum Layer 2 scaling platform",
    stats: [
      { value: "$1B+", label: "TVL" },
      { value: "150K+", label: "Users" }
    ]
  }
]

export default TrustedBy
