'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image'
import MembersThresholdStep from './MembersThresholdStep';

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
    if (formData.name && formData.description) {
      setCurrentStep(2);
    } else {
      alert('Please fill out all fields!');
    }
  };

  const handleMembersThresholdBack = () => {
    setCurrentStep(1);
  };

  const handleMembersThresholdNext = (data: { members: Member[]; threshold: number }) => {
    setFormData((prev) => ({ ...prev, ...data }));
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
              <div>
                <h2 className="text-lg text-white mb-4">Squad Details</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Squad Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter squad name"
                      className="w-full p-2 bg-gray-800 text-white rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Enter description"
                      className="w-full p-2 bg-gray-800 text-white rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Upload Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full p-2 bg-gray-800 text-white rounded"
                    />
                  </div>
                </form>
                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-600 text-white rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSquadDetailsNext}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : currentStep === 2 ? (
              <MembersThresholdStep
                onBack={handleMembersThresholdBack}
                onNext={handleMembersThresholdNext}
              />
            ) : (
              <div>
                <p>Review Step Placeholder</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CreateSquadModal;
