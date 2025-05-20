// Simulated backend fetch using mock data
import { journeys } from "../../../mock/journeys";

/**
 * Fetch a single journey by ID (mock version).
 * Replace with real fetch/axios call when backend is live.
 */
export const fetchJourneyById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const journey = journeys.find((j) => j.id === parseInt(id));
      journey ? resolve(journey) : reject(new Error("Journey not found"));
    }, 500);
  });

  //PRODUCTION BACKEND VERSION:
  /*
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/journeys/${id}`);
    if (!response.ok) throw new Error("Failed to fetch journey");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
  */
};
