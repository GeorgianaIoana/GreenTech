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
      className="h-screen lg:h-[120vh] relative overflow-hidden flex items-center"
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Main Content */}
          <div className="text-white -mt-12 md:-mt-20 sm:pt-0 pt-32">
            {/* Main Heading */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight font-montserratAlt"
             
            >
              Web Development
              <br />
              Powered by the Sun
            </h1>

            {/* Description */}
            <p
              className="md:text-xl max-w-[500px] text-sm text-white mb-8 text-[19px] leading-relaxed font-montserratAlt"
           
            >
              We help your business shine online with fast websites, efficient code, stunning UI/UX, and hosting that runs on clean solar energy.
            </p>

            {/* CTA Button */}
            <button 
              onClick={scrollToServices}
              className="sm:mb-[80px] inline-flex items-center justify-center bg-orange-400 text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserratAlt"
            >
              Shine Online
            </button>
          </div>

          {/* Trust Section */}
          <div className="mt-20 max-w-md">
            <p className="text-white text-[18px] mb-4 font-medium font-montserratAlt">
              Built with modern technologies:
            </p>

            {/* Development Tools Carousel */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll space-x-6">
                {/* First set of tools */}
                <div className="flex items-center space-x-6 flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/mysql-logo.svg"
                      alt="MySQL"
                      className="w-5 h-5"
                    />
                    <span className="text-white text-base font-medium font-montserratAlt">
                      MySQL
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/js-logo.svg"
                      alt="JavaScript"
                      className="w-5 h-5"
                    />
                    <span className="text-white text-base font-medium font-montserratAlt tracking-[0.1em]">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/laravel-logo.svg"
                      alt="Laravel"
                      className="w-5 h-5"
                    />
                    <span className="text-white text-base font-medium font-montserratAlt tracking-[0.1em]">
                      Laravel
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/react-logo.svg"
                      alt="React"
                      className="w-5 h-5"
                    />
                    <span className="text-white text-base font-medium font-montserratAlt tracking-[0.1em]">
                      React
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/figma-logo.svg"
                      alt="Figma"
                      className="w-5 h-5"
                    />
                    <span className="text-white text-base font-medium font-montserratAlt tracking-[0.1em]">
                      Figma
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/filament-logo.svg"
                      alt="Filament"
                      className="w-5 h-5"
                    />
                    <span className="text-white text-base font-medium font-montserratAlt tracking-[0.1em]">
                      Filament
                    </span>
                  </div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center space-x-6 flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/mysql-logo.svg"
                      alt="MySQL"
                      className="w-5 h-5"
                    />
                    <span className="text-white text-base font-medium font-montserratAlt tracking-[0.1em]">
                      MySQL
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/js-logo.svg"
                      alt="JavaScript"
                      className="w-5 h-5"
                    />
                    <span className="text-white text-base font-medium font-montserratAlt tracking-[0.1em]">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/laravel-logo.svg"
                      alt="Laravel"
                      className="w-5 h-5"
                    />
                    <span className="text-white text-base font-medium font-montserratAlt tracking-[0.1em]">
                      Laravel
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/react-logo.svg"
                      alt="React"
                      className="w-5 h-5"
                    />
                    <span className="text-white text-base font-medium font-montserratAlt tracking-[0.1em]">
                      React
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/figma-logo.svg"
                      alt="Figma"
                      className="w-5 h-5"
                    />
                    <span className="text-white text-base font-medium font-montserratAlt tracking-[0.1em]">
                      Figma
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/images/filament-logo.svg"
                      alt="Filament"
                      className="w-5 h-5"
                    />
                    <span className="text-white text-base font-medium font-montserratAlt tracking-[0.1em]">
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
