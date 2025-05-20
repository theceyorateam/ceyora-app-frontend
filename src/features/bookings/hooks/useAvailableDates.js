import { useState, useEffect } from 'react';
import { bookingsApi } from '../api/bookingsApi';

const useAvailableDates = (journeyId) => {
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Load available dates for a journey
  useEffect(() => {
    if (!journeyId) return;
    
    const fetchAvailableDates = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const dates = await bookingsApi.getAvailableDates(journeyId);
        setAvailableDates(dates);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load available dates');
        setIsLoading(false);
        console.error(err);
      }
    };
    
    fetchAvailableDates();
  }, [journeyId]);
  
  // Load available times for a selected date
  const fetchAvailableTimes = async (date) => {
    if (!journeyId || !date) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const times = await bookingsApi.getAvailableTimes(journeyId, date);
      setAvailableTimes(times);
      setIsLoading(false);
      return times;
    } catch (err) {
      setError('Failed to load available times');
      setIsLoading(false);
      console.error(err);
      return [];
    }
  };
  
  return {
    availableDates,
    availableTimes,
    isLoading,
    error,
    fetchAvailableTimes
  };
};

export default useAvailableDates;
