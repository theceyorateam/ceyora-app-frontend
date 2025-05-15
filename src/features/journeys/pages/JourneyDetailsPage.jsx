// src/features/journeys/pages/JourneyDetailsPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Removed unused motion, AnimatePresence
import ImageCarousel from "../components/ImageCarousel";
import PackageCard from "../components/PackageCard";
import HostPreview from "../components/HostPreview";
import useJourneyDetails from "../hooks/useJourneyDetails"; // Import the new hook

const JourneyDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { journey, loading, error } = useJourneyDetails(id); // Use the hook
  const [selectedPackage, setSelectedPackage] = useState(null);
  const packagesRef = useRef(null);

  // Effect to set selectedPackage when journey data is loaded or changes
  useEffect(() => {
    if (journey && journey.packages && journey.packages.length > 0) {
      setSelectedPackage(journey.packages[0]);
    } else if (journey) {
      // Handle cases where there are no packages, set a default based on journey itself
      setSelectedPackage({
        id: "default",
        name: "Standard Experience",
        priceLKR: journey.priceLKR,
        priceUSD: journey.priceUSD,
        // Add other necessary fields if your PackageCard expects them
      });
    }
  }, [journey]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const scrollToPackages = () => {
    packagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookClick = () => {
    if (!journey || !selectedPackage) {
      // Handle case where journey or selectedPackage is not yet loaded or available
      // Optionally, show a message or disable the button
      console.warn("Journey or selected package not available for booking.");
      return;
    }
    navigate("/book", {
      state: {
        journey,
        selectedPackage,
      },
    });
  };

  if (loading) {
    return (
      <div className="bg-ceylon-cream min-h-screen">
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <div className="animate-pulse">
            <div className="rounded-xl bg-gray-200 h-64 md:h-80 w-full mb-6"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
            <div className="flex gap-2 mb-4">
              <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-200 rounded-lg h-64"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-ceylon-cream min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-teakwood-brown mb-2">Something went wrong</h2>
            <p className="text-ocean-mist mb-6">{error}</p>
            <button 
              onClick={handleBackClick}
              className="px-4 py-2 bg-ceyora-clay text-white rounded-lg hover:bg-palm-green transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!journey) {
    return (
      <div className="bg-ceylon-cream min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-teakwood-brown mb-2">Journey Not Found</h2>
            <p className="text-ocean-mist mb-6">The journey you\\'re looking for doesn\\'t exist or has been removed.</p>
            <button 
              onClick={handleBackClick}
              className="px-4 py-2 bg-ceyora-clay text-white rounded-lg hover:bg-palm-green transition-colors"
              aria-label="Go back to journeys page"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ceylon-cream min-h-screen pb-24">
      <div className="sticky top-0 z-30 bg-ceylon-cream bg-opacity-90 backdrop-blur-sm py-3 px-4 border-b border-gray-200">
        <div className="container mx-auto max-w-4xl flex justify-between items-center">
          <button 
            onClick={handleBackClick}
            className="flex items-center text-teakwood-brown hover:text-ceyora-clay transition-colors"
            aria-label="Go back to journeys page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
          <button 
            onClick={scrollToPackages}
            className="text-sm font-medium text-ceyora-clay hover:text-palm-green transition-colors flex items-center"
            aria-label="View available packages"
          >
            View Packages
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-4 pb-8 max-w-4xl">
        <div className="mb-6" aria-label="Journey photos">
          <ImageCarousel images={journey.images || [journey.imageUrl]} title={journey.title} />
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-teakwood-brown">{journey.title}</h1>
              <div className="flex items-center bg-soft-cream px-3 py-1 rounded-lg">
                <span className="text-sun-gold mr-1" aria-hidden="true">★</span>
                <span className="font-medium text-teakwood-brown">{journey.rating}</span>
                <span className="text-ocean-mist text-sm ml-1">({journey.reviews} reviews)</span>
              </div>
            </div>
            {journey.subtitle && (
              <h2 className="text-lg text-ocean-mist mb-3">{journey.subtitle}</h2>
            )}
            <div className="flex flex-wrap items-center gap-3 text-sm text-ocean-mist mb-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-palm-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{journey.location}</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-palm-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{journey.duration}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {journey.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-palm-green bg-opacity-10 text-palm-green text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {journey.host && (
            <div className="p-6 border-b border-gray-100">
              <HostPreview host={journey.host} />
            </div>
          )}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-teakwood-brown mb-3">About This Experience</h3>
            <div className="text-ocean-mist space-y-4">
              {journey.description ? (
                journey.description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">{paragraph}</p>
                ))
              ) : (
                <p className="leading-relaxed">{journey.summary}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mb-6 scroll-mt-20" ref={packagesRef}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-teakwood-brown">Available Packages</h3>
            <span className="text-sm text-ocean-mist">{journey.packages?.length || (journey ? 1 : 0)} options</span>
          </div>
          <p className="text-ocean-mist mb-6">Choose the package that best suits your preferences and group size.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {journey.packages && journey.packages.length > 0 ? (
              journey.packages.map((pkg) => (
                <PackageCard 
                  key={pkg.id} 
                  package={pkg} 
                  isSelected={selectedPackage?.id === pkg.id}
                  onSelect={() => setSelectedPackage(pkg)}
                />
              ))
            ) : journey ? (
              <PackageCard 
                package={{
                  id: "default",
                  name: "Standard Experience",
                  priceLKR: journey.priceLKR,
                  priceUSD: journey.priceUSD,
                  description: journey.summary,
                  duration: journey.duration,
                  inclusions: ["Guided experience", "Local host"],
                  maxGuests: 6
                }}
                isSelected={selectedPackage?.id === "default"}
                onSelect={() => setSelectedPackage({
                  id: "default",
                  name: "Standard Experience",
                  priceLKR: journey.priceLKR,
                  priceUSD: journey.priceUSD
                })}
              />
            ) : null}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-20">
        <div className="container mx-auto max-w-4xl flex items-center justify-between">
          {selectedPackage ? (
            <>
              <div>
                <p className="font-semibold text-teakwood-brown">{selectedPackage.name}</p>
                <p className="text-ceyora-clay font-bold">
                  LKR {selectedPackage.priceLKR?.toLocaleString() || "N/A"}
                  <span className="text-xs text-ocean-mist font-normal ml-1">
                    (USD ${selectedPackage.priceUSD || "N/A"})
                  </span>
                </p>
              </div>
              <button 
                onClick={handleBookClick}
                className="bg-ceyora-clay hover:bg-palm-green text-white font-medium py-3 px-6 rounded-lg transition-colors"
                aria-label={`Book ${selectedPackage?.name} package`}
                disabled={!journey || !selectedPackage} // Disable if data not ready
              >
                Book This Package
              </button>
            </>
          ) : (
            <button 
              onClick={scrollToPackages}
              className="w-full bg-ceyora-clay hover:bg-palm-green text-white font-medium py-3 rounded-lg transition-colors"
              aria-label="Select a package"
            >
              Select a Package
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JourneyDetailsPage;

