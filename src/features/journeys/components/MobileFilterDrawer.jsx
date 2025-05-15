// src/features/journeys/components/MobileFilterDrawer.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import JourneyFilter from "./JourneyFilter";

const MobileFilterDrawer = ({ 
  isOpen, 
  onClose, 
  tags, 
  selectedTag, 
  setSelectedTag,
  selectedFilters,
  setSelectedFilters,
  onClearFilters
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Drawer */}
          <motion.div 
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 shadow-xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-medium text-teakwood-brown">Filters</h3>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-soft-cream"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ocean-mist" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Filter Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-4">
              <JourneyFilter 
                tags={tags} 
                selectedTag={selectedTag} 
                setSelectedTag={setSelectedTag}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
                onClearFilters={onClearFilters}
              />
            </div>
            
            {/* Footer with Apply Button */}
            <div className="border-t border-gray-200 p-4">
              <button
                onClick={onClose}
                className="w-full py-3 px-4 bg-ceyora-clay hover:bg-palm-green text-white font-medium rounded-lg transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileFilterDrawer;
