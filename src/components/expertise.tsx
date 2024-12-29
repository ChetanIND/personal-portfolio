'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ReactIcon from '../assets/frameworks/react.svg'
import NodeIcon from '../assets/frameworks/nodejs.svg'
import DjangoIcon from '../assets/frameworks/django.svg'
import OracleIcon from '../assets/databases/oracle.svg'
import CPPIcon from '../assets/programming languages/c++.svg'
import JavaIcon from '../assets/programming languages/java.svg'
import PythonIcon from '../assets/programming languages/python.svg'
import JavaScriptIcon from '../assets/programming languages/javascript.svg'
import MysqlIcon from '../assets/databases/mysql.svg'
import MongoDBIcon from '../assets/mongodb-icon-2.svg'
import FirebaseIcon from '../assets/cloud/firebase.svg'
import GCPIcone from '../assets/google-cloud.svg'
import DockerIcon from '../assets/cloud/docker.svg'
import GithubIconb from '../assets/cloud/github.svg'
import TensorflowIcone from '../assets/google-tensorflow-icon.svg'
import HuggingfaceIcon from '../assets/huggingface-2.svg'
import FlaskIcon from '../assets/flask2.svg'
import AndroidIcon from '../assets/frameworks/android.svg'
import PytorchIcon from '../assets/PyTorch.svg'
import LinuxIcon from '../assets/Linux.svg'
import LangchainIcon from '../assets/langchain.svg'

// Define the structure for our expertise items
interface ExpertiseItem {
  name: string
  icon: string
}

// Our list of expertise items
const expertiseItems: ExpertiseItem[] = [
  { name: 'C++', icon: CPPIcon },
  { name: 'Python', icon: PythonIcon },
  { name: 'Java', icon: JavaIcon },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'Node.js', icon: NodeIcon },
  { name: 'Django', icon: DjangoIcon },
  { name: 'Flask', icon: FlaskIcon },
  { name: 'Android', icon: AndroidIcon },
  { name: 'Oracle', icon: OracleIcon },
  { name: 'MySQL', icon: MysqlIcon },
  { name: 'MongoDB', icon: MongoDBIcon },
  { name: 'Firebase', icon: FirebaseIcon },
  { name: 'GitHub', icon: GithubIconb },
  { name: 'Google Cloud Platform', icon: GCPIcone },
  { name: 'Tensorflow', icon: TensorflowIcone },
  { name: 'PyTorch', icon: PytorchIcon },
  { name: 'Huggingface', icon: HuggingfaceIcon },
  { name: 'Langchain', icon: LangchainIcon },
  { name: 'Linux', icon: LinuxIcon },
  { name: 'Docker', icon: DockerIcon },
]

export function Expertise() {
  return (
    <section id="expertise" className="py-16 sm:py-20 md:py-24 max-w-6xl mx-auto px-4 sm:px-8 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.15 }}
      >
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
            <span className="font-mono text-gray-600 dark:text-gray-400">02.</span>
            Expertise
          </h2>
          <div className="h-px bg-gray-400 dark:bg-gray-600 flex-grow"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-12">
          {expertiseItems.map((item) => (
            <ExpertiseIcon key={item.name} item={item} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function ExpertiseIcon({ item }: { item: ExpertiseItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.15 }}
    >
      <div
        className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={item.icon}
            alt={`${item.name} icon`}
            className="w-full h-full object-contain filter grayscale"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'fill' }}
          />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={item.icon}
            alt={`${item.name} icon`}
            className="w-full h-full object-contain"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'fill' }}
          />
        </motion.div>
      </div>
      <p className="text-sm text-center text-gray-700 dark:text-gray-300">{item.name}</p>
    </motion.div>
  );
}