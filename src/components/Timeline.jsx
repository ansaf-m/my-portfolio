import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  Milestone 
} from 'lucide-react';
import { TIMELINE } from '../data/portfolioData';

export const Timeline = () => {
  const getNodeIcon = (type) => {
    switch (type) {
      case 'experience':
        return <Briefcase size={18} />;
      case 'education':
        return <GraduationCap size={18} />;
      case 'certification':
        return <Award size={18} />;
      default:
        return <Milestone size={18} />;
    }
  };

  return (
    <section id="timeline" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-badge">
            <Milestone size={14} />
            <span>04 · Journey & Milestones</span>
          </div>
          <h2 className="section-title">
            Education, Experience & Certifications
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Proven milestones combining academic computer science rigor with enterprise software delivery.
          </p>
        </div>

        {/* Timeline Container */}
        <div 
          style={{ 
            maxWidth: '840px', 
            margin: '0 auto', 
            position: 'relative',
            paddingLeft: '32px'
          }}
          className="timeline-track"
        >
          {/* Vertical Track Line */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              bottom: '10px',
              left: '8px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--primary-accent), var(--secondary-accent), rgba(255, 255, 255, 0.05))',
              boxShadow: '0 0 10px var(--accent-glow-subtle)'
            }}
          />

          {/* Timeline Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {TIMELINE.map((item, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                {/* Node Glowing Bullet */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-32px',
                    top: '6px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: 'var(--surface-color)',
                    border: '3px solid var(--primary-accent)',
                    boxShadow: '0 0 12px var(--primary-accent)',
                    zIndex: 2
                  }}
                />

                {/* Node Card */}
                <div className="glass-card" style={{ padding: '24px' }}>
                  {/* Period & Tag */}
                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '10px',
                      marginBottom: '10px'
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--primary-accent)',
                        background: 'var(--accent-glow-subtle)',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--border-highlight)'
                      }}
                    >
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </span>

                    <span 
                      style={{ 
                        fontSize: '0.78rem', 
                        color: 'var(--text-dim)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <MapPin size={13} />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <div 
                      style={{ 
                        color: 'var(--secondary-accent)',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {getNodeIcon(item.type)}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 600 }}>
                      {item.role}
                    </h3>
                  </div>

                  <h4 style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '14px', fontWeight: 500 }}>
                    {item.organization}
                  </h4>

                  {/* Description */}
                  <p style={{ fontSize: '0.92rem', lineHeight: '1.65', color: 'var(--text-muted)', marginBottom: '18px' }}>
                    {item.description}
                  </p>

                  {/* Applied Skills Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: '0.74rem',
                          padding: '3px 9px',
                          borderRadius: '6px',
                          background: 'var(--surface-hover)',
                          color: 'var(--text-muted)',
                          border: '1px solid var(--border-color)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
