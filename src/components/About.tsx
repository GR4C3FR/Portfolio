import './About.css';

const techSkills = [
  { name: 'HTML5', color: '#e34f26', bg: '#fff3ee',
    icon: <svg viewBox="0 0 32 32" fill="none"><path d="M6 2l2.4 26.4L16 30l7.6-1.6L26 2H6z" fill="#e34f26"/><path d="M16 28.4l6.2-1.7L24 5.6H16v22.8z" fill="#ef652a"/><path d="M16 13.2h-4.6l-.3-3.4H16V6.4H7.8l.9 10H16v-3.2zm0 9.4l-.1.1L12.3 22l-.3-3H9.4l.5 5.8L16 26.4v-3.8z" fill="#fff"/><path d="M16 13.2v3.2h4.3l-.4 4.6-3.9.9v3.8l7.1-2-.1-.8-1-11.7H16z" fill="#fff"/></svg> },
  { name: 'JavaScript', color: '#f7df1e', bg: '#fffde7',
    icon: <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="2" fill="#f7df1e"/><path d="M19 26c.6 1 1.4 1.7 2.8 1.7 1.2 0 2-.6 2-1.4 0-1-.8-1.3-2.1-1.9l-.7-.3c-2.1-.9-3.5-2-3.5-4.4 0-2.2 1.7-3.8 4.3-3.8 1.9 0 3.2.6 4.2 2.3l-2.3 1.5c-.5-.9-1-.9-1.9-.9-.9 0-1.4.5-1.4 1.2 0 .8.5 1.1 1.7 1.7l.7.3c2.5 1.1 3.9 2.1 3.9 4.6 0 2.6-2 4-4.8 4-2.7 0-4.4-1.3-5.2-2.9L19 26zm-10.3.3c.4.8.8 1.4 1.7 1.4.8 0 1.4-.4 1.4-1.6V16h2.9v10.1c0 2.7-1.6 3.9-3.9 3.9C8.8 30 7.5 29 6.8 27.6l1.9-1.3z" fill="#333"/></svg> },
  { name: 'CSS3', color: '#2965f1', bg: '#eef3fe',
    icon: <svg viewBox="0 0 32 32" fill="none"><path d="M6 2l2.4 26.4L16 30l7.6-1.6L26 2H6z" fill="#2965f1"/><path d="M16 28.4l6.2-1.7L24 5.6H16v22.8z" fill="#1b4dc9"/><path d="M16 13.2h4.6l.3-3.2H16V6.4h8.2l-.9 10H16v-3.2zm0 9.4v3.8l-3.7-.9-.3-3H9.4l.5 5.8L16 26.4v-3.8l-3.7-.8-.3-2.4H16z" fill="#fff"/><path d="M16 13.2v3.2h4.3l-.4 4.6-3.9.9V14l4.3-.8H16z" fill="#fff"/></svg> },
  { name: 'Node.js', color: '#339933', bg: '#edf7ed',
    icon: <svg viewBox="0 0 32 32" fill="none"><path d="M16 2L4 8.5v11L16 26l12-6.5v-11L16 2z" fill="#339933"/><path d="M16 5l9.5 5.5v9L16 25l-9.5-5.5v-9L16 5z" fill="#fff" opacity=".1"/><text x="16" y="20" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">node</text></svg> },
  { name: 'Angular', color: '#dd0031', bg: '#ffeef1',
    icon: <svg viewBox="0 0 32 32" fill="none"><path d="M16 2L4.4 6.2l1.8 14.6L16 26l9.8-5.2 1.8-14.6L16 2z" fill="#dd0031"/><path d="M16 2v24l9.8-5.2 1.8-14.6L16 2z" fill="#c3002f"/><path d="M16 6l6.4 14.4h-2.4l-1.3-3.2h-5.4L12 20.4H9.6L16 6zm0 5.2l-1.9 4.4h3.8L16 11.2z" fill="#fff"/></svg> },
  { name: 'React', color: '#61dafb', bg: '#e8fafe',
    icon: <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="2.5" fill="#61dafb"/><ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61dafb" strokeWidth="1.5"/><ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61dafb" strokeWidth="1.5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61dafb" strokeWidth="1.5" transform="rotate(120 16 16)"/></svg> },
];

const softSkills = [
  { name: 'Attention to Detail', desc: 'I take pride in delivering precise, polished work with careful attention to every element.' },
  { name: 'Creativity', desc: 'I bring imaginative thinking to design and code, crafting unique and engaging solutions.' },
  { name: 'Leadership', desc: 'I take initiative, guide teams with clarity, and inspire collaborative progress in projects.' },
  { name: 'Collaboration', desc: 'I work effectively with diverse teams, valuing open communication and shared goals.' },
  { name: 'Willingness to Learn', desc: 'I embrace new technologies and feedback as opportunities to grow and improve continuously.' },
  { name: 'Adaptability', desc: 'I stay flexible and focused when priorities shift, adjusting quickly to new challenges.' },
];

const tools = [
  'Git & GitHub', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Davinci Resolve',
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
              <img src="/profile.JPG" alt="Charles Daniel Garcia" className="about-photo" />
              {/* <p className="about-photo-caption">Charles Daniel Garcia</p> */}
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="skills-block">
          <h3 className="skills-block-title">Technical Skills</h3>
          <div className="tech-skills-grid">
            {techSkills.map((skill) => (
              <div key={skill.name} className="tech-skill-item" style={{ '--skill-bg': skill.bg } as React.CSSProperties}>
                <div className="tech-skill-logo">{skill.icon}</div>
                <span className="tech-skill-name" style={{ color: skill.color }}>{skill.name}</span>
              </div>
            ))}
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

