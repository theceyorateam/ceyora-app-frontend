// src/features/journeys/hooks/useJourneyDetails.js
import { useState, useEffect } from "react";
import { journeysApi } from "../api/journeysApi";

const useJourneyDetails = (journeyId) => {
  const [journey, setJourney] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!journeyId) {
      setLoading(false);
      setError("No journey ID provided.");
      return;
    }

    const getJourneyData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await journeysApi.fetchJourneyById(journeyId);
        setJourney(data);
      } catch (err) {
        console.error("Error fetching journey details:", err);
        setError("Could not load journey details. Please try again later.");
        setJourney(null);
      } finally {
        setLoading(false);
      }
    };

    getJourneyData();
  }, [journeyId]);

  return { journey, loading, error };
};

export default useJourneyDetails;

