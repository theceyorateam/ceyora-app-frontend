import React from 'react';
import { motion } from 'framer-motion'; // Removed useAnimation
import { useInView } from 'react-intersection-observer';
// Removed unused useEffect
import { FaMapMarkedAlt, FaUsers, FaHandHoldingHeart, FaCompass } from 'react-icons/fa';

import culturalImmersion from "../../../assets/images/cultural-immersion.jpg"; // Corrected path
import localHosts from "../../../assets/images/local-hosts.jpg"; // Corrected path
import hiddenExp from "../../../assets/images/hiddenExp.jpg"; // Corrected path
import ethicalImpact from "../../../assets/images/ethical-impact.jpg"; // Corrected path

// Assuming these traveler images are in the assets/images folder
import traveler1 from "../../../assets/images/traveler-1.jpg"; // Corrected path
import traveler2 from "../../../assets/images/traveler-2.jpg"; // Corrected path
import traveler3 from "../../../assets/images/traveler-3.jpg"; // Corrected path

function Offerings() {
  // Using useInView hook for the entire section
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Using separate hooks for featured and standard offerings
  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [standardRef, standardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const offerings = [
    {
      title: "Live Stories, Not Sightseeing",
      subtitle: "From ancient tea ceremonies to coastal fishing rituals-experience traditions that have shaped Sri Lankan life for generations",
      description: "Designed for connection, our journeys immerse you in stories, rituals, and landscapes that define Sri Lanka's cultural richness.",
      icon: <FaMapMarkedAlt className="text-palm-green text-4xl mb-4" />,
      image: culturalImmersion,
      featured: true
    },
    {
      title: "Connect With Trusted Local Hosts",
      subtitle: "Meet passionate hosts like Praveen, whose family has practiced traditional crafts for seven generations",
      description: "Explore with verified locals who share their world with warmth and pride.",
      icon: <FaUsers className="text-palm-green text-4xl mb-4" />,
      image: localHosts
    },
    {
      title: "Discover Hidden Sri Lanka",
      subtitle: "Gain privileged access to private homes, secluded ceremonies, and village traditions rarely experienced by travelers",
      description: "Journey beyond the tourist trail to authentic experiences few travelers ever see.",
      icon: <FaCompass className="text-palm-green text-4xl mb-4" />,
      image: hiddenExp
    },
    {
      title: "Travel That Gives Back",
      subtitle: "Your journey directly supports local communities and helps preserve cultural heritage for future generations",
      description: "Every experience contributes directly to local communities and cultural preservation.",
      icon: <FaHandHoldingHeart className="text-palm-green text-4xl mb-4" />,
      image: ethicalImpact
    }
  ];

  // Extract featured offering
  const featuredOffering = offerings.find(o => o.featured);
  const standardOfferings = offerings.filter(o => !o.featured);
  const travelerImages = [traveler1, traveler2, traveler3];

  return (
    <section 
      id="offerings" 
      className="bg-white py-16 md:py-24 border-t border-ocean-mist/20"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-teakwood-brown mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Experience Sri Lanka's Soul
        </motion.h2>

        <motion.p
          className="text-center text-ocean-mist mb-16 max-w-2xl mx-auto text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ceyora brings you closer to the island's heartbeat - its people, places, and traditions - through curated, ethical, and unforgettable experiences.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-6">
          {/* Featured offering */}
          <motion.div 
            ref={featuredRef}
            className="col-span-1 md:col-span-5 md:row-span-2 bg-ceylon-cream rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative h-48 md:h-64 overflow-hidden">
              <img 
                src={featuredOffering.image} 
                alt={featuredOffering.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-sun-gold text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex justify-center mb-4">{featuredOffering.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold text-teakwood-brown mb-3">
                {featuredOffering.title}
              </h3>
              <p className="text-sm md:text-base text-ocean-mist mb-4">
                {featuredOffering.subtitle}
              </p>
              <div className="flex items-center mt-6 text-xs text-ocean-mist">
                <div className="flex -space-x-2 mr-2">
                  {travelerImages.map((imgSrc, i) => (
                    <div key={i} className="w-6 h-6 rounded-full border border-white overflow-hidden">
                      <img src={imgSrc} alt={`Traveler ${i+1}`} />
                    </div>
                  ))}
                </div>
                <span>Experienced by 2,400+ travelers</span>
              </div>
            </div>
          </motion.div>
          
          {/* Secondary offerings */}
          <div 
            className="col-span-1 md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6"
            ref={standardRef}
          >
            {standardOfferings.map((offering, index) => (
              <motion.div
                key={index}
                className="bg-ceylon-cream rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={standardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={offering.image} 
                    alt={offering.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teakwood-brown/60 to-transparent"></div>
                </div>
                <div className="p-5">
                  <div className="flex justify-center mb-3">{offering.icon}</div>
                  <h3 className="text-lg font-semibold text-teakwood-brown mb-2">
                    {offering.title}
                  </h3>
                  <p className="text-xs text-ocean-mist leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <motion.div 
          ref={ctaRef}
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <a 
            href="/journeys" 
            className="inline-block bg-ceyora-clay hover:bg-sun-gold text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md"
          >
            Discover Cultural Journeys
          </a>
          <p className="text-xs text-ocean-mist mt-2">
            500+ experiences across Sri Lanka
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Offerings;

