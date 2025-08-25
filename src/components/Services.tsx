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
      image: "/images/natural-office.png",
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
      className="py-20 bg-gradient-to-b from-teal-50 to-teal-700"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16">
            <div className="lg:max-w-2xl">
              <h2
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                What we offer
              </h2>
              <p
                className="text-lg text-gray-700 leading-relaxed max-w-[1100px]"
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
            <div className="mt-8 lg:mt-0">
              <button
                onClick={scrollToContact}
                className="bg-orange-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Work With Us
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First row - 3 cards */}
            {services.slice(0, 3).map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-500 filter brightness-100 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      <service.icon className="w-4 h-4" />
                      <span>{service.badge}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      className="text-lg font-semibold text-white mb-2"
                      style={{ fontFamily: "Merriweather, serif" }}
                    >
                      {service.title}
                    </h3>
                    <div className="space-y-1">
                      <p
                        className="text-gray-200 text-sm leading-relaxed tracking-wide max-w-m"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {service.description.split(". ")[0]}.
                      </p>
                      {service.description.includes(". ") && (
                        <p
                          className="text-gray-200 text-sm leading-relaxed tracking-wide max-w-m"
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
            <div className="md:col-span-2 lg:col-span-3 grid md:grid-cols-2 gap-6">
              {services.slice(3, 5).map((service) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-500 filter brightness-100 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Badge */}
                    <div className="absolute bottom-4 right-4">
                      <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        <service.icon className="w-4 h-4" />
                        <span>{service.badge}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3
                        className="text-xl font-bold text-white mb-3"
                        style={{ fontFamily: "Merriweather, serif" }}
                      >
                        {service.title}
                      </h3>
                      <div className="space-y-1">
                        <p
                          className="text-gray-200 text-base leading-relaxed tracking-wide max-w-l"
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                          {service.description.split(". ")[0]}.
                        </p>
                        {service.description.includes(". ") && (
                          <p
                            className="text-gray-200 text-base leading-relaxed tracking-wide max-w-l"
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
