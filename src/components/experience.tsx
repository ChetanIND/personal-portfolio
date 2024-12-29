'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface Experience {
  company: string
  shortName: string
  position: string
  duration: string
  description: string[]
  offerLetter?: string
}

const experiences: Experience[] = [
  {
    company: 'Muks Robotics AI Pvt. Ltd.',
    shortName: 'Muks Robotics',
    position: 'AI and ML Intern',
    duration: 'April 2024 - July 2024',
    description: [
      'Led four computer vision detection projects for clients including one of India’s top leading companies in the automobile sector like TATA Motors and Sun Jewels at SEEPZ, utilizing YOLOv8, YOLOv10, and PyTorch to develop robust and accurate vision systems.',
      'Integrated Modbus Slave protocols and RTSP cameras to enhance real-time data processing capabilities and ensure seamless system efficiency.',
      'Developed user-friendly interfaces using PyQt5 and contributed to cutting-edge vision transformer projects, significantly improving overall system functionality and performance',
      'Managed end-to-end project lifecycles from client requirement analysis to final product delivery, consistently ensuring on-time delivery and high levels of client satisfaction'
    ],
    offerLetter: 'https://drive.google.com/file/d/1oVTAjzO63UCMwFB5vWqeeiks2mq7yJfU/view?usp=sharing'
  },
  {
    company: 'OWASP PCCOE STUDENT CHAPTER',
    shortName: 'OWASP STUDENT CHAPTER',
    position: 'Security Team Member',
    duration: 'August 2023 - April 2024',
    description: [
      'Active member of OWASP PCCOE Student Chapter’s Security Team, organizing cybersecurity events and workshops.',
      'Develop engaging Capture The Flag (CTF) challenges to promote cybersecurity awareness among students.',
      'Deliver sessions and seminars, educating peers on cybersecurity best practices and emerging trends.',
      'Foster a collaborative environment, supporting peers, and networking within the cybersecurity industry.'
    ]
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 max-w-6xl mx-auto px-4 sm:px-8 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.15 }}
      >
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
            <span className="font-mono text-gray-600 dark:text-gray-400">03.</span>
            Experience
          </h2>
          <div className="h-px bg-gray-400 dark:bg-gray-600 flex-grow"></div>
        </div>

        <div className="grid md:grid-cols-[200px_1fr] gap-4 sm:gap-8 mt-8">
          {/* Company Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-hide">
            {experiences.map((experience, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-sm font-mono text-left border-b-2 md:border-b-0 md:border-l-2 whitespace-nowrap
                  ${activeTab === index 
                    ? 'text-gray-900 dark:text-white border-gray-900 dark:border-white' 
                    : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                {experience.shortName}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="min-h-[350px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {experiences[activeTab].position}{' '}
                <span className="text-gray-600 dark:text-gray-400">@</span>{' '}
                <span className="text-emerald-500">{experiences[activeTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mt-1">
                {experiences[activeTab].duration}
              </p>
              <ul className="mt-4 space-y-4">
                {experiences[activeTab].description.map((point, index) => (
                  <li key={index} className="flex gap-2 text-gray-600 dark:text-gray-300">
                    <span className="text-emerald-500 mt-1.5">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {experiences[activeTab].offerLetter && (
                <a
                  href={experiences[activeTab].offerLetter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-sm text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  View COMPLETION LETTER
                  <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

