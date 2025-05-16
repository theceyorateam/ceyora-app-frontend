// src/features/journeys/pages/JourneyDetailsPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ImageCarousel from "../components/ImageCarousel";
import PackageCard from "../components/PackageCard";
import HostPreview from "../components/HostPreview";
import useJourneyDetails from "../hooks/useJourneyDetails";
import useReviews from "../hooks/useReviews";
import ReviewCard from "../components/ReviewCard";

const JourneyDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { journey, loading, error } = useJourneyDetails(id);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const packagesRef = useRef(null);
  const reviewsRef = useRef(null);

  const { reviews: fetchedReviews, loading: reviewsLoading, error: reviewsError } = useReviews(journey?.id);
  const [allReviews, setAllReviews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [newReview, setNewReview] = useState({
    userName: "",
    rating: 5,
    comment: "",
  });

  useEffect(() => {
    if (fetchedReviews.length) {
      const sorted = [...fetchedReviews].sort((a, b) => new Date(b.date) - new Date(a.date));
      setAllReviews(sorted);
    }
  }, [fetchedReviews]);

  useEffect(() => {
    if (journey?.packages?.length) {
      setSelectedPackage(journey.packages[0]);
    } else if (journey) {
      setSelectedPackage({
        id: "default",
        name: "Standard Experience",
        priceLKR: journey.priceLKR,
        priceUSD: journey.priceUSD,
      });
    }
  }, [journey]);

  const handleBackClick = () => navigate(-1);
  const scrollToPackages = () => packagesRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToReviews = () => reviewsRef.current?.scrollIntoView({ behavior: "smooth" });

  const handleBookClick = () => {
    if (!journey || !selectedPackage) return;
    navigate("/book", { state: { journey, selectedPackage } });
  };

const handleReviewSubmit = (e) => {
  e.preventDefault();

  const reviewWithId = {
    ...newReview,
    id: Date.now().toString(),
    journeyId: parseInt(id), // from useParams
    userId: "u" + Date.now(), // or however you're generating user IDs
    date: new Date().toISOString(),
    userImage: null,
    reply: null,
  };

  console.log(JSON.stringify(reviewWithId, null, 2));

  setAllReviews([reviewWithId, ...allReviews]);
  setNewReview({ userName: "", rating: 5, comment: "" });
};


  const visibleReviews = allReviews.slice(0, visibleCount);

  if (loading) {
    return (
      <div className="bg-ceylon-cream min-h-screen">
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <div className="animate-pulse">
            <div className="rounded-xl bg-gray-200 h-64 md:h-80 w-full mb-6"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || reviewsError) {
    return (
      <div className="bg-ceylon-cream min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-teakwood-brown mb-2">Something went wrong</h2>
            <p className="text-ocean-mist mb-6">{error || reviewsError}</p>
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
            <p className="text-ocean-mist mb-6">The journey you're looking for doesn't exist or has been removed.</p>
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

  return (
    <div className="bg-ceylon-cream min-h-screen pb-24">
      <div className="sticky top-0 z-30 bg-ceylon-cream bg-opacity-90 backdrop-blur-sm py-3 px-4 border-b border-gray-200">
        <div className="container mx-auto max-w-4xl flex justify-between items-center">
          <button onClick={handleBackClick} className="text-teakwood-brown hover:text-ceyora-clay">← Back</button>
          <button onClick={scrollToPackages} className="text-sm font-medium text-ceyora-clay hover:text-palm-green">View Packages →</button>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-4 pb-8 max-w-4xl">
        <div className="mb-6">
          <ImageCarousel images={journey.images || [journey.imageUrl]} title={journey.title} />
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-between flex-wrap gap-2 mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-teakwood-brown">{journey.title}</h1>
              <div className="flex items-center bg-soft-cream px-3 py-1 rounded-lg">
                <span className="text-sun-gold mr-1">★</span>
                <span className="font-medium text-teakwood-brown">{journey.rating}</span>
                <span
                  className="text-ocean-mist text-sm ml-1 cursor-pointer hover:underline"
                  onClick={scrollToReviews}
                >
                  ({fetchedReviews.length} reviews)
                </span>
              </div>
            </div>
            {journey.subtitle && <h2 className="text-lg text-ocean-mist mb-3">{journey.subtitle}</h2>}
            <p className="text-sm text-ocean-mist mb-4">{journey.location} • {journey.duration}</p>
            <div className="flex flex-wrap gap-2">
              {journey.tags.map(tag => (
                <span key={tag} className="bg-palm-green bg-opacity-10 text-palm-green text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
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
              {(journey.description || journey.summary).split("\n\n").map((p, i) => (
                <p key={i} className="leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 scroll-mt-20" ref={packagesRef}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-teakwood-brown">Available Packages</h3>
            <span className="text-sm text-ocean-mist">{journey.packages?.length || 1} options</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(journey.packages?.length > 0 ? journey.packages : [{
              id: "default",
              name: "Standard Experience",
              priceLKR: journey.priceLKR,
              priceUSD: journey.priceUSD,
              description: journey.summary,
              duration: journey.duration,
              inclusions: ["Guided experience", "Local host"],
              maxGuests: 6,
            }]).map(pkg => (
              <PackageCard
                key={pkg.id}
                package={pkg}
                isSelected={selectedPackage?.id === pkg.id}
                onSelect={() => setSelectedPackage(pkg)}
              />
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div ref={reviewsRef} className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-semibold text-teakwood-brown mb-4">User Reviews</h3>
            {reviewsLoading && <p className="text-ocean-mist">Loading reviews...</p>}
            {!reviewsLoading && allReviews.length === 0 && <p className="text-ocean-mist">No reviews yet.</p>}
            <AnimatePresence>
              {visibleReviews.map((review) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <ReviewCard
                    userName={review.userName}
                    userImage={review.userImage}
                    rating={review.rating}
                    comment={review.comment}
                    date={review.date}
                    reply={review.reply}
                    onReply={(replyText) => {
                      const updated = allReviews.map((r) =>
                        r.id === review.id ? { ...r, reply: replyText } : r
                      );
                    console.log(JSON.stringify(updated, null, 2));
                      
                      setAllReviews(updated);
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
            {visibleCount < allReviews.length && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 2)}
                  className="text-ceyora-clay hover:underline text-sm font-medium"
                >
                  Load More Reviews
                </button>
              </div>
            )}
          </div>

          {/* Submit Review */}
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-semibold text-teakwood-brown mb-4">Leave a Review</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-3">
              <input
                type="text"
                required
                value={newReview.userName}
                placeholder="Your Name"
                onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
                className="w-full p-2 border rounded"
              />
              <textarea
                required
                placeholder="Write your review..."
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                className="w-full p-2 border rounded"
              />
              <div className="flex items-center gap-2">
                <label className="text-sm text-teakwood-brown font-medium">Your Rating:</label>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className={`text-2xl ${newReview.rating >= star ? "text-sun-gold" : "text-gray-300"} hover:text-sun-gold transition-colors`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <button type="submit" className="bg-ceyora-clay text-white px-4 py-2 rounded hover:bg-palm-green transition">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
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
              >
                Book This Package
              </button>
            </>
          ) : (
            <button
              onClick={scrollToPackages}
              className="w-full bg-ceyora-clay hover:bg-palm-green text-white font-medium py-3 rounded-lg transition-colors"
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