import React, { useState, useEffect } from 'react';
import { Mail, Send, User, MessageSquare, Sparkles, Github, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate particles
    const particleData = [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 2,
      animationDuration: 4 + Math.random() * 2
    }));
    setParticles(particleData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="relative h-screen w-full text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>
      
      {/* Floating particles */}
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
      <div className={`relative z-10 flex h-full w-full flex-col items-center justify-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12">
          {/* Status badge */}
          <div className={`mb-8 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm font-medium text-white/90">Let's start a conversation</span>
          </div>

          {/* Title */}
          <div className={`transition-all duration-500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent leading-tight mb-4 text-center"
                style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
              GET IN
            </h1>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight mb-6 text-center"
                style={{ textShadow: '0 4px 20px rgba(147, 51, 234, 0.3)' }}>
              TOUCH
            </h1>
          </div>

          {/* Decorative line */}
          <div className={`w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>

          {/* Description */}
          <p className={`text-center max-w-2xl text-lg md:text-xl font-medium text-white/80 leading-relaxed transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
             style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            Have a question or want to connect? Just fill out the form below, and I'll get back to you shortly!
          </p>
        </div>

        {/* Contact Form */}
        <div className={`w-full max-w-2xl transition-all duration-700 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="space-y-6">
            {/* Name Input */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
                <div className="flex items-center px-4 py-4">
                  <User className="w-5 h-5 text-purple-400 mr-3" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="flex-1 bg-transparent text-white placeholder-white/60 focus:outline-none text-lg"
                  />
                </div>
              </div>
            </div>

            {/* Email Input */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
                <div className="flex items-center px-4 py-4">
                  <Mail className="w-5 h-5 text-purple-400 mr-3" />
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="flex-1 bg-transparent text-white placeholder-white/60 focus:outline-none text-lg"
                  />
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
                <div className="flex items-start px-4 py-4">
                  <MessageSquare className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="flex-1 bg-transparent text-white placeholder-white/60 focus:outline-none text-lg resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting || submitted}
                className={`group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 ${
                  submitted 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600'
                } ${isSubmitting ? 'animate-pulse' : ''}`}
              >
                <span className="relative z-10 flex items-center gap-2 text-white">
                  {submitted ? (
                    <>
                      <span>Message Sent!</span>
                      <Sparkles className="w-5 h-5" />
                    </>
                  ) : isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  submitted 
                    ? 'bg-gradient-to-r from-emerald-600 to-green-600' 
                    : 'bg-gradient-to-r from-pink-600 to-purple-600'
                } opacity-0 group-hover:opacity-100`}></div>
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className={`flex gap-6 mt-12 transition-all duration-500 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "mailto:mouad@example.com", label: "Email" },
            { icon: Phone, href: "tel:+1234567890", label: "Phone" }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 hover:text-white hover:bg-white/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              title={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-20 h-20 border border-purple-500/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 border border-pink-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-16 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};

export default Contact;