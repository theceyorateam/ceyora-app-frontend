// src/features/journeys/hooks/useFilterOptions.js
import { useState, useEffect } from "react";
import { journeysApi } from "../api/journeysApi";

const useFilterOptions = () => {
  const [filterOptions, setFilterOptions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFilterOptions = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await journeysApi.getFilterOptions();
        setFilterOptions(data);
      } catch (err) {
        console.error("Error fetching filter options:", err);
        setError("Could not load filter options. Please try again later.");
        setFilterOptions(null);
      } finally {
        setLoading(false);
      }
    };

    loadFilterOptions();
  }, []);

  return { filterOptions, loading, error };
};

export default useFilterOptions;

