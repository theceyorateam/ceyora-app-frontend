// Calculate the total price based on journey, package, and travelers
export const calculateTotalPrice = (journey, selectedPackage, travelers) => {
  const basePrice = selectedPackage?.priceLKR || journey?.priceLKR || 0;
  return basePrice * travelers;
};

// Format date for display
export const formatDate = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Validate booking form data
export const validateBookingForm = (formData, step) => {
  const errors = {};
  
  switch (step) {
    case 1: // Date & Travelers
      if (!formData.date) errors.date = 'Please select a date';
      if (!formData.time) errors.time = 'Please select a time';
      break;
      
    case 2: // Personal Details
      if (!formData.personalDetails?.name) errors.name = 'Please enter your name';
      if (!formData.personalDetails?.email) errors.email = 'Please enter your email';
      if (!formData.personalDetails?.phone) errors.phone = 'Please enter your phone number';
      break;
      
    case 3: // Review & Confirm
      // No validation needed for review step
      break;
      
    case 4: // Payment
      if (formData.payment?.method === 'credit_card') {
        if (!formData.payment?.cardName) errors.cardName = 'Please enter the name on card';
        if (!formData.payment?.cardNumber) errors.cardNumber = 'Please enter your card number';
        if (!formData.payment?.expiry) errors.expiry = 'Please enter the expiry date';
        if (!formData.payment?.cvv) errors.cvv = 'Please enter the CVV code';
      }
      break;
      
    default:
      break;
  }
  
  return errors;
};
