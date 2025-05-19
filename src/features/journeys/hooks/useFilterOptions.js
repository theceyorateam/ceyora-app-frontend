import { useState, useEffect } from "react";
import { journeysApi } from "../api/journeysApi";

const useFilterOptions = () => {
  const [filterOptions, setFilterOptions] = useState({
    categories: [],
    locations: [],
    durations: [],
    ratings: [],
    priceRanges: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFilterOptions = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch all filter options in parallel from separate endpoints
        const [categories, locations, durations, ratings, priceRanges] = await Promise.all([
          journeysApi.getCategories(),
          journeysApi.getLocations(),
          journeysApi.getDurations(),
          journeysApi.getRatings(),
          journeysApi.getPriceRanges()
        ]);
        
        // Combine all filter options
        setFilterOptions({
          categories,
          locations,
          durations,
          ratings,
          priceRanges
        });
      } catch (err) {
        console.error("Error fetching filter options:", err);
        setError("Could not load filter options. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadFilterOptions();
  }, []);

  return { filterOptions, loading, error };
};

export default useFilterOptions;