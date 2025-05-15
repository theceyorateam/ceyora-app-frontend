import React from "react";
import "./Lanterns.css";

const Lanterns = () => (
  <div className="lantern-container">
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={i} className="lantern" style={{ left: `${i * 10 + 5}%` }} />
    ))}
  </div>
);

export default Lanterns;
