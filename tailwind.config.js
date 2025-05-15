/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🌿 Primary brand color
        'ceyora-clay': '#D96F32',          // Primary CTA and highlights

        // 🍃 Secondary brand color
        'palm-green': '#3B6B4E',           // Section backgrounds, secondary buttons

        // ✨ Accent color
        'sun-gold': '#F6C145',             // Hovers, highlights, small accents

        // 🌤️ Neutrals
        'ceylon-cream': '#FFF9F4',         // Page background
        'teakwood-brown': '#3E3229',       // Headings, primary text
        'ocean-mist': '#77867F',           // Secondary text, captions

        'soft-cream': '#F9F5F0',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.scrollbar-thin::-webkit-scrollbar': {
          'width': '4px',
          'height': '4px',
        },
        '.scrollbar-thin::-webkit-scrollbar-track': {
          'background': '#F9F5F0',
        },
        '.scrollbar-thin::-webkit-scrollbar-thumb': {
          'background': '#D96F32',
          'border-radius': '20px',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
