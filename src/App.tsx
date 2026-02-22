import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode((d) => !d)} />
      <main>
        <Hero darkMode={darkMode} />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer scrollTo={scrollTo} darkMode={darkMode} />
    </div>
  );
}
