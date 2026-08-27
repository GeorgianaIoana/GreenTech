import { useEffect, useRef, useState } from "react";
import {
  Leaf,
  Users,
  TrendingUp,
  Lightbulb,
  Target,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const goToSchedule = () => {
    navigate("/schedule");
  };

  const translations = {
    en: {
      title: "What we offer",
      description: "As a strong online presence becomes essential, we bridge the gap between sustainability and success. We create eco-friendly, high-performance websites that reduce digital carbon footprints while maximizing lead generation. By optimizing every server operation and design element, we ensure a lightning-fast experience that turns environmentally conscious visitors into loyal clients.",
      button: "Work With Us",
      services: [
        {
          title: "Web Development",
          description: "Responsive websites and clean code",
          image: "/images/web-development.jpg",
          badge: "Sustainable",
          icon: Leaf,
          price: "From €600 - 2,500 / project",
        },
        {
          title: "UX/UI design in figma",
          description: "Clean designs built for speed and beauty.",
          image: "/images/home-design.jpg",
          badge: "Eco-first",
          icon: Target,
          price: "From €600",
        },
        {
          title: "Green Hosting",
          description: "Green hosting setup for lower digital carbon footprint",
          image: "/images/green-hosting.jpg",
          badge: "Planet-first",
          icon: TrendingUp,
          price: "From €20 / month",
        },
        {
          title: "Website Maintenance and Technical Support",
          description: "Keeping your website updated, secure, and optimised",
          image: "/green-house.jpg",
          badge: "Future-friendly",
          icon: Lightbulb,
          price: "From €30 / hour",
        },
        {
          title: "Authentic Brand Identity",
          description: "We use Adobe Illustrator to create an impactful brand identity.",
          image: "/images/tree-team.jpg",
          badge: "Nature-led",
          icon: Users,
          price: "From €300",
        },
      ],
    },
    ro: {
      title: "Ce oferim",
      description: "Într-o lume digitală în continuă schimbare, succesul unei afaceri începe cu o prezență online responsabilă. Construim platforme de înaltă performanță, unde sustenabilitatea întâlnește eficiența comercială. Optimizăm fiecare detaliu, de la estetică până la funcționalitate, pentru a oferi o experiență fluidă care transformă vizitatorii în clienți loiali.",
      button: "Programează o conversație",
      services: [
        {
          title: "Transpunerea afacerii tale în online",
          description: "Site-uri rapide, gândite să reziste în timp.",
          image: "/images/web-development.jpg",
          badge: "Durabil",
          icon: Leaf,
          price: "De la €600 - 2,500 / proiect",
        },
        {
          title: "Design UX/UI în Figma",
          description: "Interfețe moderne și performante",
          image: "/images/home-design.jpg",
          badge: "Eco-first",
          icon: Target,
          price: "De la €600",
        },
        {
          title: "Hosting alimentat prin energie solară",
          description: "Performanță online, energie sustenabilă.",
          image: "/images/green-hosting.jpg",
          badge: "Planet-first",
          icon: TrendingUp,
          price: "De la €20 / lună",
        },
        {
          title: "Întreținere și Suport Tehnic",
          description: "Monitorizăm constant performanța și securitatea, ca tu să te poți ocupa de afacere.",
          image: "/green-house.jpg",
          badge: "Future-friendly",
          icon: Lightbulb,
          price: "De la €30 / oră",
        },
        {
          title: "Identitate de Brand",
          description: "Creăm identități de brand memorabile cu Adobe Illustrator",
          image: "/images/tree-team.jpg",
          badge: "Nature-led",
          icon: Users,
          price: "De la €300",
        },
      ],
    },
  };

  const t = translations[language];
  const services = t.services;

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-12 md:py-14 lg:py-20 bg-gradient-to-b from-teal-50 to-teal-700"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 md:mb-12 lg:mb-16">
            <div className="lg:max-w-2xl">
              <h2
                className={`text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4 lg:mb-6 font-montserratAlt opacity-0 ${
                  isVisible ? 'animate-fadeInLeft' : ''
                }`}
              >
                {t.title}
              </h2>
              <p
                className={`text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-[1100px] font-inter opacity-0 ${
                  isVisible ? 'animate-fadeInLeft delay-200' : ''
                }`}
              >
                {t.description}
              </p>
            </div>
            <div className={`mt-4 md:mt-6 lg:mt-0 opacity-0 ${isVisible ? 'animate-fadeInRight delay-300' : ''}`}>
              <button
                onClick={goToSchedule}
                className="bg-orange-400 text-black px-5 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full text-sm md:text-sm lg:text-base font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t.button}
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-6">
            {/* First row - 2 cards on tablet, 3 on desktop */}
            {services.slice(0, 2).map((service, index) => (
              <div
                key={service.title}
                onClick={scrollToContact}
                className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer card-hover opacity-0 ${
                  isVisible ? 'animate-fadeInUp' : ''
                }`}
                style={{ animationDelay: isVisible ? `${400 + index * 150}ms` : '0ms' }}
              >
                <div className="aspect-[5/3] md:aspect-[4/3] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-500 filter brightness-100 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3 md:top-4 md:left-4">
                    <div className="flex items-center space-x-1.5 md:space-x-2 bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                      <service.icon className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{service.badge}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6">
                    <div className="flex items-start justify-between mb-1.5 md:mb-2">
                      <h3
                        className="text-sm md:text-base lg:text-lg font-semibold text-white font-montserratAlt"
                      >
                        {service.title}
                      </h3>
                      <div className="bg-orange-400 text-slate-900 px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-xs md:text-sm font-bold whitespace-nowrap ml-2">
                        {service.price}
                      </div>
                    </div>
                    <div className="space-y-0.5 md:space-y-1">
                      <p
                        className="text-gray-200 text-xs md:text-xs lg:text-sm leading-relaxed tracking-wide max-w-m font-montserratAlt"
                      >
                        {service.description.split(". ")[0]}.
                      </p>
                      {service.description.includes(". ") && (
                        <p
                          className="text-gray-200 text-xs md:text-xs lg:text-sm leading-relaxed tracking-wide max-w-m font-montserratAlt"
                        >
                          {service.description.split(". ").slice(1).join(". ")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Third card - only visible on desktop */}
            {services.slice(2, 3).map((service) => (
              <div
                key={service.title}
                onClick={scrollToContact}
                className={`hidden lg:block group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer card-hover opacity-0 ${
                  isVisible ? 'animate-fadeInUp' : ''
                }`}
                style={{ animationDelay: isVisible ? '700ms' : '0ms' }}
              >
                <div className="aspect-[5/3] md:aspect-[4/3] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-500 filter brightness-100 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3 md:top-4 md:left-4">
                    <div className="flex items-center space-x-1.5 md:space-x-2 bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                      <service.icon className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{service.badge}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6">
                    <div className="flex items-start justify-between mb-1.5 md:mb-2">
                      <h3
                        className="text-sm md:text-base lg:text-lg font-semibold text-white font-montserratAlt"
                      >
                        {service.title}
                      </h3>
                      <div className="bg-orange-400 text-slate-900 px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-xs md:text-sm font-bold whitespace-nowrap ml-2">
                        {service.price}
                      </div>
                    </div>
                    <div className="space-y-0.5 md:space-y-1">
                      <p
                        className="text-gray-200 text-xs md:text-xs lg:text-sm leading-relaxed tracking-wide max-w-m font-montserratAlt"
                      >
                        {service.description.split(". ")[0]}.
                      </p>
                      {service.description.includes(". ") && (
                        <p
                          className="text-gray-200 text-xs md:text-xs lg:text-sm leading-relaxed tracking-wide max-w-m font-montserratAlt"
                        >
                          {service.description.split(". ").slice(1).join(". ")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Second row - 2 cards on tablet (services[2] and services[3]), 2 cards on desktop (services[3] and services[4]) */}
            <div className="md:col-span-2 lg:col-span-3 grid md:grid-cols-2 gap-4 md:gap-4 lg:gap-6">
              {/* Service 2 - visible on tablet only */}
              {services.slice(2, 3).map((service) => (
                <div
                  key={service.title}
                  onClick={scrollToContact}
                  className={`hidden md:block lg:hidden group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer card-hover opacity-0 ${
                    isVisible ? 'animate-fadeInUp' : ''
                  }`}
                  style={{ animationDelay: isVisible ? '700ms' : '0ms' }}
                >
                  <div className="aspect-[5/3] md:aspect-[4/3] relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-500 filter brightness-100 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Badge */}
                    <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <div className="flex items-center space-x-1.5 md:space-x-2 bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                        <service.icon className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{service.badge}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6">
                      <div className="flex items-start justify-between mb-1.5 md:mb-2 lg:mb-3">
                        <h3
                          className="text-base md:text-lg lg:text-xl font-bold text-white font-montserratAlt"
                        >
                          {service.title}
                        </h3>
                        <div className="bg-orange-400 text-slate-900 px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-xs md:text-sm font-bold whitespace-nowrap ml-2">
                          {service.price}
                        </div>
                      </div>
                      <div className="space-y-0.5 md:space-y-1">
                        <p
                          className="text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed tracking-wide max-w-l font-montserratAlt"
                        >
                          {service.description.split(". ")[0]}.
                        </p>
                        {service.description.includes(". ") && (
                          <p
                            className="text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed tracking-wide max-w-l font-montserratAlt"
                          >
                            {service.description
                              .split(". ")
                              .slice(1)
                              .join(". ")}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Service 3 - visible on all */}
              {services.slice(3, 4).map((service) => (
                <div
                  key={service.title}
                  onClick={scrollToContact}
                  className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer card-hover opacity-0 ${
                    isVisible ? 'animate-fadeInUp' : ''
                  }`}
                  style={{ animationDelay: isVisible ? '850ms' : '0ms' }}
                >
                  <div className="aspect-[5/3] md:aspect-[4/3] relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-500 filter brightness-100 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Badge */}
                    <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <div className="flex items-center space-x-1.5 md:space-x-2 bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                        <service.icon className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{service.badge}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6">
                      <div className="flex items-start justify-between mb-1.5 md:mb-2 lg:mb-3">
                        <h3
                          className="text-base md:text-lg lg:text-xl font-bold text-white font-montserratAlt"
                        >
                          {service.title}
                        </h3>
                        <div className="bg-orange-400 text-slate-900 px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-xs md:text-sm font-bold whitespace-nowrap ml-2">
                          {service.price}
                        </div>
                      </div>
                      <div className="space-y-0.5 md:space-y-1">
                        <p
                          className="text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed tracking-wide max-w-l font-montserratAlt"
                        >
                          {service.description.split(". ")[0]}.
                        </p>
                        {service.description.includes(". ") && (
                          <p
                            className="text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed tracking-wide max-w-l font-montserratAlt"
                          >
                            {service.description
                              .split(". ")
                              .slice(1)
                              .join(". ")}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Service 4 - visible on desktop only */}
              {services.slice(4, 5).map((service) => (
                <div
                  key={service.title}
                  onClick={scrollToContact}
                  className={`hidden lg:block group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer card-hover opacity-0 ${
                    isVisible ? 'animate-fadeInUp' : ''
                  }`}
                  style={{ animationDelay: isVisible ? '1000ms' : '0ms' }}
                >
                  <div className="aspect-[5/3] md:aspect-[4/3] relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-500 filter brightness-100 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Badge */}
                    <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <div className="flex items-center space-x-1.5 md:space-x-2 bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                        <service.icon className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{service.badge}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6">
                      <div className="flex items-start justify-between mb-1.5 md:mb-2 lg:mb-3">
                        <h3
                          className="text-base md:text-lg lg:text-xl font-bold text-white font-montserratAlt"
                        >
                          {service.title}
                        </h3>
                        <div className="bg-orange-400 text-slate-900 px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-xs md:text-sm font-bold whitespace-nowrap ml-2">
                          {service.price}
                        </div>
                      </div>
                      <div className="space-y-0.5 md:space-y-1">
                        <p
                          className="text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed tracking-wide max-w-l font-montserratAlt"
                        >
                          {service.description.split(". ")[0]}.
                        </p>
                        {service.description.includes(". ") && (
                          <p
                            className="text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed tracking-wide max-w-l font-montserratAlt"
                          >
                            {service.description
                              .split(". ")
                              .slice(1)
                              .join(". ")}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Third row - 1 card centered on tablet, hidden on desktop */}
            <div className="md:col-span-2 md:col-start-1 lg:hidden flex md:justify-center">
              {services.slice(4, 5).map((service) => (
                <div
                  key={service.title}
                  onClick={scrollToContact}
                  className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer w-full md:max-w-md card-hover opacity-0 ${
                    isVisible ? 'animate-fadeInUp' : ''
                  }`}
                  style={{ animationDelay: isVisible ? '1000ms' : '0ms' }}
                >
                  <div className="aspect-[5/3] md:aspect-[4/3] relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-500 filter brightness-100 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Badge */}
                    <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <div className="flex items-center space-x-1.5 md:space-x-2 bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                        <service.icon className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{service.badge}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6">
                      <div className="flex items-start justify-between mb-1.5 md:mb-2 lg:mb-3">
                        <h3
                          className="text-base md:text-lg lg:text-xl font-bold text-white font-montserratAlt"
                        >
                          {service.title}
                        </h3>
                        <div className="bg-orange-400 text-slate-900 px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-xs md:text-sm font-bold whitespace-nowrap ml-2">
                          {service.price}
                        </div>
                      </div>
                      <div className="space-y-0.5 md:space-y-1">
                        <p
                          className="text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed tracking-wide max-w-l font-montserratAlt"
                        >
                          {service.description.split(". ")[0]}.
                        </p>
                        {service.description.includes(". ") && (
                          <p
                            className="text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed tracking-wide max-w-l font-montserratAlt"
                          >
                            {service.description
                              .split(". ")
                              .slice(1)
                              .join(". ")}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
