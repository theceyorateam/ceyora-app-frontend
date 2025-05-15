import { useEffect, useState } from "react";
//import Snowfall from "./Snowfall";
import Lanterns from "./Lanterns";
//import "./Snowfall.css";
import "./Lanterns.css";

// Utility function to check date range
const isWithinDateRange = (start, end) => {
  const today = new Date();
  const from = new Date(start);
  const to = new Date(end);
  return today >= from && today <= to;
};

const SeasonalAnimation = () => {
  const [season, setSeason] = useState(null);

  useEffect(() => {
    // Reduce motion for accessibility
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Auto-trigger based on current date
    if (isWithinDateRange("2025-12-20", "2025-12-26")) {
      setSeason("christmas");
    } else if (isWithinDateRange("2025-05-01", "2025-05-25")) {
      setSeason("vesak");
    }
  }, []);

  if (!season) return null;

  return (
    <div className={`seasonal-wrapper ${season}`}>
      
      {season === "vesak" && <Lanterns />}
    </div>
  );
};

export default SeasonalAnimation;
