// src/features/journeys/components/CategoryScroll.jsx
import React, { useRef } from "react";

const CategoryScroll = ({ tags, selectedTag, setSelectedTag }) => {
  const scrollRef = useRef(null);
  
  // Scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };
  
  // Scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative">
      {/* Left scroll button */}
      <button 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-1 z-10"
        onClick={scrollLeft}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ocean-mist" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      
      {/* Scrollable category list */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto py-2 px-6 space-x-2 no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
              selectedTag === tag
                ? "bg-ceyora-clay text-white"
                : "bg-soft-cream text-teakwood-brown hover:bg-palm-green hover:bg-opacity-10"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      
      {/* Right scroll button */}
      <button 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-1 z-10"
        onClick={scrollRight}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ocean-mist" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default CategoryScroll;
