import React from "react";

const BookingSteps = ({ currentStep }) => {
  const steps = [
    { number: 1, label: "Date & Travelers" },
    { number: 2, label: "Your Details" },
    { number: 3, label: "Review & Confirm" },
    { number: 4, label: "Payment" }
  ];

  return (
    <div className="hidden md:block mb-8">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= step.number 
                    ? "bg-ceyora-clay text-white" 
                    : "bg-gray-200 text-gray-500"
                }`}
                aria-current={currentStep === step.number ? "step" : undefined}
              >
                {step.number}
              </div>
              <span className="text-xs mt-1 text-center">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div 
                className={`h-1 flex-1 mx-2 ${
                  currentStep > step.number ? "bg-ceyora-clay" : "bg-gray-200"
                }`}
                aria-hidden="true"
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BookingSteps;
