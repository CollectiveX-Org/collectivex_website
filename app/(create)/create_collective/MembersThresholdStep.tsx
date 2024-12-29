'use client'
import React, { useState, useEffect } from 'react'
import { useWallet } from "@solana/wallet-adapter-react"

interface Member {
    address: string
    isSelected: boolean
}

interface MembersThresholdStepProps {
    onBack: () => void
    onNext: (data: { members: Member[], threshold: number }) => void
}

const MembersThresholdStep = ({ onBack, onNext }: MembersThresholdStepProps) => {
    const { publicKey } = useWallet()
    const [members, setMembers] = useState<Member[]>([])
    const [threshold, setThreshold] = useState(1)
    const [selectedCount, setSelectedCount] = useState(0)

    // Initialize with connected wallet
    useEffect(() => {
        if (publicKey) {
            setMembers([{ address: publicKey.toBase58(), isSelected: true }])
            setSelectedCount(1)
        }
    }, [publicKey])

    const handleAddMember = () => {
        setMembers([...members, { address: '', isSelected: false }])
    }

    const handleMemberChange = (index: number, address: string) => {
        const newMembers = [...members]
        newMembers[index] = { ...newMembers[index], address }
        setMembers(newMembers)
    }

    const toggleMemberSelection = (index: number) => {
        const newMembers = [...members]
        newMembers[index] = {
            ...newMembers[index],
            isSelected: !newMembers[index].isSelected
        }
        setMembers(newMembers)

        const newSelectedCount = newMembers.filter(m => m.isSelected).length
        setSelectedCount(newSelectedCount)

        // Adjust threshold if it's higher than selected members
        if (threshold > newSelectedCount) {
            setThreshold(newSelectedCount)
        }
    }

    const handleSubmit = () => {
        onNext({ members, threshold })
    }

    return (
        <div className="space-y-6">
            {/* Title */}
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl text-white font-semibold mb-2">
                    Add members and configure security
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                    Add your team members and set threshold
                </p>
            </div>

            {/* Members Section */}
            <div className="space-y-4">
                <h3 className="text-white text-lg">Add initial multisig members</h3>

                {/* Members List */}
                <div className="space-y-3">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-3"
                        >
                            <button
                                onClick={() => toggleMemberSelection(index)}
                                className={`w-5 h-5 rounded ${member.isSelected ? 'bg-[#4CEBBB]' : 'bg-[#2A3744]'
                                    } flex items-center justify-center`}
                            >
                                {member.isSelected && (
                                    <span className="text-black text-sm">✓</span>
                                )}
                            </button>
                            <input
                                type="text"
                                value={member.address}
                                onChange={(e) => handleMemberChange(index, e.target.value)}
                                placeholder="Wallet address"
                                disabled={index === 0} // First member (connected wallet) is readonly
                                className="w-full bg-[#2A3744] text-white rounded-lg px-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-[#4CEBBB]
                         disabled:opacity-50"
                            />
                        </div>
                    ))}
                </div>

                {/* Add Member Button */}
                <button
                    onClick={handleAddMember}
                    className="w-full bg-[#2A3744] text-gray-400 rounded-lg px-4 py-3
                   hover:text-white transition-colors flex items-center justify-center"
                >
                    + Add Member
                </button>
            </div>

            {/* Threshold Section */}
            <div className="space-y-4">
                <h3 className="text-white text-lg">Set confirmation threshold</h3>

                <div className="space-y-2">
                    <input
                        type="range"
                        min={1}
                        max={selectedCount}
                        value={threshold}
                        onChange={(e) => setThreshold(Number(e.target.value))}
                        className="w-full accent-[#4CEBBB]"
                    />

                    <div className="flex justify-between text-gray-400 text-sm">
                        <span>1</span>
                        <span>{threshold} of {selectedCount} signatures required</span>
                        <span>{selectedCount}</span>
                    </div>
                </div>

                {/* Warning Message */}
                <div className="flex items-start space-x-2 text-sm text-yellow-500">
                    <span className="text-xl">⚠</span>
                    <p>
                        Add another owner as a backup. Losing access to your wallet will
                        result in loss of access to your Squad&apos;s assets
                    </p>

                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4">
                <button
                    onClick={onBack}
                    className="px-4 md:px-6 py-2 text-gray-400 hover:text-white transition-colors"
                >
                    Back
                </button>
                <button
                    onClick={handleSubmit}
                    disabled={selectedCount < 1 || !members.every(m => m.address)}
                    className={`px-4 md:px-6 py-2 rounded-lg font-medium transition-all duration-200
            ${selectedCount >= 1 && members.every(m => m.address)
                            ? 'bg-white text-black hover:bg-opacity-90'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default MembersThresholdStep
