'use client'


import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/theme-context'
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation();
  const { theme, toggleTheme } = useTheme()

  const menuItems = [
    { number: '01.', name: 'About', href: '/#about' },
    { number: '02.', name: 'Expertise', href: '/#expertise' },
    { number: '03.', name: 'Experience', href: '/#experience' },
    { number: '04.', name: 'Projects', href: '/#projects' },
    { number: '05.', name: 'Contact', href: '/#contact' },
  ]

  // const handleScroll = (href: string) => {
  //   const element = document.querySelector(href);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  //   setIsOpen(false); // Close the mobile menu after clicking
  // }

  const handleNavigation = (href: string) => {
    if (location.pathname === '/projects' && href.startsWith('/#')) {
      // If on projects page and linking to main page section, navigate to main page
      window.location.href = href;
    } else if (href.startsWith('/#')) {
      // If on main page and linking to a section, scroll to it
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            className="relative w-10 h-10"
          >
            <div className="absolute inset-0 border-2 border-gray-900 dark:border-white transform rotate-45"></div>
            <div className="absolute inset-0 flex items-center justify-center text-gray-900 dark:text-white font-bold text-xl">
              C
            </div>
          </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                // onClick={() => handleScroll(item.href)}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.href);
                }}
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
              onClick={() => window.open('https://drive.google.com/file/d/1PXJa-EKOvHFHStt5zFZN9_ckCURR868v/view?usp=sharing', '_blank')}
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed top-20 inset-x-0 bg-gray-100 dark:bg-gray-800 z-50 flex flex-col items-center p-6 space-y-4 text-center"
        >
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-lg font-medium transition-colors"
              // onClick={() => handleScroll(item.href)}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.href);
              }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.button
            onClick={() => window.open('https://drive.google.com/file/d/17-dAVXWmKaR40GmyhBhUKtBoeS2sNPAE/view?usp=sharing', '_blank')}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-lg font-medium transition-colors"
          >
            Resume
          </motion.button>
        </motion.div>
      )}
    </nav>
  )
}
