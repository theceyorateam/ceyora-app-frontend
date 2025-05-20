import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaClock, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const ContactInfo = ({ icon, title, content }) => (
    <div className="flex items-center mb-6">
      <div className="p-2.5 rounded-full bg-sun-gold/20 text-sun-gold mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-ceylon-cream/90 mb-0.5">{title}</h4>
        <p className="text-ceylon-cream/80">{content}</p>
      </div>
    </div>
  );

  return (
    <section className="relative py-16 bg-ceylon-cream">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-sun-gold/10 rounded-full -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-ceyora-clay/10 rounded-full translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Contact Information Side */}
              <div className="bg-palm-green p-8 md:p-10">
                <h2 className="text-3xl font-bold text-ceylon-cream mb-4">Get in Touch</h2>
                <p className="text-ceylon-cream/80 mb-8">
                  We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                </p>
                
                <div className="space-y-6 mt-10">
                  <ContactInfo 
                    icon={<FaPhone className="w-5 h-5" />} 
                    title="Phone"
                    content="+94 77 999 9999"
                  />
                  
                  <ContactInfo 
                    icon={<FaClock className="w-5 h-5" />} 
                    title="Working Hours"
                    content="Monday–Friday, 9am–6pm IST"
                  />
                  
                  <ContactInfo 
                    icon={<FaMapMarkerAlt className="w-5 h-5" />} 
                    title="Address"
                    content="Colombo, Sri Lanka"
                  />
                  
                  <ContactInfo 
                    icon={<FaEnvelope className="w-5 h-5" />} 
                    title="Email"
                    content="hello@ceyora.com"
                  />
                </div>
                
                <div className="mt-12 p-5 bg-white/10 rounded-lg border border-white/20">
                  <blockquote className="italic text-ceylon-cream/90">
                    "The team at Ceyora was incredibly responsive and helped us plan the perfect cultural experience in Sri Lanka!"
                  </blockquote>
                  <div className="mt-3 font-medium text-ceylon-cream">- Sarah M., London</div>
                </div>
              </div>
              
              {/* Form Side */}
              <div className="p-8 md:p-10 bg-gradient-to-br from-soft-cream to-ceylon-cream">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold text-teakwood-brown mb-6">Send us a message</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-teakwood-brown mb-2">
                          Your Name <span className="text-ceyora-clay">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 bg-white rounded-lg border border-ocean-mist/30 shadow-sm focus:outline-none focus:ring-2 focus:ring-ceyora-clay focus:border-transparent transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-teakwood-brown mb-2">
                          Email Address <span className="text-ceyora-clay">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 bg-white rounded-lg border border-ocean-mist/30 shadow-sm focus:outline-none focus:ring-2 focus:ring-ceyora-clay focus:border-transparent transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-teakwood-brown mb-2">
                          Your Message <span className="text-ceyora-clay">*</span>
                        </label>
                        <div className="relative">
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full px-4 py-3.5 bg-white rounded-lg border border-ocean-mist/30 shadow-sm focus:outline-none focus:ring-2 focus:ring-ceyora-clay focus:border-transparent transition-all resize-none"
                            placeholder="How can we help you?"
                          ></textarea>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 px-6 bg-ceyora-clay hover:bg-ceyora-clay/90 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ceyora-clay disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-palm-green/10 flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-palm-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-teakwood-brown mb-3">Thank you!</h3>
                    <p className="text-ocean-mist mb-6">We've received your message and will get back to you within 24 hours.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center text-ceyora-clay hover:text-ceyora-clay/80 font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
