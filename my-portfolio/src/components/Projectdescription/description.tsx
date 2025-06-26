import React from 'react';
import Image from "next/image";
import { ExternalLink, Github, Code2, Sparkles } from 'lucide-react';

interface ProjectdescriptionProps {
    name: string;
    description: string;
    image: string;
    technologies?: string[];
    githubUrl?: string;
    liveUrl?: string;
}

const Projectdescription: React.FC<ProjectdescriptionProps> = ({ 
    name, 
    description, 
    image, 
    technologies = [],
    githubUrl,
    liveUrl 
}) => {
    return (
        <div className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
            {/* Image Container */}
            <div className="relative h-48 w-full mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                <Image  
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    src={image || "/ping_pong.jpeg"} 
                    fill
                    alt={`${name} project image`}
                />

            </div>

            {/* Content */}
            <div className="space-y-4">
                {/* Project Title */}
                <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                        {name}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
                    {description}
                </p>

                {/* Technologies */}
                {technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full border border-purple-500/30"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                    {githubUrl && (
                        <a 
                            href={githubUrl}
                             target="_blank"
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/20 hover:border-white/30 transition-all duration-300"
                        >
                            <Github className="w-4 h-4" />
                            Code
                        </a>
                    )}
                    
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                </div>
            </div>
        </div>
    );
};

export default Projectdescription;