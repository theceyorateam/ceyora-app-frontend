// src/features/journeys/pages/JourneysPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import JourneyCard from "../components/JourneyCard";
import FilterSidebar from "../components/FilterSidebar";
import FilterButton from "../components/FilterButton";
import JourneySkeleton from "../skeletons/JourneySkeleton";
import SortDropdown from "../components/SortDropdown";
import MobileFilterDrawer from "../components/MobileFilterDrawer";
import CategoryScroll from "../components/CategoryScroll";
import useJourneys from "../hooks/useJourneys";
import useFilterOptions from "../hooks/useFilterOptions"; // Import useFilterOptions

const JourneysPage = () => {
  const { 
    journeys, 
    loading: journeysLoading, 
    error: journeysError, 
    selectedTag, 
    setSelectedTag,
    selectedFilters,
    setSelectedFilters, 
    // filteredJourneys, // This is now just 'journeys' from the hook
    sortBy,
    setSortBy 
  } = useJourneys();

  const { 
    filterOptions,
    loading: filtersLoading,
    error: filtersError
  } = useFilterOptions(); // Use the hook to get filter options
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const mainContentRef = useRef(null);

  // Extract dynamic tags/categories
  const dynamicTags = filterOptions?.categories?.map(cat => cat.name) || [];
  
  useEffect(() => {
    const savedState = localStorage.getItem("ceyora-filter-open");
    if (savedState !== null) {
      setIsFilterOpen(savedState === "true");
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("ceyora-filter-open", isFilterOpen);
  }, [isFilterOpen]);

  const handleClearFilters = () => {
    setSelectedTag("All");
    setSelectedFilters({
      priceRange: [0, 50000],
      duration: [],
      rating: 0,
      location: []
    });
  };

  const activeFilterCount = 
    (selectedTag !== "All" ? 1 : 0) + 
    (selectedFilters.duration.length > 0 ? 1 : 0) + 
    (selectedFilters.location.length > 0 ? 1 : 0) + 
    (selectedFilters.rating > 0 ? 1 : 0) +
    (selectedFilters.priceRange[0] > 0 || selectedFilters.priceRange[1] < 50000 ? 1 : 0);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const displayJourneys = journeys; // Use the already filtered/sorted journeys from the hook

  return (
    <div className="bg-ceylon-cream min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-20">
            <h1 className="text-3xl font-bold text-teakwood-brown">Discover Journeys</h1>
            <div className="flex items-center gap-3">
              <button 
                className="md:hidden flex items-center justify-center px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-soft-cream transition-colors"
                onClick={() => setIsMobileFilterOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-palm-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span className="mr-2 text-teakwood-brown font-medium">Filters</span>
                {activeFilterCount > 0 && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-ceyora-clay rounded-full">
                    {activeFilterCount}
                  </motion.div>
                )}
              </button>
              <div className="hidden md:block">
                <FilterButton isOpen={isFilterOpen} setIsOpen={setIsFilterOpen} activeFilterCount={activeFilterCount} />
              </div>
              <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
            </div>
          </div>
          
          <div className="overflow-hidden">
            {filtersLoading && <div className="h-10 bg-gray-200 rounded animate-pulse w-full"></div>} 
            {filtersError && <p className="text-red-500 text-sm">Could not load categories.</p>}
            {!filtersLoading && !filtersError && dynamicTags.length > 0 && (
              <CategoryScroll 
                tags={["All", ...dynamicTags]} 
                selectedTag={selectedTag} 
                setSelectedTag={setSelectedTag} 
              />
            )}
          </div>
          
          <div className="flex relative" ref={mainContentRef}>
            <AnimatePresence>
              {isFilterOpen && (
                <div className="hidden md:block absolute md:relative z-10">
                  <FilterSidebar
                    tags={dynamicTags} // Use dynamic tags
                    selectedTag={selectedTag}
                    setSelectedTag={setSelectedTag}
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                    onClearFilters={handleClearFilters}
                    onClose={() => setIsFilterOpen(false)}
                    filterOptions={filterOptions} // Pass all filter options
                    loading={filtersLoading}
                    error={filtersError}
                  />
                </div>
              )}
            </AnimatePresence>
            
            <MobileFilterDrawer
              isOpen={isMobileFilterOpen}
              onClose={() => setIsMobileFilterOpen(false)}
              tags={dynamicTags} // Use dynamic tags
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              onClearFilters={handleClearFilters}
              filterOptions={filterOptions} // Pass all filter options
              loading={filtersLoading}
              error={filtersError}
            />
            
            <div className={`flex-1 transition-all duration-300 ${isFilterOpen ? "md:ml-72" : "ml-0"}`}>
              {!journeysLoading && !journeysError && (
                <p className="text-ocean-mist mb-4">Showing {displayJourneys.length} journeys</p>
              )}
              
              {journeysLoading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <JourneySkeleton key={i} />
                  ))}
                </div>
              )}
              
              {journeysError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {journeysError}
                </div>
              )}
              
              {!journeysLoading && !journeysError && displayJourneys.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-ocean-mist mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-medium text-teakwood-brown mb-1">No journeys found</h3>
                  <p className="text-ocean-mist">Try changing your filters or check back later for new experiences.</p>
                </div>
              )}
              
              {!journeysLoading && !journeysError && displayJourneys.length > 0 && (
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {displayJourneys.map(journey => (
                    <JourneyCard key={journey.id} journey={journey} />
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneysPage;

