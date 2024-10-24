import React from 'react';
import { Server, Layout, Database, Monitor, BarChart, Bot, Code, Globe } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      icon: Server,
      title: "Backend Development",
      skills: "Django, Laravel, Symfony, Flask"
    },
    {
      icon: Layout,
      title: "Frontend Development",
      skills: "React, JavaScript, HTML/CSS, Apex Charts"
    },
    {
      icon: Database,
      title: "Database Management",
      skills: "MongoDB, MS SQL Server, MySQL"
    },
    {
      icon: Monitor,
      title: "Desktop Development",
      skills: "Java, Qt5, Tkinter, Android Studio"
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      skills: "Pandas, NumPy, Matplotlib"
    },
    {
      icon: Bot,
      title: "Automation",
      skills: "Selenium, Tabula-Py, ReportLab"
    },
    {
      icon: Code,
      title: "Mobile Development",
      skills: "Android Studio, Java"
    },
    {
      icon: Globe,
      title: "Web Frameworks",
      skills: "Django, Laravel, Symfony, Flask"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {skills.map((skill, index) => (
        <div 
          key={index} 
          className="skill-card p-6 bg-white rounded-xl hover:shadow-xl transition-all duration-300
                     transform hover:scale-105 hover:bg-gradient-to-br from-white to-blue-50
                     border border-gray-100"
        >
          <skill.icon className="w-12 h-12 text-blue-600 mb-4 transform transition-transform
                                group-hover:scale-110" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{skill.title}</h3>
          <p className="text-gray-600">{skill.skills}</p>
        </div>
      ))}
    </div>
  );
}