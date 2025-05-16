// src/features/journeys/components/JourneyFilter.jsx
import React, { useState } from "react";

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

  const handleMinMaxPriceChange = (e, type) => {
    const value = parseInt(e.target.value) || 0;
    const newRange = [...selectedFilters.priceRange];
    if (type === "min") newRange[0] = value;
    if (type === "max") newRange[1] = value;
    setSelectedFilters({
      ...selectedFilters,
      priceRange: newRange
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
            Categories
          </h4>
          <span className={`text-ocean-mist ${expandedSections.category ? 'rotate-180' : ''}`}>
            ▼
          </span>
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

      {/* Price Input Section */}
      <div className="mb-5 border-b border-gray-100 pb-4">
        <div 
          className="flex justify-between items-center cursor-pointer mb-3"
          onClick={() => toggleSection('price')}
        >
          <h4 className="font-medium text-teakwood-brown flex items-center">Price Range (USD)</h4>
          <span className={`text-ocean-mist ${expandedSections.price ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>

        {expandedSections.price && (
  <div className="flex gap-3 items-center px-2">
    <input
      type="number"
      className="w-full border p-2 rounded"
      placeholder="Min"
      value={selectedFilters.priceRange[0]}
      onChange={(e) => handleMinMaxPriceChange(e, "min")}
      onFocus={() => handleMinMaxPriceChange({ target: { value: "" } }, "min")}
    />
    <span className="text-ocean-mist">to</span>
    <input
      type="number"
      className="w-full border p-2 rounded"
      placeholder="Max"
      value={selectedFilters.priceRange[1]}
      onChange={(e) => handleMinMaxPriceChange(e, "max")}
      onFocus={() => handleMinMaxPriceChange({ target: { value: "" } }, "max")}
    />
  </div>
)}

      </div>

      {/* Duration Section */}
      <div className="mb-5 border-b border-gray-100 pb-4">
        <div 
          className="flex justify-between items-center cursor-pointer mb-3"
          onClick={() => toggleSection('duration')}
        >
          <h4 className="font-medium text-teakwood-brown flex items-center">Duration</h4>
          <span className={`text-ocean-mist ${expandedSections.duration ? 'rotate-180' : ''}`}>
            ▼
          </span>
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
          <h4 className="font-medium text-teakwood-brown flex items-center">Rating</h4>
          <span className={`text-ocean-mist ${expandedSections.rating ? 'rotate-180' : ''}`}>
            ▼
          </span>
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
                {rating === 0 ? "Any rating" : `${rating}+ stars`}
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
          <h4 className="font-medium text-teakwood-brown flex items-center">Location</h4>
          <span className={`text-ocean-mist ${expandedSections.location ? 'rotate-180' : ''}`}>
            ▼
          </span>
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