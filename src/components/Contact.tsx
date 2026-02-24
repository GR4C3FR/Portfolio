import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Replace with your Formspree form endpoint
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xreaydjb';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, subject: form.subject, message: form.message }),
      });

      if (res.ok) {
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await res.json().catch(() => null);
        setError((data && data.error) || 'Failed to send message. Please try again later.');
      }
    } catch (err) {
      setError('Failed to send message. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="accent-line" />
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Have a project in mind? Let's talk.</p>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              Whether you have a project idea, a job opportunity, or just want to say hello —
              my inbox is always open. I'll get back to you as soon as I can!
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon-wrap"><EmailIcon /></div>
                <div>
                  <span className="detail-label">Email</span>
                  <a
                    href="mailto:garcia.charlesdan@gmail.com"
                    className="detail-value"
                    onClick={() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    garcia.charlesdan@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-icon-wrap"><LocationIcon /></div>
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">Pampanga, Philippines</span>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-icon-wrap"><StatusIcon /></div>
                <div>
                  <span className="detail-label">Status</span>
                  <span className="detail-value open">Open to opportunities</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://www.linkedin.com/in/charles-garcia-9b6b1934b" target="_blank" rel="noreferrer" className="social-link">
                <LinkedInIcon /> LinkedIn
              </a>
              <a href="https://github.com/GR4C3FR" target="_blank" rel="noreferrer" className="social-link">
                <GitHubIcon /> GitHub
              </a>
            </div>
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
              {sent && (
                <div className="form-success">
                  Message sent! I'll get back to you soon.
                </div>
              )}
              {error && (
                <div className="form-error" role="alert">
                  {error}
                </div>
              )}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary contact-submit-btn"
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? (
                <>
                  <SpinnerIcon /> Sending...
                </>
              ) : (
                <>
                  Send Message <SendIcon />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function StatusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg className="spinner" width="16" height="16" viewBox="0 0 50 50" aria-hidden="true">
      <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="31.4 31.4" />
    </svg>
  );
}
