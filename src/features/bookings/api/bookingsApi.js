// src/features/bookings/api/bookingsApi.js
import { bookingFormData, bookingConfirmationDetails } from './mockData';

const SIMULATED_DELAY = 800; // ms

export const bookingsApi = {
  getBookingFormOptions: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(bookingFormData);
      }, SIMULATED_DELAY);
    });
  },

  submitBooking: (bookingDetails) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate validation
        if (!bookingDetails.personalDetails || !bookingDetails.personalDetails.email) {
          reject(new Error('Invalid booking details'));
          return;
        }

        const bookingReference = `CEY-${Math.floor(10000 + Math.random() * 90000)}`;
        resolve({
          success: true,
          bookingReference,
          confirmation: {
            ...bookingConfirmationDetails.sampleConfirmation,
            bookingReference,
            journeyTitle: bookingDetails.journey?.title || 'Selected Journey',
            customerName: bookingDetails.personalDetails
              ? `${bookingDetails.personalDetails.name}`
              : 'Valued Customer',
          }
        });
      }, SIMULATED_DELAY);
    });
  },

  getAvailableDates: (journeyId) => {
    return new Promise((resolve) => {
      // Simulate fetching available dates for a journey
      setTimeout(() => {
        // Mock data: available dates for next 30 days
        const availableDates = [];
        const today = new Date();
        
        for (let i = 1; i <= 30; i++) {
          const date = new Date(today);
          date.setDate(today.getDate() + i);
          
          // Randomly exclude some dates to simulate unavailability
          if (Math.random() > 0.3) {
            availableDates.push(date.toISOString().split('T')[0]);
          }
        }
        
        resolve(availableDates);
      }, SIMULATED_DELAY);
    });
  },
  
  getAvailableTimes: (journeyId, date) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(bookingFormData.availableTimes);
      }, SIMULATED_DELAY);
    });
  }
};
