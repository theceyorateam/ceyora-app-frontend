import React from "react";

const BookingSummary = ({
  journey,
  selectedPackage,
  formData,  // Changed from individual props to formData object
  priceTotal,
  serviceFee,
  grandTotal,
  currentStep
}) => {
  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Not selected';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-soft-cream p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-teakwood-brown mb-4">Booking Summary</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-teakwood-brown">Experience</h4>
          <p className="text-ocean-mist">{journey.title}</p>
          
          {/* Journey image if available */}
          {journey.imageUrl && (
            <img 
              src={journey.imageUrl} 
              alt={journey.title} 
              className="w-full h-32 object-cover rounded-md mt-2"
            />
          )}
          
          {selectedPackage && selectedPackage.name && selectedPackage.name !== journey.title && (
            <>
              <h4 className="text-sm font-medium text-teakwood-brown mt-2">Package</h4>
              <p className="text-ocean-mist">{selectedPackage.name}</p>
              
              {/* Package image if available and different from journey */}
              {selectedPackage.imageUrl && selectedPackage.imageUrl !== journey.imageUrl && (
                <img 
                  src={selectedPackage.imageUrl} 
                  alt={selectedPackage.name} 
                  className="w-full h-32 object-cover rounded-md mt-2"
                />
              )}
            </>
          )}
        </div>
        
        <div className="pt-2 border-t border-gray-200">
          <h4 className="text-sm font-medium text-teakwood-brown">Date & Time</h4>
          <p className="text-ocean-mist">
            {formData?.date ? formatDate(formData.date) : 'Not selected'} 
            {formData?.time ? ` at ${formData.time}` : ''}
          </p>
        </div>
        
        <div className="pt-2 border-t border-gray-200">
          <h4 className="text-sm font-medium text-teakwood-brown">Travelers</h4>
          <p className="text-ocean-mist">
            {formData?.travelers || 1} {formData?.travelers === 1 ? 'person' : 'people'}
          </p>
        </div>
        
        {currentStep >= 2 && formData?.name && (
          <div className="pt-2 border-t border-gray-200">
            <h4 className="text-sm font-medium text-teakwood-brown">Contact</h4>
            <p className="text-ocean-mist">{formData.name}</p>
            {formData.email && <p className="text-ocean-mist text-sm">{formData.email}</p>}
            {formData.phone && <p className="text-ocean-mist text-sm">{formData.phone}</p>}
          </div>
        )}
        
        <div className="pt-3 border-t border-gray-200">
          <div className="flex justify-between mb-1">
            <span className="text-sm text-teakwood-brown">Experience Price</span>
            <span className="text-sm text-teakwood-brown">LKR {priceTotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-sm text-teakwood-brown">Service Fee</span>
            <span className="text-sm text-teakwood-brown">LKR {serviceFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-gray-200 mt-2">
            <span className="font-medium text-teakwood-brown">Total</span>
            <span className="font-medium text-teakwood-brown">LKR {grandTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
