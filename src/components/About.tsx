
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold glow-text mb-2">About Me</h2>
          <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="glass-effect rounded-lg p-6 neon-border">
              <h3 className="text-2xl font-bold mb-4 text-neon-blue">Who I Am</h3>
              <p className="text-gray-300 mb-4">
                I am a passionate developer with a strong foundation in full-stack development. 
                I love creating innovative solutions to complex problems and am constantly 
                exploring new technologies to enhance my skill set.
              </p>
              <p className="text-gray-300">
                With experience in both front-end and back-end technologies, I enjoy building 
                seamless user experiences powered by robust backend systems. When I'm not coding, 
                you can find me exploring new technologies, contributing to open-source projects, 
                or participating in coding competitions.
              </p>
            </div>
            
            <div className="glass-effect rounded-lg p-6 mt-6 neon-border">
              <h3 className="text-2xl font-bold mb-4 text-neon-teal">Education</h3>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-xl font-semibold">Bachelor of Technology</h4>
                  <span className="text-neon-purple">2020 - Present</span>
                </div>
                <p className="text-gray-400">Indian Institute of Technology, Delhi</p>
                <p className="text-gray-300 mt-2">
                  Computer Science & Engineering
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neon-purple animate-glow relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                  alt="Vaibhav" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-radial from-neon-purple/30 to-transparent rounded-full blur-xl z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
