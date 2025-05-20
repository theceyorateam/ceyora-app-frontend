// src/features/bookings/pages/BookingFormPage.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import BookingSuccess from "../components/BookingSuccess";
import { SERVICE_FEE } from "../../../constants/bookingConstants";
import useBookingForm from "../hooks/useBookingForm";
import useBookingSubmission from "../hooks/useBookingSubmission";
import { calculateTotalPrice } from "../utils/bookingUtils";

const BookingFormPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const journey = state?.journey;
  const selectedPackage = state?.selectedPackage || journey;
  
  const [showSuccess, setShowSuccess] = useState(false);
  
  const {
    formData,
    currentStep,
    formOptions,
    error: formError,
    handleChange,
    handleTravelerChange,
    nextStep,
    prevStep
  } = useBookingForm(journey?.id);

  const {
    submitBooking,
    isSubmitting,
    error: submissionError,
    bookingResult
  } = useBookingSubmission();
  
  // Calculate prices
  const pricePerPerson = selectedPackage?.priceLKR || journey?.priceLKR || 0;
  const priceTotal = calculateTotalPrice(journey, selectedPackage, formData.travelers);
  const serviceFee = SERVICE_FEE;
  const grandTotal = priceTotal + serviceFee;
  
  // Handle booking submission
  const handleSubmitBooking = async () => {
    try {
      const bookingData = {
        journey,
        selectedPackage,
        ...formData,
        totalPrice: grandTotal,
        email: formData.personalDetails?.email
      };
      
      await submitBooking(bookingData);
      setShowSuccess(true);
      return true;
    } catch (err) {
      console.error("Failed to submit booking:", err);
      return false;
    }
  };
  
  // Handle success modal close
  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate("/my-bookings");
  };
  
  // Handle back to packages
  const handleBackToPackages = () => {
    navigate(`/journeys/${journey.id}`, { state: { journey } });
  };
  
  // Handle missing journey data
  if (!journey) {
    return (
      <div className="container mx-auto px-4 py-6 sm:py-12 text-center">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-md mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 text-ceyora-clay mx-auto mb-3 sm:mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="text-lg sm:text-xl font-semibold text-teakwood-brown mb-2">Journey Not Found</h2>
          <p className="text-ocean-mist mb-4 sm:mb-6 text-sm sm:text-base">The journey you're trying to book doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate('/journeys')}
            className="px-4 sm:px-6 py-2 bg-ceyora-clay text-white text-sm sm:text-base rounded-md hover:bg-opacity-90 transition-colors"
          >
            Browse Journeys
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-ceyora-clay bg-opacity-10 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
          <div className="flex items-center mb-2">
            {/* <button 
              onClick={handleBackToPackages}
              className="mr-2 p-1 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Back to packages"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teakwood-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button> */}
            <h1 className="text-xl sm:text-2xl font-bold text-teakwood-brown">Book Your Experience</h1>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <p className="text-sm sm:text-base font-medium text-teakwood-brown">{journey.title}</p>
              {selectedPackage && selectedPackage.name && (
                <p className="text-xs sm:text-sm text-ocean-mist">{selectedPackage.name} Package</p>
              )}
            </div>
            <div className="mt-1 sm:mt-0 text-right">
              <p className="text-xs text-ocean-mist">Total price</p>
              <p className="text-base font-bold text-teakwood-brown">{grandTotal.toLocaleString()} LKR</p>
            </div>
          </div>
        </div>
        
        {(formError || submissionError) && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 sm:p-4 mx-3 sm:mx-6 my-3 sm:my-6 text-sm sm:text-base">
            <div className="flex items-center">
              <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <p>{formError || submissionError}</p>
            </div>
          </div>
        )}
        
        <div className="p-4 sm:p-6">
          <BookingForm
            journey={journey}
            selectedPackage={selectedPackage}
            formData={formData}
            currentStep={currentStep}
            handleChange={handleChange}
            handleTravelerChange={handleTravelerChange}
            nextStep={nextStep}
            prevStep={prevStep}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmitBooking}
            formOptions={formOptions}
            priceTotal={priceTotal}
            serviceFee={serviceFee}
            grandTotal={grandTotal}
          />
        </div>
      </div>
      
      {/* Success Modal */}
      <BookingSuccess
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        journey={journey}
        selectedPackage={selectedPackage}
        bookingDetails={{
          bookingReference: bookingResult?.bookingReference,
          date: formData.date,
          time: formData.time,
          travelers: formData.travelers,
          totalPrice: grandTotal,
          email: formData.personalDetails?.email
        }}
      />
    </div>
  );
};

export default BookingFormPage;
