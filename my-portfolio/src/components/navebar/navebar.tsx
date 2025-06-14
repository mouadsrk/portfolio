import Image from "next/image";
import { useState, useEffect } from "react";

const Navebar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    return (
        <nav className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
            scrolled 
                ? 'h-[70px] bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20' 
                : 'h-[80px] bg-black/40 backdrop-blur-md'
        }`}>
            <div className="flex justify-between items-center h-full px-6 lg:px-12 xl:px-20">
                {/* Logo Section */}
                <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
                        <Image  
                            className="rounded-full border-2 border-white/20 group-hover:border-purple-400/50 transition-all duration-300 group-hover:scale-110" 
                            src="/mouad_serroukh.jpg" 
                            alt="Mouad Serroukh" 
                            width="45" 
                            height="45" 
                        />
                    </div>
                    <div className="text-white font-bold text-lg tracking-wide group-hover:text-purple-300 transition-colors duration-300">
                        MOUAD SERROUKH
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8 lg:gap-12">
                    {[
                        { name: 'HOME', href: '#home', id: 'home' },
                        { name: 'ABOUT', href: '#about', id: 'about' },
                        { name: 'PROJECTS', href: '#projects', id: 'projects' },
                        { name: 'CONTACT', href: '#contact', id: 'contact' }
                    ].map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={() => handleNavClick(item.id)}
                            className={`relative font-semibold text-sm tracking-wider transition-all duration-300 group ${
                                activeSection === item.id 
                                    ? 'text-purple-400' 
                                    : 'text-white/90 hover:text-white'
                            }`}
                        >
                            <span className="relative z-10">{item.name}</span>
                            
                            {/* Hover effect */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 blur-sm"></div>
                            
                            {/* Active indicator */}
                            <div className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                                activeSection === item.id 
                                    ? 'opacity-100 scale-x-100' 
                                    : 'opacity-0 scale-x-0'
                            }`}></div>
                            
                            {/* Hover underline */}
                            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-white/50 to-white/30 opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-white p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-30"></div>
            <div className="absolute top-0 right-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-30"></div>
        </nav>
    );
};

export default Navebar;