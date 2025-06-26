import React, { useState, useEffect } from 'react';
import { ArrowDown, Code2, Sparkles } from 'lucide-react';

type Particle = {
  id: number;
  left: number;
  top: number;
  animationDelay: number;
  animationDuration: number;
};

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [particles, setParticles] = useState<Particle[]>([]);

  const nameText = "MOUAD SERROUKH";

  useEffect(() => {
    setIsVisible(true);
    
    // Generate particles on client side only
    const particleData = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 2,
      animationDuration: 3 + Math.random() * 2
    }));
    setParticles(particleData);
    
    // Typing effect for name
    const typingTimer = setTimeout(() => {
      if (typingIndex < nameText.length) {
        setTypingIndex(prev => prev + 1);
      }
    }, 100);

    // Cursor blinking
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(typingTimer);
      clearInterval(cursorTimer);
    };
  }, [typingIndex]);

  return (
    <div className="relative flex min-h-screen w-full text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>
      
      {/* Floating particles - only render after client mount */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>
      
      {/* Main content */}
      <div className={`relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Greeting badge */}
        <div className={`mb-6 sm:mb-8 flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-white/90">Available for new opportunities</span>
        </div>

        {/* Name with animation */}
        <div className="text-center mb-4 sm:mb-6">
          <div className={`transition-all duration-500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent leading-tight mb-1 sm:mb-2"
                style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
              HEY, I&apos;M
            </h1>
          </div>
          
          <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight break-words"
                style={{ textShadow: '0 4px 20px rgba(147, 51, 234, 0.3)' }}>
              {nameText.slice(0, typingIndex)}
              {showCursor && <span className="text-purple-400">|</span>}
            </h1>
          </div>
        </div>

        {/* Role */}
        <div className={`mb-6 sm:mb-8 transition-all duration-500 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-purple-300">
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 animate-pulse flex-shrink-0" />
            <span>Full-Stack Developer</span>
          </div>
        </div>

        {/* Description */}
        <p className={`text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white/80 leading-relaxed mb-8 sm:mb-10 lg:mb-12 px-4 transition-all duration-700 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
           style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
          I craft <span className="text-purple-300 font-semibold">modern</span>, 
          <span className="text-pink-300 font-semibold"> responsive</span>, and 
          <span className="text-blue-300 font-semibold"> user-focused</span> web applications, 
          combining clean code with thoughtful design and seamless user experience.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-16 transition-all duration-500 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {/* Primary CTA */}
          <a
            href="#projects"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm sm:text-base lg:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/30 text-white font-semibold text-sm sm:text-base lg:text-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 text-center"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
       
      </div>

      {/* Decorative elements - Responsive and hidden on very small screens */}
      <div className="hidden sm:block absolute top-12 sm:top-16 lg:top-20 left-6 sm:left-12 lg:left-20 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 border border-purple-500/30 rounded-full animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-16 sm:bottom-24 lg:bottom-32 right-6 sm:right-12 lg:right-20 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 border border-pink-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="hidden xs:block absolute top-1/2 left-4 sm:left-8 lg:left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="hidden xs:block absolute top-1/3 right-6 sm:right-12 lg:right-16 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};

export default Introduction;