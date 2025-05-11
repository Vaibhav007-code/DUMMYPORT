
import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aryan Sharma",
      position: "Software Engineer at Google",
      content: "Vaibhav is an exceptional developer with a keen eye for detail. We worked together on multiple projects, and his problem-solving skills are outstanding.",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Priya Patel",
      position: "Product Manager at Microsoft",
      content: "Working with Vaibhav was a pleasure. He's not only technically proficient but also understands the business impact of the features he develops.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Rahul Verma",
      position: "Tech Lead at Amazon",
      content: "Vaibhav's Group Study Platform transformed our team's remote collaboration. The timer and resource sharing features significantly boosted our productivity.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Sneha Gupta",
      position: "Full Stack Developer",
      content: "His code is clean, well-documented, and efficient. Vaibhav is also great at explaining complex concepts in simple terms, which makes him a valuable team member.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold glow-text mb-2">Testimonials</h2>
          <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            What people are saying about my work and collaboration.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-lg p-6 md:p-10 neon-border relative">
            <div className="hidden md:flex absolute top-10 -left-5 h-20 w-20 bg-neon-purple opacity-20 rounded-full blur-xl"></div>
            <div className="hidden md:flex absolute bottom-10 -right-5 h-16 w-16 bg-neon-blue opacity-20 rounded-full blur-xl"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-neon-purple">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="mb-6">
                  <svg className="text-neon-purple h-8 w-8 mb-2" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-300 italic text-lg">
                    {testimonials[activeIndex].content}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-400">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-600 hover:border-neon-purple transition-colors"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${index === activeIndex ? 'bg-neon-purple w-6' : 'bg-gray-600'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-600 hover:border-neon-purple transition-colors"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
