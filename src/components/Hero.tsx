import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="container mx-auto px-6 py-24 relative">
      <div className="max-w-3xl slide-in">
        <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6 transform hover:scale-105 transition-transform">
          Welcome to my portfolio
        </div>
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Mohamed Ali Makhtoumi
        </h1>
        <h2 className="text-3xl font-semibold mb-4 text-blue-100">Full Stack Developer</h2>
        <p className="text-xl mb-8 text-blue-50 leading-relaxed">
          Versatile developer specializing in Django, Laravel, Symfony, and Flask frameworks. 
          Expert in both web and desktop development with extensive experience in data analytics 
          and visualization.
        </p>
        <div className="flex space-x-4">
          <a 
            href="#contact" 
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold 
                     hover:bg-blue-50 transition-all duration-300 transform hover:scale-105
                     hover:shadow-lg"
          >
            Get in touch
          </a>
          <a 
            href="#projects" 
            className="border-2 border-white px-8 py-3 rounded-lg font-semibold 
                     hover:bg-white hover:text-blue-900 transition-all duration-300
                     transform hover:scale-105"
          >
            View Projects
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </div>
    </div>
  );
}