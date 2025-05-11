
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Group Study Platform',
      description: 'A collaborative platform where people from around the world can come together to study effectively.',
      imageSrc: 'https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      tags: ['React.js', 'Node.js', 'Socket.io', 'MongoDB'],
      features: [
        'Study timer with break reminders',
        'Time tracking and productivity analytics',
        'Resource sharing between participants',
        'Media sharing capabilities',
        'Real-time chat functionality',
        'Session scheduling and management'
      ]
    },
    {
      title: 'Digital Diary',
      description: 'A secure digital journal application that allows users to record their thoughts with password protection.',
      imageSrc: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      tags: ['JavaScript', 'React.js', 'Node.js', 'Express', 'MongoDB'],
      features: [
        'Password-protected entries',
        'Rich text editor with formatting options',
        'Media attachments (photos, videos)',
        'Search and filtering functionality',
        'Mood tracking and analysis',
        'Data export and backup options'
      ]
    },
    {
      title: 'Code Contest Aggregator',
      description: 'A platform that fetches and combines ongoing coding competitions from various websites into a single dashboard.',
      imageSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      tags: ['React.js', 'Node.js', 'API Integration', 'Web Scraping'],
      features: [
        'Aggregates contests from CodeChef, LeetCode, and other platforms',
        'Personalized contest reminders',
        'One-click registration for contests',
        'Filtering by platform, duration, and difficulty',
        'User preference customization',
        'Calendar integration'
      ]
    }
  ];
  
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold glow-text mb-2">My Projects</h2>
          <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              tags={project.tags}
              features={project.features}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-transparent border border-neon-purple
            text-white font-medium transition-all hover:bg-neon-purple/10"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
