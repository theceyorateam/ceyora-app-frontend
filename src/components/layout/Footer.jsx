import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MapPin, CheckCircle, Globe } from "lucide-react";
import logo from "../../assets/images/ceyora-logo.png"; // Corrected path to be relative to src

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [expandedSection, setExpandedSection] = useState(null);
  
  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  
  return (
    <footer className="bg-teakwood-brown text-ceylon-cream pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        {/* Desktop Footer - Hidden on Mobile */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-5">
            <div>
              <img src={logo} alt="Ceyora" className="h-10 w-auto" />
              <p className="text-sun-gold text-sm font-medium mt-2">Feel the Spirit of Ceylon</p>
            </div>
            
            <p className="text-sm text-ceylon-cream/80 max-w-xs leading-relaxed">
              Curated cultural experiences led by local communities across Sri Lanka.
              Travel deeper, connect authentically.
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-ceylon-cream/80">
              <MapPin className="h-4 w-4 text-sun-gold" />
              <span>Based in Colombo, Sri Lanka</span>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              <div className="bg-palm-green/20 px-3 py-1 rounded-full flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-palm-green" />
                <span className="text-xs text-ceylon-cream">Verified Local Experiences</span>
              </div>
              
              <div className="bg-palm-green/20 px-3 py-1 rounded-full flex items-center space-x-1">
                <Globe className="h-4 w-4 text-palm-green" />
                <span className="text-xs text-ceylon-cream">Responsible Tourism</span>
              </div>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/journeys" className="hover:text-sun-gold transition-colors">Browse Experiences</a></li>
              {/* <li><a href="/hosts" className="hover:text-sun-gold transition-colors">Meet Local Hosts</a></li>
              <li><a href="/destinations" className="hover:text-sun-gold transition-colors">Destinations</a></li> */}
              <li><a href="/about" className="hover:text-sun-gold transition-colors">About Us</a></li>
              {/* <li><a href="/contact" className="hover:text-sun-gold transition-colors">Get in Touch</a></li> */}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/faq" className="hover:text-sun-gold transition-colors">FAQs</a></li>
              {/* <li><a href="/how-it-works" className="hover:text-sun-gold transition-colors">How It Works</a></li> */}
              <li><a href="/terms" className="hover:text-sun-gold transition-colors">Terms & Conditions</a></li>
              <li><a href="/privacy-policy" className="hover:text-sun-gold transition-colors">Privacy Policy</a></li>
              {/* <li><a href="/become-host" className="hover:text-sun-gold transition-colors">Become a Host</a></li> */}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://instagram.com" className="flex items-center space-x-2 hover:text-sun-gold transition-colors">
                    <FaInstagram className="text-lg" />
                    <span>Follow on Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" className="flex items-center space-x-2 hover:text-sun-gold transition-colors">
                    <FaFacebookF className="text-lg" />
                    <span>Like on Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" className="flex items-center space-x-2 hover:text-sun-gold transition-colors">
                    <FaTwitter className="text-lg" />
                    <span>Follow on Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/1234567890" className="flex items-center space-x-2 hover:text-sun-gold transition-colors">
                    <FaWhatsapp className="text-lg" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium">Join our newsletter</h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 text-sm rounded-l-md border border-ceylon-cream/20 bg-teakwood-brown/80 placeholder-ceylon-cream/60 focus:outline-none focus:ring-1 focus:ring-sun-gold"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-sun-gold text-teakwood-brown font-medium rounded-r-md hover:bg-ceyora-clay hover:text-white transition-all duration-200"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-ceylon-cream/60">
                Get travel inspiration and special offers
              </p>
            </div>
          </div>
        </div>
        
        {/* Mobile Footer - Hidden on Desktop */}
        <div className="md:hidden">
          {/* Brand Section - Always visible */}
          <div className="mb-8">
            <img src={logo} alt="Ceyora" className="h-10 w-auto" />
            <p className="text-sun-gold text-sm font-medium mt-2">Feel the Spirit of Ceylon</p>
            <p className="text-sm text-ceylon-cream/80 mt-3 leading-relaxed">
              Curated cultural experiences led by local communities across Sri Lanka.
              Travel deeper, connect authentically.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              <div className="bg-palm-green/20 px-3 py-1 rounded-full flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-palm-green" />
                <span className="text-xs text-ceylon-cream">Verified Local Experiences</span>
              </div>
              
              <div className="bg-palm-green/20 px-3 py-1 rounded-full flex items-center space-x-1">
                <Globe className="h-4 w-4 text-palm-green" />
                <span className="text-xs text-ceylon-cream">Responsible Tourism</span>
              </div>
            </div>
          </div>
          
          {/* Collapsible Explore Section */}
          <div className="border-b border-ceylon-cream/20">
            <button 
              className="flex justify-between items-center w-full py-3 text-left"
              onClick={() => toggleSection("explore")}
              aria-expanded={expandedSection === "explore"}
            >
              <h3 className="text-lg font-semibold text-white">Explore</h3>
              {expandedSection === "explore" ? 
                <FaChevronUp className="text-sun-gold" /> : 
                <FaChevronDown className="text-sun-gold" />
              }
            </button>
            
            {expandedSection === "explore" && (
              <div className="py-3 space-y-3 pl-2">
                <a href="/journeys" className="block text-sm hover:text-sun-gold">Browse Experiences</a>
                {/* <a href="/hosts" className="block text-sm hover:text-sun-gold">Meet Local Hosts</a> */}
                {/* <a href="/destinations" className="block text-sm hover:text-sun-gold">Destinations</a> */}
                <a href="/about" className="block text-sm hover:text-sun-gold">About Us</a>
                {/* <a href="/contact" className="block text-sm hover:text-sun-gold">Get in Touch</a> */}
              </div>
            )}
          </div>
          
          {/* Collapsible Support Section */}
          <div className="border-b border-ceylon-cream/20">
            <button 
              className="flex justify-between items-center w-full py-3 text-left"
              onClick={() => toggleSection("support")}
              aria-expanded={expandedSection === "support"}
            >
              <h3 className="text-lg font-semibold text-white">Support</h3>
              {expandedSection === "support" ? 
                <FaChevronUp className="text-sun-gold" /> : 
                <FaChevronDown className="text-sun-gold" />
              }
            </button>
            
            {expandedSection === "support" && (
              <div className="py-3 space-y-3 pl-2">
                <a href="/faqs" className="block text-sm hover:text-sun-gold">FAQs</a>
                {/* <a href="/how-it-works" className="block text-sm hover:text-sun-gold">How It Works</a> */}
                <a href="/terms" className="block text-sm hover:text-sun-gold">Terms & Conditions</a>
                <a href="/privacy-policy" className="block text-sm hover:text-sun-gold">Privacy Policy</a>
                {/* <a href="/become-host" className="block text-sm hover:text-sun-gold">Become a Host</a> */}
              </div>
            )}
          </div>
          
          {/* Collapsible Connect Section */}
          <div className="border-b border-ceylon-cream/20">
            <button 
              className="flex justify-between items-center w-full py-3 text-left"
              onClick={() => toggleSection("connect")}
              aria-expanded={expandedSection === "connect"}
            >
              <h3 className="text-lg font-semibold text-white">Connect</h3>
              {expandedSection === "connect" ? 
                <FaChevronUp className="text-sun-gold" /> : 
                <FaChevronDown className="text-sun-gold" />
              }
            </button>
            
            {expandedSection === "connect" && (
              <div className="py-3 space-y-5 pl-2">
                <div className="flex justify-between">
                  <a 
                    href="https://instagram.com" 
                    aria-label="Instagram"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-ceylon-cream/10 hover:bg-sun-gold/20 text-xl"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    aria-label="Facebook"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-ceylon-cream/10 hover:bg-sun-gold/20 text-xl"
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    aria-label="Twitter"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-ceylon-cream/10 hover:bg-sun-gold/20 text-xl"
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="https://wa.me/1234567890" 
                    aria-label="WhatsApp"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-ceylon-cream/10 hover:bg-sun-gold/20 text-xl"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Join our newsletter</h4>
                  <form className="flex">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 text-sm rounded-l-md border border-ceylon-cream/20 bg-teakwood-brown/80 placeholder-ceylon-cream/60 focus:outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm bg-sun-gold text-teakwood-brown font-medium rounded-r-md"
                    >
                      Join
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
          
          {/* Location */}
          <div className="mt-6 flex items-center space-x-2 text-sm text-ceylon-cream/80">
            <MapPin className="h-4 w-4 text-sun-gold" />
            <span>Based in Colombo, Sri Lanka</span>
          </div>
        </div>
        
        {/* Language Selector & Payment - Both Mobile & Desktop */}
        <div className="mt-10 pt-6 border-t border-ceylon-cream/20 flex flex-col sm:flex-row justify-between items-center">
          
          <div className="flex items-center space-x-2">
            <span className="text-xs text-ceylon-cream/60">Secure payments with</span>
            <div className="flex space-x-1">
              <div className="w-8 h-5 bg-white/20 rounded"></div>
              <div className="w-8 h-5 bg-white/20 rounded"></div>
              <div className="w-8 h-5 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-ceylon-cream/20 text-center text-xs text-ceylon-cream/60">
          <p>&copy; {currentYear} Ceyora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

