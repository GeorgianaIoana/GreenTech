import React from 'react';
import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const featuredSection = document.getElementById('featured-project');
      const heroSection = document.querySelector('section'); // First section (hero)
      const footer = document.querySelector('footer');
      
      const featuredTop = featuredSection?.offsetTop || 0;
      const sectionHeight = featuredSection?.offsetHeight || 0;
      const heroHeight = heroSection?.offsetHeight || 0;
      const footerTop = footer?.offsetTop || 0;
      const relativeScroll = scrollY - featuredTop;
      const progress = Math.max(0, Math.min(relativeScroll / (sectionHeight * 0.8), 1));
      
      setScrollProgress(progress);
      
      // Control card position - settle instead of hide
      const windowHeight = window.innerHeight;
      const cardHeight = 400; // Approximate card height
      
      // Calculate if card should settle at top (touching banner)
      const isNearTop = scrollY < heroHeight - windowHeight/2;
      
      // Calculate if card should settle at bottom (touching footer)
      const isNearFooter = scrollY + windowHeight > footerTop - cardHeight/2;
      
      const shouldShowCard = true; // Always show card, just change position
      
      setCardVisible(shouldShowCard);
      
      // Determine which project to show based on scroll progress
      if (progress < 0.33) {
        setCurrentImageIndex(0);
      } else if (progress < 0.66) {
        setCurrentImageIndex(1);
      } else {
        setCurrentImageIndex(2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToContact = () => {
    navigate('/#contact');
  };

  const goHome = () => {
    navigate('/');
  };

  const stats = [
    { number: '1', label: 'call' },
    { number: '2', label: 'meet' },
    { number: '3', label: 'development' },
    { number: '4', label: 'delivery' },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payments, and responsive design...",
      buttonText: "View Project",
      bgColor: "#2e4d70", // Dark blue
      projectNumber: "01",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface...",
      buttonText: "Explore App",
      bgColor: "#856546", // Brown
      projectNumber: "02",
      image: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Portfolio Website",
      description: "A stunning portfolio website showcasing creative work with smooth animations, interactive galleries, and optimized performance...",
      buttonText: "See Portfolio",
      bgColor: "#05625c", // Dark teal
      projectNumber: "03",
      image: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const currentProject = projects[currentImageIndex];
  
  const interpolatedBgColor = currentProject.bgColor;

  // Color interpolation function
  const interpolateColor = (color1: string, color2: string, factor: number) => {
    // Extract RGB values from hex strings
    const getRGB = (color: string) => {
      // Remove # if present
      const hex = color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      return [r, g, b];
    };

    const rgb1 = getRGB(color1);
    const rgb2 = getRGB(color2);

    const r = Math.round(rgb1[0] + (rgb2[0] - rgb1[0]) * factor);
    const g = Math.round(rgb1[1] + (rgb2[1] - rgb1[1]) * factor);
    const b = Math.round(rgb1[2] + (rgb2[2] - rgb1[2]) * factor);

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  // Calculate blended background color based on scroll progress
  const getBlendedBackgroundColor = () => {
    if (scrollProgress < 0.25) {
      // Pure first color
      return projects[0].bgColor;
    } else if (scrollProgress < 0.42) {
      // Transition from first to second color
      const localProgress = (scrollProgress - 0.25) / 0.17;
      return interpolateColor(projects[0].bgColor, projects[1].bgColor, localProgress);
    } else if (scrollProgress < 0.58) {
      // Pure second color
      return projects[1].bgColor;
    } else if (scrollProgress < 0.75) {
      // Transition from second to third color
      const localProgress = (scrollProgress - 0.58) / 0.17;
      return interpolateColor(projects[1].bgColor, projects[2].bgColor, localProgress);
    } else {
      // Pure third color
      return projects[2].bgColor;
    }
  };

  const blendedBgColor = getBlendedBackgroundColor();

  // Dynamic image - changes with scroll
  const currentImage = currentProject.image;

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-900/40"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 leading-tight max-w-4xl mx-auto" style={{ fontFamily: 'Merriweather, serif' }}>
              My Personal Web Development
              <br />
              Projects Portfolio
            </h1>
            
            <p className="text-lg text-white/80 mb-16 max-w-2xl mx-auto" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Explore my latest web development projects showcasing modern technologies, 
              creative solutions, and user-centered design approaches.
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map(({ number, label }) => (
                <div key={label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 border border-white/30 rounded-full mb-4">
                    <span className="text-lg font-bold text-white">{number}</span>
                  </div>
                  <div className="text-white/70 text-sm uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
              <button 
                onClick={goHome}
                className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:bg-white/20"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </button>
              <button 
                onClick={goToContact}
                className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20" style={{ fill: '#2e4d70' }}>
            <polygon points="0,120 0,80 350,30 500,80 700,60 1000,10 1200,80 1200,120"></polygon>
          </svg>
        </div>
      </section>

      <section 
        id="featured-project" 
        className="relative py-20" 
        style={{ 
          backgroundColor: blendedBgColor,
          transition: 'background-color 0.3s ease-out',
          minHeight: '400vh' // Large scroll space for smooth animation
        }}
      >
        {/* Left side text sections */}
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Column - Text Sections */}
            <div className="space-y-[100vh]">
              {projects.map((project, index) => (
                <div key={project.projectNumber} className="py-20">
                  {/* Project Number */}
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-sm font-medium tracking-wider uppercase text-white/80">
                      {project.projectNumber} Project
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white transition-all duration-1000 ease-in-out" style={{ fontFamily: 'Merriweather, serif' }}>
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-12 transition-all duration-1000 ease-in-out" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {project.description}
                  </p>

                  {/* Button */}
                  <button
                    onClick={goToContact}
                    className="inline-flex items-center space-x-3 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <span>{project.buttonText}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Right Column - Sticky Card */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <div 
                className={`rounded-3xl p-8 lg:p-12 h-[70vh] flex items-center shadow-2xl`}
                style={{ 
                  backgroundColor: blendedBgColor,
                  transition: 'background-color 0.3s ease-out' 
                }}
              >
                <div className="w-full">
                  {/* Device Frame with Static Image */}
                  <div className="relative h-full flex items-center">
                    {/* Image Container */}
                    <div className="relative w-4/5 h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mx-auto">
                      {/* Image Stack - Instagram Style */}
                      <div className="relative w-full h-full">
                        {projects.map((project, index) => {
                          let translateY = 0;
                          
                          // Adjust scroll regions to start transition after text
                          if (scrollProgress < 0.4) {
                            // First image region (0 - 0.33)
                            if (index === 0) {
                              translateY = 0;
                            } else if (index === 1) {
                              // Start transition only after 0.25 (after first text)
                              const localProgress = Math.max(0, (scrollProgress - 0.25) / 0.15);
                              translateY = 100 - (localProgress * 100);
                            } else {
                              translateY = 100;
                            }
                          } else if (scrollProgress < 0.7) {
                            // Second image region (0.33 - 0.66)
                            if (index === 0) {
                              const localProgress = (scrollProgress - 0.4) / 0.15;
                              translateY = -(localProgress * 100);
                            } else if (index === 1) {
                              translateY = 0;
                            } else if (index === 2) {
                              // Start transition only after 0.55 (after second text)
                              const localProgress = Math.max(0, (scrollProgress - 0.55) / 0.15);
                              translateY = 100 - (localProgress * 100);
                            }
                          } else {
                            // Third image region (0.66 - 1)
                            if (index === 0) {
                              translateY = -100;
                            } else if (index === 1) {
                              const localProgress = (scrollProgress - 0.7) / 0.15;
                              translateY = -(localProgress * 100);
                            } else if (index === 2) {
                              translateY = 0;
                            }
                          }
                          
                          return (
                            <div
                              key={index}
                              className="absolute inset-0"
                              style={{
                                transform: `translateY(${translateY}%)`,
                                transition: 'none' // Remove CSS transitions, use scroll-based animation
                              }}
                            >
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom section to allow scroll past the card */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">Ready to start your project?</h3>
          <button
            onClick={goToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            Contact Me
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;