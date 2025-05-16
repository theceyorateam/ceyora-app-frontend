// src/features/journeys/components/JourneyFilter.jsx
import React, { useState } from "react";
import RangeSlider from "./RangeSlider";

const JourneyFilter = ({ 
  tags, 
  selectedTag, 
  setSelectedTag, 
  selectedFilters, 
  setSelectedFilters,
  onClearFilters
}) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    duration: true,
    rating: true,
    location: true
  });

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const handlePriceChange = (values) => {
    setSelectedFilters({
      ...selectedFilters,
      priceRange: values
    });
  };

  const handleDurationChange = (duration) => {
    const newDurations = selectedFilters.duration.includes(duration)
      ? selectedFilters.duration.filter(d => d !== duration)
      : [...selectedFilters.duration, duration];
    
    setSelectedFilters({
      ...selectedFilters,
      duration: newDurations
    });
  };

  const handleRatingChange = (rating) => {
    setSelectedFilters({
      ...selectedFilters,
      rating: rating
    });
  };

  const handleLocationChange = (location) => {
    const newLocations = selectedFilters.location.includes(location)
      ? selectedFilters.location.filter(l => l !== location)
      : [...selectedFilters.location, location];
    
    setSelectedFilters({
      ...selectedFilters,
      location: newLocations
    });
  };

  const locations = [
    "Colombo",
    "Kandy",
    "Galle",
    "Ella",
    "Sigiriya",
    "Nuwara Eliya",
    "Trincomalee",
    "Jaffna"
  ];

  const durations = [
    "Half day",
    "Full day",
    "2-3 days",
    "4-7 days",
    "Week+"
  ];

  return (
    <div className="bg-white rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium text-teakwood-brown text-lg">Refine Results</h3>
        <button 
          onClick={onClearFilters}
          className="text-sm text-ceyora-clay hover:text-palm-green"
        >
          Clear all
        </button>
      </div>
      
      {/* Categories Section */}
      <div className="mb-5 border-b border-gray-100 pb-4">
        <div 
          className="flex justify-between items-center cursor-pointer mb-3"
          onClick={() => toggleSection('category')}
        >
          <h4 className="font-medium text-teakwood-brown flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-ceyora-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Categories
          </h4>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 transition-transform text-ocean-mist ${expandedSections.category ? 'rotate-180' : ''}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        
        {expandedSections.category && (
          <div className="space-y-2">
            <button
              onClick={() => setSelectedTag("All")}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                selectedTag === "All"
                  ? "bg-palm-green bg-opacity-10 text-palm-green font-medium"
                  : "text-teakwood-brown hover:bg-soft-cream"
              }`}
            >
              All Experiences
            </button>
            
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                  selectedTag === tag
                    ? "bg-palm-green bg-opacity-10 text-palm-green font-medium"
                    : "text-teakwood-brown hover:bg-soft-cream"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Price Range Section */}
      <div className="mb-5 border-b border-gray-100 pb-4">
        <div 
          className="flex justify-between items-center cursor-pointer mb-3"
          onClick={() => toggleSection('price')}
        >
          <h4 className="font-medium text-teakwood-brown flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-ceyora-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Price Range
          </h4>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 transition-transform text-ocean-mist ${expandedSections.price ? 'rotate-180' : ''}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        
        {expandedSections.price && (
          <div className="px-2">
            <RangeSlider 
              min={0}
              max={50000}
              step={1000}
              values={selectedFilters.priceRange}
              onChange={handlePriceChange}
              formatValue={(value) => `LKR ${value.toLocaleString()}`}
            />
            <div className="flex justify-between mt-2 text-sm text-ocean-mist">
              <span>LKR {selectedFilters.priceRange[0].toLocaleString()}</span>
              <span>LKR {selectedFilters.priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Duration Section */}
      <div className="mb-5 border-b border-gray-100 pb-4">
        <div 
          className="flex justify-between items-center cursor-pointer mb-3"
          onClick={() => toggleSection('duration')}
        >
          <h4 className="font-medium text-teakwood-brown flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-ceyora-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Duration
          </h4>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 transition-transform text-ocean-mist ${expandedSections.duration ? 'rotate-180' : ''}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        
        {expandedSections.duration && (
          <div className="space-y-2">
            {durations.map(duration => (
              <label key={duration} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-ceyora-clay focus:ring-ceyora-clay h-4 w-4"
                  checked={selectedFilters.duration.includes(duration)}
                  onChange={() => handleDurationChange(duration)}
                />
                <span className="ml-2 text-teakwood-brown">{duration}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      
      {/* Rating Section */}
      <div className="mb-5 border-b border-gray-100 pb-4">
        <div 
          className="flex justify-between items-center cursor-pointer mb-3"
          onClick={() => toggleSection('rating')}
        >
          <h4 className="font-medium text-teakwood-brown flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-ceyora-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Rating
          </h4>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 transition-transform text-ocean-mist ${expandedSections.rating ? 'rotate-180' : ''}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        
        {expandedSections.rating && (
          <div className="space-y-2">
            {[0, 3, 4, 4.5].map(rating => (
              <button
                key={rating}
                onClick={() => handleRatingChange(rating)}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors flex items-center ${
                  selectedFilters.rating === rating
                    ? "bg-palm-green bg-opacity-10 text-palm-green font-medium"
                    : "text-teakwood-brown hover:bg-soft-cream"
                }`}
              >
                {rating === 0 ? (
                  <span>Any rating</span>
                ) : (
                  <>
                    <div className="flex items-center">
                      {Array.from({ length: Math.floor(rating) }).map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-sun-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      {rating % 1 !== 0 && (
                        <svg className="w-4 h-4 text-sun-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      )}
                      <span className="ml-2">{rating}+ stars</span>
                    </div>
                  </>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Location Section */}
      <div className="mb-4">
        <div 
          className="flex justify-between items-center cursor-pointer mb-3"
          onClick={() => toggleSection('location')}
        >
          <h4 className="font-medium text-teakwood-brown flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-ceyora-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Location
          </h4>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 transition-transform text-ocean-mist ${expandedSections.location ? 'rotate-180' : ''}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        
        {expandedSections.location && (
          <div className="space-y-2">
            {locations.map(location => (
              <label key={location} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-ceyora-clay focus:ring-ceyora-clay h-4 w-4"
                  checked={selectedFilters.location.includes(location)}
                  onChange={() => handleLocationChange(location)}
                />
                <span className="ml-2 text-teakwood-brown">{location}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JourneyFilter;
