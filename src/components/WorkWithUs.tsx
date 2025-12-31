import React, { useState } from "react";
import {
  Edit3,
  TrendingUp,
  Search,
  Users,
  Zap,
  Code,
  X,
  AlertTriangle,
  Clock,
  ThumbsDown,
} from "lucide-react";

const WorkWithUs = () => {
  const [activeTab, setActiveTab] = useState<"do" | "dont">("do");

  const doWorkWithUs = [
    {
      icon: Edit3,
      title: "Strategic Engineering",
      description:
        "Whether leveraging a streamlined CMS or bespoke architecture, our custom digital assets are engineered to maximize your long-term return on financial investment.",
    },
    {
      icon: TrendingUp,
      title: "Responsive Designs",
      description:
        "Delivering flawless experiences on mobile, tablet and desktop, boosting user engagement and satisfaction.",
    },
    {
      icon: Search,
      title: "Proven Digital Excellence",
      description:
        "With a proven track record in high-performance development, we leverage years of technical expertise to turn complex visions into scalable, profit-driven digital assets.",
    },
    {
      icon: Users,
      title: "Exceptional Support",
      description:
        "Beyond the launch, we stand by your side as a dedicated digital partner. From proactive security monitoring to seamless technical updates, we ensure your website remains a high-performing asset, allowing you to focus entirely on growing your business while we handle the rest.",
    },
    {
      icon: Zap,
      title: "Optimized Speed",
      description:
        "We build high-performance websites with lean, optimized code that ensures lightning-fast loading speeds across all devices. By prioritizing technical excellence, we help you capture every visitor’s attention and boost your search engine rankings through superior performance.",
    },
    {
      icon: Code,
      title: "Tailored Digital Excellence",
      description:
        "We move beyond off-the-shelf templates to engineer bespoke digital solutions that align perfectly with your brand identity. By focusing on intuitive functionality and a seamless user experience, we transform your vision into a high-converting platform designed to meet your specific business challenges.",
    },
  ];

  const dontWorkWithUs = [
    {
      icon: X,
      title: "Generic Templates",
      description:
        "Cookie-cutter designs that look like everyone else, failing to capture your unique brand identity. We prevent your business from blending into the background with uninspired, repetitive layouts.",
    },
    {
      icon: AlertTriangle,
      title: "Poor Mobile Experience",
      description:
        "Websites that break on mobile devices, losing potential customers and damaging your reputation.We eliminate the frustration of unresponsive interfaces that drive users away.",
    },
    {
      icon: ThumbsDown,
      title: "The Cost of Missing the Right Partner",
      description:
        "Many businesses end up spending more time and resources fixing problems that could have been prevented from the start.",
    },
    {
      icon: Clock,
      title: "Limited Support",
      description:
        "Being left alone after launch with no ongoing support when issues arise or updates are needed. We ensure you are never stranded with a broken site or outdated security patches.",
    },
    {
      icon: AlertTriangle,
      title: "Missed Deadlines",
      description:
        "Vague timelines and broken promises that leave your projects stalled and your business growth on hold. We replace uncertainty with strict project management, ensuring every milestone is met without compromising on quality or your peace of mind.",
    },
    {
      icon: X,
      title: "Mass-Market Solutions",
      description:
        "Generic solutions that don't address your specific business needs or growth objectives. We avoid rigid systems that fail to adapt to the unique requirements of your industry.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 md:mb-16">
            <div className="lg:max-w-2xl mb-8 lg:mb-0">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                When people
                <br />
                <span className="inline-flex items-center space-x-2 md:space-x-4 flex-wrap">
                  <span
                    className={`transition-colors duration-300 ${
                      activeTab === "do" ? "text-teal-600" : "text-orange-400"
                    }`}
                  >
                    {activeTab === "do" ? "do" : "don't"}
                  </span>
                  <button
                    onClick={() =>
                      setActiveTab(activeTab === "do" ? "dont" : "do")
                    }
                    className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 mx-2 ${
                      activeTab === "do" ? "bg-teal-600" : "bg-orange-400"
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
                        activeTab === "do" ? "translate-x-1" : "translate-x-9"
                      }`}
                    />
                  </button>
                  <span className="ml-1">work with us.</span>
                </span>
              </h2>
              <p
                className="text-base md:text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {activeTab === "do"
                  ? "Expect creative solutions, clear communication, and results tailored to your vision when working with us."
                  : "See what happens when you choose the wrong development partner for your sustainable business."}
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {(activeTab === "do" ? doWorkWithUs : dontWorkWithUs).map(
              (item) => (
                <div
                  key={item.title}
                  className={`group p-6 md:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                    activeTab === "do"
                      ? "bg-white shadow-lg hover:shadow-2xl border-l-4 border-teal-500"
                      : "bg-white shadow-lg hover:shadow-2xl border-l-4 border-orange-400"
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg mb-4 md:mb-6 ${
                      activeTab === "do" ? "bg-teal-100" : "bg-orange-100"
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 md:w-6 md:h-6 ${
                        activeTab === "do" ? "text-teal-600" : "text-orange-400"
                      }`}
                    />
                  </div>

                  <h3
                    className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4 transition-colors duration-300"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-sm md:text-base text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              )
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 md:mt-16">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                activeTab === "do"
                  ? "bg-teal-600 hover:bg-teal-700 text-white"
                  : "bg-orange-400 hover:bg-yellow-400 text-black"
              }`}
            >
              {activeTab === "do" ? "Start Your Project" : "Get Better Results"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
