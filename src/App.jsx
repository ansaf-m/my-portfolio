import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { LoadingScreen } from './components/LoadingScreen';

export function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ansaf_portfolio_theme');
      if (saved && ['minimalism', 'surrealism', 'glassmorphism'].includes(saved)) {
        return saved;
      }
    }
    return 'minimalism';
  });
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Lock scrolling while the cinematic intro is playing, and ensure page starts at top hero fold
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
      window.scrollTo(0, 0);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  useEffect(() => {
    // Apply theme attribute to root
    document.documentElement.setAttribute('data-theme', currentTheme);
    try {
      localStorage.setItem('ansaf_portfolio_theme', currentTheme);
    } catch {
      // storage unavailable
    }
  }, [currentTheme]);

  return (
    <div className="portfolio-app">
      {/* Cinematic Logo & Strip Lines Intro Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Custom Glowing Cursor */}
      <CustomCursor />

      {/* Floating Glass Navigation */}
      <Navbar
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero currentTheme={currentTheme} onOpenResume={() => setIsResumeOpen(true)} />
        <About currentTheme={currentTheme} />
        <Skills currentTheme={currentTheme} />
        <Projects currentTheme={currentTheme} />
        <Timeline currentTheme={currentTheme} />
        <Contact currentTheme={currentTheme} />
      </main>

      {/* Footer */}
      <Footer currentTheme={currentTheme} />

      {/* ATS-Friendly Printable & Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
