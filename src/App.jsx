import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop"; // Corrected path
import AppRouter from "./app/AppRouter"; // Corrected path

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRouter />
    </Router>
  );
}

export default App;
