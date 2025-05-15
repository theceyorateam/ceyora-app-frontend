import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import BookingSummary from "../components/BookingSummary";
import BookingSuccess from "../components/BookingSuccess";
import { SERVICE_FEE } from "../../../constants/bookingConstants"; // Corrected path

const BookingFormPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const journey = state?.journey;
  const selectedPackage = state?.selectedPackage || journey;

  // Four steps: 1-Date, 2-Details, 3-Review, 4-Payment
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    travelers: 1,
    name: "",
    email: "",
    phone: "",
    notes: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const pricePerPerson = selectedPackage?.priceLKR || journey?.priceLKR || 0;
  const priceTotal = pricePerPerson * formData.travelers;
  const grandTotal = priceTotal + SERVICE_FEE;

  // Form field change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Traveler count stepper handler
  const handleTravelerChange = (delta) => {
    setFormData((prev) => ({
      ...prev,
      travelers: Math.max(1, Math.min(10, prev.travelers + delta)),
    }));
  };

  // Step navigation
  const handleNextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const handlePrevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  // Final booking submission (simulate payment processing)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setBookingRef("CEY-" + Math.floor(10000 + Math.random() * 90000));
      setShowSuccess(true);
      setIsSubmitting(false);
    }, 1200);
  };

  // Success modal close handler
  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate("/my-bookings"); // This route might not exist yet, consider navigating to home or journeys
  };

  // Handle missing journey data
  if (!journey) {
    return (
      <div className="bg-ceylon-cream min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-teakwood-brown mb-2">Journey Not Found</h2>
            <p className="text-ocean-mist mb-6">
              The journey you\'re trying to book doesn\'t exist or has been removed.
            </p>
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-ceyora-clay text-white rounded-lg hover:bg-palm-green transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ceylon-cream min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-ocean-mist hover:text-teakwood-brown mb-6 transition-colors"
          aria-label="Go back to journey details"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Journey
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Booking Form */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h1 className="text-2xl font-bold text-teakwood-brown mb-6">Book Your Experience</h1>
              <BookingForm
                currentStep={currentStep}
                formData={formData}
                onChange={handleChange}
                onTravelerChange={handleTravelerChange}
                isSubmitting={isSubmitting}
                onSubmit={handleSubmit}
                onNext={handleNextStep}
                onBack={handlePrevStep}
              />
            </div>
          </div>
          {/* Booking Summary */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <div className="lg:sticky lg:top-8">
              <BookingSummary
                journey={journey}
                selectedPackage={selectedPackage}
                travelers={formData.travelers}
                date={formData.date}
                time={formData.time}
                priceTotal={priceTotal}
                serviceFee={SERVICE_FEE}
                grandTotal={grandTotal}
                currentStep={currentStep}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Success Modal */}
      <BookingSuccess
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        journey={journey}
        selectedPackage={selectedPackage}
        bookingDetails={{
          ...formData,
          totalPrice: grandTotal,
          bookingReference: bookingRef,
          bookingDate: new Date().toISOString(),
        }}
      />
    </div>
  );
};

export default BookingFormPage;

