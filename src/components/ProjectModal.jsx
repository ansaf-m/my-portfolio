import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Activity, 
  Layers, 
  Database, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(5, 5, 10, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        animation: 'fadeIn 0.25s ease-out'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          backgroundColor: 'var(--surface-color)',
          border: '1px solid var(--border-highlight)',
          borderRadius: 'var(--radius-lg)',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px var(--accent-glow-subtle)',
          position: 'relative',
          animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 30,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--primary-accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)')}
          aria-label="Close Case Study"
        >
          <X size={20} />
        </button>

        {/* Modal Banner Image */}
        <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '100px',
              background: 'linear-gradient(to top, var(--surface-color), transparent)'
            }}
          />
        </div>

        {/* Modal Content */}
        <div style={{ padding: '32px' }}>
          {/* Badge & Title */}
          <div style={{ marginBottom: '16px' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                color: 'var(--primary-accent)',
                background: 'var(--accent-glow-subtle)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-highlight)',
                display: 'inline-block',
                marginBottom: '10px'
              }}
            >
              {project.badge}
            </span>
            <h2 style={{ fontSize: '1.85rem', color: '#ffffff', marginBottom: '6px' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
              {project.subtitle}
            </p>
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '14px', marginBottom: '28px', flexWrap: 'wrap' }}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
            >
              <ExternalLink size={16} />
              <span>Live Demonstration</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-sm"
            >
              <GithubIcon size={16} />
              <span>Source Repository</span>
            </a>
          </div>

          {/* Metrics Spotlight */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              padding: '20px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-color)',
              marginBottom: '32px'
            }}
          >
            {project.caseStudy.metrics.map((metric, mIdx) => (
              <div key={mIdx} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--primary-accent)',
                    marginBottom: '4px'
                  }}
                >
                  {metric.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Problem & Architecture Breakdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
            <div>
              <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={18} style={{ color: 'var(--secondary-accent)' }} />
                <span>The Challenge & Problem</span>
              </h4>
              <p style={{ fontSize: '0.94rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                {project.caseStudy.problem}
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={18} style={{ color: 'var(--primary-accent)' }} />
                <span>System Architecture</span>
              </h4>
              <p style={{ fontSize: '0.94rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                {project.caseStudy.architecture}
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} style={{ color: '#10b981' }} />
                <span>Engineered Solution</span>
              </h4>
              <p style={{ fontSize: '0.94rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '14px' }}>
              Core Technical Features
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.caseStudy.keyFeatures.map((feat, fIdx) => (
                <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--primary-accent)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: '1.5' }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
              Full Technology Stack
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  style={{
                    fontSize: '0.82rem',
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'var(--text-main)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
