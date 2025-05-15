import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../components/layout/DefaultLayout"; // Corrected path

// Public pages
import HomePage from "../features/home/pages/HomePage"; // Corrected path and name
import AboutUsPage from "../features/static/pages/AboutUsPage"; // Corrected path and name
import FAQPage from "../features/static/pages/FAQPage"; // Corrected path and name
import PrivacyPolicyPage from "../features/static/pages/PrivacyPolicyPage"; // Corrected path and name
import ContactForm from "../components/common/ContactForm"; // Corrected path

// Feature pages
import JourneysPage from "../features/journeys/pages/JourneysPage";
import JourneyDetailsPage from "../features/journeys/pages/JourneyDetailsPage";
import BookingFormPage from "../features/bookings/pages/BookingFormPage"; // Corrected name

const AppRouter = () => (
  <DefaultLayout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/contact" element={<ContactForm />} /> {/* Assuming ContactForm is a page/route here, might need its own page component */}
      <Route path="/journeys" element={<JourneysPage />} />
      <Route path="/journey/:id" element={<JourneyDetailsPage />} />
      <Route path="/book" element={<BookingFormPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
    </Routes>
  </DefaultLayout>
);

export default AppRouter;
