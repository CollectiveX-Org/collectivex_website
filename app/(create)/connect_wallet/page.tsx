'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"

const ConnectWallet = () => {
  const { connected } = useWallet()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1C2936]">
      <motion.div 
        className="max-w-md w-full p-8 bg-[#243446]/80 backdrop-blur-xl rounded-2xl border border-[#4CEBBB]/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4CEBBB] to-[#3EA0F4]">
            Connect Wallet
          </h1>
          <p className="mt-2 text-gray-400">
            Connect your wallet to see your Squads
          </p>
        </div>

        <div className="flex justify-center">
          <WalletMultiButton className="bg-gradient-to-r from-[#4CEBBB] to-[#3EA0F4] text-white px-8 py-3 rounded-xl font-semibold tracking-wide transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-[#4CEBBB]/25 w-full flex justify-center" />
        </div>

        {connected && (
          <motion.div 
            className="mt-6 text-center text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✓ Successfully connected!
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default ConnectWallet
