// src/features/journeys/components/SortDropdown.jsx
import React, { useState, useRef, useEffect } from "react";

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
      <button
        className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-between w-full sm:w-48"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="truncate text-teakwood-brown">{currentOption?.label || "Sort By"}</span>
        <svg
          className={`ml-2 w-4 h-4 transition-transform text-ocean-mist ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <div className="py-1">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  sortBy === option.value
                    ? "bg-palm-green bg-opacity-10 text-palm-green"
                    : "text-teakwood-brown hover:bg-soft-cream"
                }`}
                onClick={() => {
                  setSortBy(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
