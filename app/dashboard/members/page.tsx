'use client'
import { motion } from 'framer-motion'
import { MdContentCopy } from 'react-icons/md'
import { FiPlus } from 'react-icons/fi'

// Mock members data
const members = [
  {
    name: 'Member name',
    address: '3LVT...26AZ',
    roles: ['Proposer', 'Voter', 'Executor'],
    avatar: '/avatars/default.png'
  },
  {
    name: 'Member name',
    address: '4uGo...iTjP',
    roles: ['Proposer', 'Voter', 'Executor'],
    avatar: '/avatars/default.png'
  },
  {
    name: 'Member name',
    address: '8FZZ...dMZu',
    roles: ['Proposer', 'Voter', 'Executor'],
    avatar: '/avatars/default.png'
  },
  {
    name: 'Member name',
    address: 'AeM9...Vx4t',
    roles: ['Proposer', 'Voter', 'Executor'],
    avatar: '/avatars/default.png'
  },
  {
    name: 'Member name',
    address: 'DeJZ...4Y6A',
    roles: ['Proposer', 'Voter', 'Executor'],
    avatar: '/avatars/default.png'
  },
  {
    name: 'schizardio.sol',
    address: 'HUUk...Z8sh',
    roles: ['Proposer', 'Voter', 'Executor'],
    avatar: '/avatars/default.png'
  },
  {
    name: 'Member name',
    address: 'HsbX...eL2N',
    roles: ['Proposer', 'Voter', 'Executor'],
    avatar: '/avatars/default.png'
  },
]

export default function MembersPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-white">Members</h1>
        <button className="px-4 py-2 bg-violet-500/20 text-violet-200 rounded-lg text-sm hover:bg-violet-500/30 transition-colors flex items-center gap-2">
          <FiPlus size={16} />
          Add Member
        </button>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {members.map((member, index) => (
          <motion.div
            key={member.address}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#2A3744] rounded-xl p-4"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-500/20 rounded-full" />
                <div>
                  <div className="text-white">{member.name}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">{member.address}</span>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <MdContentCopy size={14} />
                    </button>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3.5C8.41421 3.5 8.75 3.16421 8.75 2.75C8.75 2.33579 8.41421 2 8 2C7.58579 2 7.25 2.33579 7.25 2.75C7.25 3.16421 7.58579 3.5 8 3.5Z" fill="#9CA3AF"/>
                  <path d="M8 8.75C8.41421 8.75 8.75 8.41421 8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75Z" fill="#9CA3AF"/>
                  <path d="M8 14C8.41421 14 8.75 13.6642 8.75 13.25C8.75 12.8358 8.41421 12.5 8 12.5C7.58579 12.5 7.25 12.8358 7.25 13.25C7.25 13.6642 7.58579 14 8 14Z" fill="#9CA3AF"/>
                </svg>
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {member.roles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-lg text-sm"
                >
                  {role}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modules Section */}
      <div className="mt-8">
        <h2 className="text-sm text-gray-400 mb-4">Modules</h2>
        <button className="w-full max-w-sm px-4 py-3 bg-[#2A3744] rounded-xl text-left text-white hover:bg-gray-700/50 transition-colors flex items-center justify-between">
          <span>Add SquadsX</span>
          <FiPlus size={16} />
        </button>
      </div>
    </div>
  )
}
