// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";

import Home from "./pages/Home";
import EBikes from "./pages/EBikes";
import Logistics from "./pages/Logistics";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookDelivery from "./pages/BookDelivery";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/e-bikes" element={<EBikes />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-delivery" element={<BookDelivery />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      {/* Optional: global smooth scroll for anchor links (#id) */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="min-h-screen flex flex-col bg-white relative">
        <Navbar />

        {/* Automatically scroll to top on route change */}
        <ScrollToTop />

        <main className="flex-grow">
          <AnimatedRoutes />
        </main>

        <Footer />

        {/* Floating back-to-top button */}
        <BackToTopButton />
      </div>
    </Router>
  );
}
