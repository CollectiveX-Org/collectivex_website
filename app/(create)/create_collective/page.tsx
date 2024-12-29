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
    <div className="min-h-screen bg-[#1C2936] p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <Image src="/icons/squads-logo.svg" alt="Squads" width={32} height={32} />
          <span className="text-white text-xl">SQUADS</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-400">Network Status</span>
          </div>
          <button className="bg-[#2A3744] px-4 py-2 rounded-lg text-white">
            {publicKey?.toBase58().slice(0, 4)}...{publicKey?.toBase58().slice(-4)}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Add Create Squad Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-4">
            <Image 
              src="/icons/squads-icon.svg" 
              alt="Squads Icon" 
              width={64} 
              height={64} 
              className="mx-auto"
            />
          </div>
          <h2 className="text-gray-400 mb-2">Introducing Squads</h2>
          <h1 className="text-4xl text-white font-bold mb-8">
            Management of developer<br />
            and treasury assets for on-chain organizations
          </h1>
          <motion.button 
            className="bg-white text-black px-6 py-3 rounded-lg font-medium 
                     hover:bg-opacity-90 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCreateModalOpen(true)}
          >
            + Create Squad
          </motion.button>
        </motion.div>

        {/* Balance Section */}
        <motion.div 
          className="bg-[#2A3744] rounded-xl p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-gray-400 mb-2">Total Balance</div>
              <div className="flex items-baseline gap-4">
                <div className="text-3xl text-white font-bold">$118,024.48</div>
                <div className="text-green-400 text-sm">+10,000.00 last month</div>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-opacity-90">
                  ↑ Send
                </button>
                <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-opacity-90">
                  ↓ Deposit
                </button>
                <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-opacity-90">
                  ↺ Swap
                </button>
              </div>
            </div>
            <div className="h-[200px]">
              <BalanceChart />
            </div>
          </div>
        </motion.div>

        {/* Transaction Section */}
        <motion.div 
          className="bg-[#2A3744] rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <span className="text-purple-400">↑</span>
              <span className="text-white">Send</span>
              <div className="flex items-center gap-2">
                <Image src="/sol-logo.svg" alt="SOL" width={20} height={20} />
                <span className="text-white">196.85 SOL</span>
              </div>
            </div>
            <div className="text-yellow-400">Ready</div>
          </div>
          
          <div className="mb-4">
            <div className="text-gray-400 mb-2">Progress</div>
            <div className="w-full bg-gray-700 h-2 rounded-full">
              <div className="bg-white w-2/3 h-full rounded-full"></div>
            </div>
            <div className="text-right text-gray-400 text-sm">2/3</div>
          </div>

          <div className="flex justify-between">
            <button className="text-gray-400 hover:text-white">Reject</button>
            <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-opacity-90">
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
