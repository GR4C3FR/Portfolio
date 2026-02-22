import './Footer.css';

const quickLinks = ['Home', 'About', 'Projects', 'Resume', 'Contact'];

interface FooterProps {
  scrollTo: (id: string) => void;
  darkMode: boolean;
}

export default function Footer({ scrollTo, darkMode }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Left — Brand */}
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img
              src={darkMode ? '/red-logo.svg' : '/blue-logo.svg'}
              alt="Charles Garcia Logo"
              className="footer-logo-img"
            />
            <div>
              <p className="footer-name">Charles Daniel Garcia</p>
              <p className="footer-role">Web Designer // Front End Developer</p>
            </div>
          </div>
          <p className="footer-desc">
            Aspiring web designer and front-end developer passionate about building
            functional and visually clean websites.
          </p>
          <a href="/Garcia-Charles-Resume.pdf" download className="btn btn-outline footer-dl-btn">
            <DownloadIcon /> Download Resume
          </a>
        </div>

        {/* Center — Quick Links */}
        <div className="footer-links">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}>
                <button onClick={() => scrollTo(link.toLowerCase())}>
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Contact */}
        <div className="footer-contact">
          <h4 className="footer-col-title">Contact</h4>
          <button
            type="button"
            className="footer-email"
            onClick={() => {
              scrollTo('contact');
              // open mail client after scrolling
              setTimeout(() => {
                window.location.href = 'mailto:garcia.charlesdan@gmail.com';
              }, 350);
            }}
          >
            garcia.charlesdan@gmail.com
          </button>
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/charles-garcia-9b6b1934b"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="footer-social-icon"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/GR4C3FR"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="footer-social-icon"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {year} Charles Daniel Garcia. All rights reserved.</p>
          <p>Built with React &amp; TypeScript</p>
        </div>
      </div>
    </footer>
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


