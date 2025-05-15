import React from "react";

const BookingSummary = ({
  journey,
  selectedPackage,
  travelers,
  date,
  time,
  priceTotal,
  serviceFee,
  grandTotal,
  currentStep
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={journey.imageUrl} 
          alt={journey.title}
          className="w-full h-full object-cover"
        />
        {selectedPackage && selectedPackage.name && selectedPackage.name !== journey.title && (
          <div className="absolute top-3 left-3 bg-sun-gold text-teakwood-brown text-xs font-bold px-3 py-1 rounded-full">
            {selectedPackage.name}
          </div>
        )}
      </div>
      <div className="p-5">
        <h2 className="font-bold text-xl text-teakwood-brown mb-2">{journey.title}</h2>
        <div className="flex items-center text-sm text-ocean-mist mb-4">
          <span className="flex items-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-palm-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {journey.location}
          </span>
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-palm-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {selectedPackage?.duration || journey.duration}
          </span>
        </div>
        {(date || time || travelers > 1) && (
          <div className="border-t border-gray-100 pt-4 mb-4">
            <h3 className="font-medium text-teakwood-brown mb-3">Booking Summary</h3>
            <div className="space-y-2 text-sm">
              {date && (
                <div className="flex justify-between">
                  <span className="text-ocean-mist">Date:</span>
                  <span className="text-teakwood-brown">{date}</span>
                </div>
              )}
              {time && (
                <div className="flex justify-between">
                  <span className="text-ocean-mist">Time:</span>
                  <span className="text-teakwood-brown">{time}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-ocean-mist">Travelers:</span>
                <span className="text-teakwood-brown">{travelers}</span>
              </div>
            </div>
          </div>
        )}
        <div className="border-t border-gray-100 pt-4">
          <h3 className="font-medium text-teakwood-brown mb-3">Price Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-ocean-mist">
                {selectedPackage?.name || "Experience"} × {travelers}
              </span>
              <span className="text-teakwood-brown">LKR {priceTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ocean-mist">Service Fee</span>
              <span className="text-teakwood-brown">LKR {serviceFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-medium pt-2 border-t border-gray-100">
              <span className="text-teakwood-brown">Total</span>
              <span className="text-ceyora-clay">LKR {grandTotal.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
