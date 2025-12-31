import React from "react";
import { Leaf } from "lucide-react";

const Testimonial = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="testimonial" className="relative py-16 md:py-24 lg:py-32 overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-right-top bg-no-repeat"
        style={{
          backgroundImage: `url('/images/miracle-nature.jpg')`,
        }}
      ></div>

      {/* Gradient Overlay - Luminos sus, umbrit jos */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* CTA Content */}
            <div className="text-white">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight"
                style={{ 
                  fontFamily: "Merriweather, serif",
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)"
                }}
              >
                Ready to Bloom Your Business?
              </h2>

              <p
                className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto"
                style={{ 
                  fontFamily: "Outfit, sans-serif",
                  textShadow: "1px 1px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)"
                }}
              >
                Let's create something amazing together. Get in touch and discover how we can help your business grow with a beautiful, sustainable digital presence.
              </p>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center bg-orange-400 text-slate-900 px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Let's Talk Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
