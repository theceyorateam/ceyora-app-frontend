import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import logo from "../../assets/images/ceyora-logo.png"; // Corrected path
import { NAV_LINKS } from "../../constants/uiConstants"; // Corrected path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const langDropdownRef = useRef(null);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu/dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && menuOpen) {
        setMenuOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target) && languageOpen) {
        setLanguageOpen(false);
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        if (menuOpen) setMenuOpen(false);
        if (languageOpen) setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [menuOpen, languageOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleLanguageChange = (lang) => {
    // Placeholder for language change logic
    console.log("Language changed to:", lang);
    setLanguageOpen(false);
  };

  return (
    <header className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "py-2 bg-ceylon-cream/95 shadow-md" : "py-4 bg-transparent"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src={logo} 
            alt="Ceyora Logo" 
            className={`transition-all duration-300 ${scrolled ? "h-8" : "h-10"} w-auto`} 
          />
          <span className={`text-teakwood-brown font-semibold ${scrolled ? "text-base" : "text-lg"} hidden sm:inline`}>
            Ceyora
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`relative py-2 text-teakwood-brown hover:text-ceyora-clay transition-colors ${
                location.pathname === link.href ? "text-ceyora-clay after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-ceyora-clay" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Language Selector */}
          <div className="relative" ref={langDropdownRef}>
            <button 
              type="button"
              className="flex items-center space-x-1 text-teakwood-brown hover:text-ceyora-clay"
              onClick={() => setLanguageOpen(!languageOpen)}
              aria-expanded={languageOpen}
              aria-haspopup="true"
              aria-label="Select language"
            >
              <FaGlobe />
              <span>English</span>
            </button>
            
            {languageOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-10 ring-1 ring-black ring-opacity-5">
                <button onClick={() => handleLanguageChange("en")} className="block w-full text-left px-4 py-2 text-sm text-teakwood-brown hover:bg-ceylon-cream">English</button>
                <button onClick={() => handleLanguageChange("si")} className="block w-full text-left px-4 py-2 text-sm text-teakwood-brown hover:bg-ceylon-cream">සිංහල</button>
                <button onClick={() => handleLanguageChange("ta")} className="block w-full text-left px-4 py-2 text-sm text-teakwood-brown hover:bg-ceylon-cream">தமிழ்</button>
              </div>
            )}
          </div>
          
          {/* Primary CTA */}
          <Link
            to="/journeys"
            className={`ml-4 bg-ceyora-clay hover:bg-sun-gold text-white px-5 py-2 rounded-full shadow-sm transition-all transform hover:scale-105 ${
              scrolled ? "py-1.5" : "py-2"
            }`}
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Language Selector - Mobile (Simplified to icon button opening same dropdown logic as desktop for consistency) */}
          <div className="relative" ref={languageOpen && menuOpen ? null : langDropdownRef}> {/* Ensure only one ref if menu is not open */} 
            <button 
              type="button"
              className="text-teakwood-brown text-xl"
              onClick={() => setLanguageOpen(!languageOpen)}
              aria-label="Change language"
              aria-expanded={languageOpen}
              aria-haspopup="true"
            >
              <FaGlobe />
            </button>
            {languageOpen && !menuOpen && ( // Only show dropdown if mobile menu is not open, to avoid overlap
                 <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-20 ring-1 ring-black ring-opacity-5">
                    <button onClick={() => handleLanguageChange("en")} className="block w-full text-left px-4 py-2 text-sm text-teakwood-brown hover:bg-ceylon-cream">English</button>
                    <button onClick={() => handleLanguageChange("si")} className="block w-full text-left px-4 py-2 text-sm text-teakwood-brown hover:bg-ceylon-cream">සිංහල</button>
                    <button onClick={() => handleLanguageChange("ta")} className="block w-full text-left px-4 py-2 text-sm text-teakwood-brown hover:bg-ceylon-cream">தமிழ்</button>
                </div>
            )}
          </div>
          
          {/* Mobile CTA */}
          <Link
            to="/journeys"
            className="bg-ceyora-clay hover:bg-sun-gold text-white px-4 py-1.5 rounded-full text-sm shadow-sm"
          >
            Book
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="text-teakwood-brown text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div 
          ref={menuRef}
          className="fixed inset-0 bg-ceylon-cream z-50 pt-20 pb-6 px-6 overflow-y-auto md:hidden"
        >
          {/* Close button at the top of mobile menu */}
          <button
            type="button"
            className="absolute top-4 right-4 text-teakwood-brown text-2xl p-2"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          
          <div className="flex flex-col h-full">
            <nav className="flex-1 space-y-6 text-base font-medium">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={closeMenu}
                  className={`block py-3 border-b border-ocean-mist/10 text-teakwood-brown ${
                    location.pathname === link.href ? "text-ceyora-clay font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Language Options - Mobile */}
              <div className="pt-6">
                <p className="text-sm text-ocean-mist mb-2">Select Language:</p>
                <div className="space-y-2">
                    <button onClick={() => {handleLanguageChange("en"); closeMenu();}} className="block w-full text-left px-2 py-2 text-sm text-teakwood-brown hover:bg-ocean-mist/10 rounded-md">English</button>
                    <button onClick={() => {handleLanguageChange("si"); closeMenu();}} className="block w-full text-left px-2 py-2 text-sm text-teakwood-brown hover:bg-ocean-mist/10 rounded-md">සිංහල</button>
                    <button onClick={() => {handleLanguageChange("ta"); closeMenu();}} className="block w-full text-left px-2 py-2 text-sm text-teakwood-brown hover:bg-ocean-mist/10 rounded-md">தமிழ்</button>
                </div>
              </div>
            </nav>
            
            {/* Mobile Footer */}
            <div className="mt-auto pt-6">
              <Link
                to="/journeys"
                onClick={closeMenu}
                className="block w-full bg-ceyora-clay hover:bg-sun-gold text-white px-4 py-3 rounded-full text-center font-medium"
              >
                Book Your Experience
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

