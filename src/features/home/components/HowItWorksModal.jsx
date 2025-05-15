import React from "react";
import { motion } from "framer-motion";
import { X, CalendarCheck, MapPin, Users, HeartHandshake } from "lucide-react";

const HowItWorksModal = ({ onClose }) => (
  <motion.div 
    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div 
      className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 relative mx-4"
      initial={{ scale: 0.95, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      onClick={e => e.stopPropagation()}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-ocean-mist hover:text-ceyora-clay transition-colors"
        aria-label="Close how it works modal"
      >
        <X className="h-6 w-6" />
      </button>
      <div className="flex items-start gap-3 mb-6">
        <HeartHandshake className="h-8 w-8 text-ceyora-clay flex-shrink-0" />
        <div>
          <h3 className="text-2xl font-bold text-teakwood-brown">How Ceyora Works</h3>
          <p className="text-ocean-mist mt-1">Simple steps to authentic experiences</p>
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-soft-cream flex items-center justify-center">
              <CalendarCheck className="h-5 w-5 text-ceyora-clay" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-teakwood-brown">Choose Your Experience</h4>
            <p className="text-ocean-mist text-sm mt-1">
              Browse authentic journeys curated by local experts
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-soft-cream flex items-center justify-center">
              <Users className="h-5 w-5 text-ceyora-clay" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-teakwood-brown">Connect Directly</h4>
            <p className="text-ocean-mist text-sm mt-1">
              Message hosts, customize details, and confirm your booking
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-soft-cream flex items-center justify-center">
              <MapPin className="h-5 w-5 text-ceyora-clay" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-teakwood-brown">Embark & Engage</h4>
            <p className="text-ocean-mist text-sm mt-1">
              Experience Sri Lanka through authentic cultural immersion
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/journeys"
          className="inline-block bg-ceyora-clay text-white px-6 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-palm-green transition-colors"
        >
          Start Exploring →
        </motion.a>
      </div>
    </motion.div>
  </motion.div>
);

export default HowItWorksModal;
