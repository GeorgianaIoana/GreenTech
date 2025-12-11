import React from "react";
import { Leaf } from "lucide-react";

const Testimonial = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="testimonial" className="relative py-32 overflow-hidden sm:mb-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-right-top bg-no-repeat"
        style={{
          backgroundImage: `url('/images/miracle-nature.jpg')`,
        }}
      ></div>

      {/* Gradient Overlay - Luminos sus, umbrit jos */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h2
                className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                What Our Clients Have to
                <br />
                Say About Us
              </h2>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center bg-orange-400 text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Let's Talk Now
              </button>
            </div>

            {/* Right Content - Testimonial */}
            <div className="relative">
              {/* Company Logo */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white text-xl font-bold tracking-wider">
                    WAVE
                  </div>
                  <div className="text-white text-xl font-bold tracking-wider">
                    WOOD
                  </div>
                </div>
              </div>

              {/* Testimonial Quote */}
              <blockquote
                className="text-white text-lg md:text-xl leading-relaxed mb-8"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                "Finescript has been an invaluable partner for years. Their
                dedication to quality and attention to detail make them my go-to
                choice for any future projects. If you're looking for a studio
                that truly values their work, I highly recommend them"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                  <img
                    src="/images/miracle-nature.jpg"
                    alt="Thomas Clarkson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">
                    Thomas Clarkson
                  </div>
                  <div className="text-gray-300 text-sm">CEO, Wave Wood</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
