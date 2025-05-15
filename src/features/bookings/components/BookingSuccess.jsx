import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BookingSuccess = ({ isOpen, onClose, journey, selectedPackage, bookingDetails }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    // Navigate back to journey details page after closing modal
    navigate(`/journey/${journey.id}`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <motion.div 
          className="bg-white rounded-xl p-6 w-full max-w-md relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Close (X) Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-ocean-mist hover:text-ceyora-clay transition-colors"
            aria-label="Close booking success modal"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-teakwood-brown mb-1">Booking Confirmed!</h3>
            <p className="text-ocean-mist">Your experience has been successfully booked.</p>
          </div>

          <div className="bg-soft-cream p-4 rounded-lg mb-6">
            <h4 className="font-medium text-teakwood-brown mb-2">Booking Details</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-ocean-mist">Booking Reference:</span>
                <span className="text-teakwood-brown font-medium">{bookingDetails.bookingReference}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-ocean-mist">Experience:</span>
                <span className="text-teakwood-brown font-medium">{journey.title}</span>
              </li>
              {selectedPackage && selectedPackage.name && selectedPackage.name !== journey.title && (
                <li className="flex justify-between">
                  <span className="text-ocean-mist">Package:</span>
                  <span className="text-teakwood-brown font-medium">{selectedPackage.name}</span>
                </li>
              )}
              <li className="flex justify-between">
                <span className="text-ocean-mist">Date:</span>
                <span className="text-teakwood-brown font-medium">{bookingDetails.date}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-ocean-mist">Time:</span>
                <span className="text-teakwood-brown font-medium">{bookingDetails.time}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-ocean-mist">Travelers:</span>
                <span className="text-teakwood-brown font-medium">{bookingDetails.travelers}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-ocean-mist">Total Paid:</span>
                <span className="text-ceyora-clay font-medium">LKR {bookingDetails.totalPrice.toLocaleString()}</span>
              </li>
            </ul>
          </div>

          <p className="text-sm text-ocean-mist mb-6">
            A confirmation email has been sent to {bookingDetails.email} with all the details.
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleClose}
              className="px-5 py-2.5 bg-ceyora-clay text-white rounded-lg hover:bg-palm-green transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingSuccess;
