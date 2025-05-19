// src/features/journeys/components/CategoryScroll.jsx
import React, { useRef } from "react";

const CategoryScroll = ({ tags, selectedTag, setSelectedTag }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // Toggle selection function
  const handleTagClick = (tag) => {
    // If the tag is "All" or the clicked tag is already selected, set to "All"
    if (tag === "All" || selectedTag === tag) {
      setSelectedTag("All");
    } else {
      // Otherwise, select the clicked tag
      setSelectedTag(tag);
    }
  };

  return (
    <div className="relative">
      {/* Scroll Left Button */}
      <button
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:shadow-lg transition-shadow p-1 rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-ceyora-clay"
        onClick={scrollLeft}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ocean-mist" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Scrollable Tag Buttons */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto py-2 px-6 space-x-3 no-scrollbar scrollbar-thin"
      >
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap focus:outline-none ${
              selectedTag === tag
                ? "bg-ceyora-clay text-white shadow-md"
                : "bg-soft-cream text-teakwood-brown hover:bg-palm-green/10"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Scroll Right Button */}
      <button
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:shadow-lg transition-shadow p-1 rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-ceyora-clay"
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
