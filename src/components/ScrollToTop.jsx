// src/components/common/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    
    return () => {
      // Clean up
      document.documentElement.style.scrollBehavior = '';
    };
  }, [pathname]);

  return null;
}

export default ScrollToTop;
