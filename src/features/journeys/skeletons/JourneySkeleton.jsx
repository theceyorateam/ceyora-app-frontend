// src/features/journeys/skeletons/JourneySkeleton.jsx
import React from "react";

const JourneySkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full animate-pulse">
      <div className="relative pb-[56.25%] bg-gray-200"></div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="h-6 bg-gray-200 rounded-lg w-3/4 mb-4"></div>
        
        <div className="space-y-2 mb-4 flex-grow">
          <div className="h-4 bg-gray-200 rounded-lg w-full"></div>
          <div className="h-4 bg-gray-200 rounded-lg w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded-lg w-4/6"></div>
        </div>
        
        <div className="flex justify-between mb-3 pt-3 border-t border-gray-100">
          <div className="h-4 bg-gray-200 rounded-lg w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded-lg w-1/4"></div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="h-8 bg-gray-200 rounded-lg w-1/3"></div>
          <div className="h-6 bg-gray-200 rounded-lg w-1/4"></div>
        </div>
        
        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-gray-200 rounded-full w-16"></div>
          <div className="h-6 bg-gray-200 rounded-full w-20"></div>
          <div className="h-6 bg-gray-200 rounded-full w-14"></div>
        </div>
      </div>
      
      <div className="px-5 pb-5">
        <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
      </div>
    </div>
  );
};

export default JourneySkeleton;
