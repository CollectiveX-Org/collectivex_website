'use client'
// import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

const chartData = [
  { date: 'Jan', value: 40000 },
  { date: 'Feb', value: 55000 },
  { date: 'Mar', value: 45000 },
  { date: 'Apr', value: 89000 },
  { date: 'May', value: 78000 },
  { date: 'Jun', value: 102000 },
]

const assets = [
  { name: 'SOL', amount: '245.5', value: '$24,550.00', icon: '/icons/sol.svg', change: '+2.4%' },
  { name: 'USDC', amount: '50,000', value: '$50,000.00', icon: '/icons/usdc.svg', change: '0%' },
]

export default function DashboardHome() {
  // const [timeRange, setTimeRange] = useState('1M')

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Assets Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Total Balance Card */}
        <motion.div 
          className="lg:col-span-2 bg-[#2A3744] rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Total Balance</h3>
                <div className="text-2xl font-medium text-white">$74,550.00</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-green-400 text-sm">+$1,234.56</span>
                  <span className="text-gray-500 text-sm">last 24h</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-violet-500/10 text-violet-200 rounded-lg text-sm hover:bg-violet-500/20 transition-colors">
                  Send
                </button>
                <button className="px-3 py-1.5 bg-violet-500/10 text-violet-200 rounded-lg text-sm hover:bg-violet-500/20 transition-colors">
                  Receive
                </button>
              </div>
            </div>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#374151',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '12px'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8B5CF6"
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Assets List */}
        <motion.div 
          className="bg-[#2A3744] rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-400 text-sm">Assets</h3>
            <button className="text-violet-400 text-sm hover:text-violet-300">View All</button>
          </div>
          <div className="space-y-4">
            {assets.map((asset, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700/20 transition-colors">
                <div className="flex items-center gap-3">
                  <Image src={asset.icon} alt={asset.name} width={32} height={32} />
                  <div>
                    <div className="text-white">{asset.amount} {asset.name}</div>
                    <div className="text-sm text-gray-400">{asset.value}</div>
                  </div>
                </div>
                <div className="text-green-400 text-sm">{asset.change}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Activity and Orders Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Transactions */}
        <motion.div 
          className="bg-[#2A3744] rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-white">Active Transactions</h2>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">2 pending</span>
              <button className="text-violet-400 text-sm hover:text-violet-300">View All</button>
            </div>
          </div>
          <div className="space-y-4">
            {/* Placeholder for transactions */}
            <div className="p-4 border border-violet-500/20 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-violet-500/10 p-2 rounded-lg">
                    <Image src="/icons/transfer.svg" alt="Transfer" width={20} height={20} />
                  </div>
                  <div>
                    <div className="text-white">Send 50 SOL</div>
                    <div className="text-sm text-gray-400">2/3 signatures</div>
                  </div>
                </div>
                <div className="text-sm text-gray-400">2 hours ago</div>
              </div>
              <div className="w-full bg-gray-700/50 h-1.5 rounded-full">
                <div className="bg-violet-500 w-2/3 h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Limit Orders */}
        <motion.div 
          className="bg-[#2A3744] rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-white">Limit Orders</h2>
            <button className="px-3 py-1.5 bg-violet-500/10 text-violet-200 rounded-lg text-sm hover:bg-violet-500/20 transition-colors">
              New Order
            </button>
          </div>
          <div className="text-center py-8 text-gray-400">
            <div className="mb-2">No active limit orders</div>
            <button className="text-violet-400 text-sm hover:text-violet-300">
              Create your first limit order
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
