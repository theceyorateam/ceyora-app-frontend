import { useState } from 'react';
import { bookingsApi } from '../api/bookingsApi';

const useBookingSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [bookingResult, setBookingResult] = useState(null);

  const submitBooking = async (bookingData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const result = await bookingsApi.submitBooking(bookingData);
      setBookingResult(result);
      setIsSubmitting(false);
      return result;
    } catch (err) {
      setError(err.message || 'Failed to submit booking');
      setIsSubmitting(false);
      throw err;
    }
  };

  const resetSubmission = () => {
    setBookingResult(null);
    setError(null);
  };

  return {
    submitBooking,
    resetSubmission,
    isSubmitting,
    error,
    bookingResult
  };
};

export default useBookingSubmission;
