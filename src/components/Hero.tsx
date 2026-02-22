import './Hero.css';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero section">
      <div className="container hero-inner">
        {/* Left — text */}
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Charles Daniel Garcia</h1>
          <p className="hero-greeting">Web Designer // Front End Developer</p>
          <p className="hero-desc">
            An aspiring web designer and front-end developer passionate about
            building functional and visually clean websites.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              View My Work
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>
          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/charles-garcia-9b6b1934b"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/GR4C3FR"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>

        {/* Right — logo */}
        <div className="hero-visual">
          <div className="hero-logo-glow" />
          <img
            src={darkMode ? '/red-logo.svg' : '/blue-logo.svg'}
            alt="Charles Garcia Logo"
            className="hero-logo-img"
          />
        </div>
      </div>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}


