import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const projects = [
  {
    title: 'Voter Registration WebApp',
    description: 'A comprehensive web application for voter registration and management. This project streamlines the voter registration process, making it more accessible and efficient for users.',
    context: 'Project 4 under HTML-CSS Suven Coding Internship',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    github: '#',
    external: '#',
    image: '/placeholder.svg?text=Voter+Registration+WebApp'
  },
  {
    title: 'CSS Animation WebApp',
    description: 'An interactive web application showcasing various CSS animations. This project demonstrates advanced CSS techniques and provides a playground for exploring different animation effects.',
    context: 'Project 3 under HTML-CSS Suven Coding Internship',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    github: '#',
    external: '#',
    image: '/placeholder.svg?text=CSS+Animation+WebApp'
  },
  // Add more projects here
];

const ProjectsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <main className="container mx-auto py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12">
      <Link to="/" className="inline-block mb-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
        ← Back to Home
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
          My Projects
        </h1>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:w-48" src={project.image} alt={project.title} />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.context}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
};

export default ProjectsPage;

