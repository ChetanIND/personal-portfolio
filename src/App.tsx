'use client'

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme-context'
import { Navigation } from './components/navigation'
import { SocialSidebar } from './components/social-sidebar'
import { EmailSidebar } from './components/email-sidebar'
import { LoadingScreen } from './components/loading-screen'
import { Footer } from './components/footer'
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000) // Adjust this value to match or exceed the duration in LoadingScreen

    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        <Navigation />
        {isLoading && <LoadingScreen />}
        <div className="relative">
          <SocialSidebar />
          <EmailSidebar />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
    </Router>
  )
}

