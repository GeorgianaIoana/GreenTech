import { useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const MyProjects = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Proven Success Stories",
      description: "Each project in our collection reflects the passion and creativity we bring to every digital endeavor. From sleek corporate identities to high-converting real estate platforms, we transform complex ideas into seamless user experiences.",
      button: "Explore our work",
    },
    ro: {
      title: "Povești de Succes Reale",
      description: "Fiecare lucrare din colecția noastră ilustrează dedicarea și inovația pe care le aducem în fiecare demers digital. De la identități corporative sofisticate la platforme imobiliare cu rate de conversie remarcabile, convertim concepte elaborate în experiențe utilizator naturale și ușor de navigat.",
      button: "Explorează Portofoliul",
    },
  };

  const t = translations[language];
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

      // Check if we're on desktop (lg breakpoint = 1024px)
      const isDesktop = window.innerWidth >= 1024;

      // Desktop: Left side cards - push to the left
      if (isDesktop && leftProjects) {
        const cards = leftProjects.children;
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i] as HTMLElement;
          const rotation = scrollProgress * (-12 - i * 6);
          const translateX = -scrollProgress * (180 + i * 50);
          const translateY = scrollProgress * (i * 40);
          card.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg)`;
        }
      }

      // Desktop: Right side cards - push to the right
      if (isDesktop && rightProjects) {
        const cards = rightProjects.children;
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i] as HTMLElement;
          const rotation = scrollProgress * (12 + i * 6);
          const translateX = scrollProgress * (180 + i * 50);
          const translateY = scrollProgress * (i * 40);
          card.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg)`;
        }
      }

      // Text reveal animation
      if (textContent) {
        if (isDesktop) {
          // Desktop: original animation
          const textOpacity = scrollProgress;
          const textScale = 0.9 + scrollProgress * 0.1;
        textContent.style.opacity = Math.min(textOpacity * 1.5, 1).toString();
        textContent.style.transform = `scale(${textScale})`;
        } else {
          // Mobile/Tablet: text visible from start, subtle fade-in
          const textOpacity = Math.min(0.3 + scrollProgress * 0.7, 1);
          textContent.style.opacity = textOpacity.toString();
          textContent.style.transform = "scale(1)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Recalculate on resize
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      id: 1,
      title: "MA2",
      image: "/images/cosmetics.png",
      category: "Web Design",
      number: "01",
    },
    {
      id: 2,
      title: "Select Sites",
      image: "/images/food-wishes.png",
      category: "Mobile App",
      number: "02",
    },
    {
      id: 3,
      title: "Province La Spezia",
      image: "/images/travel-agency.png",
      category: "Branding",
      number: "03",
    },
    {
      id: 4,
      title: "Look Deep Into Nature",
      image: "/images/e-commerce-wood.png",
      category: "E-commerce",
      number: "04",
    },
  ];

  const leftProjects = projects.slice(0, 2);
  const rightProjects = projects.slice(2, 4);

  return (
    <section
      id="my-projects"
      className="bg-gradient-to-b from-teal-700 to-teal-50 overflow-visible"
    >
      {/* Animated Projects Section */}
      <div className="pt-6 md:pt-8 lg:pt-12 pb-32 md:pb-40 lg:pb-48 px-4 md:px-8 lg:px-24 xl:px-32 relative min-h-screen lg:min-h-screen flex flex-col overflow-visible">
        {/* Heading - Above cards */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 w-full mb-6 md:mb-8 lg:mb-10">
          <div
            ref={textContentRef}
            className="max-w-4xl mx-auto text-center transition-all duration-500 ease-out"
            style={{ opacity: 0, transform: "scale(0.9)" }}
          >
            {/* Main Heading */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-teal-50 mb-4 font-montserratAlt"
            >
              {t.title}
            </h2>

            {/* Description */}
            <p
              className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-full md:max-w-3xl mx-auto px-4 font-inter"
            >
              {t.description}
            </p>
          </div>
        </div>

        {/* Desktop Cards - Positioned below heading (lg and above) */}
        <div className="hidden lg:block relative flex items-center justify-center flex-1">
          {/* CTA Button - Center of cards */}
          <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-auto">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center space-x-2 md:space-x-3 bg-orange-400 hover:bg-yellow-400 text-slate-900 px-4 py-2 md:px-5 md:py-2.5 lg:px-8 lg:py-4 rounded-full text-xs md:text-sm lg:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {t.button}
            </button>
          </div>

          {/* Left Side - 2 Cards */}
          <div
            ref={leftProjectsRef}
            className="absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2 flex space-x-4 pointer-events-none"
            style={{ marginLeft: "-180px" }}
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
                    className={`w-full h-full object-cover ${
                      project.id === 4 ? "object-left" : ""
                    }`}
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
            className="absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2 flex -space-x-32 pointer-events-none"
            style={{ marginLeft: "180px" }}
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
                    className={`w-full h-full object-cover ${
                      project.id === 4 ? "object-left" : ""
                    }`}
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

        {/* Tablet & Mobile Cards - Grid layout (below lg) */}
        <div className="block lg:hidden mt-8 relative z-10">
          <div className="grid grid-cols-2 gap-4 px-4 relative">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`relative rounded-xl overflow-hidden shadow-xl aspect-[3/4] transition-transform duration-500 ease-out ${
                  project.id === 2 ? "md:-mt-8" : ""
                }`}
                style={{ opacity: 1 }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover ${
                      project.id === 4 ? "object-left" : ""
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <div className="text-white text-sm font-bold">
                      {project.number}
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-white">
                      <div className="text-xs text-gray-300 mb-1">
                        {project.category}
                      </div>
                      <div className="font-bold text-base leading-tight">
                        {project.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* CTA Button - Center of cards for mobile/tablet */}
            <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-40">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center space-x-2 md:space-x-3 bg-orange-400 hover:bg-yellow-400 text-slate-900 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {t.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
