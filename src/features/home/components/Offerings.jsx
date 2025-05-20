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
      className="flex flex-col overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-teakwood-brown/70 to-transparent"></div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-full bg-ceyora-clay mr-4">
            {React.cloneElement(icon, { className: "w-6 h-6 text-white" })}
          </div>
          <h3 className="text-xl font-bold text-teakwood-brown">{title}</h3>
        </div>
        <p className="text-ocean-mist mb-4 flex-1">{description}</p>
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
    <section className="py-20 bg-ceylon-cream" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-teakwood-brown mb-4">What We Offer</h2>
          <p className="text-ocean-mist text-xl max-w-3xl mx-auto">
            Ceyora brings you closer to Sri Lanka's heartbeat - its people, places, and traditions - through curated, ethical, and unforgettable experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <OfferingsCard 
              key={index}
              icon={offering.icon}
              title={offering.title}
              description={offering.description}
              imageUrl={offering.imageUrl}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            href="/journeys"
            className="inline-block px-8 py-4 bg-ceyora-clay hover:bg-ceyora-clay/90 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Explore Our Journeys
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
