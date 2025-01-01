'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image'
import MembersThresholdStep from './MembersThresholdStep';
import Review from './Review';

interface CreateSquadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: (data: { 
    name: string; 
    description: string; 
    image?: File;
  }) => void;
}

interface Member {
  address: string;
  isSelected: boolean;
}

interface FormData {
    name: string;
    description: string;
    image: File | null;
    members: Member[];
    threshold: number;
    imagePreview?: string;
  }
  
const CreateSquadModal = ({ isOpen, onClose, onNext }: CreateSquadModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    image: null,
    members: [],
    threshold: 1,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, imagePreview: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSquadDetailsNext = () => {
    if (formData.name) {
      setCurrentStep(2);
    } else {
      alert('Please enter a squad name!');
    }
  };

  const handleMembersThresholdBack = () => {
    setCurrentStep(1);
  };

  const handleMembersThresholdNext = (data: { members: Member[]; threshold: number }) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep(3);
  };

  const handleReviewBack = () => {
    setCurrentStep(2);
  };

  const handleReviewConfirm = () => {
    onNext({
      name: formData.name,
      description: formData.description,
      ...(formData.image ? { image: formData.image } : {})
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-[#1C2936] rounded-xl max-w-xl w-full p-6 shadow-xl"
          >
            {/* Simple Progress Steps */}
            <div className="flex justify-center space-x-12 mb-8">
              {['Squad Details', 'Members', 'Review'].map((step, index) => (
                <div
                  key={step}
                  className={`relative ${
                    currentStep === index + 1 ? 'text-white' : 'text-gray-500'
                  } text-sm`}
                >
                  {step}
                  {currentStep === index + 1 && (
                    <motion.div
                      layoutId="activeStep"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                      initial={false}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            {currentStep === 1 ? (
              <div className="space-y-6">
                <h2 className="text-xl font-medium text-white">Create Your Squad</h2>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm text-gray-300 mb-1.5">Squad Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter squad name"
                      className="w-full px-3.5 py-2.5 bg-[#2A3744] text-white rounded-lg
                      border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 
                      transition-colors placeholder:text-gray-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-300 mb-1.5">
                      Description <span className="text-gray-500 text-xs">(optional)</span>
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe your squad"
                      rows={3}
                      className="w-full px-3.5 py-2.5 bg-[#2A3744] text-white rounded-lg
                      border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 
                      transition-colors placeholder:text-gray-500 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-1.5">
                      Squad Image <span className="text-gray-500 text-xs">(optional)</span>
                    </label>
                    <div className="flex items-center gap-4">
                      {formData.imagePreview ? (
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden group">
                          <img 
                            src={formData.imagePreview} 
                            alt="Preview" 
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => setFormData(prev => ({ ...prev, image: null, imagePreview: undefined }))}
                            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                            transition-opacity flex items-center justify-center"
                          >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="w-full px-3.5 py-2.5 bg-[#2A3744] text-white rounded-lg
                          border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30
                          file:mr-4 file:py-2 file:px-3 file:rounded-md file:border-0
                          file:text-sm file:bg-gray-600 file:text-white
                          hover:file:bg-gray-500 transition-colors"
                        />
                      )}
                    </div>
                  </div>
                </form>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSquadDetailsNext}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                    transition-colors text-sm flex items-center gap-2"
                  >
                    Continue
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : currentStep === 2 ? (
              <MembersThresholdStep
                onBack={handleMembersThresholdBack}
                onNext={handleMembersThresholdNext}
              />
            ) : (
              <Review
                squadDetails={{
                  name: formData.name,
                  description: formData.description,
                  imageUrl: formData.imagePreview
                }}
                memberDetails={{
                  members: formData.members,
                  threshold: formData.threshold
                }}
                onBack={handleReviewBack}
                onConfirm={handleReviewConfirm}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CreateSquadModal;
