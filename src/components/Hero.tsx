import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen md:min-h-screen lg:h-[120vh] relative overflow-hidden flex items-center"
    >
      {/* Background Forest Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/girl-flower.jpg')`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-6 relative z-10 w-full">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-white pt-20 md:pt-24 lg:pt-0 lg:-mt-20">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold mb-6 md:mb-8 lg:mb-12 leading-tight font-montserratAlt">
              Web Development
              <br />
              Powered by the Sun
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-lg lg:text-xl max-w-full md:max-w-[600px] lg:max-w-[500px] text-white mb-8 md:mb-10 lg:mb-8 leading-relaxed font-montserratAlt">
              We help your business shine online with fast websites, efficient
              code, stunning UI/UX, and hosting that runs on clean solar energy.
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToServices}
              className="mb-6 md:mb-8 lg:mb-0 inline-flex items-center justify-center bg-orange-400 text-slate-900 px-6 py-3 md:px-10 md:py-4 lg:px-8 lg:py-4 rounded-full text-sm md:text-lg lg:text-base font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserratAlt"
            >
              Shine Online
            </button>
          </div>

          {/* Trust Section */}
          <div className="mt-4 md:mt-6 lg:mt-20 max-w-full md:max-w-2xl lg:max-w-md">
            <p className="text-white text-base md:text-lg lg:text-[18px] mb-4 md:mb-5 font-medium font-montserratAlt">
              Built with modern technologies:
            </p>

            {/* Development Tools Carousel */}
            <div className="relative overflow-hidden py-2">
              <div className="flex animate-scroll space-x-6 md:space-x-8">
                {/* First set of tools */}
                <div className="flex items-center space-x-6 md:space-x-8 flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/mysql-logo.svg"
                      alt="MySQL"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt whitespace-nowrap">
                      MySQL
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/js-logo.svg"
                      alt="JavaScript"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/laravel-logo.svg"
                      alt="Laravel"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Laravel
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/react-logo.svg"
                      alt="React"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      React
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/figma-logo.svg"
                      alt="Figma"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Figma
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/filament-logo.svg"
                      alt="Filament"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Filament
                    </span>
                  </div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center space-x-6 md:space-x-8 flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/mysql-logo.svg"
                      alt="MySQL"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      MySQL
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/js-logo.svg"
                      alt="JavaScript"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/laravel-logo.svg"
                      alt="Laravel"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Laravel
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/react-logo.svg"
                      alt="React"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      React
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/figma-logo.svg"
                      alt="Figma"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Figma
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/filament-logo.svg"
                      alt="Filament"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="text-white text-sm md:text-base lg:text-lg font-medium font-montserratAlt tracking-[0.1em] whitespace-nowrap">
                      Filament
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
