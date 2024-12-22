'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/theme-context'
import { Navigation } from './components/navigation'
import { SocialSidebar } from './components/social-sidebar'
import { EmailSidebar } from './components/email-sidebar'
import { Hero } from './components/hero'
import { About } from './components/about'
import { LoadingScreen } from './components/loading-screen'
import { Expertise } from './components/expertise'
import { Experience } from './components/experience'
import { Projects } from './components/projects'
import { Contact } from './components/contact'
import { Footer } from './components/footer'


export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // Adjust this value to match or exceed the duration in LoadingScreen

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        <Navigation />
        {isLoading && <LoadingScreen />}
        <div className="relative">
          <SocialSidebar />
          <EmailSidebar />
          <main className="container mx-auto">
            <Hero />
            <About />
            <Expertise />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

