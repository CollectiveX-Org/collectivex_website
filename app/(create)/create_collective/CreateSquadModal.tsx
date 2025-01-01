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
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-[#1C2936] rounded-xl max-w-xl w-full p-6"
          >
            {/* Progress Steps */}
            <div className="flex justify-center space-x-4 md:space-x-8 mb-8">
              <div
                className={`${
                  currentStep === 1 ? 'text-white border-b-2 border-white' : 'text-gray-500'
                } pb-2 whitespace-nowrap`}
              >
                Squad Details
              </div>
              <div
                className={`${
                  currentStep === 2 ? 'text-white border-b-2 border-white' : 'text-gray-500'
                } pb-2 whitespace-nowrap`}
              >
                Members & Threshold
              </div>
              <div
                className={`${
                  currentStep === 3 ? 'text-white border-b-2 border-white' : 'text-gray-500'
                } pb-2 whitespace-nowrap`}
              >
                Review
              </div>
            </div>

            {/* Step Content */}
            {currentStep === 1 ? (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Create Your Squad</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Squad Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your squad name"
                      className="w-full p-3 bg-gray-800/50 text-white rounded-lg border border-gray-700 
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
                      placeholder:text-gray-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Description <span className="text-gray-500">(Optional)</span>
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Tell us about your squad..."
                      rows={4}
                      className="w-full p-3 bg-gray-800/50 text-white rounded-lg border border-gray-700 
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
                      placeholder:text-gray-500 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Squad Image <span className="text-gray-500">(Optional)</span>
                    </label>
                    <div className="flex items-center space-x-4">
                      {formData.imagePreview && (
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                          <img 
                            src={formData.imagePreview} 
                            alt="Preview" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="w-full p-3 bg-gray-800/50 text-white rounded-lg border border-gray-700
                          file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                          file:text-sm file:font-semibold file:bg-blue-500 file:text-white
                          hover:file:bg-blue-600 transition-all duration-200"
                        />
                      </div>
                    </div>
                  </div>
                </form>

                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-lg border border-gray-600 text-gray-300 
                    hover:bg-gray-700/50 transition-all duration-200 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSquadDetailsNext}
                    className="px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                    transition-all duration-200 font-medium flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
