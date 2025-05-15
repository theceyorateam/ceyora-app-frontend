// src/features/journeys/components/HostPreview.jsx
import React from "react";

const HostPreview = ({ host }) => {
  if (!host) return null;
  
  return (
    <div className="flex items-center">
      <img 
        src={host.imageUrl} 
        alt={`Host ${host.name}`} 
        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-soft-cream"
        loading="lazy"
      />
      <div>
        <h4 className="font-medium text-teakwood-brown">Hosted by {host.name}</h4>
        <p className="text-sm text-ocean-mist line-clamp-1">{host.bio}</p>
        <div className="flex gap-2 mt-1">
          {host.languages.map(language => (
            <span key={language} className="text-xs text-ocean-mist bg-soft-cream px-2 py-0.5 rounded-full">
              {language}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostPreview;
