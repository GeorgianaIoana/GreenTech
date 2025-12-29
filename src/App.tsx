import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import TawkTo from "./components/TawkTo";

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
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/schedule" element={<CalendlySection />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
        <TawkTo />
      </div>
    </Router>
  );
}

export default App;
