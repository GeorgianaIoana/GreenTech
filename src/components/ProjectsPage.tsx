import React from "react";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cardVisible, setCardVisible] = useState(false);
  const [visibleWords, setVisibleWords] = useState(0);
  const [visibleStats, setVisibleStats] = useState(0);
  const [buttonHighlighted, setButtonHighlighted] = useState(false);
  
  const titleWords = ["My", "Personal", "Web", "Development", "Projects", "Portfolio"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const featuredSection = document.getElementById("featured-project");
      const heroSection = document.querySelector("section"); // First section (hero)
      const footer = document.querySelector("footer");

      const featuredTop = featuredSection?.offsetTop || 0;
      const sectionHeight = featuredSection?.offsetHeight || 0;
      const heroHeight = heroSection?.offsetHeight || 0;
      const footerTop = footer?.offsetTop || 0;
      const relativeScroll = scrollY - featuredTop;
      const progress = Math.max(
        0,
        Math.min(relativeScroll / (sectionHeight * 0.8), 1)
      );

      setScrollProgress(progress);

      // Control card position - settle instead of hide
      const windowHeight = window.innerHeight;
      const cardHeight = 400; // Approximate card height

      // Calculate if card should settle at top (touching banner)
      const isNearTop = scrollY < heroHeight - windowHeight / 2;

      // Calculate if card should settle at bottom (touching footer)
      const isNearFooter = scrollY + windowHeight > footerTop - cardHeight / 2;

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate title words appearing one by one
  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timer = setTimeout(() => {
        setVisibleWords(visibleWords + 1);
      }, 300); // 300ms delay between each word
      return () => clearTimeout(timer);
    }
  }, [visibleWords, titleWords.length]);

  const goToContact = () => {
    navigate("/#contact");
  };

  const stats = [
    { number: "1", label: "call" },
    { number: "2", label: "meet" },
    { number: "3", label: "development" },
    { number: "4", label: "delivery" },
  ];


  useEffect(() => {
    if (visibleWords === titleWords.length && visibleStats < stats.length) {
      const timer = setTimeout(() => {
        setVisibleStats(visibleStats + 1);
      }, 400); // 400ms delay between each stat
      return () => clearTimeout(timer);
    }
  }, [visibleWords, visibleStats, titleWords.length, stats.length]);


  useEffect(() => {
    if (visibleStats === stats.length) {
      const timer = setTimeout(() => {
        setButtonHighlighted(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [visibleStats, stats.length]);

  const projects = [
    {
      title: "Chess Club Presentation Website",
      description:
        "We designed and developed a modern presentation website for a chess club, focused on clearly communicating the club’s identity, values, and activities through a clean and professional digital presence. The interface was designed in Figma with careful attention to branding and usability, then implemented using React and TypeScript to ensure a scalable, high-performance, and maintainable front-end solution.",
      buttonText: "View Project",
      bgColor: "#fb923c", 
      projectNumber: "01",
      image: "/first-card.webp",
      url: "https://www.thesquarechessclub.com/",
    },
    {
      title: "E-commerce Bags Shop",
      description:
        "This online store was initially designed in Figma and later developed using HTML, CSS, and JavaScript. The project combines the practical functionality of online sales with a modern, clean, and well-structured visual identity that effectively promotes both the brand and its products. Particular attention was given to usability, intuitive navigation, and visual hierarchy, ensuring a smooth shopping experience that guides users naturally from product discovery to purchase. ",
      buttonText: "View Project",
      bgColor: "#fb7185", 
      projectNumber: "02",
      image: "/2sn project.png",
    },
    {
      title: "Collaboration & Workflow",
      description:
        "Every project is developed through a structured and transparent process, working alongside a dedicated team of designers and developers to ensure high-quality results. We collaborate closely with the client at every stage, from concept and strategy to design and development, transforming ideas into a refined digital product. By combining clear communication, industry best practices, and modern technologies, we deliver websites that are visually compelling, technically reliable, and tailored to support each client’s business goals.",
      buttonText: "Let's start",
      bgColor: "#07615b",
      projectNumber: "03",
      image: "/your-project.jpg",
    },
  ];

  const currentProject = projects[currentImageIndex];

  const interpolatedBgColor = currentProject.bgColor;

  // Color interpolation function
  const interpolateColor = (color1: string, color2: string, factor: number) => {
    // Extract RGB values from hex strings
    const getRGB = (color: string) => {
      // Remove # if present
      const hex = color.replace("#", "");
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

    return `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };

  // Calculate blended background color based on scroll progress
  const getBlendedBackgroundColor = () => {
    if (scrollProgress <= 0.33) {
      // Pure first color - matches transition SVG exactly
      return projects[0].bgColor;
    } else if (scrollProgress < 0.66) {
      // Transition from first to second color
      const localProgress = (scrollProgress - 0.33) / 0.33;
      return interpolateColor(
        projects[0].bgColor,
        projects[1].bgColor,
        localProgress
      );
    } else {
      // Transition from second to third color
      const localProgress = (scrollProgress - 0.66) / 0.34;
      return interpolateColor(
        projects[1].bgColor,
        projects[2].bgColor,
        localProgress
      );
    }
  };

  const blendedBgColor = getBlendedBackgroundColor();

  // Function to darken a color for shadow effect
  const darkenColor = (color: string, factor: number = 0.3) => {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const newR = Math.round(r * (1 - factor));
    const newG = Math.round(g * (1 - factor));
    const newB = Math.round(b * (1 - factor));
    return `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
  };

  const shadowBgColor = darkenColor(blendedBgColor, 0.12);

  // Dynamic image - changes with scroll
  const currentImage = currentProject.image;

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            className="w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{ width: '100%', height: '100%' }}
          >
            <source src="/projects-banner.mp4" type="video/mp4" />
            Browser-ul tău nu suportă tag-ul video.
          </video>
        </div>

        <div className="container  z-10">
          <div className="max-w-6xl mx-auto ">
            {/* Main Title */}
            <div className="flex justify-start">
              <div className="max-w-xl text-left">
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight font-montserratAlt"
                >
                  <span className="inline-block">
                    {titleWords.slice(0, 4).map((word, index) => (
                      <span
                        key={index}
                        className={`inline-block ${
                          visibleWords > index
                            ? "opacity-100 animate-bounce-in"
                            : "opacity-0 translate-y-8 scale-75"
                        }`}
                        style={{
                          transitionDelay: `${index * 150}ms`,
                          animationDelay: `${index * 150}ms`,
                        }}
                      >
                        {word}
                        {index < 3 && "\u00A0"}
                      </span>
                    ))}
                  </span>
                  <br />
                  <span className="inline-block">
                    {titleWords.slice(4).map((word, index) => (
                      <span
                        key={index + 4}
                        className={`inline-block ${
                          visibleWords > index + 4
                            ? "opacity-100 animate-bounce-in"
                            : "opacity-0 translate-y-8 scale-75"
                        }`}
                        style={{
                          transitionDelay: `${(index + 4) * 150}ms`,
                          animationDelay: `${(index + 4) * 150}ms`,
                        }}
                      >
                        {word}
                        {index < 1 && "\u00A0"}
                      </span>
                    ))}
                  </span>
                </h1>

                <p
                  className="text-lg text-white/80 mb-40 font-montserratAlt"
                  style={{
                    textShadow: '3px 3px 12px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 0, 0, 0.4)',
                    maxWidth: '400px'
                  }}
                >
                  Explore my latest web development projects showcasing modern
                  technologies, creative solutions, and user-centered design
                  approaches.
                </p>
              </div>
            </div>

            {/* Stats on the right side - vertical */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-8 items-center pr-2 md:pr-4 z-20 md:mr-14 md:mt-10">
              {stats.map(({ number, label }, index) => (
                <div
                  key={label}
                  className={`flex flex-col items-center transition-all duration-500 ${
                    visibleStats > index
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 border border-yellow-100/30 rounded-full mb-2">
                    <span className="text-lg font-bold text-yellow-100">
                      {number}
                    </span>
                  </div>
                  <div className="text-yellow-100 text-sm uppercase tracking-wider font-montserratAlt">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mt-8 max-w-xl">
              <button
                onClick={goToContact}
                className={`inline-flex items-center space-x-3 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserratAlt ${
                  buttonHighlighted ? "animate-pulse ring-4 ring-yellow-500 ring-opacity-75" : ""
                }`}
                style={{ backgroundColor: "#fb923c" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#eab308";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#fb923c";
                }}
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Transition */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-20 transition-banner"
            style={{ fill: projects[0].bgColor }}
          >
            <polygon points="0,120 0,80 350,30 500,80 700,60 1000,10 1200,80 1200,120"></polygon>
          </svg>
        </div>
      </section>

      <section
        id="featured-project"
        className="relative py-20"
        style={{
          backgroundColor: blendedBgColor,
          transition: "background-color 0.3s ease-out",
          minHeight: "350vh", // Scroll space for smooth animation with 3 projects
        }}
      >
        {/* Left side text sections */}
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl">
            {/* Left Column - Text Sections */}
            <div className="space-y-[80vh]">
              {projects.map((project, index) => (
                <div key={project.projectNumber} className="py-20 max-w-[400px]">
                  {/* Project Number */}
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-sm font-medium tracking-wider uppercase text-white/80 font-montserratAlt">
                      {project.projectNumber} Project
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white transition-all duration-1000 ease-in-out font-montserratAlt"
                  >
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="text-xl text-white/90 leading-relaxed max-w-[350px] mb-12 transition-all duration-1000 ease-in-out font-montserratAlt"
                  >
                    {project.description}
                  </p>

                  {/* Button */}
                  <button
                    onClick={() => {
                      if (project.url) {
                        window.open(project.url, "_blank", "noopener,noreferrer");
                      } else {
                        goToContact();
                      }
                    }}
                    className="inline-flex items-center space-x-3 bg-emerald-950 hover:bg-emerald-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserratAlt"
                  >
                    <span>{project.buttonText}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Right Column - Sticky Card */}
            <div className="lg:sticky lg:top-24 lg:h-fit display:flex">
              <div
                className={`rounded-3xl px-8 lg:px-12 py-16 lg:py-24 h-[75vh] flex items-center shadow-2xl mx-8 lg:mx-20 relative overflow-hidden`}
                style={{
                  background: currentImageIndex === 2 
                    ? `linear-gradient(to bottom right, #fce6e7 0%, #e8c5ca 50%, #c79fa5 100%)`
                    : `linear-gradient(to bottom right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.4) 15%, rgba(255, 255, 255, 0.25) 30%, rgba(255, 255, 255, 0.15) 45%, ${blendedBgColor} 60%, ${shadowBgColor} 85%, ${shadowBgColor} 100%)`,
                  transition: "background 0.3s ease-out",
                }}
              >
                <div className="w-full">
                  {/* Device Frame with Static Image */}
                  <div className="relative h-full flex items-center">
                    {/* Image Container */}
                    <div className="relative w-[90%] h-96 lg:h-[28rem] rounded-lg overflow-hidden mx-auto" style={{ boxShadow: '20px 50px 120px -20px rgba(0, 0, 0, 0.7), 10px 25px 60px -15px rgba(0, 0, 0, 0.5)' }}>
                      {/* Image Stack - Instagram Style */}
                      <div className="relative w-full h-full">
                        {projects.map((project, index) => {
                          let translateY = 0;

                          // Adjust scroll regions to start transition after text
                          if (scrollProgress < 0.33) {
                            // First image region
                            if (index === 0) {
                              translateY = 0;
                            } else if (index === 1) {
                              // Start transition only after 0.25 (after first text)
                              const localProgress = Math.max(
                                0,
                                (scrollProgress - 0.25) / 0.08
                              );
                              translateY = 100 - localProgress * 100;
                            } else {
                              translateY = 100;
                            }
                          } else if (scrollProgress < 0.66) {
                            // Second image region
                            if (index === 0) {
                              const localProgress =
                                (scrollProgress - 0.33) / 0.08;
                              translateY = -(localProgress * 100);
                            } else if (index === 1) {
                              translateY = 0;
                            } else if (index === 2) {
                              // Start transition only after 0.58 (after second text)
                              const localProgress = Math.max(
                                0,
                                (scrollProgress - 0.58) / 0.08
                              );
                              translateY = 100 - localProgress * 100;
                            }
                          } else {
                            // Third image region
                            if (index === 0) {
                              translateY = -100;
                            } else if (index === 1) {
                              const localProgress =
                                (scrollProgress - 0.66) / 0.08;
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
                                transition: "none", // Remove CSS transitions, use scroll-based animation
                              }}
                            >
                              {project.url ? (
                                <button
                                  onClick={() => {
                                    window.open(project.url, "_blank", "noopener,noreferrer");
                                  }}
                                  className="w-full h-full cursor-pointer hover:opacity-90 transition-opacity"
                                  aria-label={`Visit ${project.title}`}
                                >
                                  <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                  />
                                </button>
                              ) : (
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-full object-cover"
                                />
                              )}
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

    </div>
  );
};

export default ProjectsPage;
