# 🌺 Ceyora Frontend

> **Ceyora** is a mobile-first travel-tech platform that connects travelers with authentic, curated cultural experiences across Sri Lanka — guided by local hosts, artisans, and communities. This refactored version emphasizes a modular, feature-based architecture for scalability and maintainability.

---

## 🛠️ Tech Stack

- **React** (v18+)
- **Tailwind CSS** (utility-first styling)
- **React Router DOM** (v6+ for routing)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **React Icons** (additional icons)
- **Vite** (build tool and development server)
- **Mock Data & Simulated APIs** (using `setTimeout` for asynchronous behavior, located within feature modules)

---

## 🚀 Getting Started

### 1. Clone the Repository (or Unzip the Provided Archive)

If you have the project as a ZIP file (e.g., `ceyora_frontend_final_refactored.zip`), unzip it first.

If cloning from a Git repository (hypothetical):
```bash
git clone https://github.com/yourusername/ceyora-app-frontend.git
cd ceyora-frontend-refactored
```

Navigate into the project root directory (e.g., `ceyora-app-frontend`).

### 2. Install Dependencies

Ensure you have Node.js and npm (or Yarn) installed.

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

```bash
npm start
# or
yarn start
```

This will typically start the Vite development server, and you can access the application at `http://localhost:5173` (or another port if specified).

---

## 📁 Folder Structure Overview

The project follows a feature-based, modular structure:

```
/public                 # Static assets served directly (favicon, index.html)
/src
  /app/                 # Core application setup
    App.jsx             # Main application component, layout, global context
    AppRouter.jsx       # Main routing configuration
    index.css           # Global styles (Tailwind base, custom global styles)
    index.js            # Entry point for React application
  /assets/              # Static assets imported by components
    /images             # Images, logos, illustrations
    /videos             # Video files (if any)
    /fonts              # Font files (if any)
  /components/          # Shared, reusable UI components
    /common/            # General-purpose components (Button, Card, Modal, Input)
    /layout/            # Layout components (Header, Footer, DefaultLayout, Sidebar)
    /SeasonalAnimation/ # Example of a specific shared component
    /ScrollToTop.jsx    # Utility component for scrolling to top on navigation
  /constants/           # Centralized static data, text, and UI configurations
    textConstants.js    # Static text for About Us, FAQs, Privacy Policy
    uiConstants.js      # UI related constants (e.g., navigation links, footer links)
    featureConstants.js # Constants specific to certain features (if any)
  /features/            # Feature-specific modules (the core of the architecture)
    /home/              # Home page feature
      /components/      # Components specific to the Home page
      /pages/
        HomePage.jsx    # Home page entry component
    /journeys/          # Journeys feature (browsing, details, filtering)
      /api/
        journeysApi.js  # Simulated API calls for journeys (e.g., fetchJourneys, fetchJourneyById)
        mockData.js     # Mock data for journeys, reviews, categories
      /components/      # UI components specific to Journeys (JourneyCard, FilterSidebar, etc.)
      /hooks/           # Custom React Hooks for Journeys (e.g., useJourneys, useJourneyDetails)
      /pages/           # Page components for Journeys (JourneysPage, JourneyDetailsPage)
      /skeletons/       # Skeleton loader components for Journeys feature
    /bookings/          # Bookings feature
      /api/
        bookingsApi.js  # Simulated API calls for bookings
        mockData.js     # Mock data for booking process
      /components/      # UI components specific to Bookings
      /pages/
        BookingFormPage.jsx # Page for the booking form
    /static/            # For static content pages
      /components/      # Components used only in static pages (if any)
      /pages/
        AboutUsPage.jsx
        FAQPage.jsx
        PrivacyPolicyPage.jsx
  /hooks/               # Globally shared custom React Hooks (if any, prefer feature-specific)
  /services/            # (Placeholder) For actual API service layers in the future
  /styles/              # Additional global styles or theme configurations (if not covered by index.css)
  /utils/               # Utility functions (e.g., date formatting, validation helpers)
.gitignore              # Specifies intentionally untracked files that Git should ignore
package.json            # Project metadata, dependencies, and scripts
README.md               # This file
tailwind.config.js      # Tailwind CSS configuration
vite.config.js          # Vite configuration (if using Vite)
```

---

## 💡 Key Concepts & Usage Notes

### Feature-Based Modularity
Each primary feature of the application (e.g., Journeys, Bookings, Home) is encapsulated within its own directory under `/src/features/`. This includes its specific API simulations, components, hooks, and pages.

### Mock APIs
- Business data is not hardcoded directly into components.
- Mock data is located in `src/features/[featureName]/api/mockData.js`.
- Simulated API calls are in `src/features/[featureName]/api/[featureName]Api.js`. These functions use `setTimeout` to mimic network latency and return Promises.
- This setup allows for easy replacement with real backend API calls in the future.

### Custom Hooks
- Custom hooks (e.g., `useJourneys`, `useJourneyDetails` in `/src/features/journeys/hooks/`) are used to encapsulate data fetching logic and state management for features, promoting reusability and separation of concerns.

### Static Content
- Static text content (for pages like About Us, FAQ, Privacy Policy) is centralized in `/src/constants/textConstants.js` and imported into the respective static pages in `/src/features/static/pages/`.

### Routing
- Main application routing is handled by `src/app/AppRouter.jsx` using `react-router-dom`.

### Styling
- **Tailwind CSS** is the primary styling solution, configured in `tailwind.config.js`.
- Global styles and Tailwind base imports are in `src/app/index.css`.

---

## 🔌 Backend Integration (Future)

The current application uses mock APIs. To integrate with a real backend:

1.  **Identify API Endpoints**: Determine the actual API endpoints for fetching journeys, categories, submitting bookings, etc.
2.  **Update API Functions**: Modify the functions in `src/features/[featureName]/api/[featureName]Api.js`.
    - Replace `setTimeout` and mock data resolution with actual `fetch` or `axios` calls to your backend.
    - Example (conceptual) for fetching journeys in `journeysApi.js`:
      ```javascript
      // Before (mock):
      // export const fetchJourneys = (filters) => {
      //   return new Promise((resolve) => {
      //     setTimeout(() => {
      //       let filteredJourneys = [...journeys];
      //       // ... filtering logic ...
      //       resolve(filteredJourneys);
      //     }, 500);
      //   });
      // };

      // After (real API call with fetch):
      // export const fetchJourneys = async (filters) => {
      //   const queryParams = new URLSearchParams(filters).toString();
      //   const response = await fetch(`/api/journeys?${queryParams}`); // Replace with your actual API base URL
      //   if (!response.ok) {
      //     throw new Error('Network response was not ok');
      //   }
      //   return response.json();
      // };
      ```
3.  **Environment Variables**: For API base URLs or keys, use environment variables (e.g., `.env` file with `VITE_API_URL=your_api_url`). Access them in your code using `import.meta.env.VITE_API_URL` (for Vite projects).
4.  **Error Handling**: Ensure robust error handling for API requests within the custom hooks or API service functions.

The custom hooks (`useJourneys`, etc.) are designed to remain largely unchanged, as they consume the Promises returned by the API functions. The primary changes will be within the `...Api.js` files.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

---

## 🧼 License

This project is licensed under the MIT License (or specify otherwise).

---

> Designed with ❤️ to honor Sri Lanka’s cultural spirit — powered by modern frontend engineering practices.
