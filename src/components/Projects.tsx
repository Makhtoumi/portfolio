import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Hotel Reservation System",
      description: "Comprehensive web application for hotel booking management with real-time availability and booking analytics.",
      tech: ["Django", "React", "PostgreSQL", "Redis"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600"
    },
    {
      title: "Integrated Data Analytics Dashboard",
      description: "Advanced analytics platform featuring interactive charts, data visualization, and automated reporting.",
      tech: ["Laravel", "Apex Charts", "MySQL", "Pandas"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600"
    },
    {
      title: "E-Commerce Platform",
      description: "Feature-rich online store with inventory management, payment integration, and analytics dashboard.",
      tech: ["Symfony", "MongoDB", "React", "Docker"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600"
    },
    {
      title: "Inventory Management System",
      description: "Desktop application for comprehensive stock management and reporting.",
      tech: ["Qt5", "Python", "SQLite", "ReportLab"],
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=1600"
    },
    {
      title: "Quiz Game Platform",
      description: "Interactive educational platform with real-time scoring and progress tracking.",
      tech: ["Flask", "JavaScript", "MongoDB", "WebSocket"],
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=1600"
    },
    {
      title: "Expense Control System",
      description: "Financial management tool with budget tracking and expense analytics.",
      tech: ["Django", "Chart.js", "PostgreSQL", "Celery"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="project-card group bg-white rounded-xl overflow-hidden shadow-lg 
                     hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
        >
          <div className="relative overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover transform transition-transform duration-500 
                         group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          flex items-end justify-between p-4">
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <ExternalLink className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm
                           transform transition-transform hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}