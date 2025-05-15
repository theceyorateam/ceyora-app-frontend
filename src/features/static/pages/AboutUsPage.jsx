import React from "react";
import { motion } from "framer-motion";
import { ABOUT_VALUES, ABOUT_TEAM } from "../../../constants/textConstants"; // Corrected path
import { Globe, HeartHandshake, BookText } from "lucide-react"; // Removed unused Users import

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const AboutUsPage = () => ( // Renamed component to PascalCase
  <main className="bg-ceylon-cream min-h-screen">
    {/* Hero Section */}
    <section className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Sri Lanka collage"
          className="w-full h-80 md:h-[28rem] object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
      </div>
      <div className="relative container mx-auto px-4 flex flex-col items-center justify-center h-80 md:h-[28rem] text-center z-10">
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4"
          {...fadeInUp}
          transition={{ duration: 0.7 }}
        >
          Journey Deeper with Ceyora
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-sun-gold font-medium max-w-2xl mx-auto"
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Curated, soulful travel across Sri Lanka - where every journey is a story.
        </motion.p>
      </div>
    </section>

    {/* Brand Story Section */}
    <section className="container mx-auto px-4 py-12">
      <motion.div
        className="max-w-3xl mx-auto"
        {...fadeInUp}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-ceyora-clay mb-6 text-center">
          Our Story
        </h2>
        <p className="text-lg text-ocean-mist mb-4 leading-relaxed">
          Ceyora was founded to celebrate the spirit of Sri Lanka through immersive travel. We believe every journey should be more than sightseeing - it should be a soulful exchange between traveler and host.
        </p>
        <p className="text-lg text-ocean-mist mb-4 leading-relaxed">
          From spice markets in Matara to craft villages in Kandy, we work with local storytellers, artisans, and communities to create experiences that are authentic, respectful, and unforgettable.
        </p>
        <p className="text-lg text-ocean-mist leading-relaxed">
          Our mission is to preserve culture, empower communities, and help travelers feel something real.
        </p>
      </motion.div>
    </section>

    {/* Founder Quote */}
    <section className="container mx-auto px-4">
      <motion.blockquote
        className="relative bg-soft-cream rounded-xl shadow-lg px-6 py-8 my-10 max-w-2xl mx-auto text-center border-l-4 border-ceyora-clay"
        {...fadeInUp}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <span className="absolute left-4 top-4 text-sun-gold text-4xl font-serif select-none" aria-hidden="true">“</span>
        <p className="text-lg md:text-xl font-semibold text-teakwood-brown italic">
          We started Ceyora to create a space where travelers don’t just pass through - they connect, contribute, and carry stories home.
        </p>
        <footer className="mt-4 text-ocean-mist text-sm font-semibold">– The Ceyora Founders –</footer>
      </motion.blockquote>
    </section>

    {/* Mission, Values, Vision */}
    <section className="container mx-auto px-4 py-12">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-palm-green mb-10 text-center"
        {...fadeInUp}
        transition={{ duration: 0.6 }}
      >
        What Drives Us
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div className="flex flex-col items-center bg-white rounded-xl shadow-md px-6 py-8 text-center border border-gray-100"
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.1 }}>
          <Globe className="h-8 w-8 text-ceyora-clay mb-3" aria-hidden="true" />
          <h3 className="font-semibold text-lg text-teakwood-brown mb-2">Our Mission</h3>
          <p className="text-ocean-mist text-base">{ABOUT_VALUES[0].text}</p>
        </motion.div>
        <motion.div className="flex flex-col items-center bg-white rounded-xl shadow-md px-6 py-8 text-center border border-gray-100"
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.2 }}>
          <HeartHandshake className="h-8 w-8 text-ceyora-clay mb-3" aria-hidden="true" />
          <h3 className="font-semibold text-lg text-teakwood-brown mb-2">Our Values</h3>
          <p className="text-ocean-mist text-base">{ABOUT_VALUES[1].text}</p>
        </motion.div>
        <motion.div className="flex flex-col items-center bg-white rounded-xl shadow-md px-6 py-8 text-center border border-gray-100"
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.3 }}>
          <BookText className="h-8 w-8 text-ceyora-clay mb-3" aria-hidden="true" />
          <h3 className="font-semibold text-lg text-teakwood-brown mb-2">Our Vision</h3>
          <p className="text-ocean-mist text-base">{ABOUT_VALUES[2].text}</p>
        </motion.div>
      </div>
    </section>

    {/* Team Spotlight */}
    <section className="container mx-auto px-4 py-12">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-ceyora-clay mb-8 text-center"
        {...fadeInUp}
        transition={{ duration: 0.6 }}
      >
        Meet Our Team
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {ABOUT_TEAM.map((member, idx) => (
          <motion.div
            key={member.name}
            className="flex flex-col items-center bg-white rounded-xl shadow-md px-6 py-8 text-center border border-gray-100"
            {...fadeInUp}
            transition={{ duration: 0.7, delay: 0.2 + idx * 0.1 }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-20 h-20 rounded-full object-cover shadow-lg mb-3 border-4 border-soft-cream"
            />
            <h3 className="font-semibold text-lg text-teakwood-brown">{member.name}</h3>
            <p className="text-palm-green font-medium mb-2">{member.role}</p>
            <p className="text-ocean-mist text-base">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Call to Action */}
    <section className="container mx-auto px-4 py-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="/journeys"
          className="inline-block px-8 py-3 bg-ceyora-clay text-white font-semibold rounded-full shadow-lg hover:bg-palm-green transition-colors text-lg"
        >
          Explore Our Journeys
        </a>
      </motion.div>
    </section>
  </main>
);

export default AboutUsPage;

