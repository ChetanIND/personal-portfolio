import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import pic1 from '../assets/p1.png';
import pic2 from '../assets/p2.jpg';
import pic3 from '../assets/p3.jpg';
import pic4 from '../assets/p4.png';

const projects = [
  {
    
    title: 'Zebra-Crossing Person Detection and Operating Traffic Signal',
    description: 'Developed an intelligent system for pedestrian safety at zebra crossings. This system integrates real-time pedestrian detection using optimized YOLOv8 models with Arduino-controlled traffic signals and audio alerts to enhance road safety.',
    context: 'Project 1 During Internship',
    technologies: ['Python', 'Arduino', 'Machine Learning', 'OpenCV', 'YOLOv8'],
    github: 'https://github.com/ChetanIND/zebra-crossing-person-detection-and-operating-Traffic-Signal',
    external: 'https://drive.google.com/file/d/1Xznft5WLPIkclWYFkzZNoBNDTotuFQcz/view?usp=sharing',
    image: pic3
  },
  {
    title: 'SAHARA: An Automated Smart Device for Visually Impaired',
    description: 'SAHARA integrates advanced technology into a compact, user-friendly device with features like obstacle detection, visual message-to-speech conversion, and precise currency identification and counting. By leveraging cutting-edge sensors and AI algorithms, SAHARA aims to enhance safety, accessibility, and financial independence, ultimately fostering a more inclusive and empowered society.',
    context: 'Project 2 Third Year Engineering Mini Project',
    technologies: ['Python', 'C++', 'C','Machine Learning'],
    github: 'https://github.com/ChetanIND/obstacle-detection-and-avoidance-using-depth-estimation',
    external: '',
    image: pic1
  },
  {

    title: 'BillWise: Expense Tracker App',
    description: ' A application based Automated expense categorization and predictive analysis, optimizing user experience and financial insights. Developed a financial management system with automated expense categorization, predictive analysis, and a chatbot. Optimized backend performance using Django/FastAPI and integrated machine learning models for enhanced user experience.',
    context: 'Project 3 under Hackathon',
    technologies: ['Flutter', 'Firebase', 'Dart', 'Python'],
    github: 'https://github.com/ChetanIND/justInCase',
    external: 'https://drive.google.com/file/d/1SEHRzfbnCDw7OHZNLeD9Jm70hXmsiCDi/view?usp=sharing',
    image: pic2
  },
  {

    title: 'Data Visualization & EDA App with Google Generative AI',
    description: ' This Streamlit app empowers data exploration. Upload a CSV file to preview, visualize, and conduct EDA. The app leverages ydata-profiling and Google Generative AI for insightful data analysis and preprocessing suggestions.',
    context: 'Project 4 personal project',
    technologies: ['Python', 'Streamlit', 'Google Generative AI', 'ydata-profiling','Gemini','Pandas'],
    github: 'https://github.com/ChetanIND/Data-Visualization-EDA-App-with-Google-Generative-AI',
    external: 'https://data-visualization-eda-app-with-app-generative-ai-cih.streamlit.app',
    image: pic4
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
                  <img className="h-48 w-full object-cover md:h-64 md:w-96" src={project.image} alt={project.title} />
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

