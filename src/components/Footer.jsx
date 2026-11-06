import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        backgroundColor: 'rgba(5, 5, 10, 0.95)',
        padding: '60px 0 36px 0',
        position: 'relative',
        zIndex: 10
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
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '6px'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, var(--primary-accent), var(--secondary-accent))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 0 12px var(--accent-glow)'
                }}
              >
                {/* Triangular Cone A Emblem */}
                <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
                  <path d="M 50 12 L 88 88 L 65 88 L 58 72 L 42 72 L 35 88 L 12 88 Z" fill="#ffffff" />
                  <polygon points="50 34 38 62 62 62" fill="#09090f" />
                </svg>
              </div>
              <span>Ansaf</span>
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
                background: 'rgba(255, 255, 255, 0.04)',
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
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
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
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
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
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
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
            <span style={{ color: '#94a3b8' }}>.</span>
            <span style={{ color: '#38bdf8' }}>log</span>
            <span style={{ color: '#94a3b8' }}>(</span>
            <span style={{ color: '#34d399' }}>"Keep building"</span>
            <span style={{ color: '#94a3b8' }}>);</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
