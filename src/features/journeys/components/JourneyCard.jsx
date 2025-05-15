// src/features/journeys/components/JourneyCard.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const JourneyCard = ({ journey }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Find lowest price among packages
  const lowestPrice = journey.packages ? 
    Math.min(...journey.packages.map(pkg => pkg.priceLKR)) : 
    journey.priceLKR;
  
  // Calculate USD equivalent (assuming conversion is provided or calculated)
  const lowestPriceUSD = journey.packages ?
    Math.min(...journey.packages.map(pkg => pkg.priceUSD)) :
    journey.priceUSD;

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div 
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full transform hover:scale-[1.02] focus-within:ring-2 focus-within:ring-ceyora-clay"
      variants={item}
      whileHover={{ y: -5 }}
      aria-label={`${journey.title} experience in ${journey.location}`}
    >
      <Link 
        to={`/journey/${journey.id}`} 
        className="block flex-grow flex flex-col focus:outline-none"
        aria-label={`View details of ${journey.title}`}
      >
        {/* Card Image Section */}
        <div className="relative aspect-[16/9] overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          )}
          <img 
            src={journey.imageUrl || "https://via.placeholder.com/600x400?text=Ceyora+Journey"} 
            alt={`${journey.title} in ${journey.location}`}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white z-10"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ceyora-clay" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            )}
          </button>
          
          {/* Featured Badge */}
          {journey.featured && (
            <div className="absolute top-3 left-3 bg-sun-gold text-teakwood-brown text-xs font-bold px-3 py-1 rounded-full shadow-md">
              Featured
            </div>
          )}
          
          {/* Duration Badge */}
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-teakwood-brown text-xs font-medium px-3 py-1 rounded-full shadow-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1 text-palm-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {journey.duration}
          </div>
        </div>
        
        {/* Card Content Section */}
        <div className="p-5 flex-grow flex flex-col">
          {/* Title & Rating */}
          <div className="flex justify-between items-start mb-2 gap-2">
            <h3 className="font-bold text-lg md:text-xl text-teakwood-brown line-clamp-2 group-hover:text-ceyora-clay transition-colors">
              {journey.title}
            </h3>
            <div className="flex items-center shrink-0 bg-soft-cream px-2 py-1 rounded-lg">
              <span className="text-sun-gold mr-1">★</span>
              <span className="font-medium text-teakwood-brown">{journey.rating}</span>
              <span className="text-ocean-mist text-xs ml-1">({journey.reviews})</span>
            </div>
          </div>
          
          {/* Location */}
          <div className="flex items-center text-sm text-ocean-mist mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-palm-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">{journey.location}</span>
          </div>
          
          {/* Description */}
          <p className="text-ocean-mist text-sm mb-4 line-clamp-2 flex-grow">{journey.summary}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {journey.tags.slice(0, 3).map(tag => (
              <span 
                key={tag} 
                className="px-2.5 py-0.5 bg-palm-green bg-opacity-10 text-palm-green text-xs font-medium rounded-full border border-palm-green border-opacity-10"
              >
                {tag}
              </span>
            ))}
            {journey.tags.length > 3 && (
              <span className="px-2.5 py-0.5 bg-gray-100 text-ocean-mist text-xs font-medium rounded-full">
                +{journey.tags.length - 3}
              </span>
            )}
          </div>
          
          {/* Price Section - Updated for multiple packages */}
          <div className="bg-soft-cream px-3 py-2 rounded-lg mb-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-lg text-ceyora-clay">
                  From LKR {lowestPrice.toLocaleString()}
                </span>
                <p className="text-xs text-ocean-mist">USD ${lowestPriceUSD}</p>
              </div>
              
              {journey.packages && journey.packages.length > 1 && (
                <span className="text-xs text-palm-green font-medium bg-palm-green bg-opacity-10 px-2 py-1 rounded-full">
                  {journey.packages.length} options
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
      
      {/* CTA Button */}
      <div className="px-5 pb-5">
        <Link 
          to={`/journey/${journey.id}`}
          className="block w-full py-3 px-4 bg-ceyora-clay hover:bg-palm-green text-white font-medium text-center rounded-lg transition-colors duration-300 shadow-sm group-hover:shadow-md"
          aria-label={`View details of ${journey.title} journey`}
        >
          View Journey
        </Link>
      </div>
    </motion.div>
  );
};

export default JourneyCard;
