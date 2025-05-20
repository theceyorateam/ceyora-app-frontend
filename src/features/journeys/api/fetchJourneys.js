import { journeys } from "../../../mock/journeys";

export const fetchJourneys = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(journeys), 500); // simulate delay
  });
};
