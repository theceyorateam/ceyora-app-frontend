// src/features/journeys/components/FilterButton.jsx
import React from "react";
import { motion } from "framer-motion";

const FilterButton = ({ isOpen, setIsOpen, activeFilterCount }) => {
  return (
    <button 
      className="flex items-center justify-center px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-soft-cream transition-colors"
      onClick={() => setIsOpen(!isOpen)}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 text-palm-green mr-2" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
      <span className="mr-2 text-teakwood-brown font-medium">
        {isOpen ? "Hide Filters" : "Show Filters"}
      </span>
      
      {activeFilterCount > 0 && (
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-ceyora-clay rounded-full"
        >
          {activeFilterCount}
        </motion.div>
      )}
    </button>
  );
};

export default FilterButton;
