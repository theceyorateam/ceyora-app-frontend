import Hero from "../components/Hero"; // Corrected path
import Offerings from "../components/Offerings"; // Corrected path
import ContactForm from "../../../components/common/ContactForm"; // Corrected path

const HomePage = () => ( // Renamed component to PascalCase
  <>
    <Hero />
    <Offerings />
    <ContactForm />
  </>
);

export default HomePage;
