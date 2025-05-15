import { bookingFormData, bookingConfirmationDetails } from './mockData';

const SIMULATED_DELAY = 500; // ms

export const bookingsApi = {
  getBookingFormOptions: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(bookingFormData);
      }, SIMULATED_DELAY);
    });
  },

  submitBooking: (bookingDetails) => {
    // In a real API, this would send data to the backend and return a response.
    // For mock purposes, we can simulate success and return a confirmation.
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Simulated booking submission:', bookingDetails);
        // You could add some basic validation simulation here if needed
        resolve({
          success: true,
          confirmation: {
            ...bookingConfirmationDetails.sampleConfirmation,
            bookingId: `BK${Date.now().toString().slice(-8)}`, // Generate a unique-ish ID
            journeyTitle: bookingDetails.journey ? bookingDetails.journey.title : 'Selected Journey',
            customerName: bookingDetails.personalDetails ? `${bookingDetails.personalDetails.firstName} ${bookingDetails.personalDetails.lastName}` : 'Valued Customer',
          }
        });
      }, SIMULATED_DELAY + 500); // Slightly longer delay for submission
    });
  },

  // Example: fetchBookingDetails (if there was a page to view a past booking)
  // fetchBookingDetails: (bookingId) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // Logic to find a mock booking by ID if we stored them
  //       // For now, let's assume we don't have a list of past mock bookings
  //       reject(new Error('Fetching specific booking details not implemented in mock.'));
  //     }, SIMULATED_DELAY);
  //   });
  // }
};

