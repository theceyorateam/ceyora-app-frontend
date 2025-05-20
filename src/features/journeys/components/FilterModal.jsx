// src/features/journeys/components/FilterModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import JourneyFilter from "./JourneyFilter";

const FilterModal = ({ 
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
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white w-full max-w-sm ml-auto h-full overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="sticky top-0 bg-white z-10 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
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
            
            <div className="p-4">
              <JourneyFilter 
                tags={tags} 
                selectedTag={selectedTag} 
                setSelectedTag={(tag) => {
                  setSelectedTag(tag);
                }}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
                onClearFilters={onClearFilters}
              />
            </div>
            
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
              <button
                onClick={onClose}
                className="w-full py-2 px-4 bg-ceyora-clay hover:bg-palm-green text-white font-medium rounded-lg transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterModal;
