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
      title: "Creative Skills",
      description:
        "Unique designs crafted for your brand, engaging users with cutting-edge visuals",
    },
    {
      icon: TrendingUp,
      title: "Responsive Designs",
      description:
        "Delivering flawless experiences on every device, boosting user engagement and satisfaction.",
    },
    {
      icon: Search,
      title: "Vision",
      description:
        "We focus on our clients’ requests, align with their vision, and implement the most effective solutions for their business growth.",
    },
    {
      icon: Users,
      title: "Exceptional Support",
      description:
        "Offering committed support throughout and after project completion to guarantee client satisfaction",
    },
    {
      icon: Zap,
      title: "Quick Turnaround",
      description:
        "Consistently meeting deadlines and delivering dependable services without sacrificing quality or efficiency.",
    },
    {
      icon: Code,
      title: "Custom Solutions",
      description:
        "Designing custom websites tailored to your needs, improving functionality and user experience.",
    },
  ];

  const dontWorkWithUs = [
    {
      icon: X,
      title: "Generic Templates",
      description:
        "Cookie-cutter designs that look like everyone else, failing to capture your unique brand identity",
    },
    {
      icon: AlertTriangle,
      title: "Poor Mobile Experience",
      description:
        "Websites that break on mobile devices, losing potential customers and damaging your reputation.",
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
        "Being left alone after launch with no ongoing support when issues arise or updates are needed",
    },
    {
      icon: AlertTriangle,
      title: "Missed Deadlines",
      description:
        "Unreliable delivery schedules that delay your launch and impact your business goals.",
    },
    {
      icon: X,
      title: "One-Size-Fits-All",
      description:
        "Generic solutions that don't address your specific business needs or growth objectives.",
    },
  ];

  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
            <div className="lg:max-w-2xl mb-8 lg:mb-0">
              <h2
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                When people
                <br />
                <span className="inline-flex items-center space-x-4">
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
                className="text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {activeTab === "do"
                  ? "Expect creative solutions, clear communication, and results tailored to your vision when working with us."
                  : "See what happens when you choose the wrong development partner for your sustainable business."}
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === "do" ? doWorkWithUs : dontWorkWithUs).map(
              (item, index) => (
                <div
                  key={item.title}
                  className={`group p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                    activeTab === "do"
                      ? "bg-white shadow-lg hover:shadow-2xl border-l-4 border-teal-500"
                      : "bg-white shadow-lg hover:shadow-2xl border-l-4 border-orange-400"
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-6 ${
                      activeTab === "do" ? "bg-teal-100" : "bg-orange-100"
                    }`}
                  >
                    <item.icon
                      className={`w-6 h-6 ${
                        activeTab === "do" ? "text-teal-600" : "text-orange-400"
                      }`}
                    />
                  </div>

                  <h3
                    className="text-xl font-bold text-slate-900 mb-4 transition-colors duration-300"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              )
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                activeTab === "do"
                  ? "bg-teal-600 hover:bg-teal-700 text-white"
                  : "bg-orange-400 hover:bg-yellow-400 text-white"
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
