// src/features/bookings/api/mockData.js
export const bookingFormData = {
  paymentOptions: [
    { id: "credit_card", name: "Credit Card" },
    { id: "paypal", name: "PayPal" }
  ],
  availableTimes: [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM"
  ]
};

export const bookingConfirmationDetails = {
  sampleConfirmation: {
    message: "Your booking is confirmed! An email with all the details has been sent to your address.",
    supportContact: "support@ceyora.com",
  }
};
