import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import { User, Code2, Sparkles, ArrowRight } from 'lucide-react';
import Skills from "../Skills/skills";

const myskills: string[] = [
    "next",
    "react",
    "java",
    "c",
    "c++",
    "php",
    "laravel",
];

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        // Generate particles for background
        const particleData = [...Array(15)].map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            animationDelay: Math.random() * 3,
            animationDuration: 4 + Math.random() * 3
        }));
        setParticles(particleData);

        return () => observer.disconnect();
    }, []);

    return (
        <div 
            id="about-section"
            className="relative min-h-screen w-full text-white bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 overflow-hidden"
        >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/10 to-blue-900/10"></div>
            
            {/* Floating particles */}
            <div className="absolute inset-0">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30"></div>

            <div className="relative z-10 container mx-auto px-6 py-20">
                {/* Header Section */}
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <User className="w-8 h-8 text-purple-400" />
                        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                            About Me
                        </h2>
                    </div>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
                    
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed">
                        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - About Me */}
                    <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                                <h3 className="text-2xl font-bold text-white">Get to know me!</h3>
                            </div>
                            
                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>
                                    I'm a <span className="text-purple-300 font-semibold">passionate full-stack developer</span> with a strong foundation in modern web technologies.
                                </p>
                                <p>
                                    I love creating <span className="text-pink-300 font-semibold">efficient, scalable, and user-friendly</span> applications that solve real problems.
                                </p>
                                <p>
                                    Continuously learning and experimenting with new tools and frameworks, I thrive in collaborative environments and enjoy tackling challenges head-on.
                                </p>
                                <p>
                                    Currently, I specialize in <span className="text-blue-300 font-semibold">JavaScript, React, Next.js, Laravel, and backend development</span>, but I'm always eager to expand my skill set and contribute to innovative projects.
                                </p>
                            </div>
                            
                           
                        </div>
                    </div>

                    {/* Right Column - Skills */}
                    <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                <Code2 className="w-6 h-6 text-green-400 animate-pulse" />
                                <h3 className="text-2xl font-bold text-white">My Skills</h3>
                            </div>
                            
                            <div className="flex flex-wrap gap-4 justify-center">
                                {myskills.map((skill: string, idx: number) => (
                                    <div 
                                        key={idx}
                                        className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                                        style={{ transitionDelay: `${700 + (idx * 100)}ms` }}
                                    >
                                        <Skills skill={skill} />
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-8 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30">
                                <p className="text-center text-white/80 text-sm">
                                    <span className="text-purple-300 font-semibold">Always learning</span> and exploring new technologies to stay at the forefront of development
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-32 left-10 w-16 h-16 border border-purple-500/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-12 h-12 border border-pink-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-20 w-2 h-2 bg-purple-400/50 rounded-full animate-ping"></div>
                <div className="absolute top-1/4 left-20 w-2 h-2 bg-pink-400/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
        </div>
    );
};

export default About;