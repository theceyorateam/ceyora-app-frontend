// BookingSteps.jsx
import React from "react";

const BookingSteps = ({ currentStep }) => {
  const steps = [
    { number: 1, label: "Date & Travelers" },
    { number: 2, label: "Your Details" },
    { number: 3, label: "Review & Confirm" },
    { number: 4, label: "Payment" }
  ];

  return (
    <div className="mb-6">
      {/* Desktop view - full steps with labels */}
      <div className="hidden sm:flex items-center justify-between w-full mb-2">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div 
              className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-medium mb-1
                ${currentStep >= step.number 
                  ? "bg-ceyora-clay text-white" 
                  : "bg-gray-200 text-gray-500"}`}
            >
              {currentStep > step.number ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                step.number
              )}
            </div>
            <span className={`text-xs ${currentStep >= step.number ? "text-teakwood-brown font-medium" : "text-ocean-mist"}`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>

      {/* Progress bar connecting the steps - desktop */}
      <div className="hidden sm:block w-full bg-gray-200 h-1 relative">
        <div 
          className="absolute top-0 left-0 bg-ceyora-clay h-1 transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>

      {/* Mobile view - compact with current step indicator */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="flex items-center justify-center h-7 w-7 rounded-full bg-ceyora-clay text-white text-xs font-medium mr-2">
              {currentStep}
            </div>
            <span className="text-sm font-medium text-teakwood-brown">
              {steps[currentStep - 1].label}
            </span>
          </div>
          <span className="text-xs text-ocean-mist">
            Step {currentStep} of {steps.length}
          </span>
        </div>
        
        {/* Mobile progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div 
            className="bg-ceyora-clay h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BookingSteps;
