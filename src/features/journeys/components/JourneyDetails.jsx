const JourneyDetails = ({ journey, onBook }) => {
  return (
    <>
      {/* Hero Image */}
      <div className="rounded-xl overflow-hidden shadow-sm">
        <img
          src={journey.imageUrl}
          alt={journey.title}
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-extrabold">{journey.title}</h1>

      {/* Summary */}
      <p className="text-ocean-mist text-base">{journey.summary}</p>

      {/* Location & Duration */}
      <p className="text-sun-gold font-medium text-sm flex items-center gap-2">
        📍 {journey.location} · ⏱ {journey.duration}
      </p>

      {/* Price */}
      <div className="text-lg font-semibold">
        LKR {journey.priceLKR.toLocaleString()}{" "}
        <span className="text-ocean-mist text-sm font-normal">
          (USD ${journey.priceUSD})
        </span>
      </div>

      {/* Rating */}
      <p className="text-sun-gold text-sm font-medium">
        ★ {journey.rating} · {journey.reviews} reviews
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-2">
        {journey.tags.map((tag) => (
          <span
            key={tag}
            className="bg-ceylon-cream text-xs text-teakwood-brown px-3 py-1 rounded-full border border-sun-gold"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="pt-4">
        <button
          onClick={onBook}
          className="w-full bg-palm-green hover:bg-sun-gold text-white font-semibold text-sm py-3 rounded-full transition"
        >
          Book Now
        </button>
      </div>
    </>
  );
};

export default JourneyDetails;
