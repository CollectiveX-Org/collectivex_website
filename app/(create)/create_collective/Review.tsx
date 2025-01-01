'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
// import Image from 'next/image'

interface ReviewProps {
  squadDetails: {
    name: string;
    description?: string;
    imageUrl?: string;
  };
  memberDetails: {
    members: { address: string; isSelected: boolean; }[];
    threshold: number;
  };
  onBack: () => void;
  onConfirm: () => void;
}

const Review = ({ memberDetails, onBack, onConfirm }: ReviewProps) => {
  const deployFee = 0.0528; // This could be fetched from an API or config
  const router = useRouter(); // Initialize useRouter

  return (
    <div className="space-y-6">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-white mb-2">
          Review and confirm
        </h1>
        <p className="text-gray-400">
          One last look at the selected parameters<br />
          before the Squad is deployed
        </p>
      </div>

      {/* Review Card */}
      <div className="bg-[#1C1C1C] rounded-xl p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="text-2xl text-white">{memberDetails.members.filter(m => m.isSelected).length}</span>
            </div>
            <p className="text-gray-400 text-sm">Members</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
              </svg>
              <span className="text-2xl text-white">
                {memberDetails.threshold}/{memberDetails.members.filter(m => m.isSelected).length}
              </span>
            </div>
            <p className="text-gray-400 text-sm">Threshold</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-2xl text-white">~{deployFee}</span>
            </div>
            <p className="text-gray-400 text-sm">Deploy fee</p>
          </div>
        </div>

        {/* Fee Explanation */}
        <p className="text-xs text-gray-500 mt-4">
          <svg className="w-4 h-4 inline mr-1 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          This amount consists of 0.05 SOL one-time platform fee, 0.001 SOL which will be deposited into your Squad&apos;s account and ~0.0018 SOL network rent needed for account deployment.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-between pt-6">
          <button
            onClick={onBack}
            className="px-8 py-3 text-gray-400 hover:text-white transition-colors"
          >
            Back
          </button>
          <button
            onClick={() => router.push('/dashboard')}
            className="px-8 py-3 bg-white text-black rounded-lg hover:bg-opacity-90 transition-colors font-medium"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default Review
