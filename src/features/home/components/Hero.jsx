import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroBgVideo from "../../../assets/videos/13234027-hd_1280_720_30fps.mp4"; // Corrected path
import heroBgFallback from "../../../assets/images/sri-lanka-culture-fallback.jpg"; // Corrected path
import { HERO_TAGS } from "../../../constants/uiConstants"; // Corrected path
import host1 from "../../../assets/images/user1.jpg"; // Corrected path
import host2 from "../../../assets/images/user2.jpg"; // Corrected path
import host3 from "../../../assets/images/user3.jpg"; // Corrected path
import HowItWorksModal from "./HowItWorksModal";

const Hero = () => {
  const videoRef = useRef(null);
  const localGuideImages = [host1, host2, host3]; 
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        videoRef.current.play();
      });
      videoRef.current.src = heroBgVideo;
    }
  }, []);

  return (
    <section className="relative h-auto min-h-[90vh] w-full overflow-hidden">
      {/* Background Video with Fallback */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-teakwood-brown/80 to-transparent z-10"></div>
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
          poster={heroBgFallback}
          aria-hidden="true"
        >
          <source data-src={heroBgVideo} type="video/mp4" />
        </video>
      </div>

      {/* How It Works Modal */}
      {showHowItWorks && (
        <HowItWorksModal onClose={() => setShowHowItWorks(false)} />
      )}

      {/* Content Container */}
      <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center py-16">
        <motion.div 
          className="max-w-2xl text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-sm uppercase tracking-wide text-sun-gold font-medium mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Curated by locals. Crafted for explorers.
          </motion.p>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Experience the Soul of <span className="text-ceyora-clay">Sri Lanka</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl max-w-lg mb-8 text-ceylon-cream/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Discover meaningful, locally guided cultural journeys – from hidden coastal rituals to mountain village traditions – all in one curated platform.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/journeys"
              className="inline-block bg-ceyora-clay hover:bg-sun-gold text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
            >
              Explore Journeys
            </motion.a>
            
            {/* Updated How It Works button */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowHowItWorks(true)}
              className="inline-block bg-transparent border-2 border-ceylon-cream hover:bg-ceylon-cream/10 text-ceylon-cream font-semibold py-3 px-8 rounded-full transition-all duration-300 cursor-pointer"
            >
              How It Works
            </motion.button>
          </motion.div>

          {/* Mobile-friendly layout for trust indicators and tags */}
          <div className="flex flex-col space-y-8 mt-10">
            {/* Trust Indicators */}
            <motion.div 
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <div className="flex -space-x-2">
                {localGuideImages.map((img, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-ceylon-cream overflow-hidden">
                    <img 
                      src={img} 
                      alt={`Local guide ${i+1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-ceylon-cream">
                <span className="font-bold">500+ experiences</span> curated by local hosts
              </p>
            </motion.div>
            
            {/* Tags */}
            <motion.div 
              className="flex flex-wrap justify-start gap-3 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              {HERO_TAGS.map((tag) => (
                <div
                  key={tag.label}
                  className="bg-ceylon-cream/20 backdrop-blur-sm px-3 py-1 rounded-full text-ceylon-cream flex items-center gap-1"
                >
                  <span>{tag.icon}</span> <span>{tag.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

