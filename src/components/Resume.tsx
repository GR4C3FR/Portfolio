import './Resume.css';

const education = [
  {
    period: 'Jul 2023 – Present',
    title: 'BS Information Technology',
    subtitle: 'Web Development',
    org: 'Holy Angel University',
  },
];

const experience = [
  {
    period: 'Jun 2024 – Present',
    org: 'Code Geeks, Holy Angel University',
    role: 'Multimedia and Creatives Officer',
  },
  {
    period: 'Jun 2024 – Mar 2025',
    org: 'Google Developer Groups, Holy Angel University',
    role: 'Creative Staff',
  },
  {
    period: 'Feb 2025 – Mar 2025',
    org: 'FrameRate',
    role: 'Full Stack Developer (Academic Project)',
  },
  {
    period: 'Sep 2025 – Oct 2025',
    org: 'Sharesource',
    role: 'Full Stack Developer (Academic Project)',
  },
  {
    period: 'Oct 2025 – Present',
    org: '',
    role: 'Marketing Video Editor',
  },
];

const certifications = [
  {
    title: 'Legacy JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    color: '#0a0a23',
    verify: 'https://www.freecodecamp.org/certification/',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    color: '#0a0a23',
    verify: 'https://www.freecodecamp.org/certification/',
  },
  {
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    color: '#1ba0d7',
    verify: 'https://www.netacad.com/',
  },
  {
    title: 'UI/UX Basics',
    issuer: 'Online Course',
    color: '#ff6b6b',
    verify: '#',
  },
  {
    title: 'Graphic Design',
    issuer: 'Online Course',
    color: '#f7931e',
    verify: '#',
  },
  {
    title: 'Introduction to Figma',
    issuer: 'Google / Coursera',
    color: '#a259ff',
    verify: 'https://www.coursera.org/',
  },
];

export default function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="resume-header">
          <h2 className="resume-title">Resume</h2>
          <a href="/Garcia-Charles-Resume.pdf" download className="btn btn-outline resume-dl-btn">
            <DownloadIcon /> <span className="resume-dl-label">Download Resume</span>
          </a>
        </div>

        {/* Education + Experience */}
        <div className="resume-columns">
          <div className="resume-col">
            <h3 className="resume-col-title">Education</h3>
            {education.map((item) => (
              <div key={item.title} className="resume-row">
                <span className="resume-period">{item.period}</span>
                <div className="resume-details">
                  <p className="resume-detail-main">{item.title}</p>
                  {item.subtitle && <p className="resume-detail-sub">{item.subtitle}</p>}
                  <p className="resume-detail-org">{item.org}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="resume-col">
            <h3 className="resume-col-title">Experience</h3>
            {experience.map((item, i) => (
              <div key={i} className="resume-row">
                <span className="resume-period">{item.period}</span>
                <div className="resume-details">
                  {item.org && <p className="resume-detail-org">{item.org},</p>}
                  <p className="resume-detail-main">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="certifications-block">
          <h3 className="certifications-title">Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.title} className="cert-card">
                <div className="cert-card-thumb" style={{ background: `${cert.color}22` }}>
                  <div className="cert-card-badge" style={{ background: cert.color }}>
                    <CertIcon />
                  </div>
                </div>
                <div className="cert-card-info">
                  <p className="cert-title">{cert.title}</p>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <a
                    href={cert.verify}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-verify-btn btn btn-outline btn-sm"
                  >
                    <ExternalIcon /> Verify
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
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

function CertIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

