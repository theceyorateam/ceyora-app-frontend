import React from "react";
import BookingSteps from "./BookingSteps";

// Inline PaymentStep for maintainability
const PaymentStep = ({ formData, onChange, isSubmitting, onBack, onSubmit }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-teakwood-brown">Payment Details</h2>
    <div className="space-y-4">
      <div>
        <label htmlFor="cardName" className="block mb-2 text-sm font-medium text-teakwood-brown">
          Name on Card
        </label>
        <input
          type="text"
          id="cardName"
          name="cardName"
          value={formData.cardName || ""}
          onChange={onChange}
          className="bg-gray-50 border border-gray-300 text-teakwood-brown text-sm rounded-lg focus:ring-ceyora-clay focus:border-ceyora-clay block w-full p-2.5"
          placeholder="Full name as on card"
          required
        />
      </div>
      <div>
        <label htmlFor="cardNumber" className="block mb-2 text-sm font-medium text-teakwood-brown">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber || ""}
          onChange={onChange}
          maxLength={19}
          className="bg-gray-50 border border-gray-300 text-teakwood-brown text-sm rounded-lg focus:ring-ceyora-clay focus:border-ceyora-clay block w-full p-2.5"
          placeholder="1234 5678 9012 3456"
          required
        />
      </div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <label htmlFor="expiry" className="block mb-2 text-sm font-medium text-teakwood-brown">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiry"
            name="expiry"
            value={formData.expiry || ""}
            onChange={onChange}
            maxLength={5}
            className="bg-gray-50 border border-gray-300 text-teakwood-brown text-sm rounded-lg focus:ring-ceyora-clay focus:border-ceyora-clay block w-full p-2.5"
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="cvv" className="block mb-2 text-sm font-medium text-teakwood-brown">
            CVV
          </label>
          <input
            type="password"
            id="cvv"
            name="cvv"
            value={formData.cvv || ""}
            onChange={onChange}
            maxLength={4}
            className="bg-gray-50 border border-gray-300 text-teakwood-brown text-sm rounded-lg focus:ring-ceyora-clay focus:border-ceyora-clay block w-full p-2.5"
            placeholder="123"
            required
          />
        </div>
      </div>
    </div>
    <div className="flex justify-between">
      <button
        type="button"
        onClick={onBack}
        className="px-5 py-2.5 border border-gray-300 text-teakwood-brown rounded-lg hover:bg-gray-100 transition-colors"
      >
        Back
      </button>
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-5 py-2.5 bg-ceyora-clay text-white rounded-lg hover:bg-palm-green transition-colors disabled:opacity-70"
      >
        {isSubmitting ? "Processing..." : "Pay & Book"}
      </button>
    </div>
  </div>
);

const BookingForm = ({
  currentStep,
  formData,
  onChange,
  onTravelerChange,
  isSubmitting,
  onSubmit,
  onNext,
  onBack,
}) => {
  const isDateTimeValid = formData.date && formData.time;
  const isPersonalInfoValid = formData.name && formData.email && formData.phone && formData.phone.length >= 10;

  return (
    <form onSubmit={currentStep === 4 ? onSubmit : (e) => e.preventDefault()} className="space-y-6">
      <BookingSteps currentStep={currentStep} />
      {/* Step 1: Date & Travelers */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-teakwood-brown">Select Date & Time</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="date" className="block mb-2 text-sm font-medium text-teakwood-brown">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={onChange}
                min={new Date().toISOString().split('T')[0]}
                className="bg-gray-50 border border-gray-300 text-teakwood-brown text-sm rounded-lg focus:ring-ceyora-clay focus:border-ceyora-clay block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label htmlFor="time" className="block mb-2 text-sm font-medium text-teakwood-brown">
                Time
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-teakwood-brown text-sm rounded-lg focus:ring-ceyora-clay focus:border-ceyora-clay block w-full p-2.5"
                required
              >
                <option value="">Select a time</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
              </select>
            </div>
            <div>
              <label htmlFor="travelers" className="block mb-2 text-sm font-medium text-teakwood-brown">
                Number of Travelers
              </label>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => onTravelerChange(-1)}
                  className="p-2 bg-gray-200 rounded-l-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-ceyora-clay"
                  aria-label="Decrease travelers"
                  disabled={formData.travelers <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  id="travelers"
                  name="travelers"
                  value={formData.travelers}
                  onChange={onChange}
                  min="1"
                  max="10"
                  className="w-16 text-center py-2 border-t border-b border-gray-300 bg-gray-50"
                  readOnly
                  aria-label="Number of travelers"
                />
                <button
                  type="button"
                  onClick={() => onTravelerChange(1)}
                  className="p-2 bg-gray-200 rounded-r-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-ceyora-clay"
                  aria-label="Increase travelers"
                  disabled={formData.travelers >= 10}
                >
                  +
                </button>
              </div>
              <p className="mt-1 text-xs text-ocean-mist">Maximum 10 travelers per booking</p>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onNext}
              disabled={!isDateTimeValid}
              className="px-5 py-2.5 bg-ceyora-clay text-white rounded-lg hover:bg-palm-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        </div>
      )}
      {/* Step 2: Personal Info */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-teakwood-brown">Your Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-teakwood-brown">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-teakwood-brown text-sm rounded-lg focus:ring-ceyora-clay focus:border-ceyora-clay block w-full p-2.5"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-teakwood-brown">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-teakwood-brown text-sm rounded-lg focus:ring-ceyora-clay focus:border-ceyora-clay block w-full p-2.5"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-teakwood-brown">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-teakwood-brown text-sm rounded-lg focus:ring-ceyora-clay focus:border-ceyora-clay block w-full p-2.5"
                placeholder="+94 XX XXX XXXX"
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onBack}
              className="px-5 py-2.5 border border-gray-300 text-teakwood-brown rounded-lg hover:bg-gray-100 transition-colors"
            >
              Back
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={!isPersonalInfoValid}
              className="px-5 py-2.5 bg-ceyora-clay text-white rounded-lg hover:bg-palm-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        </div>
      )}
      {/* Step 3: Review & Confirm */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-teakwood-brown">Review & Confirm</h2>
          {/* Add your review summary here, or use BookingSummary if needed */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onBack}
              className="px-5 py-2.5 border border-gray-300 text-teakwood-brown rounded-lg hover:bg-gray-100 transition-colors"
            >
              Back
            </button>
            <button
              type="button"
              onClick={onNext}
              className="px-5 py-2.5 bg-ceyora-clay text-white rounded-lg hover:bg-palm-green transition-colors"
            >
              Continue to Payment
            </button>
          </div>
        </div>
      )}
      {/* Step 4: Payment */}
      {currentStep === 4 && (
        <PaymentStep
          formData={formData}
          onChange={onChange}
          isSubmitting={isSubmitting}
          onBack={onBack}
          onSubmit={onSubmit}
        />
      )}
    </form>
  );
};

export default BookingForm;
