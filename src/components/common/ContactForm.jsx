import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, Send, Check, AlertCircle, MessageSquare } from 'lucide-react'; // Removed Globe

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'General Inquiry',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    let fieldErrors = {};
    
    switch(name) {
      case 'email':
        if (!/^\S+@\S+\.\S+$/.test(value)) {
          fieldErrors[name] = 'Please enter a valid email address';
        }
        break;
      case 'phone':
        if (value && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(value)) {
          fieldErrors[name] = 'Please enter a valid phone number';
        }
        break;
      default:
        if (!value && name !== 'phone') {
          fieldErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        }
    }
    
    setErrors(prev => ({...prev, ...fieldErrors}));
    return Object.keys(fieldErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    let formIsValid = true;
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'phone') { // Phone is optional
        if (!validateField(key, value)) {
          formIsValid = false;
        }
      }
    });
    
    if (!formIsValid) return;
    
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: 'General Inquiry',
          message: ''
        });
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="bg-soft-cream py-16 md:py-24 border-t border-ocean-mist/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-teakwood-brown mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="text-ocean-mist max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have questions about our cultural experiences? We'd love to hear from you.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-ceylon-cream/50 rounded-xl p-6 border border-ocean-mist/10">
              <h3 className="text-xl font-semibold text-teakwood-brown mb-4">Connect With Us</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="text-ceyora-clay h-5 w-5 mt-0.5" />
                  <div>
                    <p className="font-medium text-teakwood-brown">Call or WhatsApp</p>
                    <p className="text-ocean-mist">+94 77 999 9999</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="text-ceyora-clay h-5 w-5 mt-0.5" />
                  <div>
                    <p className="font-medium text-teakwood-brown">Business Hours</p>
                    <p className="text-ocean-mist">Monday–Friday, 9am–6pm IST</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-ceyora-clay h-5 w-5 mt-0.5" />
                  <div>
                    <p className="font-medium text-teakwood-brown">Based in</p>
                    <p className="text-ocean-mist">Colombo, Sri Lanka</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageSquare className="text-ceyora-clay h-5 w-5 mt-0.5" />
                  <div>
                    <p className="font-medium text-teakwood-brown">Email Us</p>
                    <a href="mailto:hello@ceyora.com" className="text-ceyora-clay hover:underline">hello@ceyora.com</a>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Trust Elements */}
            <div className="bg-white rounded-xl p-6 border border-ocean-mist/10 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="text-sun-gold h-5 w-5" />
                <h3 className="text-lg font-medium text-teakwood-brown">Quick Response</h3>
              </div>
              <p className="text-ocean-mist text-sm mb-4">
                We typically respond within 24 hours. For urgent inquiries, please contact us via WhatsApp.
              </p>
              
              <div className="bg-ceylon-cream/30 rounded-lg p-4 border border-ocean-mist/10">
                <p className="text-sm text-teakwood-brown italic">
                  "The team at Ceyora was incredibly responsive and helped us plan the perfect cultural experience in Sri Lanka. Highly recommended!"
                </p>
                <p className="text-xs text-ocean-mist mt-2">- Sarah M., London</p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-ceylon-cream rounded-xl shadow-md p-8 text-center"
                >
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-teakwood-brown mb-2">Message Sent!</h3>
                  <p className="text-ocean-mist mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <a 
                    href="/experiences" // Assuming this is a valid navigation path
                    className="inline-block text-ceyora-clay hover:text-sun-gold font-medium transition-colors"
                  >
                    Explore our cultural experiences →
                  </a>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-ceylon-cream rounded-xl shadow-md p-6 md:p-8"
                >
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div className="group relative">
                      <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`peer w-full px-4 pt-6 pb-2 rounded-lg border ${
                          errors.name ? 'border-red-400 bg-red-50' : 'border-ocean-mist/30 bg-white/80'
                        } focus:ring-2 focus:ring-ceyora-clay focus:border-transparent transition-all`}
                        aria-required="true"
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        required
                      />
                      <label 
                        htmlFor="name" 
                        className={`absolute text-sm ${
                          errors.name ? 'text-red-500' : 'text-ocean-mist'
                        } left-4 top-4 peer-focus:text-xs peer-focus:top-2 ${
                          errors.name ? 'peer-focus:text-red-500' : 'peer-focus:text-ceyora-clay'
                        } transition-all pointer-events-none peer-valid:text-xs peer-valid:top-2`}
                      >
                        Your Name
                      </label>
                      {errors.name && (
                        <div id="name-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.name}
                        </div>
                      )}
                    </div>
                    
                    {/* Email Field */}
                    <div className="group relative">
                      <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`peer w-full px-4 pt-6 pb-2 rounded-lg border ${
                          errors.email ? 'border-red-400 bg-red-50' : 'border-ocean-mist/30 bg-white/80'
                        } focus:ring-2 focus:ring-ceyora-clay focus:border-transparent transition-all`}
                        aria-required="true"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        required
                      />
                      <label 
                        htmlFor="email" 
                        className={`absolute text-sm ${
                          errors.email ? 'text-red-500' : 'text-ocean-mist'
                        } left-4 top-4 peer-focus:text-xs peer-focus:top-2 ${
                          errors.email ? 'peer-focus:text-red-500' : 'peer-focus:text-ceyora-clay'
                        } transition-all pointer-events-none peer-valid:text-xs peer-valid:top-2`}
                      >
                        Email Address
                      </label>
                      {errors.email && (
                        <div id="email-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                    
                    {/* Phone Field (Optional) */}
                    <div className="group relative">
                      <input 
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`peer w-full px-4 pt-6 pb-2 rounded-lg border ${
                          errors.phone ? 'border-red-400 bg-red-50' : 'border-ocean-mist/30 bg-white/80'
                        } focus:ring-2 focus:ring-ceyora-clay focus:border-transparent transition-all`}
                        aria-invalid={errors.phone ? "true" : "false"}
                        aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
                      />
                      <label 
                        htmlFor="phone" 
                        className={`absolute text-sm ${
                          errors.phone ? 'text-red-500' : 'text-ocean-mist'
                        } left-4 top-4 peer-focus:text-xs peer-focus:top-2 ${
                          errors.phone ? 'peer-focus:text-red-500' : 'peer-focus:text-ceyora-clay'
                        } transition-all pointer-events-none peer-valid:text-xs peer-valid:top-2`}
                      >
                        Phone Number (Optional)
                      </label>
                      <div id="phone-hint" className="text-ocean-mist text-xs mt-1">
                        Include country code for WhatsApp communication
                      </div>
                      {errors.phone && (
                        <div id="phone-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.phone}
                        </div>
                      )}
                    </div>
                    
                    {/* Inquiry Type */}
                    <div className="group relative">
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 pt-6 pb-2 rounded-lg border border-ocean-mist/30 bg-white/80 focus:ring-2 focus:ring-ceyora-clay focus:border-transparent transition-all appearance-none"
                        aria-required="true"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Experience Booking">Experience Booking</option>
                        <option value="Become a Host">Become a Host</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="Feedback">Feedback</option>
                      </select>
                      <label 
                        htmlFor="inquiryType" 
                        className="absolute text-xs text-ceyora-clay left-4 top-2 transition-all pointer-events-none"
                      >
                        Inquiry Type
                      </label>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-ocean-mist">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Message Field */}
                    <div className="group relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className={`peer w-full px-4 pt-6 pb-2 rounded-lg border ${
                          errors.message ? 'border-red-400 bg-red-50' : 'border-ocean-mist/30 bg-white/80'
                        } focus:ring-2 focus:ring-ceyora-clay focus:border-transparent transition-all resize-none`}
                        aria-required="true"
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        required
                      ></textarea>
                      <label 
                        htmlFor="message" 
                        className={`absolute text-sm ${
                          errors.message ? 'text-red-500' : 'text-ocean-mist'
                        } left-4 top-4 peer-focus:text-xs peer-focus:top-2 ${
                          errors.message ? 'peer-focus:text-red-500' : 'peer-focus:text-ceyora-clay'
                        } transition-all pointer-events-none peer-valid:text-xs peer-valid:top-2`}
                      >
                        Your Message
                      </label>
                      {errors.message && (
                        <div id="message-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.message}
                        </div>
                      )}
                    </div>
                    
                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 bg-ceyora-clay text-white font-semibold py-3 px-6 rounded-lg hover:bg-teakwood-brown focus:ring-2 focus:ring-sun-gold focus:ring-offset-2 focus:ring-offset-soft-cream transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <motion.div 
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

