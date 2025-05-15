import Header from "./Header"; // Corrected path
import Footer from "./Footer"; // Corrected path

const DefaultLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
