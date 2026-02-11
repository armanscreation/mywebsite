
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import AudioPlayer from './components/AudioPlayer';
import { THEME_COLORS } from './constants';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [primaryColor, setPrimaryColor] = useState<string>(THEME_COLORS[0].value);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  // Initial Theme Detection
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  // Update root class for Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Handle CSS variable for theme color
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
  }, [primaryColor]);

  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-20 theme-transition">
      {/* Navigation Overlay */}
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        primaryColor={primaryColor}
        setPrimaryColor={setPrimaryColor}
      />

      {/* Main Content Sections */}
      <main className="w-full max-w-4xl px-4 mt-24 space-y-24">
        {/* Floating Controls Bar (MacOS Island Style) */}
        <section className="sticky top-20 z-40 flex flex-wrap justify-center gap-4 py-4 px-6 glass rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl">
          <AudioPlayer 
            isPlaying={isAudioPlaying} 
            setIsPlaying={setIsAudioPlaying} 
          />
          <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2" />
          <div className="flex items-center gap-3">
            {THEME_COLORS.map((color) => (
              <button
                key={color.name}
                onClick={() => setPrimaryColor(color.value)}
                className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-125 ${color.bgClass} ${primaryColor === color.value ? 'border-white ring-2 ring-slate-300 dark:ring-slate-600' : 'border-transparent'}`}
                title={color.name}
              />
            ))}
          </div>
        </section>

        <div id="home">
          <Hero />
        </div>

        <div id="about">
          <Terminal />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      {/* Footer Decoration */}
      <footer className="mt-20 text-slate-400 dark:text-slate-600 text-sm fira-code">
        &copy; {new Date().getFullYear()} Arman's Creation. Crafted with passion.
      </footer>
    </div>
  );
};

export default App;
