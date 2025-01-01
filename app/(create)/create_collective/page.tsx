'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useWallet } from "@solana/wallet-adapter-react"
import Image from 'next/image'
import BalanceChart from '@/components/ui/charts/BalanceChart'
import CreateSquadModal from './CreateSquadModal'

const CreateCollective = () => {
  const { publicKey } = useWallet()
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const handleCreateSquad = (data: { name: string; description: string; image?: File }) => {
    console.log('Creating squad with data:', data)
    // Handle squad creation logic here
    setIsCreateModalOpen(false)
  }

  // If wallet is not connected, show connect wallet step
  if (!publicKey) {
    return (
      <div className="min-h-screen bg-[#1C2936] p-8">
        {/* Your existing wallet connection UI */}
      </div>
    )
  }

  // If wallet is connected, show dashboard
  return (
    <div className="min-h-screen bg-[#1C2936] p-6">
      {/* Simplified Header */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-3">
          <Image src="/son.svg" alt="CollectiveX"
          width={28} 
          height={28}
          className="w-auto h-6 group-hover:scale-105 transition-transform"
           />
          {/* <span className="text-white font-medium">CollectiveX</span> */}
        </div>
        <button className="bg-[#2A3744]/50 px-4 py-2 rounded-full text-white/90 text-sm hover:bg-[#2A3744] transition-colors">
          {publicKey?.toBase58().slice(0, 4)}...{publicKey?.toBase58().slice(-4)}
        </button>
      </div>

      {/* Main Content - Simplified Layout */}
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Modernized Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* <Image 
            src="/icons/CollectiveX-icon.svg" 
            alt="CollectiveX Icon" 
            width={48} 
            height={48} 
            className="mx-auto mb-6"
          /> */}
          <h1 className="text-3xl text-white font-bold mb-3">
            On-chain Organization Management
          </h1>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Streamlined treasury and developer asset management for Web3 organizations
          </p>
          <motion.button 
            className="bg-white text-black px-6 py-2.5 rounded-lg font-medium
                     hover:bg-opacity-90 transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsCreateModalOpen(true)}
          >
            Create Squad
          </motion.button>
        </motion.div>

        {/* Simplified Balance Section */}
        <motion.div 
          className="bg-[#2A3744]/50 backdrop-blur-sm rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="text-gray-400 text-sm mb-1">Total Balance</div>
                <div className="flex items-baseline gap-3">
                  <div className="text-2xl text-white font-bold">$118,024.48</div>
                  <div className="text-green-400 text-xs">+$10,000.00</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/20 transition-colors">
                  Send
                </button>
                <button className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/20 transition-colors">
                  Deposit
                </button>
                <button className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/20 transition-colors">
                  Swap
                </button>
              </div>
            </div>
            <div className="h-[180px]">
              <BalanceChart />
            </div>
          </div>
        </motion.div>

        {/* Simplified Transaction Section */}
        <motion.div 
          className="bg-[#2A3744]/50 backdrop-blur-sm rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Image src="/sol-logo.svg" alt="SOL" width={20} height={20} />
              <span className="text-white">196.85 SOL</span>
              <span className="text-gray-400 text-sm">Outgoing Transfer</span>
            </div>
            <div className="text-yellow-400 text-sm">Pending Approval</div>
          </div>
          
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Signatures</span>
              <span className="text-white">2/3</span>
            </div>
            <div className="w-full bg-gray-700/50 h-1.5 rounded-full">
              <div className="bg-white/90 w-2/3 h-full rounded-full"></div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button className="text-gray-400 hover:text-white text-sm">Reject</button>
            <button className="bg-white/90 text-black px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-white">
              Execute
            </button>
          </div>
        </motion.div>
      </div>

      <CreateSquadModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onNext={handleCreateSquad}
      />
    </div>
  )
}

export default CreateCollective
