import './Hero.css';
import DecryptedText from './DecryptedText';
import ColorBends from './ColorBends';

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
      <div className="hero-color-bends" aria-hidden="true">
        <ColorBends
          colors={[darkMode ? '#bd1d2d' : '#007bff']}
          rotation={-57}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent
          autoRotate={0}
          color={darkMode ? '#bd1d2d' : '#007bff'}
        />
      </div>
      <div className="container hero-inner">
        {/* Left — text */}
        <div className="hero-text">
          <p className="hero-greeting">
            <DecryptedText
              text="Hello, I'm"
              animateOn="view"
              speed={45}
              sequential
              revealDirection="start"
              className="hero-decrypted"
              encryptedClassName="hero-encrypted"
            />
          </p>
          <h1 className="hero-name">
            <DecryptedText
              text="Charles Daniel Garcia"
              animateOn="view"
              speed={55}
              sequential
              revealDirection="start"
              className="hero-name-decrypted"
              encryptedClassName="hero-name-encrypted"
            />
          </h1>
          <p className="hero-greeting">
            <DecryptedText
              text="Web Designer // Front End Developer"
              animateOn="view"
              speed={40}
              sequential
              revealDirection="start"
              className="hero-decrypted"
              encryptedClassName="hero-encrypted"
            />
          </p>
          <p className="hero-desc">
            <DecryptedText
              text="An aspiring web designer and front-end developer passionate about building functional and visually clean websites."
              animateOn="view"
              speed={34}
              sequential
              revealDirection="start"
              className="hero-decrypted"
              encryptedClassName="hero-encrypted"
            />
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


