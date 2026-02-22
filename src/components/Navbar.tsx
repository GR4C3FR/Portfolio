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
    // If on small screens (drawer open), close drawer first so body/html overflow restores,
    // then scroll after a short delay so scrollIntoView works reliably.
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    if (isMobile) {
      setMenuOpen(false);
      setTimeout(() => {
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 260);
    } else {
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const handleDrawerNavClick = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const el = document.getElementById(id);
    setMenuOpen(false);
    // allow drawer to close and overflow to restore, then scroll
    setTimeout(() => {
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        try {
          (el as HTMLElement).focus();
        } catch (err) {
          // ignore
        }
      }
    }, 260);
  };

  useEffect(() => {
    // lock document scroll when menu is open (both html and body)
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
    document.documentElement.style.overflowX = menuOpen ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.overflowX = '';
    };
  }, [menuOpen]);

  return (
    <header className="nav-wrapper">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <button type="button" className="nav-logo" onClick={() => scrollTo('home')}>
          <img
            src={darkMode ? '/red-logo.svg' : '/blue-logo.svg'}
            alt="Charles Garcia Logo"
            className="nav-logo-img"
          />
        </button>

        {/* Center Nav Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button type="button" onClick={() => scrollTo(link.id)}>{link.label}</button>
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
            type="button"
            className="icon-btn"
            onClick={toggleDarkMode}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Hamburger */}
          <button
            type="button"
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </nav>

      {/* Side drawer for mobile */}
      {menuOpen && (
        <>
          <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />
          <aside className="side-drawer" role="dialog" aria-modal="true">
            <div className="drawer-header">
              <button type="button" className="hamburger close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <CloseIcon />
              </button>
            </div>
            <nav className="drawer-nav">
              {navLinks.map((link) => (
                <button type="button" key={link.id} onClick={(e) => handleDrawerNavClick(link.id, e)} className="drawer-link">
                  {link.label}
                </button>
              ))}
            </nav>
          </aside>
        </>
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
