import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WorkWithUs from './components/WorkWithUs';
import Testimonial from './components/Testimonial';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;