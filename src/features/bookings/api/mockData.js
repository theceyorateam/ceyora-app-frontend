export const bookingFormData = {
  // This could include things like predefined options for certain fields,
  // or default values if they are considered business data rather than UI state.
  // For now, we'll assume most booking form structure is UI concern,
  // but if there were, e.g., specific service add-ons, they'd go here.
  paymentOptions: [
    { id: "cc", name: "Credit Card" },
    { id: "paypal", name: "PayPal" },
    // Add other payment options if they were hardcoded
  ],
  // If there were predefined booking packages or options specific to the booking process itself (not journey packages)
  // they would be listed here.
  // Example: travelInsurancePackages: [
  //   { id: 'basic_insurance', name: 'Basic Travel Insurance', priceUSD: 10 },
  //   { id: 'premium_insurance', name: 'Premium Travel Insurance', priceUSD: 25 },
  // ]
};

export const bookingConfirmationDetails = {
  // Example of what might be shown on a success page, if parts of it were hardcoded
  // This is more likely to be dynamically generated, but for mock purposes:
  sampleConfirmation: {
    bookingId: "BK123456789",
    message: "Your booking is confirmed! An email with all the details has been sent to your address.",
    supportContact: "support@ceyora.com",
  }
};

