import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const MyProjects = () => {
  const leftProjectsRef = useRef<HTMLDivElement>(null);
  const rightProjectsRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionTop = document.getElementById("my-projects")?.offsetTop || 0;
      const sectionHeight = window.innerHeight;
      const scrollProgress = Math.max(
        0,
        Math.min((scrollY - sectionTop + sectionHeight) / sectionHeight, 1)
      );

      const leftProjects = leftProjectsRef.current;
      const rightProjects = rightProjectsRef.current;
      const textContent = textContentRef.current;

      // Left side cards - push to the left
      if (leftProjects) {
        const cards = leftProjects.children;
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i] as HTMLElement;
          const rotation = scrollProgress * (-15 - i * 8); // Rotate as they move
          const translateX = -scrollProgress * (200 + i * 60); // Push further left
          const translateY = scrollProgress * (i * 40); // Slight vertical spread

          card.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg)`;
        }
      }

      // Right side cards - push to the right
      if (rightProjects) {
        const cards = rightProjects.children;
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i] as HTMLElement;
          const rotation = scrollProgress * (15 + i * 8); // Rotate as they move
          const translateX = scrollProgress * (200 + i * 60); // Push further right
          const translateY = scrollProgress * (i * 40); // Slight vertical spread

          card.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg)`;
        }
      }

      // Text reveal animation
      if (textContent) {
        const textOpacity = scrollProgress; // Text appears as cards move
        const textScale = 0.9 + scrollProgress * 0.1; // Subtle scale

        textContent.style.opacity = Math.min(textOpacity * 1.5, 1).toString();
        textContent.style.transform = `scale(${textScale})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      id: 1,
      title: "MA2",
      image:
        "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Web Design",
      number: "01",
    },
    {
      id: 2,
      title: "Select Sites",
      image:
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Mobile App",
      number: "02",
    },
    {
      id: 3,
      title: "Province La Spezia",
      image:
        "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Branding",
      number: "03",
    },
    {
      id: 4,
      title: "Look Deep Into Nature",
      image:
        "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "E-commerce",
      number: "04",
    },
  ];

  const leftProjects = projects.slice(0, 2);
  const rightProjects = projects.slice(2, 4);

  return (
    <section
      id="my-projects"
      className="bg-gradient-to-b from-teal-700 to-teal-50"
    >
      {/* Animated Projects Section */}
      <div className="py-20 overflow-hidden relative min-h-screen flex items-center">
        {/* Text Content - Always centered */}
        <div className="container mx-auto px-6 relative z-10">
          <div
            ref={textContentRef}
            className="max-w-4xl mx-auto text-center transition-all duration-500 ease-out"
            style={{ opacity: 0, transform: "scale(0.9)" }}
          >
            {/* Main Heading */}
            <h2
              className="text-4xl md:text-5xl font-bold text-teal-50 mb-4"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              Some Of
              <br />
              <span className="text-teal-800">Our Work</span>
            </h2>

            {/* Description */}
            <p
              className="text-lg text-gray-700 leading-relaxed max-w-[300px] mx-auto mb-12 max-w-3xl sm:pr-[30px]"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Each project in our collection reflects the passion and creativity
              we bring to every digital endeavor. From sleek
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="inline-flex items-center space-x-3 bg-orange-400 hover:bg-yellow-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="text-black">Explore our work</span>
            </button>
          </div>
        </div>

        {/* Project Cards - Positioned to initially cover text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Left Side - 2 Cards */}
          <div
            ref={leftProjectsRef}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-4"
            style={{ marginLeft: "-200px" }}
          >
            {leftProjects.map((project, index) => (
              <div
                key={project.id}
                className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 ease-out"
                style={{ zIndex: 10 + index }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 right-6">
                    <div className="text-white text-lg font-bold">
                      {project.number}
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white">
                      <div className="text-sm text-gray-300 mb-2">
                        {project.category}
                      </div>
                      <div className="font-bold text-2xl">{project.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - 2 Cards */}
          <div
            ref={rightProjectsRef}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex -space-x-32"
            style={{ marginLeft: "200px" }}
          >
            {rightProjects.map((project, index) => (
              <div
                key={project.id}
                className={`w-80 h-96 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 ease-out ${
                  index === 1 ? "-mt-8" : ""
                }`}
                style={{ zIndex: 10 + index }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 right-6">
                    <div className="text-white text-lg font-bold">
                      {project.number}
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white">
                      <div className="text-sm text-gray-300 mb-2">
                        {project.category}
                      </div>
                      <div className="font-bold text-2xl">{project.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
