
import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  features: string[];
}

const ProjectCard = ({ title, description, imageSrc, tags, features }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div 
      className="glass-effect rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px] neon-border group"
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-neon-purple/20 text-neon-purple text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-neon-teal hover:text-white transition-colors flex items-center gap-1 text-sm"
        >
          {isExpanded ? 'Hide Features' : 'Show Features'}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isExpanded && (
          <div className="mt-4 space-y-2 animate-fade-in">
            <h4 className="font-semibold text-white">Key Features:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
