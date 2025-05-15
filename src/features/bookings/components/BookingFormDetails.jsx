const BookingFormDetails = ({
  journey,
  formData,
  onChange,
  onTravelerChange,
  onSubmit,
  serviceFee,
  priceTotal,
  grandTotal,
  onBack,
}) => {
  return (
    <>
      {/* Journey Summary */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">{journey.title}</h1>
        <p className="text-sun-gold text-sm">
          📍 {journey.location} · ⏱ {journey.duration}
        </p>
        <p className="font-semibold">
          LKR {journey.priceLKR.toLocaleString()} (USD ${journey.priceUSD})
        </p>
      </div>

      {/* Booking Form */}
      <form
        onSubmit={onSubmit}
        className="bg-white p-5 rounded-xl shadow space-y-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={onChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Time</label>
          <select
            name="time"
            value={formData.time}
            onChange={onChange}
            required
            className="w-full border rounded p-2"
          >
            <option value="">Select a time</option>
            <option value="09:00">09:00 AM</option>
            <option value="14:00">02:00 PM</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Travelers</label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onTravelerChange(-1)}
              className="px-3 py-1 bg-sun-gold text-white rounded-full"
            >
              -
            </button>
            <span className="font-semibold">{formData.travelers}</span>
            <button
              type="button"
              onClick={() => onTravelerChange(1)}
              className="px-3 py-1 bg-palm-green text-white rounded-full"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Special Notes (Optional)</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={onChange}
            rows={3}
            className="w-full border rounded p-2"
            placeholder="Allergies, accessibility needs, etc."
          />
        </div>

        {/* Price Breakdown */}
        <div className="bg-[#fff9f2] p-4 rounded-xl border">
          <p className="text-sm">Subtotal: LKR {priceTotal.toLocaleString()}</p>
          <p className="text-sm">Service Fee: LKR {serviceFee.toLocaleString()}</p>
          <p className="mt-2 font-bold text-lg">Total: LKR {grandTotal.toLocaleString()}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-palm-green hover:bg-sun-gold text-white py-3 rounded-full text-sm font-semibold"
        >
          Continue to Payment
        </button>

        <button
          type="button"
          onClick={onBack}
          className="mt-2 text-sm text-blue-600 underline"
        >
          ← Back to Journey
        </button>
      </form>
    </>
  );
};

export default BookingFormDetails;
