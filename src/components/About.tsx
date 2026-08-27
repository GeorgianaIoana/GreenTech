import { useEffect, useRef, useState } from "react";
import {
  Leaf,
  Cpu,
  Recycle,
  Sun,
  Globe,
  TreePine,
  Brain,
  Eye,
  Feather,
  Rocket,
  ShieldCheck,
  Handshake,
  Palette,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { language } = useLanguage();
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

  const translations = {
    en: {
      title: "Work with a team that gets it.",
      description: "We understand how essential the ideal website is for your business, and we are delighted to create it for you. You've come to the right place! We shape your online presence with the latest technologies and a strong commitment to sustainable efficiency: refined design, optimized algorithms, high-speed performance, transparent communication, and solar-powered hosting. Excellence is our standard.",
      values: [
        { icon: Leaf, label: "Sustainable" },
        { icon: Cpu, label: "Intelligent technology" },
        { icon: Recycle, label: "Carbon-aware" },
        { icon: Sun, label: "Clean-tech" },
        { icon: TreePine, label: "Nature-led" },
        { icon: Brain, label: "Green minds" },
        { icon: Eye, label: "Conscious" },
        { icon: Feather, label: "Mindful" },
        { icon: Rocket, label: "Future-friendly" },
        { icon: ShieldCheck, label: "Responsible" },
        { icon: Handshake, label: "Honest" },
        { icon: Palette, label: "Refined design" },
      ],
    },
    ro: {
      title: "O echipă dedicată care transformă obiectivele tale în realitate.",
      description: "Dezvoltăm identitatea ta digitală cu tehnologii de ultimă generație și un angajament puternic față de sustenabilitate: estetică îngrijită, cod optimizat, viteze de execuție ridicate, transparență în comunicare și servicii de hosting ecologice. Calitatea este principiul nostru fundamental.",
      values: [
        { icon: Leaf, label: "Durabil" },
        { icon: Cpu, label: "Tehnologie inteligentă" },
        { icon: Recycle, label: "Eco-conștient" },
        { icon: Sun, label: "Tehnologie verde" },
        { icon: TreePine, label: "Orientat către natură" },
        { icon: Brain, label: "Gândire verde" },
        { icon: Eye, label: "Conștient" },
        { icon: Feather, label: "Atent" },
        { icon: Rocket, label: "Orientat către viitor" },
        { icon: ShieldCheck, label: "Responsabil" },
        { icon: Handshake, label: "Onest" },
        { icon: Palette, label: "Design rafinat" },
      ],
    },
  };

  const t = translations[language];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-12 md:py-20 bg-gradient-to-t from-teal-50 to-teal-100"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight font-montserratAlt opacity-0 ${
              isVisible ? 'animate-fadeInUp' : ''
            }`}
          >
            {t.title}
          </h2>

          {/* Description */}
          <p
            className={`text-base md:text-lg text-gray-700 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4 font-inter opacity-0 ${
              isVisible ? 'animate-fadeInUp delay-200' : ''
            }`}
          >
            {t.description}
          </p>

          {/* Values/Badges */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 px-4">
            {t.values.map(({ icon: Icon, label }, index) => (
              <div
                key={label}
                className={`flex items-center space-x-2 text-slate-600 bg-white/90 backdrop-blur-xl border border-white rounded-full px-3 py-1.5 md:px-4 md:py-2 shadow-md hover:shadow-lg hover:bg-white transition-all duration-300 opacity-0 ${
                  isVisible ? 'animate-scaleIn' : ''
                }`}
                style={{ animationDelay: isVisible ? `${300 + index * 50}ms` : '0ms' }}
              >
                <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-teal-600" />
                <span className="font-medium text-xs md:text-sm">{label}</span>
              </div>
            ))}
          </div>

          {/* Founder Image */}
          <div className={`mt-12 md:mt-16 opacity-0 ${isVisible ? 'animate-fadeInUp delay-700' : ''}`}>
            <div className="relative max-w-sm mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-orange-300 rounded-2xl transform rotate-3 opacity-20 group-hover:rotate-6 group-hover:scale-105 transition-all duration-500"></div>
              <img
                src="/images/founder.jpeg"
                alt="Georgiana Stanciu"
                className="relative rounded-2xl shadow-xl w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
            {/* Glass Tag */}
            <div className="mt-6 inline-flex items-center space-x-2 text-slate-600 bg-white/90 backdrop-blur-xl border border-white rounded-full px-3 py-1.5 md:px-4 md:py-2 shadow-md hover:shadow-lg hover:bg-white transition-all duration-300">
              <span className="font-medium text-xs md:text-sm">
                Georgiana Stanciu — Founder Bloomsoft · Design Engineer · 3 years experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
