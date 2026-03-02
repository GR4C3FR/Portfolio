import { useState, useEffect } from 'react';
import './Projects.css';

type Project = {
  title: string;
  link: string;
  description: string;
  tags: string[];
  live: string;
  code: string;
  color: string;
  images?: string[];
};

const projects: Project[] = [
  {
    title: 'Endless Charms Jewelry',
    link: 'https://github.com/GR4C3FR/Endless-Charms-Jewelries.git',
    description:
      'A digital showroom for Endless Charms, a premier high-end jewelry brand in the Philippines, specializing in custom engagement rings, wedding bands, and bespoke luxury jewelry crafted from 14k–18k gold, diamonds, and precious gemstones. The website showcases product collections, highlights ethical sourcing and transparent pricing, features customer testimonials, and offers educational content to help customers make informed purchasing decisions. It supports lead generation through clear calls-to-action for consultations and custom designs, strengthening brand identity and credibility within the jewelry market.',
    tags: ['MongoDB', 'Express.js', 'EJS', 'Node.js'],
    live: 'https://endlesscharms.store',
    code: 'https://github.com/GR4C3FR/Endless-Charms-Jewelries.git',
    color: '#fd7e14',
    images: ['/endless-charms-jewelry.webp', '/endless-charms-jewelry-about.webp'],
  },
  {
    title: 'Inocencio Magtoto Memorial Foundation, Inc. (IMMFI)',
    link: 'https://github.com/eishley15/immfi.git',
    description:
      'Develop and deploy IMMFI’s official website with integrated real-time functionality and interactive elements to increase engagement and streamline volunteer and donation processes.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    live: 'https://immfi.org/',
    code: 'https://github.com/eishley15/immfi.git',
    color: '#e83e8c',
  },
  {
    title: 'Sharesource',
    link: 'https://github.com/GR4C3FR/Sharesource.git',
    description:
      'A web app designed to help students reliably access and share academic materials when course resources aren’t consistently uploaded. It features user authentication, uploading and categorized organization of files, admin approval/moderation for quality control, search and filters for quick discovery, and collaborative tools like comments, feedback/discussions, and ratings—optimized for easy access across devices.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    live: '#',
    code: 'https://github.com/GR4C3FR/Sharesource.git',
    color: '#6f42c1',
  },
  // {
  //   title: 'FrameRate',
  //   link: 'https://github.com/GR4C3FR',
  //   description:
  //     'A full-stack web application that allows users to browse, rate, and review films. Built as an academic project with a focus on responsive UI and clean database design. Features include user authentication, search/filter, and a dynamic rating system.',
  //   tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  //   live: '#',
  //   code: 'https://github.com/GR4C3FR',
  //   color: '#007bff',
  // },
  {
    title: 'Personal Portfolio',
    link: 'https://github.com/GR4C3FR/Portfolio.git',
    description:
      'A modern single-page portfolio website built with React, TypeScript, and Vite. Features smooth scrolling, dark/light mode toggle, and a fully responsive layout.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS3'],
    live: '#',
    code: 'https://github.com/GR4C3FR/Portfolio.git',
    color: '#20c997',
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project>(projects[0]);
  const [featuredImgIdx, setFeaturedImgIdx] = useState(0);
  const [preview, setPreview] = useState<null | { title: string; images: string[]; idx: number }>(null);

  useEffect(() => {
    setFeaturedImgIdx(0);
  }, [selected]);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          {/* <a href="/Garcia-Charles-Resume.pdf" download className="btn btn-outline resume-dl-btn">
            <DownloadIcon /> Download Resume
          </a> */}
        </div>

        <div className="projects-layout">
          {/* Left: Featured detail */}
          <div className="project-featured">
            <div
              className="project-featured-thumb"
              style={!(selected.images && selected.images.length) ? { background: `${selected.color}22` } : {}}
            >
              {selected.images && selected.images.length > 0 ? (
                <div className="project-featured-img-wrapper">
                  <img
                    src={selected.images[featuredImgIdx]}
                    alt={selected.title}
                    className="project-featured-img project-featured-img--clickable"
                    onClick={() => setPreview({ title: selected.title, images: selected.images!, idx: featuredImgIdx })}
                  />
                  {selected.images.length > 1 && (
                    <div className="project-img-nav">
                      <button
                        className="project-img-nav-btn"
                        onClick={() =>
                          setFeaturedImgIdx(i => (i - 1 + selected.images!.length) % selected.images!.length)
                        }
                      >&#8249;</button>
                      <span className="project-img-nav-indicator">
                        {featuredImgIdx + 1} / {selected.images.length}
                      </span>
                      <button
                        className="project-img-nav-btn"
                        onClick={() =>
                          setFeaturedImgIdx(i => (i + 1) % selected.images!.length)
                        }
                      >&#8250;</button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="project-featured-icon" style={{ background: selected.color }}>
                  <CodeIcon />
                </div>
              )}
            </div>
            <div className="project-featured-info">
              <h3 className="project-featured-title">{selected.title}</h3>
              <a
                href={selected.code}
                target="_blank"
                rel="noreferrer"
                className="project-featured-link"
              >
                Link: {selected.code === '#' ? 'samplelink.github' : selected.code.replace('https://', '')}
              </a>
              <p className="project-featured-desc">{selected.description}</p>
              <div className="project-tags">
                {selected.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-featured-actions">
                {(selected.title !== 'FrameRate' && selected.title !== 'Sharesource' && selected.live && selected.live !== '#') && (
                  <a href={selected.live} className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">Live Demo</a>
                )}
                <a href={selected.code} className="btn btn-outline btn-sm" target="_blank" rel="noreferrer">
                  <GithubSmIcon /> Code
                </a>
              </div>
            </div>
          </div>

          {/* Right: Grid of preview cards */}
          <div className="project-grid">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`project-card ${selected.title === project.title ? 'active' : ''}`}
                onClick={() => setSelected(project)}
              >
                <div
                  className="project-card-thumb"
                  style={!(project.images && project.images.length) ? { background: `${project.color}22` } : {}}
                >
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="project-card-img"
                    />
                  ) : (
                    <div className="project-card-icon" style={{ background: project.color }}>
                      <CodeIcon />
                    </div>
                  )}
                </div>
                <div className="project-card-info">
                  <p className="project-card-title">{project.title}</p>
                  <p className="project-card-desc">{project.tags.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {preview && (
        <div className="cert-modal" onClick={() => setPreview(null)}>
          <div className="cert-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setPreview(null)} aria-label="Close preview">×</button>
            <h4 className="cert-modal-title">{preview.title}</h4>
            <div className="cert-preview project-modal-preview">
              {preview.images.length > 1 && (
                <button
                  className="project-modal-nav-btn project-modal-nav-btn--prev"
                  onClick={() => setPreview(p => p && ({ ...p, idx: (p.idx - 1 + p.images.length) % p.images.length }))}
                  aria-label="Previous image"
                ><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
              )}
              <img src={preview.images[preview.idx]} alt={preview.title} className="cert-preview-img" />
              {preview.images.length > 1 && (
                <button
                  className="project-modal-nav-btn project-modal-nav-btn--next"
                  onClick={() => setPreview(p => p && ({ ...p, idx: (p.idx + 1) % p.images.length }))}
                  aria-label="Next image"
                ><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
              )}
            </div>
            {preview.images.length > 1 && (
              <p className="project-modal-indicator">{preview.idx + 1} / {preview.images.length}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function GithubSmIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

