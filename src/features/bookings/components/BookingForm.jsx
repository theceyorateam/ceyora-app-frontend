import React, { useState } from "react";
import BookingSteps from "./BookingSteps";
import BookingFormDetails from "./BookingFormDetails";
import PaymentStep from "./PaymentStep";
import { validateBookingForm } from "../utils/bookingUtils";
import useAvailableDates from "../hooks/useAvailableDates";

const BookingForm = ({
  journey,
  selectedPackage,
  formData,
  currentStep,
  handleChange,
  handleTravelerChange,
  nextStep,
  prevStep,
  isSubmitting,
  onSubmit,
  formOptions
}) => {
  const [errors, setErrors] = useState({});
  const { 
    availableDates, 
    availableTimes, 
    isLoading, 
    fetchAvailableTimes 
  } = useAvailableDates(journey?.id);

  // Handle date selection and fetch available times
  const handleDateChange = async (e) => {
    const { name, value } = e.target;
    handleChange(e);
    
    if (name === 'date' && value) {
      await fetchAvailableTimes(value);
    }
  };

  // Validate form before proceeding to next step
  const validateStep = () => {
    const stepErrors = validateBookingForm(formData, currentStep);
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  // Handle next step button click
  const handleNextStep = (e) => {
    e.preventDefault();
    if (validateStep()) {
      nextStep();
      window.scrollTo(0, 0);
    }
  };

  // Handle back button click
  const handlePrevStep = () => {
    prevStep();
    window.scrollTo(0, 0);
  };

  // Handle final submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
      try {
        await onSubmit();
      } catch (error) {
        console.error("Booking submission failed:", error);
      }
    }
  };

  // Render different form steps based on currentStep
  const renderStep = () => {
    switch (currentStep) {
      case 1: // Date & Travelers
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-teakwood-brown mb-4">Select Date & Travelers</h3>
            
            <form onSubmit={handleNextStep} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-teakwood-brown mb-1">
                  Select Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleDateChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-ceyora-clay focus:border-ceyora-clay ${
                    errors.date ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                
                {isLoading && (
                  <div className="mt-2 text-sm text-ocean-mist">Loading available times...</div>
                )}
              </div>
              
              {formData.date && availableTimes.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-teakwood-brown mb-1">
                    Select Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-ceyora-clay focus:border-ceyora-clay ${
                      errors.time ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  >
                    <option value="">Select a time</option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-teakwood-brown mb-1">
                  Number of Travelers
                </label>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => handleTravelerChange(-1)}
                    className="p-2 border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200"
                    disabled={formData.travelers <= 1}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <div className="px-4 py-2 border-t border-b border-gray-300 text-center min-w-[60px]">
                    {formData.travelers}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleTravelerChange(1)}
                    className="p-2 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200"
                    disabled={formData.travelers >= 10}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-ocean-mist mt-1">Maximum 10 travelers per booking</p>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 bg-ceyora-clay text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        );
        
      case 2: // Your Details
        return (
          <BookingFormDetails
            journey={journey}
            formData={formData}
            onChange={handleChange}
            onSubmit={handleNextStep}
            onBack={handlePrevStep}
            errors={errors}
          />
        );
        
      case 3: // Review & Confirm
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-teakwood-brown mb-4">Review Your Booking</h3>
            
            <div className="space-y-6">
              <div className="bg-soft-cream p-4 rounded-md">
                <h4 className="font-medium text-teakwood-brown mb-2">Experience Details</h4>
                <p className="text-ocean-mist">{journey.title}</p>
                <p className="text-sm text-ocean-mist mt-1">📍 {journey.location} · ⏱ {journey.duration}</p>
              </div>
              
              <div className="bg-soft-cream p-4 rounded-md">
                <h4 className="font-medium text-teakwood-brown mb-2">Booking Details</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-ocean-mist">Date:</div>
                  <div className="text-teakwood-brown">{new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  
                  <div className="text-ocean-mist">Time:</div>
                  <div className="text-teakwood-brown">{formData.time}</div>
                  
                  <div className="text-ocean-mist">Travelers:</div>
                  <div className="text-teakwood-brown">{formData.travelers}</div>
                </div>
              </div>
              
              <div className="bg-soft-cream p-4 rounded-md">
                <h4 className="font-medium text-teakwood-brown mb-2">Contact Information</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-ocean-mist">Name:</div>
                  <div className="text-teakwood-brown">{formData.personalDetails?.name}</div>
                  
                  <div className="text-ocean-mist">Email:</div>
                  <div className="text-teakwood-brown">{formData.personalDetails?.email}</div>
                  
                  <div className="text-ocean-mist">Phone:</div>
                  <div className="text-teakwood-brown">{formData.personalDetails?.phone}</div>
                  
                  {formData.notes && (
                    <>
                      <div className="text-ocean-mist">Special Requests:</div>
                      <div className="text-teakwood-brown">{formData.notes}</div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-6 py-2 bg-gray-200 text-teakwood-brown rounded-md hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-2 bg-ceyora-clay text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        );
        
      case 4: // Payment
        return (
          <PaymentStep
            formData={formData}
            onChange={handleChange}
            isSubmitting={isSubmitting}
            onBack={handlePrevStep}
            onSubmit={handleSubmit}
            paymentOptions={formOptions?.paymentOptions || []}
            errors={errors}
          />
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <BookingSteps currentStep={currentStep} />
      {renderStep()}
    </div>
  );
};

export default BookingForm;
