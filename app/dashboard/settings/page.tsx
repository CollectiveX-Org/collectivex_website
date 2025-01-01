'use client'
import { useState } from 'react'
import { MdEdit } from 'react-icons/md'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { FiCopy, FiEye } from 'react-icons/fi'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Security')
  const [timelock, setTimelock] = useState('None')

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-medium text-white mb-8">Settings</h1>

      {/* DAO Info Card */}
      <div className="bg-[#1a1a1a] rounded-xl p-6 mb-8">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center">
              <span className="text-violet-200">S</span>
            </div>
            <h2 className="text-xl text-white">Schizo DAO</h2>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
            <MdEdit size={16} />
            <span className="text-sm">Edit</span>
          </button>
        </div>
        <p className="text-gray-400 text-sm mb-4">Grow the $Schizo token community on Solana</p>
        <div className="text-sm text-gray-500">Created on: Mar 11, 2024, 3:30 PM</div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 mt-6">
          <div>
            <div className="text-3xl font-medium text-white">7</div>
            <div className="text-sm text-gray-400">Members</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-3xl font-medium text-white">4/7</div>
            <IoMdInformationCircleOutline className="text-gray-400" size={16} />
            <div className="text-sm text-gray-400">Threshold</div>
          </div>
        </div>
      </div>

      {/* Vault Info */}
      <div className="grid grid-cols-2 gap-6 mb-8 bg-[#1a1a1a] rounded-xl p-6">
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Squad Vault</label>
          <div className="flex items-center gap-2 rounded-lg p-3">
            <span className="text-white text-sm truncate">BhGdDJrKeD...eqdfcDgw9y</span>
            <button className="text-gray-400 hover:text-white transition-colors">
              <FiCopy size={16} />
            </button>
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Multisig Account</label>
          <div className="flex items-center gap-2 rounded-lg p-3">
            <span className="text-white text-sm">DLdbU*******</span>
            <button className="text-gray-400 hover:text-white transition-colors">
              <FiEye size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800 mb-6 bg-[#1a1a1a] rounded-xl p-6">
        <div className="flex gap-6">
          {['Security', 'Other'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm ${
                activeTab === tab
                  ? 'text-white border-b-2 border-violet-500'
                  : 'text-gray-400 hover:text-white'
              } transition-colors`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Settings Content */}
      <div className="space-y-8 bg-[#1a1a1a] rounded-xl p-6">
        {/* Spending Limits */}
        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-white mb-1">Spending Limits</h3>
              <p className="text-sm text-gray-400">
                Grant the member of your Squad a spending limit to withdraw funds without requiring other members approval
              </p>
            </div>
            <button className="px-4 py-2 bg-[#222222] text-white rounded-lg text-sm 
              hover:bg-[#2a2a2a] transition-colors flex items-center gap-2">
              + Add Spending Limit
            </button>
          </div>
        </div>

        {/* Privacy */}
        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-white mb-1">Privacy</h3>
              <p className="text-sm text-gray-400">
                Viewing your Squad and its content will only be available to Squad members when turned on. Note: all on-chain activity will still be visible on explorers. This feature will turn off automatically if subscription is not renewed.
              </p>
            </div>
            <div className="relative inline-block w-12 h-6">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-12 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-6 peer-checked:bg-violet-500 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </div>
          </div>
        </div>

        {/* Time Lock */}
        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-white mb-1">Time Lock</h3>
              <p className="text-sm text-gray-400">
                You are able to set a timelock period (in seconds) for which a transaction will be frozen when reaching Ready state and won&apos;t be able to be Executed until that time period passes.
              </p>
            </div>
            <select
              value={timelock}
              onChange={(e) => setTimelock(e.target.value)}
              className="bg-[#222222] text-white rounded-lg px-4 py-2 text-sm 
                appearance-none cursor-pointer hover:bg-[#2a2a2a] transition-colors"
            >
              <option value="None">None</option>
              <option value="1h">1 hour</option>
              <option value="24h">24 hours</option>
              <option value="custom">Custom</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
