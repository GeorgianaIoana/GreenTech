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
      className="py-20 bg-gradient-to-t from-teal-50 to-teal-100"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Work with a team that gets it.
          </h2>

          {/* Description */}
          <p
            className="text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto"
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
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {values.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center space-x-2 text-gray-700 bg-white/30 backdrop-blur-sm border border-teal-200 rounded-full px-3 py-1 shadow-sm hover:shadow transition"
              >
                <Icon className="w-4 h-4 text-green-800" />
                <span className="font-medium text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
