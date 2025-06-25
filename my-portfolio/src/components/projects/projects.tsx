import React, { useState, useEffect } from 'react';
import { FolderOpen, Github, ArrowRight } from 'lucide-react';
import Projectdescription from "../Projectdescription/description";

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [particles, setParticles] = useState([]);

    const projectsData = [
        {
            name: "Webserve",
            description: "Lightweight HTTP server built from scratch in C++, capable of serving content with CGI support",
            image: "/http.svg",
            technologies: ["C++", "Sockets", "CGI"],
            githubUrl: "https://github.com/mouadsrk/webServer",
            liveUrl: "#"
        },
        {
            name: "Inception",
            description: "Docker-based system infrastructure setup hosting multiple services with Nginx, WordPress, and MariaDB",
            image: "/docker.png",
            technologies: ["Docker", "Nginx", "MariaDB", "WordPress"],
            githubUrl: "https://github.com/mouadsrk/inception",
            liveUrl: "#"
        },
        {
            name: "Cub3D",
            description: "Raycasting-based 3D game engine inspired by Wolfenstein 3D, built using the MiniLibX graphics library",
            image: "/ping_pong.jpeg" ,
            technologies: ["C", "Raycasting", "MiniLibX"],
            githubUrl: "https://github.com/mouadsrk/cub3d",
            liveUrl: "#"
        },
        {
            name: "Minishell",
            description: "Minimal Unix shell implementing built-in commands, piping, redirection, and signal handling",
            image: "/ping_pong.jpeg" ,
            technologies: ["C", "Unix", "Processes"],
            githubUrl: "https://github.com/mouadsrk/minishell",
            liveUrl: "#"
        },
        {
            name: "Push Swap",
            description: "Sorting algorithm using a limited set of stack operations with optimal move calculation",
            image: "/ping_pong.jpeg",
            technologies: ["C", "Algorithms", "Data Structures"],
            githubUrl: "https://github.com/mouadsrk/push_swap",
            liveUrl: "#"
        },
        {
            name: "So Long",
            description: "2D tile-based adventure game using basic graphics rendering and event-driven game logic",
            image: "/ping_pong.jpeg",
            technologies: ["C", "MiniLibX", "Game Dev"],
            githubUrl: "https://github.com/mouadsrk/so_long",
            liveUrl: "#"
        }        
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const projectsSection = document.getElementById('projects-section');
        if (projectsSection) {
            observer.observe(projectsSection);
        }

        // Generate particles for background
        const particleData = [...Array(12)].map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            animationDelay: Math.random() * 4,
            animationDuration: 5 + Math.random() * 3
        }));
        setParticles(particleData);

        return () => observer.disconnect();
    }, []);

    return (
        <div 
            id="projects-section"
            className="relative min-h-screen w-full text-white bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 overflow-hidden"
        >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
            
            {/* Floating particles */}
            <div className="absolute inset-0">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute w-1 h-1 bg-white/15 rounded-full animate-pulse"
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/20"></div>

            <div className="relative z-10 container mx-auto px-6 py-20">
                {/* Header Section */}
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <FolderOpen className="w-8 h-8 text-blue-400" />
                        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                            Projects
                        </h2>
                    </div>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
                    
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed">
                        Here you will find some of the personal and school projects that I created, each accompanied by a detailed case study.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projectsData.map((project, index) => (
                        <div 
                            key={index}
                            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${300 + (index * 150)}ms` }}
                        >
                            <Projectdescription 
                                name={project.name}
                                description={project.description}
                                image={project.image}
                                technologies={project.technologies}
                                githubUrl={project.githubUrl}
                                liveUrl={project.liveUrl}
                            />
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className={`text-center mt-16 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Want to see more?
                        </h3>
                        <p className="text-white/80 mb-6">
                            Check out my GitHub for more projects and contributions to open source
                        </p>
                        <a 
                            href="#" 
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                        >
                            <Github className="w-5 h-5" />
                            View GitHub
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-32 right-10 w-20 h-20 border border-blue-500/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-16 h-16 border border-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/3 left-20 w-2 h-2 bg-blue-400/50 rounded-full animate-ping"></div>
                <div className="absolute bottom-1/3 right-20 w-2 h-2 bg-purple-400/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
        </div>
    );
};

export default Projects;