import React from "react";

const PaymentStep = ({ formData, onChange, isSubmitting, onPay }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-teakwood-brown">Payment Details</h2>
    <div className="space-y-4">
      <div>
        <label htmlFor="cardName" className="block mb-2 text-sm font-medium text-teakwood-brown">
          Name on Card
        </label>
        <input
          type="text"
          id="cardName"
          name="cardName"
          value={formData.cardName || ""}
          onChange={onChange}
          className="bg-gray-50 border border-gray-300 text-teakwood-brown text-sm rounded-lg focus:ring-ceyora-clay focus:border-ceyora-clay block w-full p-2.5"
          placeholder="Full name as on card"
          required
        />
      </div>
      <div>
        <label htmlFor="cardNumber" className="block mb-2 text-sm font-medium text-teakwood-brown">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber || ""}
          onChange={onChange}
          maxLength={19}
          className="bg-gray-50 border border-gray-300 text-teakwood-brown text-sm rounded-lg focus:ring-ceyora-clay focus:border-ceyora-clay block w-full p-2.5"
          placeholder="1234 5678 9012 3456"
          required
        />
      </div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <label htmlFor="expiry" className="block mb-2 text-sm font-medium text-teakwood-brown">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiry"
            name="expiry"
            value={formData.expiry || ""}
            onChange={onChange}
            maxLength={5}
            className="bg-gray-50 border border-gray-300 text-teakwood-brown text-sm rounded-lg focus:ring-ceyora-clay focus:border-ceyora-clay block w-full p-2.5"
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="cvv" className="block mb-2 text-sm font-medium text-teakwood-brown">
            CVV
          </label>
          <input
            type="password"
            id="cvv"
            name="cvv"
            value={formData.cvv || ""}
            onChange={onChange}
            maxLength={4}
            className="bg-gray-50 border border-gray-300 text-teakwood-brown text-sm rounded-lg focus:ring-ceyora-clay focus:border-ceyora-clay block w-full p-2.5"
            placeholder="123"
            required
          />
        </div>
      </div>
    </div>
    <div className="flex justify-between">
      <button
        type="button"
        onClick={onPay}
        disabled={isSubmitting}
        className="px-5 py-2.5 bg-ceyora-clay text-white rounded-lg hover:bg-palm-green transition-colors disabled:opacity-70"
      >
        {isSubmitting ? "Processing..." : "Pay & Book"}
      </button>
    </div>
  </div>
);

export default PaymentStep;
