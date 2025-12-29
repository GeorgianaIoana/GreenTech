import React from "react";
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

const About = () => {
  const values = [
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
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-gradient-to-t from-teal-50 to-teal-100"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Work with a team that gets it.
          </h2>

          {/* Description */}
          <p
            className="text-base md:text-lg text-gray-700 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            We understand how essential the ideal website is for your business,
            and we are delighted to create it for you. You’ve come to the right
            place! We shape your online presence with the latest technologies
            and a strong commitment to sustainable efficiency: refined design,
            optimized algorithms, high-speed performance, transparent
            communication, and solar-powered hosting. Excellence is our
            standard.
          </p>

          {/* Values/Badges */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 px-4">
            {values.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center space-x-2 text-gray-700 bg-white/30 backdrop-blur-sm border border-teal-200 rounded-full px-2 py-1 md:px-3 shadow-sm hover:shadow transition"
              >
                <Icon className="w-3 h-3 md:w-4 md:h-4 text-green-800" />
                <span className="font-medium text-xs md:text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
