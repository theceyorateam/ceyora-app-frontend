import React from "react";

const BookingFormDetails = ({
  journey,
  formData,
  onChange,
  onSubmit,
  onBack,
  errors = {}
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6 pb-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-teakwood-brown mb-2">Journey Details</h3>
        <div className="text-sm text-ocean-mist">
          <p>📍 {journey.location} · ⏱ {journey.duration}</p>
          <p className="font-medium text-teakwood-brown mt-1">
            LKR {journey.priceLKR.toLocaleString()} (USD ${journey.priceUSD})
          </p>
        </div>
      </div>
      
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-teakwood-brown mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="personalDetails.name"
            value={formData.personalDetails?.name || ''}
            onChange={onChange}
            className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-ceyora-clay focus:border-ceyora-clay ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
            required
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teakwood-brown mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="personalDetails.email"
            value={formData.personalDetails?.email || ''}
            onChange={onChange}
            className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-ceyora-clay focus:border-ceyora-clay ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your email address"
            required
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teakwood-brown mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="personalDetails.phone"
            value={formData.personalDetails?.phone || ''}
            onChange={onChange}
            className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-ceyora-clay focus:border-ceyora-clay ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your phone number"
            required
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teakwood-brown mb-1">
            Special Requests (Optional)
          </label>
          <textarea
            name="notes"
            value={formData.notes || ''}
            onChange={onChange}
            rows="3"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-ceyora-clay focus:border-ceyora-clay"
            placeholder="Any special requirements or requests?"
          ></textarea>
        </div>
        
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 bg-gray-200 text-teakwood-brown rounded-md hover:bg-gray-300 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-ceyora-clay text-white rounded-md hover:bg-opacity-90 transition-colors"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingFormDetails;
