/**
 * @file useJourneys.js
 * @description Custom hook to fetch, filter, and sort journey data by preparing query parameters for a backend API.
 */
import { useEffect, useState, useCallback } from "react";
import { journeysApi } from "../api/journeysApi";

/**
 * Custom hook for managing journey data.
 * It prepares filter and sort options as query parameters to be sent to an API.
 * 
 * @returns {object} An object containing:
 *  - `journeys` (Array): The list of journeys fetched from the API based on current filters and sort order.
 *  - `filteredJourneys` (Array): Alias for `journeys`.
 *  - `selectedTag` (string): The currently selected category tag for filtering.
 *  - `setSelectedTag` (function): Setter function for `selectedTag`.
 *  - `selectedFilters` (object): An object containing the current filter values (priceRange, duration, rating, location).
 *  - `setSelectedFilters` (function): Setter function for `selectedFilters`.
 *  - `sortBy` (string): The current sorting criteria (e.g., "price-low", "rating").
 *  - `setSortBy` (function): Setter function for `sortBy`.
 *  - `loading` (boolean): Indicates if journey data is currently being loaded.
 *  - `error` (string): An error message if fetching fails, otherwise an empty string.
 */
const useJourneys = () => {
  const [journeys, setJourneys] = useState([]);
  const [selectedTag, setSelectedTag] = useState("All");
  const [sortBy, setSortBy] = useState("recommended"); // e.g., "recommended", "price-low", "price-high", "rating", "duration-short", "duration-long"
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: [0, 50000], // LKR. For backend, send as minPrice & maxPrice.
    duration: [], // Array of duration strings like "Half-day", "3 hours"
    rating: 0, // Minimum rating
    location: [] // Array of location strings
  });

  const fetchAndSetJourneys = useCallback(async () => {
    setLoading(true);
    setError("");

    // Prepare query parameters for the backend API
    const queryParams = {};

    if (selectedTag && selectedTag !== "All") {
      queryParams.category = selectedTag;
    }

    if (selectedFilters.priceRange) {
      // Assuming backend expects minPrice and maxPrice based on the primary currency (e.g., USD or LKR)
      // The mock API currently uses priceUSD for min/maxPrice params, but filters on priceLKR in useJourneys. Let's align this.
      // For now, let's assume the API will handle the currency conversion or expect a specific one.
      // We'll send LKR values as minPriceLKR and maxPriceLKR for clarity, or adjust if API expects USD.
      // The mock API was updated to use minPrice and maxPrice (assuming USD based on its internal filtering).
      // Let's stick to priceRange for now and let the API decide how to interpret it, or send specific min/max.
      // For backend: queryParams.minPrice = selectedFilters.priceRange[0];
      // For backend: queryParams.maxPrice = selectedFilters.priceRange[1];
      // The mock API expects minPrice and maxPrice (USD). Let's use the LKR range for now and adjust if needed.
      queryParams.minPrice = selectedFilters.priceRange[0]; // This should ideally be converted to USD or API should handle LKR
      queryParams.maxPrice = selectedFilters.priceRange[1]; // This should ideally be converted to USD or API should handle LKR
    }

    if (selectedFilters.duration && selectedFilters.duration.length > 0) {
      queryParams.duration = selectedFilters.duration; // Send as an array or comma-separated string, depending on backend
    }

    if (selectedFilters.rating && selectedFilters.rating > 0) {
      queryParams.rating = selectedFilters.rating;
    }

    if (selectedFilters.location && selectedFilters.location.length > 0) {
      queryParams.location = selectedFilters.location; // Send as an array or comma-separated string
    }

    // Handle sorting parameters
    if (sortBy) {
      switch (sortBy) {
        case "price-low":
          queryParams.sortBy = "price";
          queryParams.sortOrder = "asc";
          break;
        case "price-high":
          queryParams.sortBy = "price";
          queryParams.sortOrder = "desc";
          break;
        case "rating":
          queryParams.sortBy = "rating";
          queryParams.sortOrder = "desc"; // Higher rating first
          break;
        case "duration-short":
          queryParams.sortBy = "duration";
          queryParams.sortOrder = "asc";
          break;
        case "duration-long":
          queryParams.sortBy = "duration";
          queryParams.sortOrder = "desc";
          break;
        case "recommended":
        default:
          queryParams.sortBy = "recommended"; // Backend might have its own logic for "recommended"
          queryParams.sortOrder = "desc"; // Typically descending for recommendations
          break;
      }
    }
    
    /**
     * TODO: When connecting to a real backend:
     * 1. Replace `journeysApi.fetchJourneys(queryParams)` with your actual API call, e.g., using fetch or axios.
     *    const response = await fetch(`/api/journeys?${new URLSearchParams(queryParams).toString()}`);
     *    const data = await response.json();
     * 2. Ensure the queryParams structure matches what your backend API expects.
     *    For array parameters like duration or location, check if the backend expects them as:
     *    - Comma-separated strings (e.g., location=Galle,Matara)
     *    - Multiple query parameters with the same name (e.g., location=Galle&location=Matara)
     *    - JSON stringified array
     *    Adjust the queryParams construction accordingly.
     * 3. The `journeysApi.js` file will be replaced by your actual API service layer.
     * 4. Error handling might need to be adjusted based on your API's error responses.
     */
    try {
      const data = await journeysApi.fetchJourneys(queryParams);
      setJourneys(data || []);
    } catch (err) {
      setError("Failed to load journeys. Please try again later.");
      console.error("Error loading journeys:", err);
      setJourneys([]);
    } finally {
      setLoading(false);
    }
  }, [selectedTag, selectedFilters, sortBy]); // Dependencies for re-fetching

  // useEffect to fetch journeys when filters or sort order change
  useEffect(() => {
    fetchAndSetJourneys();
  }, [fetchAndSetJourneys]);

  return { 
    journeys,
    filteredJourneys: journeys, // Keep for compatibility, now directly from API
    selectedTag, 
    setSelectedTag,
    selectedFilters,
    setSelectedFilters,
    sortBy,
    setSortBy,
    loading, 
    error 
  };
};

export default useJourneys;

