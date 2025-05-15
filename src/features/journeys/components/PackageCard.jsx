// src/features/journeys/components/PackageCard.jsx
import React from "react";
import { motion } from "framer-motion";

const PackageCard = ({ package: pkg, isSelected, onSelect }) => {
  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }
  };

  return (
    <motion.div
      className={`bg-white rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 ${
        isSelected 
          ? "ring-2 ring-ceyora-clay shadow-md" 
          : "border border-gray-100 shadow-sm hover:shadow-md"
      }`}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onClick={onSelect}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      aria-label={`Select ${pkg.name} package`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      {/* Package Header */}
      <div className={`p-4 ${isSelected ? 'bg-ceyora-clay' : 'bg-soft-cream'}`}>
        <h4 className={`font-bold text-lg ${isSelected ? 'text-white' : 'text-teakwood-brown'}`}>
          {pkg.name}
        </h4>
        <p className={`text-xs ${isSelected ? 'text-white text-opacity-80' : 'text-ocean-mist'}`}>
          {pkg.duration}
        </p>
      </div>
      
      {/* Package Content */}
      <div className="p-4 flex-grow flex flex-col">
        {/* Price */}
        <div className="mb-4">
          <span className="font-bold text-lg text-ceyora-clay">
            LKR {pkg.priceLKR.toLocaleString()}
          </span>
          <p className="text-xs text-ocean-mist">USD ${pkg.priceUSD}</p>
        </div>
        
        {/* Description */}
        <p className="text-sm text-ocean-mist mb-4 flex-grow">
          {pkg.description}
        </p>
        
        {/* Inclusions */}
        <div className="mb-4">
          <h5 className="text-xs font-medium text-teakwood-brown mb-2">What's included:</h5>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
            {pkg.inclusions.map((item, index) => (
              <li key={index} className="text-xs text-ocean-mist flex items-start">
                <svg className="h-3 w-3 text-palm-green mt-0.5 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Guest Limit */}
        {pkg.maxGuests && (
          <div className="text-xs text-ocean-mist flex items-center">
            <svg className="h-3 w-3 text-ocean-mist mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Up to {pkg.maxGuests} guests
          </div>
        )}
      </div>
      
      {/* Package Footer */}
      <div className="p-4 border-t border-gray-100">
        <button
          className={`w-full py-2 px-4 rounded-lg transition-colors text-sm font-medium ${
            isSelected
              ? "bg-ceyora-clay text-white"
              : "bg-soft-cream text-teakwood-brown hover:bg-palm-green hover:text-white"
          }`}
          onClick={onSelect}
          aria-label={`Select ${pkg.name} package`}
        >
          {isSelected ? "Selected" : "Select Package"}
        </button>
      </div>
    </motion.div>
  );
};

export default PackageCard;
