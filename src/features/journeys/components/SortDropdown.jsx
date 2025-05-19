import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SortDropdown = ({ sortBy, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const sortOptions = [
    { value: "recommended", label: "Recommended" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
    { value: "duration-short", label: "Duration: Shortest" },
    { value: "duration-long", label: "Duration: Longest" },
  ];
  
  const currentOption = sortOptions.find(option => option.value === sortBy);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        type="button"
        className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 shadow-sm bg-white hover:bg-soft-cream focus:outline-none transition-all"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
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
            d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
          />
        </svg>

        <span className="text-teakwood-brown font-medium text-sm">
          {currentOption?.label || "Sort By"}
        </span>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="py-1" role="listbox">
              {sortOptions.map((option) => (
                <motion.button
                  key={option.value}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    sortBy === option.value
                      ? "bg-palm-green bg-opacity-10 text-palm-green font-medium"
                      : "text-teakwood-brown hover:bg-soft-cream"
                  }`}
                  onClick={() => {
                    setSortBy(option.value);
                    setIsOpen(false);
                  }}
                  whileHover={{ backgroundColor: sortBy === option.value ? "" : "#f5f5f0" }}
                  role="option"
                  aria-selected={sortBy === option.value}
                >
                  {option.label}
                  {sortBy === option.value && (
                    <motion.span 
                      className="float-right text-palm-green"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SortDropdown;
