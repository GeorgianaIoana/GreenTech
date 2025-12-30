import React from "react";
import {
  Leaf,
  Users,
  TrendingUp,
  Lightbulb,
  Target,
  Clock,
} from "lucide-react";

const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      title: "Web Development",
      description: "Responsive websites, optimized for low energy use",
      image: "/green-house.jpg",
      badge: "Sustainable",
      icon: Leaf,
    },
    {
      title: "UX/UI design in figma",
      description: "Clean designs built for speed and beauty.",
      image: "/images/plants.png",
      badge: "Eco-first",
      icon: Target,
    },
    {
      title: "Green Hosting",
      description: "Green hosting setup for lower digital carbon footprint",
      image: "/images/15.png",
      badge: "Planet-first",
      icon: TrendingUp,
    },
    {
      title: "Website Maintenance and Technical Support",
      description: "Keeping your website updated, secure, and energy-efficient",
      image: "/images/green-hosting.jpg",
      badge: "Future-friendly",
      icon: Lightbulb,
    },
    {
      title: "Team Building",
      description:
        "Team workshops in nature, fostering green minds through chess and eco challenges.",
      image: "/images/tree-team.jpg",
      badge: "Nature-led",
      icon: Users,
    },
  ];

  return (
    <section
      id="services"
      className="py-12 md:py-14 lg:py-20 bg-gradient-to-b from-teal-50 to-teal-700"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 md:mb-12 lg:mb-16">
            <div className="lg:max-w-2xl">
              <h2
                className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4 lg:mb-6"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                What we offer
              </h2>
              <p
                className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-[1100px]"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                As online presence becomes increasingly essential, every website
                visit, data transfer, and server operation consumes energy,
                which adds to digital carbon footprint. Inspired by nature and
                driven by our passion for web development, we create
                eco-friendly websites that focus on design and technology to
                reduce environmental impact
              </p>
            </div>
            <div className="mt-4 md:mt-6 lg:mt-0">
              <button
                onClick={scrollToContact}
                className="bg-orange-400 text-black px-5 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full text-sm md:text-sm lg:text-base font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Work With Us
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-6">
            {/* First row - 3 cards */}
            {services.slice(0, 3).map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[5/3] md:aspect-[4/3] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-500 filter brightness-100 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4">
                    <div className="flex items-center space-x-1.5 md:space-x-2 bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                      <service.icon className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{service.badge}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6">
                    <h3
                      className="text-sm md:text-base lg:text-lg font-semibold text-white mb-1.5 md:mb-2"
                      style={{ fontFamily: "Merriweather, serif" }}
                    >
                      {service.title}
                    </h3>
                    <div className="space-y-0.5 md:space-y-1">
                      <p
                        className="text-gray-200 text-xs md:text-xs lg:text-sm leading-relaxed tracking-wide max-w-m"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {service.description.split(". ")[0]}.
                      </p>
                      {service.description.includes(". ") && (
                        <p
                          className="text-gray-200 text-xs md:text-xs lg:text-sm leading-relaxed tracking-wide max-w-m"
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                          {service.description.split(". ").slice(1).join(". ")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Second row - 2 cards spanning wider */}
            <div className="md:col-span-2 lg:col-span-3 grid md:grid-cols-2 gap-4 md:gap-4 lg:gap-6">
              {services.slice(3, 5).map((service) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-[5/3] md:aspect-[4/3] relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-500 filter brightness-100 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Badge */}
                    <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4">
                      <div className="flex items-center space-x-1.5 md:space-x-2 bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                        <service.icon className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{service.badge}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6">
                      <h3
                        className="text-base md:text-lg lg:text-xl font-bold text-white mb-1.5 md:mb-2 lg:mb-3"
                        style={{ fontFamily: "Merriweather, serif" }}
                      >
                        {service.title}
                      </h3>
                      <div className="space-y-0.5 md:space-y-1">
                        <p
                          className="text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed tracking-wide max-w-l"
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                          {service.description.split(". ")[0]}.
                        </p>
                        {service.description.includes(". ") && (
                          <p
                            className="text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed tracking-wide max-w-l"
                            style={{ fontFamily: "Outfit, sans-serif" }}
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
