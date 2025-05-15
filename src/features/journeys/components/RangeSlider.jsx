// src/features/journeys/components/RangeSlider.jsx
import React, { useState, useEffect } from 'react';

const RangeSlider = ({ min, max, step, values, onChange, formatValue }) => {
  const [localValues, setLocalValues] = useState(values);
  
  // Update local values when props change
  useEffect(() => {
    setLocalValues(values);
  }, [values]);
  
  const handleChange = (index, value) => {
    const newValues = [...localValues];
    newValues[index] = value;
    
    // Ensure min <= max
    if (index === 0 && value > newValues[1]) {
      newValues[0] = newValues[1];
    } else if (index === 1 && value < newValues[0]) {
      newValues[1] = newValues[0];
    }
    
    setLocalValues(newValues);
  };
  
  const handleMouseUp = () => {
    onChange(localValues);
  };
  
  // Calculate percentage for positioning
  const getPercent = (value) => {
    return ((value - min) / (max - min)) * 100;
  };
  
  const minPercent = getPercent(localValues[0]);
  const maxPercent = getPercent(localValues[1]);
  
  return (
    <div className="relative py-4">
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="absolute h-2 bg-ceyora-clay rounded-full"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`
          }}
        />
      </div>
      
      {/* Min thumb */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={localValues[0]}
        onChange={(e) => handleChange(0, Number(e.target.value))}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        className="absolute w-full h-2 opacity-0 cursor-pointer"
      />
      
      {/* Max thumb */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={localValues[1]}
        onChange={(e) => handleChange(1, Number(e.target.value))}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        className="absolute w-full h-2 opacity-0 cursor-pointer"
      />
      
      {/* Min thumb display */}
      <div
        className="absolute w-5 h-5 bg-white border-2 border-ceyora-clay rounded-full -mt-1.5 transform -translate-x-1/2 shadow-md"
        style={{ left: `${minPercent}%` }}
      />
      
      {/* Max thumb display */}
      <div
        className="absolute w-5 h-5 bg-white border-2 border-ceyora-clay rounded-full -mt-1.5 transform -translate-x-1/2 shadow-md"
        style={{ left: `${maxPercent}%` }}
      />
    </div>
  );
};

export default RangeSlider;
