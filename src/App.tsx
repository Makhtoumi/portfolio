import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { motion } from 'framer-motion';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent hover:animate-pulse">
            Mohamed Ali Makhtoumi
          </span>
          <div className="space-x-8">
            <a href="#projects" className="hover:text-blue-200 transition-colors duration-300">
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-200 transition-colors duration-300">
              Skills
            </a>
            <a href="#contact" className="hover:text-blue-200 transition-colors duration-300">
              Contact
            </a>
          </div>
        </nav>
        <Hero />
      </header>

      {/* Skills Section with Fade-in */}
      <motion.section
        id="skills"
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build robust and scalable solutions
          </p>
          <Skills />
        </div>
      </motion.section>

      {/* Projects Section with Fade-in */}
      <motion.section
        id="projects"
        className="py-20 bg-gray-50"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
          <Projects />
        </div>
      </motion.section>

      {/* Contact Section with Scale-in */}
      <motion.section
        id="contact"
        className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-blue-200 text-center mb-12 max-w-2xl mx-auto">
            Let's collaborate on your next project
          </p>
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="flex space-x-8 mb-8">
              <a
                href="https://github.com"
                className="hover:text-blue-300 transition-colors duration-300 transform hover:scale-110 flex items-center space-x-2 group"
              >
                <Github className="w-6 h-6 group-hover:animate-spin" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-blue-300 transition-colors duration-300 transform hover:scale-110 flex items-center space-x-2 group"
              >
                <Linkedin className="w-6 h-6 group-hover:animate-pulse" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="hover:text-blue-300 transition-colors duration-300 transform hover:scale-110 flex items-center space-x-2 group"
              >
                <Mail className="w-6 h-6 group-hover:animate-bounce" />
                <span>Email</span>
              </a>
            </div>
            <p className="text-center text-blue-200">
              Looking forward to discussing how we can work together on your next project.
            </p>
          </div>
        </div>
      </motion.section>

      <div>
      {/* Other Sections */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-blue-200 text-center mb-12 max-w-2xl mx-auto">
            Let's collaborate on your next project
          </p>
          <ContactForm />
        </div>
      </section>
    </div>

      <footer className="bg-blue-950 text-white py-6 shadow-lg">
        <div className="container mx-auto px-6 text-center">
          <p className="text-blue-200">© {new Date().getFullYear()} - Mohamed Ali Makhtoumi</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
