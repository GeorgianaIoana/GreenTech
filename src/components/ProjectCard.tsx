import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  projectNumber: string;
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectNumber,
  title,
  description,
  image,
  buttonText = "Our work",
  onButtonClick
}) => {
  return (
    <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 min-h-[600px] flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="text-white space-y-6">
          {/* Project Number */}
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <span className="text-sm font-medium tracking-wider uppercase opacity-80">
              {projectNumber}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: 'Merriweather, serif' }}>
            {title}
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed max-w-md" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {description}
          </p>

          {/* Button */}
          <button
            onClick={onButtonClick}
            className="inline-flex items-center space-x-3 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-8"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Content - Image */}
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl p-6 shadow-2xl">
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-inner">
              <img
                src={image}
                alt={title}
                className="w-full h-80 lg:h-96 object-cover rounded-xl"
              />
              {/* Website URL overlay */}
              <div className="absolute bottom-8 right-8 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                am-arc.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;