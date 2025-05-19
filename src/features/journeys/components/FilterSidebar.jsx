import React from "react";
import { motion } from "framer-motion";
import JourneyFilter from "./JourneyFilter";

const FilterSidebar = ({ 
  selectedTag, 
  setSelectedTag, 
  selectedFilters, 
  setSelectedFilters,
  onClearFilters,
  onClose,
  filterOptions,
  loading,
  error
}) => {
  const sidebarVariants = {
    hidden: { 
      x: -300,
      opacity: 0 
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }
    },
    exit: { 
      x: -300,
      opacity: 0,
      transition: { 
        duration: 0.2 
      }
    }
  };

  return (
    <motion.div 
      className="w-72 bg-white rounded-lg shadow-md p-5 border border-gray-100 overflow-y-auto z-10 absolute top-0 left-0 bottom-0 md:relative md:h-auto max-h-[calc(100vh-8rem)]"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={sidebarVariants}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium text-teakwood-brown text-lg">Filters</h3>
        <div className="flex items-center gap-3">
          {/* <button 
            onClick={onClearFilters}
            className="text-sm text-ceyora-clay hover:text-palm-green"
          >
            Clear all
          </button>
          <button 
            onClick={onClose}
            className="md:hidden text-ocean-mist hover:text-teakwood-brown"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button> */}
        </div>
      </div>
      
      <JourneyFilter 
        selectedTag={selectedTag} 
        setSelectedTag={setSelectedTag}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        filterOptions={filterOptions}
        loading={loading}
        error={error}
      />
    </motion.div>
  );
};

export default FilterSidebar;