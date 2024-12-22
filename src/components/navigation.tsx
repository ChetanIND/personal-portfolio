'use client'

import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/theme-context'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const menuItems = [
    { number: '01.', name: 'About', href: '#about' },
    { number: '02.', name: 'Expertise', href: '#expertise' },
    { number: '03.', name: 'Experience', href: '#experience' },
    { number: '04.', name: 'Projects', href: '#projects' },
    { number: '05.', name: 'Contact', href: '#contact' },
  ]

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Close the mobile menu after clicking
  }

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-10 h-10"
          >
            <div className="absolute inset-0 border-2 border-gray-900 dark:border-white transform rotate-45"></div>
            <div className="absolute inset-0 flex items-center justify-center text-gray-900 dark:text-white font-bold text-xl">
              C
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => handleScroll(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group"
              >
                <span className="text-gray-900 dark:text-white font-mono">{item.number} </span>
                {item.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => window.open('https://drive.google.com/file/d/17-dAVXWmKaR40GmyhBhUKtBoeS2sNPAE/view?usp=sharing', '_blank')}
              className="border border-gray-900 dark:border-white text-gray-900 dark:text-white px-4 py-2 rounded hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
            >
              Resume
            </motion.button>
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors mr-4"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="md:hidden fixed inset-0 bg-white/95 dark:bg-black/95 z-50 flex items-center justify-center"
        >
          <div className="px-6 py-8 space-y-6 text-center w-full">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block py-3 text-lg font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-gray-900 dark:text-white font-mono block text-sm mb-1">{item.number}</span>
                {item.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-6"
            >
              <button className="border border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 py-3 rounded hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors w-48">
                Resume
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

