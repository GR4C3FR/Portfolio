import { useState } from 'react';
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
  // {
  //   period: 'Feb 2025 – Mar 2025',
  //   org: 'FrameRate',
  //   role: 'Full Stack Developer (Academic Project)',
  // },
  // {
  //   period: 'Sep 2025 – Oct 2025',
  //   org: 'Sharesource',
  //   role: 'Full Stack Developer (Academic Project)',
  // },
  {
    period: 'Oct 2025 – Dec 2025',
    org: 'Ryan Diamonds Inc.',
    role: 'Marketing Video Editor',
  },
];

const certifications = [
  {
    title: 'Legacy JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    color: '#0a0a23',
    verify: 'https://www.freecodecamp.org/certification/charlesgarcia/javascript-algorithms-and-data-structures',
    thumb: '/Legacy Javascript.webp',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    color: '#0a0a23',
    verify: 'https://www.freecodecamp.org/certification/charlesgarcia/responsive-web-design',
    thumb: '/Responsive Web Design.webp',
  },
  {
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    color: '#1ba0d7',
    verify: 'https://www.credly.com/badges/21f0fb1b-894b-4b23-bb7a-818bad20f089/print',
    thumb: '/JavaScript Essentials 1.webp',
  },
  {
    title: 'Basics of UI/UX',
    issuer: 'Simplilearn',
    color: '#ff6b6b',
    verify: 'https://simpli-web.app.link/e/TKw01bVm10b',
    thumb: '/Basics of UI UX.webp',
  },
  {
    title: 'Introduction to PHP',
    issuer: 'Simplilearn',
    color: '#f7931e',
    verify: 'https://simpli-web.app.link/e/W9orMjen10b',
    thumb: '/Introduction to PHP.webp',
  },
  {
    title: 'Introduction to Figma',
    issuer: 'Simplilearn',
    color: '#a259ff',
    verify: 'https://simpli-web.app.link/e/U5Bwmgcn10b',
    thumb: '/Introduction to Figma.webp',
  },
];

export default function Resume() {
  const [preview, setPreview] = useState<null | { title: string; src: string; isPdf: boolean }>(null);
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
          <div className="certifications-header">
            <h3 className="certifications-title">Certifications</h3>
            <a
              href="https://drive.google.com/drive/u/5/folders/1mwjg1zE42E1seDnZrLZRnbIu6Vtd4Ve4"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline resume-dl-btn view-others-btn"
            >
              <ExternalIcon /> View Others
            </a>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="cert-card"
                onClick={() => {
                  if (cert.thumb) {
                    const isPdf = cert.thumb.toLowerCase().endsWith('.pdf');
                    setPreview({ title: cert.title, src: cert.thumb, isPdf });
                  }
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') { if (cert.thumb) { setPreview({ title: cert.title, src: cert.thumb, isPdf: cert.thumb.toLowerCase().endsWith('.pdf') }); } } }}
              >
                <div className="cert-card-thumb" style={{ background: `${cert.color}22` }}>
                  {cert.thumb ? (
                    cert.thumb.toLowerCase().endsWith('.pdf') ? (
                      <object data={cert.thumb} type="application/pdf" className="cert-thumb-embed"> 
                        <div className="cert-thumb-fallback">View PDF</div>
                      </object>
                    ) : (
                      // image
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={cert.thumb} alt={cert.title} className="cert-thumb-img" />
                    )
                  ) : (
                    <div className="cert-card-badge" style={{ background: cert.color }}>
                      <CertIcon />
                    </div>
                  )}
                </div>
                <div className="cert-card-info">
                  <p className="cert-title">{cert.title}</p>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <a
                    href={cert.verify}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-verify-btn btn btn-outline btn-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalIcon /> Verify
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {preview && (
          <div className="cert-modal" onClick={() => setPreview(null)}>
            <div className="cert-modal-inner" onClick={(e) => e.stopPropagation()}>
              <button className="cert-modal-close" onClick={() => setPreview(null)} aria-label="Close preview">×</button>
              <h4 className="cert-modal-title">{preview.title}</h4>
              <div className="cert-preview">
                {preview.isPdf ? (
                  <iframe src={preview.src} title={preview.title} className="cert-preview-iframe" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={preview.src} alt={preview.title} className="cert-preview-img" />
                )}
              </div>
            </div>
          </div>
        )}
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

