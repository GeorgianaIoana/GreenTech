import { Leaf } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Testimonial = () => {
  const { language } = useLanguage();
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const translations = {
    en: {
      title: "Ready to Bloom Your Business?",
      description: "Let's create something amazing together. Get in touch and discover how we can help your business grow with a beautiful, sustainable digital presence.",
      button: "Let's Talk Now",
    },
    ro: {
      title: "Gata să-ți Dezvolți Afacerea?",
      description: "Hai să construim ceva remarcabil împreună. Ia legătura cu noi și află cum te putem susține să-ți extinzi afacerea cu o identitate digitală atractivă și sustenabilă.",
      button: "Să Discutăm",
    },
  };

  const t = translations[language];

  return (
    <section id="testimonial" className="relative py-16 md:py-20 lg:py-32 overflow-hidden min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-right-top bg-no-repeat"
        style={{
          backgroundImage: `url('/images/miracle-nature.jpg')`,
        }}
      ></div>

      {/* Gradient Overlay - Luminos sus, umbrit jos */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-6 relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl md:max-w-3xl lg:max-w-4xl mx-auto text-center">
            {/* CTA Content */}
            <div className="text-white">
              <h2
                className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-6 lg:mb-8 leading-tight font-montserratAlt"
                style={{ 
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)"
                }}
              >
                {t.title}
              </h2>

              <p
                className="text-lg md:text-lg lg:text-2xl mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-3xl md:max-w-2xl lg:max-w-3xl mx-auto font-inter"
                style={{ 
                  textShadow: "1px 1px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)"
                }}
              >
                {t.description}
              </p>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center bg-orange-400 text-slate-900 px-8 py-4 md:px-9 md:py-4 lg:px-10 lg:py-5 rounded-full text-base md:text-base lg:text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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

export default Testimonial;
