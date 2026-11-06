import React, { useState } from 'react';
import { 
  Mail, 
  Phone,
  Send, 
  Copy, 
  Check, 
  MapPin, 
  MessageSquare, 
  Sparkles,
  Clock 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>05 · Direct Connection</span>
          </div>
          <h2 className="section-title">
            Let's Build Something High-Scale Together
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have an open software engineering role, distributed systems project, or interesting technical challenge? Drop me a message.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '36px',
            maxWidth: '1060px',
            margin: '0 auto'
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info & Social Hub */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Status Card */}
            <div className="glass-card">
              <div className="status-pill" style={{ marginBottom: '16px' }}>
                <span className="status-dot" />
                <span>Available for Opportunities</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '12px' }}>
                Open for Full-Stack & Backend Engineering Roles
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
                Specialized in Java 21, Spring Boot 3, React 19, and scalable relational SQL databases. Available for full-time, contract, or high-growth startup opportunities.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* One-click email copy */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'var(--surface-hover)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Mail size={18} style={{ color: 'var(--primary-accent)' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontFamily: 'var(--font-code)' }}>
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: copiedEmail ? '#10b981' : 'var(--text-muted)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-code)'
                    }}
                    title="Copy email"
                  >
                    {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Direct Phone & WhatsApp */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Phone size={18} style={{ color: 'var(--primary-accent)' }} />
                    <a 
                      href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`} 
                      style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontFamily: 'var(--font-code)' }}
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                  <a
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: '0.8rem',
                      color: '#34d399',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      textDecoration: 'none',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)'
                    }}
                    title="Chat on WhatsApp"
                  >
                    <WhatsAppIcon size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0 16px' }}>
                  <MapPin size={18} style={{ color: 'var(--secondary-accent)' }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    {PERSONAL_INFO.location}
                  </span>
                </div>

                {/* Response Time */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0 16px' }}>
                  <Clock size={18} style={{ color: '#10b981' }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                    Typically responds within 24 hours
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>
                Connect on Professional Platforms
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-channel-btn"
                  title="View GitHub Profile"
                >
                  <GithubIcon size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-channel-btn"
                  title="Connect on LinkedIn"
                >
                  <LinkedinIcon size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="social-channel-btn"
                  title="Chat on WhatsApp"
                >
                  <WhatsAppIcon size={20} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="glass-card" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '8px' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              I'm always interested in discussing architecture, challenges, or new ventures.
            </p>

            {submitted ? (
              <div 
                style={{
                  padding: '32px',
                  borderRadius: '16px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  textAlign: 'center'
                }}
              >
                <div 
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                    margin: '0 auto 16px auto'
                  }}
                >
                  <Check size={28} />
                </div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                  Message Dispatched Successfully!
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  Thank you for reaching out! I've received your inquiry and will respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {errorMessage && (
                  <div style={{ color: '#ef4444', fontSize: '0.85rem', background: 'rgba(239, 68, 68, 0.1)', padding: '10px 14px', borderRadius: '8px' }}>
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Connor"
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sarah@enterprise.com"
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer Role / Project Consultation"
                    className="form-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your team, tech stack, or the challenges you are solving..."
                    required
                    className="form-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '6px' }}
                >
                  {isSubmitting ? (
                    <span>Dispatching message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: #ffffff;
          font-family: var(--font-body);
          font-size: 0.92rem;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-input:focus {
          border-color: var(--primary-accent);
          box-shadow: 0 0 14px var(--accent-glow-subtle);
        }

        .social-channel-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justifyContent: center;
          gap: 8px;
          padding: 12px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          font-size: 0.88rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .social-channel-btn:hover {
          background: rgba(var(--primary-rgb), 0.15);
          border-color: var(--primary-accent);
          color: #ffffff;
          transform: translateY(-2px);
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
