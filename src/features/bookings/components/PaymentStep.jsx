import React, { useState } from "react";

const PaymentStep = ({ 
  formData, 
  onChange, 
  isSubmitting, 
  onBack, 
  onSubmit,
  paymentOptions = [],
  errors = {}
}) => {
  const [focusedField, setFocusedField] = useState(null);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-teakwood-brown mb-4">Payment Details</h3>
      
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-teakwood-brown mb-1">
            Payment Method
          </label>
          <div className="flex space-x-4 mb-4">
            {paymentOptions.map(option => (
              <label 
                key={option.id}
                className={`flex items-center p-3 border rounded-md cursor-pointer transition-colors ${
                  formData.payment?.method === option.id 
                    ? 'border-ceyora-clay bg-ceylon-cream' 
                    : 'border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="payment.method"
                  value={option.id}
                  checked={formData.payment?.method === option.id}
                  onChange={onChange}
                  className="mr-2"
                />
                <span>{option.name}</span>
              </label>
            ))}
          </div>
        </div>
        
        {formData.payment?.method === 'credit_card' && (
          <>
            <div>
              <label className="block text-sm font-medium text-teakwood-brown mb-1">
                Name on Card
              </label>
              <input
                type="text"
                name="payment.cardName"
                value={formData.payment?.cardName || ''}
                onChange={onChange}
                onFocus={() => setFocusedField('cardName')}
                onBlur={() => setFocusedField(null)}
                className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-ceyora-clay focus:border-ceyora-clay ${
                  errors.cardName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter name as it appears on card"
                required
              />
              {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-teakwood-brown mb-1">
                Card Number
              </label>
              <input
                type="text"
                name="payment.cardNumber"
                value={formData.payment?.cardNumber || ''}
                onChange={onChange}
                onFocus={() => setFocusedField('cardNumber')}
                onBlur={() => setFocusedField(null)}
                className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-ceyora-clay focus:border-ceyora-clay ${
                  errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                required
              />
              {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
            </div>
            
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-teakwood-brown mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="payment.expiry"
                  value={formData.payment?.expiry || ''}
                  onChange={onChange}
                  onFocus={() => setFocusedField('expiry')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-ceyora-clay focus:border-ceyora-clay ${
                    errors.expiry ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="MM/YY"
                  maxLength="5"
                  required
                />
                {errors.expiry && <p className="text-red-500 text-xs mt-1">{errors.expiry}</p>}
              </div>
              
              <div className="w-1/3">
                <label className="block text-sm font-medium text-teakwood-brown mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  name="payment.cvv"
                  value={formData.payment?.cvv || ''}
                  onChange={onChange}
                  onFocus={() => setFocusedField('cvv')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-ceyora-clay focus:border-ceyora-clay ${
                    errors.cvv ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="123"
                  maxLength="4"
                  required
                />
                {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
              </div>
            </div>
          </>
        )}
        
        {formData.payment?.method === 'paypal' && (
          <div className="bg-ceylon-cream p-4 rounded-md text-center">
            <p className="text-teakwood-brown">You will be redirected to PayPal to complete your payment after clicking "Pay Now".</p>
          </div>
        )}
        
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 bg-gray-200 text-teakwood-brown rounded-md hover:bg-gray-300 transition-colors"
            disabled={isSubmitting}
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-ceyora-clay text-white rounded-md hover:bg-opacity-90 transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Pay Now'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentStep;
