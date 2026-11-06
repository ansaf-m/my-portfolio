import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer = ({ currentTheme }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="portfolio-footer"
      style={{
        borderTop: '1px solid var(--border-color)',
        backgroundColor: 'var(--surface-color)',
        padding: '60px 0 36px 0',
        position: 'relative',
        zIndex: 10,
        transition: 'background-color var(--transition-smooth), border-color var(--transition-smooth)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '40px'
          }}
        >
          {/* Brand & Subtitle */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                marginBottom: '6px',
                letterSpacing: '-0.02em'
              }}
            >
              <span>Ansaf's</span>
              <span style={{ color: 'var(--primary-accent)' }}> Space</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', letterSpacing: '0.02em', margin: 0 }}>
              Java · Spring Boot · React · Express ,Databases
            </p>
          </div>

          {/* Quick links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="#about" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'none' }}>About</a>
            <a href="#skills" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Skills</a>
            <a href="#projects" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Projects</a>
            <a href="#timeline" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Timeline</a>
            <a href="#contact" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Contact</a>

            <button
              onClick={scrollToTop}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--surface-hover)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                marginLeft: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary-accent)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--surface-hover)';
                e.currentTarget.style.color = 'var(--text-main)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom copyright & console log line */}
        <div
          style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            fontSize: '0.85rem',
            color: 'var(--text-dim)'
          }}
        >
          <div style={{ color: 'var(--text-muted)', fontWeight: 500 }}>
            © 2026 Ansaf M.
          </div>

          <div
            style={{
              fontFamily: 'var(--font-code, monospace)',
              fontSize: '0.82rem',
              background: 'var(--surface-hover)',
              border: '1px solid var(--border-color)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              color: 'var(--text-muted)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2px',
              userSelect: 'all'
            }}
          >
            <span style={{ color: 'var(--primary-accent)' }}>console</span>
            <span style={{ color: 'var(--text-dim)' }}>.</span>
            <span style={{ color: 'var(--secondary-accent)' }}>log</span>
            <span style={{ color: 'var(--text-dim)' }}>(</span>
            <span style={{ color: '#10b981' }}>"Keep building"</span>
            <span style={{ color: 'var(--text-dim)' }}>);</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
