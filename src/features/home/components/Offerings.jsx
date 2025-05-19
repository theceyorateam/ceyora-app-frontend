import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkedAlt, FaUsers, FaHandHoldingHeart, FaCompass, FaShieldAlt, FaCalendarAlt } from 'react-icons/fa';

const OfferingsCard = ({ icon, title, description, imageUrl, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`${title} experience`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4 text-white">
            <div className="text-3xl mb-2 text-sun-gold">{icon}</div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="text-teakwood-brown">{description}</p>
      </div>
    </motion.div>
  );
};

const Offerings = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const offerings = [
    {
      title: "Cultural Experiences",
      description: "Immerse yourself in authentic Sri Lankan traditions with privileged access to ceremonies, crafts, and rituals rarely experienced by travelers.",
      icon: <FaMapMarkedAlt />,
      imageUrl: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Local Hosts",
      description: "Connect with passionate, verified local guides who share their heritage with warmth and pride, creating meaningful cultural exchanges.",
      icon: <FaUsers />,
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Community Connection",
      description: "Your journey directly supports local communities and helps preserve cultural heritage for future generations.",
      icon: <FaHandHoldingHeart />,
      imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Hidden Discoveries",
      description: "Journey beyond the tourist trail to authentic experiences in private homes, secluded ceremonies, and village traditions.",
      icon: <FaCompass />,
      imageUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Safe Travel",
      description: "Experience peace of mind with our vetted hosts, detailed safety protocols, and 24/7 local support throughout your journey.",
      icon: <FaShieldAlt />,
      imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Flexible Booking",
      description: "Plans change. Enjoy free cancellation up to 48 hours before your experience with easy rescheduling options.",
      icon: <FaCalendarAlt />,
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 bg-ceylon-cream"
      aria-labelledby="offerings-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            id="offerings-heading"
            initial={{ opacity: 0, y: -20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-teakwood-brown"
          >
            What We Offer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl max-w-3xl mx-auto text-ocean-mist"
          >
            Ceyora brings you closer to Sri Lanka's heartbeat - its people, places, and traditions - through curated, ethical, and unforgettable experiences.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <OfferingsCard
              key={index}
              index={index}
              icon={offering.icon}
              title={offering.title}
              description={offering.description}
              imageUrl={offering.imageUrl}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a 
            href="#explore" 
            className="inline-block bg-ceyora-clay hover:bg-ceyora-clay/90 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            aria-label="Explore our experiences"
          >
            Explore Our Experiences
          </a>
          <p className="mt-4 text-ocean-mist">500+ experiences across Sri Lanka</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Offerings;
