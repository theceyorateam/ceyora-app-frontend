// src/features/journeys/hooks/useReviews.js
import { useState, useEffect } from "react";
import { journeysApi } from "../api/journeysApi";

const useReviews = (journeyId) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!journeyId) {
      setLoading(false);
      // setError("No journey ID provided for reviews."); // Optional: set error or just return empty
      setReviews([]);
      return;
    }

    const loadReviews = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await journeysApi.fetchReviewsByJourneyId(journeyId);
        setReviews(data || []); // Ensure data is an array
      } catch (err) {
        console.error(`Error fetching reviews for journey ${journeyId}:`, err);
        setError("Could not load reviews. Please try again later.");
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, [journeyId]);

  return { reviews, loading, error };
};

export default useReviews;

