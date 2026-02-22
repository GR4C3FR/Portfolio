import { useState, useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="nav-wrapper">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <button className="nav-logo" onClick={() => scrollTo('home')}>
          <img
            src={darkMode ? '/red-logo.svg' : '/blue-logo.svg'}
            alt="Charles Garcia Logo"
            className="nav-logo-img"
          />
        </button>

        {/* Center Nav Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button onClick={() => scrollTo(link.id)}>{link.label}</button>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="nav-actions">
          <a
            href="/Garcia-Charles-Resume.pdf"
            download
            className="btn btn-primary btn-sm"
            title="Download Resume"
          >
            <DownloadIcon />
            <span className="btn-label">Resume</span>
          </a>
          <button
            className="icon-btn"
            onClick={toggleDarkMode}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)}>
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
