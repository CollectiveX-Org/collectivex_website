"use client"
import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts';


const Dashboard = () => {
  const [balance] = useState(80.09);
  const [members] = useState(7);
  const [threshold] = useState('4/7');

  // Sample data for the chart
  const chartData = [
    { date: 'Dec 8', value: 300 },
    { date: 'Dec 16', value: 320 },
    { date: 'Dec 24', value: 310 },
    { date: 'Jan 1', value: 315 },
  ];

  // Add this sample transaction data
  const transactions = [
    {
      id: 1,
      type: 'Deposit',
      amount: 0.56,
      currency: 'SCHIZO',
      sender: 'HUUK_Z8sh',
      date: new Date('2024-04-20'),
      time: '6:23 PM'
    },
    {
      id: 2,
      type: 'Send',
      amount: -20000000,
      currency: 'SCHIZO',
      sender: 'HUUK_Z8sh',
      date: new Date('2024-04-12'),
      time: '7:32 PM'
    },
    {
      id: 3,
      type: 'Send',
      amount: -20000000,
      currency: 'SCHIZO',
      sender: 'HUUK_Z8sh',
      date: new Date('2024-04-12'),
      time: '7:32 PM'
    },
    {
      id: 4,
      type: 'Send',
      amount: -20000000,
      currency: 'SCHIZO',
      sender: 'HUUK_Z8sh',
      date: new Date('2024-04-12'),
      time: '7:32 PM'
    }
  ];

  return (
    <div className="p-4 min-h-screen text-white">
      {/* Main Overview Section */}
      <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/5 max-w-5xl mx-auto">
        <h1 className="text-xl font-medium mb-6 flex items-center gap-2">
          Dashboard
          <span className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-pulse"></span>
        </h1>

        <div className="mb-6">
          <h2 className="text-sm text-gray-400 mb-3 font-medium">Overview</h2>
          
          {/* Balance Card */}
          <div className="bg-gray-900/60 p-6 mb-4 rounded-xl border border-violet-500/10 hover:border-violet-500/20 transition-colors">
            <div className="mb-4">
              <div className="text-sm text-gray-400 mb-1">Total Balance</div>
              <div className="text-3xl font-bold tracking-tight">${balance}</div>
            </div>

            <div className="flex gap-2">
              {['Send', 'Deposit', 'Trade'].map((action, index) => (
                <button 
                  key={action}
                  className="bg-violet-500/10 hover:bg-violet-500/20 px-4 py-2 rounded-lg 
                    flex items-center gap-2 transition-all duration-200 text-sm hover:scale-105"
                >
                  {index === 0 && '↑'}
                  {index === 1 && '↓'}
                  {index === 2 && '↗'}
                  {action}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[
              { label: 'Members', value: members },
              { label: 'Threshold', value: threshold }
            ].map((stat) => (
              <div key={stat.label} 
                className="bg-gray-900/60 p-4 rounded-xl border border-violet-500/10 
                  hover:border-violet-500/20 transition-colors"
              >
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div className="bg-gray-900/60 p-4 rounded-xl border border-violet-500/10 
            hover:border-violet-500/20 transition-colors h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis 
                  dataKey="date" 
                  stroke="#666"
                  tick={{ fill: '#666' }}
                />
                <YAxis 
                  stroke="#666"
                  tick={{ fill: '#666' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Accounts Section */}
        <div>
          <div className="flex gap-4 mb-3">
            {['Accounts', 'Coins', 'NFTs'].map((tab, index) => (
              <button 
                key={tab}
                className={`text-sm font-medium pb-1 border-b-2 transition-colors
                  ${index === 0 
                    ? 'text-white border-violet-500' 
                    : 'text-gray-400 border-transparent hover:text-gray-300'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-gray-900/60 p-4 rounded-xl border border-violet-500/10 
            hover:border-violet-500/20 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-sm">
                  A1
                </div>
                <div>
                  <div className="text-sm font-medium">Account 1</div>
                  <div className="text-xs text-gray-400">BRSS_gryfy</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">${balance}</span>
                <span className="text-green-500">●</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Section */}
      <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/5 max-w-5xl mx-auto">
        <h2 className="text-sm text-gray-400 mb-4 font-medium">Inflows and Outflows</h2>
        <div className="space-y-3 max-h-[280px] overflow-y-auto pr-2">
          {transactions.map((transaction) => (
            <div key={transaction.id} 
              className="bg-gray-900/60 rounded-xl p-4 border border-violet-500/10 
                hover:border-violet-500/20 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-base
                    ${transaction.type === 'Deposit' 
                      ? 'bg-green-500/10 text-green-500' 
                      : 'bg-red-500/10 text-red-500'
                    }`}>
                    {transaction.type === 'Deposit' ? '↓' : '↑'}
                  </span>
                  <div>
                    <div className="text-sm font-medium">{transaction.type}</div>
                    <div className="text-xs text-gray-400">Type</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${
                    transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}{transaction.amount} {transaction.currency}
                  </div>
                  <div className="text-xs text-gray-400">Amount</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-gray-800">
                <div>
                  <div className="text-sm font-medium">{transaction.sender}</div>
                  <div className="text-xs text-gray-400">Sender</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{transaction.time}</div>
                  <div className="text-xs text-gray-400">Time</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
