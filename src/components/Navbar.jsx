import React, { useState, useEffect } from 'react';
import {
  FileText,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

export const Navbar = ({ currentTheme, onThemeChange, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const themes = [
    {
      id: 'minimalism',
      name: 'Minimalism',
      tagline: 'The Essential',
      color: '#ffffff',
      gradient: 'linear-gradient(135deg, #ffffff, #a1a1aa)'
    },
    {
      id: 'surrealism',
      name: 'Surrealism',
      tagline: 'The Imagination',
      color: '#e879f9',
      gradient: 'linear-gradient(135deg, #e879f9, #f43f5e)'
    },
    {
      id: 'glassmorphism',
      name: 'Glassmorphism',
      tagline: 'The Future',
      color: '#38bdf8',
      gradient: 'linear-gradient(135deg, #38bdf8, #818cf8)'
    }
  ];

  const currentThemeObj = themes.find((t) => t.id === currentTheme) || themes[0];

  useEffect(() => {
    const handleScroll = () => {
      // Background elevation on scroll
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Reading progress bar calculation
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100;
        setReadingProgress(scrollPercent);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="reading-progress-container">
        <div
          className="reading-progress-bar"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <header
        className={`portfolio-navbar ${scrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          transition: 'all 0.3s ease',
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled ? 'var(--navbar-bg, rgba(9, 9, 15, 0.82))' : 'transparent',
          backdropFilter: scrolled ? 'var(--navbar-blur, blur(16px))' : 'none',
          WebkitBackdropFilter: scrolled ? 'var(--navbar-blur, blur(16px))' : 'none',
          borderBottom: scrolled ? 'var(--navbar-border, 1px solid rgba(255, 255, 255, 0.08))' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--primary-accent), var(--secondary-accent))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 0 15px var(--accent-glow)',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {/* Bold Cone / Triangle A Logo Model Icon */}
              <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
                <path d="M 50 12 L 88 88 L 65 88 L 58 72 L 42 72 L 35 88 L 12 88 Z" fill="#ffffff" />
                <polygon points="50 34 38 62 62 62" fill="#09090f" />
                <line x1="50" y1="12" x2="50" y2="72" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" />
              </svg>
            </div>
            <span>
              Ansaf's<span style={{ color: 'var(--primary-accent)' }}> Space</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '28px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Group: Theme Selector + Resume Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Theme Selector Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="btn btn-outline btn-sm theme-selector-btn"
                style={{
                  padding: '7px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.8rem',
                  borderRadius: 'var(--radius-full)'
                }}
                title="Change Design Theme"
              >
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: currentThemeObj.gradient,
                    boxShadow: `0 0 8px ${currentThemeObj.color}`
                  }}
                />
                <span className="theme-text-desktop" style={{ fontWeight: 600 }}>
                  {currentThemeObj.name}
                </span>
                <ChevronDown size={13} style={{ opacity: 0.7 }} />
              </button>

              {themeDropdownOpen && (
                <div
                  className="theme-dropdown-menu"
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 10px)',
                    right: 0,
                    width: '240px',
                    background: 'var(--surface-color)',
                    border: '1px solid var(--border-highlight)',
                    borderRadius: 'var(--radius-md)',
                    padding: '10px',
                    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.7), 0 0 25px var(--accent-glow-subtle)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    zIndex: 1000
                  }}
                >
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-dim)', letterSpacing: '0.08em', padding: '4px 8px 8px' }}>
                    SELECT DESIGN THEME
                  </div>
                  {themes.map((t) => {
                    const isSelected = currentTheme === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => {
                          onThemeChange(t.id);
                          setThemeDropdownOpen(false);
                        }}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '10px 12px',
                          borderRadius: '8px',
                          background: isSelected ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                          border: isSelected ? '1px solid var(--border-highlight)' : '1px solid transparent',
                          color: isSelected ? '#ffffff' : 'var(--text-muted)',
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s ease',
                          marginBottom: '4px'
                        }}
                      >
                        <span
                          style={{
                            width: '14px',
                            height: '14px',
                            borderRadius: '50%',
                            background: t.gradient,
                            boxShadow: `0 0 10px ${t.color}`,
                            flexShrink: 0
                          }}
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: 700, fontSize: '0.86rem', color: isSelected ? '#ffffff' : 'var(--text-main)' }}>
                            {t.name}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '1px' }}>
                            {t.tagline}
                          </div>
                        </div>
                        {isSelected && (
                          <span style={{ fontSize: '0.75rem', color: 'var(--primary-accent)', fontWeight: 700 }}>
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Resume CV Button */}
            <button
              onClick={onOpenResume}
              className="btn btn-primary btn-sm"
              style={{
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.82rem',
                fontWeight: 600
              }}
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-main)',
                cursor: 'pointer',
                padding: '6px'
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              background: 'var(--surface-color)',
              borderBottom: '1px solid var(--border-color)',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {/* Mobile Theme Pills */}
            <div style={{ paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-dim)', letterSpacing: '0.08em', marginBottom: '8px' }}>
                DESIGN THEME
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {themes.map((t) => {
                  const isSelected = currentTheme === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => onThemeChange(t.id)}
                      style={{
                        padding: '8px 6px',
                        borderRadius: '8px',
                        background: isSelected ? 'var(--primary-accent)' : 'rgba(255, 255, 255, 0.05)',
                        border: isSelected ? '1px solid var(--primary-accent)' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: isSelected && currentTheme === 'minimalism' ? '#000000' : isSelected ? '#ffffff' : 'var(--text-muted)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: t.gradient
                        }}
                      />
                      <span>{t.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--text-main)',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Style block for responsive navbar */}
      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
          .theme-text-desktop {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
