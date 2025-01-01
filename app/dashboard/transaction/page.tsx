'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdWarning } from 'react-icons/md'
import { BiSend } from 'react-icons/bi'

// Mock transaction data
const transactions = [
  {
    id: 1,
    type: 'Send',
    amount: '999,999',
    token: 'SCHIZO',
    recipient: 'schizardio.sol',
    time: '2:03 PM',
    date: 'Apr 22, 2024',
    status: 'Active',
    info: {
      author: 'schizardio.sol',
      account: 'Account 1',
      createdOn: 'Apr 22, 2024, 2:03 PM'
    },
    progress: {
      status: 'Voting',
      approvals: '1/4 approved',
      confirmed: {
        count: 1,
        by: 'schizardio.sol'
      },
      rejected: {
        count: 0
      }
    }
  },
  // Add more transactions as needed
]

export default function TransactionsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-white">Transactions</h1>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-400">
            Unclaimed rent: <span className="text-white">≈0.09 SOL</span>
          </div>
          <button className="px-4 py-2 bg-violet-500/20 text-violet-200 rounded-lg text-sm hover:bg-violet-500/30 transition-colors">
            Batch Actions
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {transactions.map((tx) => (
          <div key={tx.id} className="bg-[#2A3744] rounded-xl overflow-hidden">
            {/* Transaction Header */}
            <button
              onClick={() => setExpandedId(expandedId === tx.id ? null : tx.id)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-700/20 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center">
                  <BiSend size={20} className="text-violet-200" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white">{tx.amount}</span>
                  <span className="text-gray-400">{tx.token}</span>
                </div>
                <div className="text-gray-400">
                  To: <span className="text-white">{tx.recipient}</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-gray-400">{tx.time}</span>
                <span className="text-blue-400">{tx.status}</span>
                {expandedId === tx.id ? <MdKeyboardArrowUp size={24} /> : <MdKeyboardArrowDown size={24} />}
              </div>
            </button>

            {/* Expandable Content */}
            <AnimatePresence>
              {expandedId === tx.id && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 border-t border-gray-700/50">
                    {/* Risk Scanner */}
                    <div className="my-4 p-4 bg-gray-700/20 rounded-lg">
                      <div className="flex items-center gap-2 text-yellow-500">
                        <MdWarning size={20} />
                        <span>Risk scanner is under maintenance.</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      {/* Info Section */}
                      <div>
                        <h3 className="text-white font-medium mb-4">Info</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Author</span>
                            <span className="text-white">{tx.info.author}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Account</span>
                            <span className="text-white">{tx.info.account}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Created on</span>
                            <span className="text-white">{tx.info.createdOn}</span>
                          </div>
                        </div>
                      </div>

                      {/* Progress Section */}
                      <div>
                        <h3 className="text-white font-medium mb-4">Progress</h3>
                        <div className="space-y-6">
                          <div className="relative pl-6 border-l-2 border-violet-500">
                            <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-violet-500" />
                            <div className="text-white">Transaction created</div>
                            <div className="text-sm text-gray-400">{tx.info.createdOn}</div>
                          </div>
                          <div className="relative pl-6 border-l-2 border-gray-700">
                            <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-violet-500" />
                            <div className="text-white">Voting</div>
                            <div className="text-sm text-gray-400">{tx.progress.approvals}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                      <button className="px-4 py-2 bg-violet-500/20 text-violet-200 rounded-lg text-sm hover:bg-violet-500/30 transition-colors">
                        See details
                      </button>
                      <button className="px-4 py-2 bg-violet-500/20 text-violet-200 rounded-lg text-sm hover:bg-violet-500/30 transition-colors">
                        Simulate
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
