// src/features/journeys/components/FilterButton.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const FilterButton = ({ isOpen, setIsOpen, activeFilterCount }) => {
  // Ensure activeFilterCount is treated as a number
  const filterCount = typeof activeFilterCount === 'number' ? activeFilterCount : 0;
  
  // Determine if there are active filters
  const hasActiveFilters = filterCount > 0;

  return (
    <motion.button
      type="button"
      aria-pressed={isOpen}
      className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 shadow-sm bg-white hover:bg-soft-cream focus:outline-none transition-all"
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-palm-green"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
        />
      </svg>

      <span className="text-teakwood-brown font-medium text-sm">
        {isOpen ? "Hide Filters" : "Show Filters"}
      </span>

      <AnimatePresence mode="wait">
        {hasActiveFilters && (
          <motion.span
            key={`filter-count-${filterCount}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-ceyora-clay rounded-full"
            aria-label={`${filterCount} active filters`}
          >
            {filterCount}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default FilterButton;
