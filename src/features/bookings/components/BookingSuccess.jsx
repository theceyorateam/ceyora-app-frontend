import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/bookingUtils";

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
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close (X) Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-teakwood-brown">Booking Confirmed!</h2>
              <p className="text-ocean-mist mt-2">Your experience has been successfully booked.</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-soft-cream p-4 rounded-md">
                <h3 className="font-medium text-teakwood-brown mb-3">Booking Details</h3>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-ocean-mist">Booking Reference:</div>
                  <div className="text-teakwood-brown font-medium">{bookingDetails.bookingReference}</div>
                  
                  <div className="text-ocean-mist">Experience:</div>
                  <div className="text-teakwood-brown">{journey.title}</div>
                  
                  {selectedPackage && selectedPackage.name && selectedPackage.name !== journey.title && (
                    <>
                      <div className="text-ocean-mist">Package:</div>
                      <div className="text-teakwood-brown">{selectedPackage.name}</div>
                    </>
                  )}
                  
                  <div className="text-ocean-mist">Date:</div>
                  <div className="text-teakwood-brown">{formatDate(bookingDetails.date)}</div>
                  
                  <div className="text-ocean-mist">Time:</div>
                  <div className="text-teakwood-brown">{bookingDetails.time}</div>
                  
                  <div className="text-ocean-mist">Travelers:</div>
                  <div className="text-teakwood-brown">{bookingDetails.travelers}</div>
                  
                  <div className="text-ocean-mist">Total Paid:</div>
                  <div className="text-teakwood-brown font-medium">LKR {bookingDetails.totalPrice.toLocaleString()}</div>
                </div>
              </div>
              
              <p className="text-center text-sm text-ocean-mist">
                A confirmation email has been sent to {bookingDetails.email} with all the details.
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={handleClose}
                className="px-6 py-2 bg-ceyora-clay text-white rounded-md hover:bg-opacity-90 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingSuccess;
