'use client';

import Spline from '@splinetool/react-spline';

import '../style/hero-style.css'; // Include the CSS for animation
import { useTheme } from '../contexts/theme-context';

export function Hero() {
  const { theme } = useTheme(); // Get the current theme
    
  return (
    <>
      <div className='hero-container h-screen sm:h-[10vh] md:h-[70vh] lg:h-[100vh]'>
      {/* 3D Spline */}
      <div className="stack-containers flex flex-col justify-center items-center h-screen relative">
        {/* Horizontal Text Loop */}
        <div id="loop" className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>
          <h1>
            <b> Web</b> Developer <span>AI</span> Developer <span>Full Stack</span> Developer <span>Machine Learning</span> Engineer 
          </h1>
          <h1>
            <b> Web</b> Developer <span>AI</span> Developer <span>Full Sta  ck</span> Developer <span>Machine Learning</span> Engineer 
          </h1>
          <h1>
            <b> Web</b> Developer <span>AI</span> Developer <span>Full Stack</span> Developer <span>Machine Learning</span> Engineer 
          </h1>
        </div>

        <div className="spline-container w-full max-w-screen-lg h-[90vh] md:h-[90vh] lg:h-[100vh] z-10">
          <Spline scene="https://prod.spline.design/UNQKHO4GWwaMcZkY/scene.splinecode"/>
        </div>

        <div className="absolute inset-x-0 top-12 sm:top-16 md:top-16 lg:top-28 flex flex-col md:flex-row justify-between items-center px-5 md:px-20 z-10">
          {/* Left Text */}
          <div className="flex flex-col text-center md:text-left md:pl-20 lg:pl-80 space-y-2">
            <h3 className="text-lg sm:text-xl font-mono text-gray-600 dark:text-gray-400">
              Hello, my name is
            </h3>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white font-robotic">
              Chetan
            </h1>
          </div>
          {/* Right Text */}
          <div className="text-center md:pr-20 lg:pr-80 pt-6 sm:pt-4 md:pt-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white font-robotic">
              Indulkar
            </h1>
          </div>
        </div>

        
      </div>
      </div>
    </>
  );
}
