import React, { useEffect , useState } from 'react';
import { Hero } from '../components/hero';
import { About } from '../components/about';
import { Expertise } from '../components/expertise';
import { Experience } from '../components/experience';
import { Projects } from '../components/projects';
import { Contact } from '../components/contact';
import { LoadingScreen } from '../components/loading-screen';

const HomePage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true)
    
      useEffect(() => {
        // Simulate content loading
        const timer = setTimeout(() => {
          setIsLoading(false)
        }, 5000) // Adjust this value to match or exceed the duration in LoadingScreen
    
        return () => clearTimeout(timer)
      }, [])
  return (
    <main className="container mx-auto">
        {isLoading && <LoadingScreen />}
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects projectsLink="/projects" />
      <Contact />
    </main>
  );
};

export default HomePage;

