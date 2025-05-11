
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];
    
    const createParticles = () => {
      const width = window.innerWidth;
      const height = 800;
      
      canvas.width = width;
      canvas.height = height;
      
      particles = [];
      
      for (let i = 0; i < Math.min(width / 10, 100); i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };
    
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(155, 135, 245, ${particle.opacity})`;
        ctx.fill();
      });
      
      // Connect particles that are close to each other
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(155, 135, 245, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animateParticles);
    };
    
    createParticles();
    window.addEventListener('resize', createParticles);
    animateParticles();
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="container mx-auto px-4 z-10 py-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text leading-tight">
            Hi, I'm <span className="text-neon-purple">Vaibhav</span>
          </h1>
          
          <div className="overflow-hidden h-16 mb-8">
            <div className="animate-float">
              <p className="text-2xl md:text-3xl text-gray-300 mb-4">Full Stack Developer</p>
              <p className="text-2xl md:text-3xl text-gray-300 mb-4">Problem Solver</p>
              <p className="text-2xl md:text-3xl text-gray-300">Tech Enthusiast</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            I build innovative web applications and solve complex problems with elegant code.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projects"
              className="px-8 py-3 rounded-md bg-neon-purple text-white font-medium 
              transition-all hover:bg-opacity-80 animate-glow"
            >
              View My Work
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 rounded-md bg-transparent border border-neon-purple 
              text-white font-medium transition-all hover:bg-neon-purple/10"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse">
        <a href="#about" className="flex items-center flex-col">
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-neon-purple" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
