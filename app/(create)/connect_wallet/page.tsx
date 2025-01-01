'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const ConnectWallet = () => {
  const { connected } = useWallet()
  const router = useRouter()

  useEffect(() => {
    if (connected) {
      router.push('/create_collective')
    }
  }, [connected, router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900">
      <motion.div 
        className="max-w-md w-full p-10 bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-700 shadow-2xl shadow-black/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">
            Connect Wallet
          </h1>
          <p className="mt-3 text-gray-400 text-lg">
            Connect your wallet to access your Squads
          </p>
        </div>

        <div className="flex justify-center">
          <WalletMultiButton 
            className="bg-gray-700 text-white px-8 py-4 rounded-2xl font-semibold tracking-wide 
            transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-black/30 
            hover:bg-gray-600 w-full flex justify-center text-lg backdrop-blur-xl border border-gray-600" 
          />
        </div>

        {connected && (
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-lg font-medium text-emerald-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Successfully connected
            </span>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default ConnectWallet
