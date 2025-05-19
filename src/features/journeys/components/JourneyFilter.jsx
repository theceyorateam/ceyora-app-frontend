import React, { useState, useEffect } from "react";

const JourneyFilter = ({
  tags,
  selectedTag,
  setSelectedTag,
  selectedFilters,
  setSelectedFilters,
  filterOptions,
  loading,
  error,
}) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    location: true,
    duration: true,
    price: true,
    rating: true,
  });

  const [priceInputs, setPriceInputs] = useState({
    min: selectedFilters?.priceRange?.[0] || 0,
    max: selectedFilters?.priceRange?.[1] || 50000,
  });

  // Track active filters for display in the filter pills section
  const [activeFilters, setActiveFilters] = useState([]);
  
  // Track input focus state
  const [inputFocused, setInputFocused] = useState({
    min: false,
    max: false
  });

  useEffect(() => {
    if (selectedFilters?.priceRange) {
      setPriceInputs({
        min: selectedFilters.priceRange[0],
        max: selectedFilters.priceRange[1],
      });
    }
    
    // Update active filters whenever selectedFilters changes
    updateActiveFilters();
  }, [selectedFilters]);

  // Function to update the active filters array
  const updateActiveFilters = () => {
    let filters = [];
    
    // Add category filters
    if (selectedFilters?.category?.length) {
      selectedFilters.category.forEach(cat => {
        filters.push({ type: 'category', value: cat });
      });
    }
    
    // Add location filters
    if (selectedFilters?.location?.length) {
      selectedFilters.location.forEach(loc => {
        filters.push({ type: 'location', value: loc });
      });
    }
    
    // Add duration filters
    if (selectedFilters?.duration?.length) {
      selectedFilters.duration.forEach(dur => {
        filters.push({ type: 'duration', value: dur });
      });
    }
    
    // Add rating filter
    if (selectedFilters?.rating) {
      filters.push({ type: 'rating', value: `${selectedFilters.rating} Stars & Up` });
    }
    
    // Add price range filter if it's not the default
    if (selectedFilters?.priceRange && 
        (selectedFilters.priceRange[0] > 0 || selectedFilters.priceRange[1] < 50000)) {
      filters.push({ 
        type: 'price', 
        value: `$${selectedFilters.priceRange[0]} - $${selectedFilters.priceRange[1]}` 
      });
    }
    
    setActiveFilters(filters);
  };

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  const handlePriceInputChange = (type, value) => {
    // Allow empty string or convert to number
    const numericValue = value === '' ? '' : Math.max(0, parseInt(value.replace(/\D/g, ''), 10) || 0);
    
    setPriceInputs({
      ...priceInputs,
      [type]: numericValue,
    });
  };

  const handlePriceInputBlur = (type) => {
    setInputFocused({
      ...inputFocused,
      [type]: false
    });
    
    let min = priceInputs.min === '' ? 0 : priceInputs.min;
    let max = priceInputs.max === '' ? 50000 : priceInputs.max;
    
    // Ensure min doesn't exceed max
    if (min > max) min = max;
    
    setPriceInputs({
      min: type === "min" ? min : priceInputs.min,
      max: type === "max" ? max : priceInputs.max
    });
    
    setSelectedFilters({
      ...selectedFilters,
      priceRange: [
        type === "min" ? min : priceInputs.min, 
        type === "max" ? max : priceInputs.max
      ]
    });
  };

  const handlePriceInputFocus = (type) => {
    setInputFocused({
      ...inputFocused,
      [type]: true
    });
    
    // Clear the value if it's the default value
    if (type === "min" && priceInputs.min === 0) {
      setPriceInputs({
        ...priceInputs,
        min: ''
      });
    } else if (type === "max" && priceInputs.max === 50000) {
      setPriceInputs({
        ...priceInputs,
        max: ''
      });
    }
  };

  // Modified to toggle filters using pills
  const handleFilterToggle = (type, value) => {
    switch (type) {
      case 'category':
        toggleCategoryFilter(value);
        break;
      case 'location':
        toggleLocationFilter(value);
        break;
      case 'duration':
        toggleDurationFilter(value);
        break;
      case 'rating':
        handleRatingChange(parseInt(value.split(' ')[0]));
        break;
      case 'price':
        // Reset price to default when removing the filter
        setSelectedFilters({
          ...selectedFilters,
          priceRange: [0, 50000]
        });
        setPriceInputs({ min: 0, max: 50000 });
        break;
      default:
        break;
    }
  };

  // Remove a specific filter
  const removeFilter = (type, value) => {
    handleFilterToggle(type, value);
  };

  const toggleCategoryFilter = (category) => {
    const updated = selectedFilters?.category?.includes(category)
      ? selectedFilters.category.filter((c) => c !== category)
      : [...(selectedFilters?.category || []), category];
    setSelectedFilters({ ...selectedFilters, category: updated });
  };

  const toggleLocationFilter = (location) => {
    const updated = selectedFilters?.location?.includes(location)
      ? selectedFilters.location.filter((l) => l !== location)
      : [...(selectedFilters?.location || []), location];
    setSelectedFilters({ ...selectedFilters, location: updated });
  };

  const toggleDurationFilter = (duration) => {
    const updated = selectedFilters?.duration?.includes(duration)
      ? selectedFilters.duration.filter((d) => d !== duration)
      : [...(selectedFilters?.duration || []), duration];
    setSelectedFilters({ ...selectedFilters, duration: updated });
  };

  const handleRatingChange = (rating) => {
    setSelectedFilters({ 
      ...selectedFilters, 
      rating: selectedFilters?.rating === rating ? null : rating 
    });
  };

  // FIX: Handle Clear All properly to avoid "Cannot read properties of undefined" error
  const handleClearAll = () => {
    setSelectedFilters({
      category: [],
      location: [],
      duration: [],
      priceRange: [0, 50000],
      rating: null
    });
  };

  if (loading) {
    return (
      <div className="animate-pulse p-6 bg-soft-cream rounded-lg shadow-sm">
        <div className="h-6 bg-ocean-mist/20 rounded w-1/3 mb-6"></div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="mb-4">
            <div className="h-5 bg-ocean-mist/20 rounded w-1/4 mb-3"></div>
            <div className="space-y-2">
              {[1, 2, 3].map((j) => (
                <div key={j} className="h-4 bg-ocean-mist/20 rounded w-3/4"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 rounded-lg border border-red-200">
        <p className="text-red-600 font-medium">Unable to load filters: {error}</p>
        <button 
          className="mt-3 px-4 py-2 bg-white text-teakwood-brown border border-teakwood-brown/30 rounded-md text-sm hover:bg-teakwood-brown hover:text-white transition-colors"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-ceylon-cream rounded-xl shadow-sm border border-ocean-mist/10 overflow-hidden">
      {/* Tags Section */}
      {tags && tags.length > 0 && (
        <div className="p-4 border-b border-ocean-mist/10">
          <h3 className="text-teakwood-brown font-semibold mb-3 text-sm uppercase tracking-wide">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                !selectedTag
                  ? "bg-ceyora-clay text-white shadow-sm"
                  : "bg-soft-cream text-ocean-mist hover:bg-soft-cream/80 hover:text-teakwood-brown"
              }`}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTag === tag
                    ? "bg-ceyora-clay text-white shadow-sm"
                    : "bg-soft-cream text-ocean-mist hover:bg-soft-cream/80 hover:text-teakwood-brown"
                }`}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Active Filters Section */}
      {activeFilters.length > 0 && (
        <div className="p-4 border-b border-ocean-mist/10">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-teakwood-brown font-semibold text-sm uppercase tracking-wide">Active Filters</h3>
            <button
              onClick={handleClearAll}
              className="text-xs text-ceyora-clay hover:text-teakwood-brown transition-colors"
            >
              Clear All
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter, index) => (
              <div 
                key={index} 
                className="bg-soft-cream rounded-full pl-3 pr-1 py-1 flex items-center text-sm text-teakwood-brown"
              >
                <span className="mr-1 capitalize">{filter.type === 'price' ? '' : `${filter.type}: `}{filter.value}</span>
                <button
                  onClick={() => removeFilter(filter.type, filter.value)}
                  className="w-5 h-5 rounded-full bg-ocean-mist/10 hover:bg-ceyora-clay hover:text-white flex items-center justify-center transition-colors"
                  aria-label={`Remove ${filter.type} filter`}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Category Section */}
      <div className="border-b border-ocean-mist/10">
        <button
          onClick={() => toggleSection("category")}
          className="flex items-center justify-between w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-ceyora-clay/30 focus:bg-soft-cream transition-colors"
          aria-expanded={expandedSections.category}
        >
          <h3 className="text-teakwood-brown font-semibold text-sm uppercase tracking-wide">Categories</h3>
          <svg
            className={`w-5 h-5 text-ocean-mist transition-transform duration-200 ${
              expandedSections.category ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        {expandedSections.category && (
          <div className="p-4 pt-2 flex flex-wrap gap-2 max-h-60 overflow-y-auto scrollbar-thin">
            {filterOptions?.categories?.map((category) => (
              <button
                key={category.id}
                onClick={() => toggleCategoryFilter(category.name)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedFilters?.category?.includes(category.name)
                    ? "bg-ceyora-clay text-white shadow-sm"
                    : "bg-soft-cream text-ocean-mist hover:bg-soft-cream/80 hover:text-teakwood-brown"
                }`}
                aria-pressed={selectedFilters?.category?.includes(category.name) || false}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Location Section */}
      <div className="border-b border-ocean-mist/10">
        <button
          onClick={() => toggleSection("location")}
          className="flex items-center justify-between w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-ceyora-clay/30 focus:bg-soft-cream transition-colors"
          aria-expanded={expandedSections.location}
        >
          <h3 className="text-teakwood-brown font-semibold text-sm uppercase tracking-wide">Locations</h3>
          <svg
            className={`w-5 h-5 text-ocean-mist transition-transform duration-200 ${
              expandedSections.location ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        {expandedSections.location && (
          <div className="p-4 pt-2 flex flex-wrap gap-2 max-h-60 overflow-y-auto scrollbar-thin">
            {filterOptions?.locations?.map((location) => (
              <button
                key={location.id}
                onClick={() => toggleLocationFilter(location.name)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedFilters?.location?.includes(location.name)
                    ? "bg-ceyora-clay text-white shadow-sm"
                    : "bg-soft-cream text-ocean-mist hover:bg-soft-cream/80 hover:text-teakwood-brown"
                }`}
                aria-pressed={selectedFilters?.location?.includes(location.name) || false}
              >
                {location.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Duration Section - Already using pills, just keeping as is */}
      <div className="border-b border-ocean-mist/10">
        <button
          onClick={() => toggleSection("duration")}
          className="flex items-center justify-between w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-ceyora-clay/30 focus:bg-soft-cream transition-colors"
          aria-expanded={expandedSections.duration}
        >
          <h3 className="text-teakwood-brown font-semibold text-sm uppercase tracking-wide">Duration</h3>
          <svg
            className={`w-5 h-5 text-ocean-mist transition-transform duration-200 ${
              expandedSections.duration ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        {expandedSections.duration && (
          <div className="p-4 pt-2 flex flex-wrap gap-2">
            {filterOptions?.durations?.map((duration) => (
              <button
                key={duration.id}
                onClick={() => toggleDurationFilter(duration.name)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedFilters?.duration?.includes(duration.name)
                    ? "bg-palm-green text-white shadow-sm"
                    : "bg-soft-cream text-ocean-mist hover:bg-soft-cream/80 hover:text-teakwood-brown"
                }`}
                aria-pressed={selectedFilters?.duration?.includes(duration.name) || false}
              >
                {duration.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Section - Updated with USD and improved styling */}
      <div className="border-b border-ocean-mist/10">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-ceyora-clay/30 focus:bg-soft-cream transition-colors"
          aria-expanded={expandedSections.price}
        >
          <h3 className="text-teakwood-brown font-semibold text-sm uppercase tracking-wide">Price Range</h3>
          <svg
            className={`w-5 h-5 text-ocean-mist transition-transform duration-200 ${
              expandedSections.price ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        {expandedSections.price && (
          <div className="p-4 pt-0">
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-3 flex items-center text-teakwood-brown/50">$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={inputFocused.min || priceInputs.min !== 0 ? priceInputs.min : ''}
                  onChange={(e) => handlePriceInputChange("min", e.target.value)}
                  onFocus={() => handlePriceInputFocus("min")}
                  onBlur={() => handlePriceInputBlur("min")}
                  className="w-full pl-8 pr-3 py-2 border border-ocean-mist/30 rounded-md focus:ring-2 focus:ring-ceyora-clay/30 focus:border-ceyora-clay/30 text-teakwood-brown bg-white"
                  placeholder="0"
                  aria-label="Minimum price"
                />
              </div>
              <div className="text-ocean-mist">to</div>
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-3 flex items-center text-teakwood-brown/50">$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={inputFocused.max || priceInputs.max !== 50000 ? priceInputs.max : ''}
                  onChange={(e) => handlePriceInputChange("max", e.target.value)}
                  onFocus={() => handlePriceInputFocus("max")}
                  onBlur={() => handlePriceInputBlur("max")}
                  className="w-full pl-8 pr-3 py-2 border border-ocean-mist/30 rounded-md focus:ring-2 focus:ring-ceyora-clay/30 focus:border-ceyora-clay/30 text-teakwood-brown bg-white"
                  placeholder="50000"
                  aria-label="Maximum price"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Rating Section - Standardized */}
      <div>
        <button
          onClick={() => toggleSection("rating")}
          className="flex items-center justify-between w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-ceyora-clay/30 focus:bg-soft-cream transition-colors"
          aria-expanded={expandedSections.rating}
        >
          <h3 className="text-teakwood-brown font-semibold text-sm uppercase tracking-wide">Rating</h3>
          <svg
            className={`w-5 h-5 text-ocean-mist transition-transform duration-200 ${
              expandedSections.rating ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        {expandedSections.rating && (
          <div className="p-4 pt-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                onClick={() => handleRatingChange(rating)}
                className={`w-full mb-2 py-2 px-3 flex items-center justify-between rounded-md transition-all duration-200 ${
                  selectedFilters?.rating === rating
                    ? "bg-sun-gold/10 border border-sun-gold/30"
                    : "bg-white border border-ocean-mist/20 hover:border-ocean-mist/40"
                }`}
                aria-pressed={selectedFilters?.rating === rating}
              >
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < rating ? "text-sun-gold" : "text-ocean-mist/30"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-teakwood-brown">
                    {rating} {rating === 1 ? "Star" : "Stars"} & Up
                  </span>
                </div>
                
                {selectedFilters?.rating === rating && (
                  <svg 
                    className="w-5 h-5 text-sun-gold" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Reset Filters Button */}
      <div className="p-4 border-t border-ocean-mist/10">
        <button
          onClick={handleClearAll}
          className="w-full py-2 px-4 bg-soft-cream text-teakwood-brown border border-ocean-mist/30 rounded-md text-sm font-medium hover:bg-teakwood-brown hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teakwood-brown/30"
        >
          Reset All Filters
        </button>
      </div>
    </div>
  );
};

export default JourneyFilter;
