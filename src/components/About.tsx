import './About.css';

const techSkills = [
  { name: 'HTML5', color: '#e34f26', bg: '#fff3ee',
    icon: <img src="/html-badge.png" alt="HTML5" className="tech-skill-img" /> },
  { name: 'JavaScript', color: '#f7df1e', bg: '#fffde7',
    icon: <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="2" fill="#f7df1e"/><path d="M19 26c.6 1 1.4 1.7 2.8 1.7 1.2 0 2-.6 2-1.4 0-1-.8-1.3-2.1-1.9l-.7-.3c-2.1-.9-3.5-2-3.5-4.4 0-2.2 1.7-3.8 4.3-3.8 1.9 0 3.2.6 4.2 2.3l-2.3 1.5c-.5-.9-1-.9-1.9-.9-.9 0-1.4.5-1.4 1.2 0 .8.5 1.1 1.7 1.7l.7.3c2.5 1.1 3.9 2.1 3.9 4.6 0 2.6-2 4-4.8 4-2.7 0-4.4-1.3-5.2-2.9L19 26zm-10.3.3c.4.8.8 1.4 1.7 1.4.8 0 1.4-.4 1.4-1.6V16h2.9v10.1c0 2.7-1.6 3.9-3.9 3.9C8.8 30 7.5 29 6.8 27.6l1.9-1.3z" fill="#333"/></svg> },
  { name: 'CSS3', color: '#2965f1', bg: '#eef3fe',
    icon: <img src="/css-badge.svg" alt="CSS3" className="tech-skill-img" /> },
  { name: 'Angular', color: '#dd0031', bg: '#ffeef1',
    icon: <svg viewBox="0 0 32 32" fill="none"><path d="M16 2L4.4 6.2l1.8 14.6L16 26l9.8-5.2 1.8-14.6L16 2z" fill="#dd0031"/><path d="M16 2v24l9.8-5.2 1.8-14.6L16 2z" fill="#c3002f"/><path d="M16 6l6.4 14.4h-2.4l-1.3-3.2h-5.4L12 20.4H9.6L16 6zm0 5.2l-1.9 4.4h3.8L16 11.2z" fill="#fff"/></svg> },
  { name: 'React', color: '#61dafb', bg: '#e8fafe',
    icon: <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="2.5" fill="#61dafb"/><ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61dafb" strokeWidth="1.5"/><ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61dafb" strokeWidth="1.5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61dafb" strokeWidth="1.5" transform="rotate(120 16 16)"/></svg> },
  { name: 'Node.js', color: '#339933', bg: '#edf7ed',
    icon: <img src="/nodejs.svg" alt="Node.js" className="tech-skill-img" /> },
  { name: 'Responsive Design', color: '#ffb400', bg: '#fff8e6',
    icon: <svg viewBox="0 0 32 32" fill="none"><rect x="2" y="6" width="22" height="14" rx="1" fill="#ffd57a" stroke="#ffb400"/><rect x="26" y="10" width="4" height="8" rx="0.6" fill="#ffb400"/></svg> },
  { name: 'Graphic Design', color: '#ff6b6b', bg: '#fff3f3',
    icon: <svg viewBox="0 0 32 32" fill="none"><path d="M28.3 3.7a2.5 2.5 0 0 0-3.6 0L14 14.4l3.6 3.6L28.3 7.3a2.5 2.5 0 0 0 0-3.6z" fill="#ff6b6b"/><path d="M9.8 18.2l-6 6 4 4 6-6-4-4z" fill="#ff6b6b"/></svg> },
  { name: 'Video Editing', color: '#6f42c1', bg: '#f3eefc',
    icon: <svg viewBox="0 0 32 32" fill="none"><rect x="3" y="7" width="26" height="18" rx="2" fill="#e9e3fb" stroke="#6f42c1"/><rect x="6" y="10" width="6" height="4" fill="#6f42c1"/><path d="M22 16l-6 4v-8l6 4z" fill="#6f42c1"/></svg> },
  { name: 'MongoDB', color: '#47A248', bg: '#f0fbf3',
    icon: <img src="/mongodb.svg" alt="MongoDB" className="tech-skill-img" /> },
];

const softSkills = [
  { name: 'Attention to Detail', desc: 'I take pride in delivering precise, polished work with careful attention to every element.' },
  { name: 'Creativity', desc: 'I bring imaginative thinking to design and code, crafting unique and engaging solutions.' },
  { name: 'Leadership', desc: 'I take initiative, guide teams with clarity, and inspire collaborative progress in projects.' },
  { name: 'Collaboration', desc: 'I work effectively with diverse teams, valuing open communication and shared goals.' },
  { name: 'Willingness to Learn', desc: 'I embrace new technologies and feedback as opportunities to grow and improve continuously.' },
  { name: 'Adaptability', desc: 'I stay flexible and focused when priorities shift, adjusting quickly to new challenges.' },
  { name: 'Time Management', desc: 'I prioritize tasks effectively to meet deadlines and balance multiple responsibilities.' },
  { name: 'UI/UX Design Awareness', desc: 'I apply user-centered design principles to create intuitive and accessible interfaces.' },
];

const tools = [
  'VS Code', 'Git & GitHub', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Davinci Resolve',
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">

        {/* Top: Bio + Photo */}
        <div className="about-top">
          <div className="about-text">
            <h2 className="about-heading">About Me</h2>
            <p className="about-bio">
              I’m a student web designer and front-end developer with a strong interest in
              building responsive, visually clean websites that feel intuitive to use on any
              device. I enjoy turning ideas and designs into polished, accessible interfaces,
              and I’m especially drawn to layouts that are simple, purposeful, and easy to navigate.
              <br></br><br></br>
              I’m continuously learning and improving my skills—experimenting with modern front-end
              tools, refining my design eye, and paying close attention to details like spacing,
              typography, and performance. I like working on projects where I can collaborate,
              receive feedback, and iterate quickly to create better results.
              <br></br><br></br>
              Right now, I’m eager to join real-world projects (freelance, internships, or team collaborations) where I can contribute, grow as a developer, and help build websites that look great and work even better.
            </p>
            <div className="about-info-grid">
              <div className="about-info-item">
                <span className="info-label">Name</span>
                <span className="info-value">Charles Daniel Garcia</span>
              </div>
              <div className="about-info-item">
                <span className="info-label">Role</span>
                <span className="info-value">Web Designer / FE Dev</span>
              </div>
              <div className="about-info-item">
                <span className="info-label">Email</span>
                <button
                  type="button"
                  className="info-value email-link"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    setTimeout(() => {
                      window.location.href = 'mailto:garcia.charlesdan@gmail.com';
                    }, 350);
                  }}
                >
                  garcia.charlesdan@gmail.com
                </button>
              </div>
              <div className="about-info-item">
                <span className="info-label">Available</span>
                <span className="info-value available">Open for internship opportunities</span>
              </div>
            </div>
            <a href="/Garcia-Charles-Resume.pdf" download className="btn btn-outline about-dl-btn">
              <DownloadIcon /> Download Resume
            </a>
          </div>

          <div className="about-photo-wrap">
            <div className="about-photo-card">
              <img src="/profile.webp" alt="Charles Daniel Garcia" className="about-photo" />
              {/* <p className="about-photo-caption">Charles Daniel Garcia</p> */}
            </div>
          </div>
          {/* Mobile-only duplicate of the info grid so items appear under the photo */}
          <div className="about-info-grid mobile-info">
            <div className="about-info-item">
              <span className="info-label">Name</span>
              <span className="info-value">Charles Daniel Garcia</span>
            </div>
            <div className="about-info-item">
              <span className="info-label">Role</span>
              <span className="info-value">Web Designer / FE Dev</span>
            </div>
            <div className="about-info-item">
              <span className="info-label">Email</span>
              <button
                type="button"
                className="info-value email-link"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => {
                    window.location.href = 'mailto:garcia.charlesdan@gmail.com';
                  }, 350);
                }}
              >
                garcia.charlesdan@gmail.com
              </button>
            </div>
            <div className="about-info-item">
              <span className="info-label">Available</span>
              <span className="info-value available">Open for internship opportunities</span>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="skills-block">
          <h3 className="skills-block-title">Technical Skills</h3>
          <div className="tech-skills-rows">
            {/* Desktop grouped layout (4 / 3 / 3) — hidden on small screens */}
            <div className="desktop-only">
              <div className="tech-skills-row row-4">
                {techSkills.slice(0, 4).map((skill) => (
                  <div key={skill.name} className="tech-skill-item" style={{ '--skill-bg': skill.bg } as React.CSSProperties}>
                    <div className="tech-skill-logo">{skill.icon}</div>
                    <span className="tech-skill-name" style={{ color: skill.color }}>{skill.name}</span>
                  </div>
                ))}
              </div>

              <div className="tech-skills-row row-3 center">
                {techSkills.slice(4, 7).map((skill) => (
                  <div key={skill.name} className="tech-skill-item" style={{ '--skill-bg': skill.bg } as React.CSSProperties}>
                    <div className="tech-skill-logo">{skill.icon}</div>
                    <span className="tech-skill-name" style={{ color: skill.color }}>{skill.name}</span>
                  </div>
                ))}
              </div>

              <div className="tech-skills-row row-3 center last-row">
                {techSkills.slice(7).map((skill) => (
                  <div key={skill.name} className="tech-skill-item" style={{ '--skill-bg': skill.bg } as React.CSSProperties}>
                    <div className="tech-skill-logo">{skill.icon}</div>
                    <span className="tech-skill-name" style={{ color: skill.color }}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile-specific grid: first 9 items in 3x3, final item centered on its own row */}
            <div className="tech-skills-mobile-grid mobile-only">
              <div className="mobile-grid-first9">
                {techSkills.slice(0, 9).map((skill) => (
                  <div key={skill.name} className="tech-skill-item" style={{ '--skill-bg': skill.bg } as React.CSSProperties}>
                    <div className="tech-skill-logo">{skill.icon}</div>
                    <span className="tech-skill-name" style={{ color: skill.color }}>{skill.name}</span>
                  </div>
                ))}
              </div>

              <div className="mobile-grid-last">
                {techSkills.slice(9).map((skill) => (
                  <div key={skill.name} className="tech-skill-item solo" style={{ '--skill-bg': skill.bg } as React.CSSProperties}>
                    <div className="tech-skill-logo">{skill.icon}</div>
                    <span className="tech-skill-name" style={{ color: skill.color }}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills-block">
          <h3 className="skills-block-title">Soft Skills</h3>
          <div className="soft-skills-grid">
            {softSkills.map((skill) => (
              <div key={skill.name} className="soft-skill-card">
                <h4 className="soft-skill-name">{skill.name}</h4>
                <p className="soft-skill-desc">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="skills-block">
          <h3 className="skills-block-title">Tools</h3>
          <div className="tools-grid">
            {tools.map((tool) => (
              <span key={tool} className="skill-tag">{tool}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

