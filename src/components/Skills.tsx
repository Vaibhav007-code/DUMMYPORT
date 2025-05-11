
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'C', level: 90, color: 'neon-blue' },
    { name: 'C++', level: 85, color: 'neon-blue' },
    { name: 'Python', level: 88, color: 'neon-purple' },
    { name: 'JavaScript', level: 92, color: 'neon-purple' },
    { name: 'HTML/CSS', level: 95, color: 'neon-teal' },
    { name: 'React.js', level: 90, color: 'neon-teal' },
    { name: 'Node.js', level: 87, color: 'neon-blue' },
  ];
  
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold glow-text mb-2">My Skills</h2>
          <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="glass-effect p-6 rounded-lg neon-border">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Technical Skills</h3>
              
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-${skill.color} animate-pulse`} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="glass-effect p-6 rounded-lg mb-6 neon-border">
                <h3 className="text-xl font-bold mb-4 text-white">Languages & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {['C', 'C++', 'Python', 'JavaScript', 'HTML', 'CSS', 'React.js', 'Node.js'].map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-neon-purple/20 text-white rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="glass-effect p-6 rounded-lg neon-border">
                <h3 className="text-xl font-bold mb-4 text-white">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'VS Code', 'Docker', 'AWS', 'Heroku', 'MongoDB', 'MySQL'].map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-neon-blue/20 text-white rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 glass-effect p-6 rounded-lg text-center neon-border">
            <h3 className="text-2xl font-bold mb-4 text-neon-teal">Always Learning</h3>
            <p className="text-gray-300">
              I'm constantly expanding my knowledge and skills to stay up-to-date with the latest technologies.
              Currently exploring: Machine Learning, Cloud Computing, and Mobile App Development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
