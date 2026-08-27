import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WorkWithUs from "./components/WorkWithUs";
import Testimonial from "./components/Testimonial";
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsPage from "./components/ProjectsPage";
import ThankYou from "./components/ThankYou";
import CalendlySection from "./components/CalendlySection";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";
// Preload Calendly script by importing it
import "./components/Calendly";

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <MyProjects />
      <WorkWithUs />
      <Testimonial />
      <Contact />
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/schedule" element={<CalendlySection />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <FloatingWhatsApp />
          <ScrollToTop />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
