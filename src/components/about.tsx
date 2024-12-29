'use client'

import { motion } from 'framer-motion'
import Image from '../assets/profile.svg'

export function About() {
  const activities = [
    ['Coding'],
    ['Team Management'],
    ['Problem Solving'],
    ['Playing Guitar'],
    ['Painting'],
  ]

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 max-w-6xl mx-auto px-4 sm:px-8 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.15 }}
      >
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
            <span className="font-mono text-gray-600 dark:text-gray-400">01.</span>
            About Me
          </h2>
          <div className="h-px bg-gray-400 dark:bg-gray-600 flex-grow"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-2 space-y-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            <p>
              Hello! I'm Chetan Harshad Indulkar, from Pune City.
            </p>

            <p>
              I am a creative, time punctual, dedicated, goal-oriented individual with decent moral Values and Ethics along with 
              a high-energy level, honed communication skills, strong organizational skills, and meticulous attention to detail.
            </p>

            <p>
              I am pursuing my Bachelors from{' '}
              <a href="https://www.pccoepune.com/" className="text-gray-900 dark:text-white hover:underline">Pimpri Chinchwad College of Engineering (PCCOE), Pune</a>{' '}
              in Computer Science and Engineering  (AI & ML) [2022-2025] my current GPA is{' '}
              <span className="text-gray-900 dark:text-white">8.53</span> out of 10.
            </p>

            <p>
              I was a member of{' '}
              <a href="https://www.linkedin.com/in/pccoe-owasp/?originalSubdomain=in" className="text-gray-900 dark:text-white hover:underline">
                OWASP PCCOE Student Chapter
              </a>{' '}
              appointed as Secuirty Team Member.
            </p>

            <p className="mb-4">Here are a few of the other activities that I love to do!</p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base">
              {activities.map((row, i) => (
                <div key={i} className="contents">
                  {row.map((activity, j) => activity && (
                    <li key={`${i}-${j}`} className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 bg-gray-900 dark:bg-white"></span>
                      {activity}
                    </li>
                  ))}
                </div>
              ))}
            </ul>
          </div>

          <div className="relative group mx-auto md:mx-0 w-full max-w-[280px] sm:max-w-[320px]">
            <div className="relative z-10">
              <img
                src={Image}
                alt="Profile picture"
                width={300}
                height={300}
                className="rounded transition-all duration-300 group-hover:grayscale-0 grayscale"
              />
              <div className="absolute inset-0 border-2 border-gray-900 dark:border-white rounded transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </div>
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

