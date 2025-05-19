import { journeys, reviews, mockCategories, mockLocations, mockDurations, mockRatings, mockPriceRanges } from './mockData';

const SIMULATED_DELAY = 500; // ms

export const journeysApi = {
  /**
   * Fetches journeys, simulating backend filtering and sorting via query parameters.
   * @param {object} queryParams - An object representing query parameters.
   *   Example: { 
   *     category: 'Cultural', 
   *     minPrice: 10, 
   *     maxPrice: 50, 
   *     duration: 'Half-day', // or an array of durations
   *     rating: 4, 
   *     location: 'Galle', // or an array of locations
   *     sortBy: 'price', 
   *     sortOrder: 'asc' 
   *   }
   * @returns {Promise<Array>} A promise that resolves to an array of journeys.
   */
  fetchJourneys: (queryParams = {}) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filteredJourneys = [...journeys];

        // Simulate backend filtering
        if (queryParams.category && queryParams.category !== "All") {
          filteredJourneys = filteredJourneys.filter(journey => 
            journey.tags.map(t => t.toLowerCase()).includes(queryParams.category.toLowerCase())
          );
        }

        if (queryParams.minPrice !== undefined) {
          filteredJourneys = filteredJourneys.filter(journey => journey.priceUSD >= parseFloat(queryParams.minPrice));
        }

        if (queryParams.maxPrice !== undefined) {
          filteredJourneys = filteredJourneys.filter(journey => journey.priceUSD <= parseFloat(queryParams.maxPrice));
        }
        
        if (queryParams.duration && queryParams.duration.length > 0) {
          const durationsToFilter = Array.isArray(queryParams.duration) ? queryParams.duration.map(d => d.toLowerCase()) : [queryParams.duration.toLowerCase()];
          filteredJourneys = filteredJourneys.filter(journey => 
            durationsToFilter.some(filterDur => journey.duration.toLowerCase().includes(filterDur))
          );
        }

        if (queryParams.rating !== undefined && queryParams.rating > 0) {
          filteredJourneys = filteredJourneys.filter(journey => journey.rating >= parseFloat(queryParams.rating));
        }

        if (queryParams.location && queryParams.location.length > 0) {
          const locationsToFilter = Array.isArray(queryParams.location) ? queryParams.location.map(l => l.toLowerCase()) : [queryParams.location.toLowerCase()];
          filteredJourneys = filteredJourneys.filter(journey => 
            locationsToFilter.some(loc => journey.location.toLowerCase().includes(loc))
          );
        }

        // Simulate backend sorting
        if (queryParams.sortBy) {
          filteredJourneys.sort((a, b) => {
            let valA, valB;
            switch (queryParams.sortBy) {
              case 'price':
                valA = a.priceUSD;
                valB = b.priceUSD;
                break;
              case 'rating':
                valA = a.rating;
                valB = b.rating;
                if (valA === valB) return (b.reviews || 0) - (a.reviews || 0);
                break;
              case 'duration':
                const getDurationValue = (durationStr) => {
                  const duration = String(durationStr).toLowerCase();
                  if (duration.includes("hour")) return parseFloat(duration) || 0;
                  if (duration.includes("half-day")) return 4; 
                  if (duration.includes("full-day")) return 8;
                  return 100; 
                };
                valA = getDurationValue(a.duration);
                valB = getDurationValue(b.duration);
                break;
              default: 
                const getScore = (j) => (j.rating * 5) + (j.reviews / 10);
                valA = getScore(a);
                valB = getScore(b);
                return queryParams.sortOrder === 'asc' ? valA - valB : valB - valA;
            }

            if (queryParams.sortOrder === 'asc') {
              return valA - valB;
            } else { 
              return valB - valA;
            }
          });
        }

        resolve(filteredJourneys);
      }, SIMULATED_DELAY);
    });
  },

  fetchJourneyById: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const journeyId = parseInt(id, 10);
        const journey = journeys.find(j => j.id === journeyId);
        if (journey) {
          resolve(journey);
        } else {
          reject(new Error('Journey not found'));
        }
      }, SIMULATED_DELAY);
    });
  },

  fetchReviewsByJourneyId: (journeyId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const jId = parseInt(journeyId, 10);
        const journeyReviews = reviews.filter(review => review.journeyId === jId);
        resolve(journeyReviews);
      }, SIMULATED_DELAY);
    });
  },

  /**
   * Fetches categories from a dedicated backend endpoint
   * @returns {Promise<Array>} A promise that resolves to an array of categories
   */
  getCategories: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockCategories);
      }, SIMULATED_DELAY);
    });
  },

  /**
   * Fetches locations from a dedicated backend endpoint
   * @returns {Promise<Array>} A promise that resolves to an array of locations
   */
  getLocations: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockLocations);
      }, SIMULATED_DELAY);
    });
  },

  /**
   * Fetches durations from a dedicated backend endpoint
   * @returns {Promise<Array>} A promise that resolves to an array of durations
   */
  getDurations: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockDurations);
      }, SIMULATED_DELAY);
    });
  },

  /**
   * Fetches ratings from a dedicated backend endpoint
   * @returns {Promise<Array>} A promise that resolves to an array of ratings
   */
  getRatings: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockRatings);
      }, SIMULATED_DELAY);
    });
  },

  /**
   * Fetches price ranges from a dedicated backend endpoint
   * @returns {Promise<Array>} A promise that resolves to an array of price ranges
   */
  getPriceRanges: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockPriceRanges);
      }, SIMULATED_DELAY);
    });
  }
};