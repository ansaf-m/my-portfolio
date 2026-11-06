import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  ShoppingBag, 
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES, SKILL_GROUPS } from '../data/portfolioData';
import { TechLogo } from './TechLogos';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case 'frontend':
        return <Layout size={18} />;
      case 'backend':
        return <Server size={18} />;
      case 'database':
        return <Database size={18} />;
      case 'tools':
        return <Wrench size={18} />;
      case 'ecommerce':
        return <ShoppingBag size={18} />;
      default:
        return <Layers size={18} />;
    }
  };

  const displayedGroups = activeCategory === 'all'
    ? SKILL_GROUPS
    : SKILL_GROUPS.filter(group => group.id === activeCategory);

  return (
    <section id="skills" className="technical-skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="skills-section-header">
          <div className="section-badge">
            <Code2 size={14} />
            <span>02 · Technical Stack</span>
          </div>

          <h2 className="section-title">
            Technical Skills
          </h2>

          <p className="section-subtitle">
            Technologies and tools I use to build modern, responsive, and scalable web applications.
          </p>

          {/* Interactive Filter Pills */}
          <div className="skills-filter-tabs">
            {SKILL_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`skills-tab-btn ${isActive ? 'active' : ''}`}
                  aria-pressed={isActive}
                >
                  <span className="tab-icon">{getCategoryIcon(cat.id)}</span>
                  <span className="tab-label">{cat.label}</span>
                  <span className="tab-count">{cat.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categorized Skills Showcase */}
        <div className="skills-groups-container">
          {displayedGroups.map((group) => (
            <div key={group.id} className={`skill-group-card skill-group-${group.id}`}>
              {/* Group Header */}
              <div className="group-header">
                <div className="group-header-left">
                  <div className="group-icon-bubble">
                    {getCategoryIcon(group.id)}
                  </div>
                  <div>
                    <h3 className="group-title">{group.title}</h3>
                    <p className="group-subtitle">{group.subtitle}</p>
                  </div>
                </div>

                <div className="group-badge">
                  <span>{group.skills.length} Technologies</span>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="skills-items-grid">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-item-card">
                    {/* Official Tech Logo Container */}
                    <div className="skill-logo-box">
                      <TechLogo name={skill.icon || skill.name} size={32} />
                    </div>

                    {/* Skill Info */}
                    <div className="skill-content">
                      <div className="skill-title-row">
                        <h4 className="skill-name">{skill.name}</h4>
                      </div>
                      <p className="skill-desc">{skill.description}</p>
                    </div>

                    {/* Ambient Hover Glow */}
                    <div className="skill-card-glow" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .technical-skills-section {
          position: relative;
          padding: 90px 0 100px 0;
          overflow: visible;
        }

        .skills-section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .skills-section-header .section-subtitle {
          max-width: 680px;
          margin: 0 auto;
          color: var(--text-muted);
          font-size: 1.02rem;
          line-height: 1.65;
        }

        /* Filter Tabs */
        .skills-filter-tabs {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          padding: 6px;
          border-radius: var(--radius-full);
          background: var(--surface-glass);
          border: 1px solid var(--border-color);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          margin-top: 32px;
          max-width: 100%;
        }

        .skills-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: var(--radius-full);
          border: 1px solid transparent;
          background: transparent;
          color: var(--text-muted);
          font-size: 0.86rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
        }

        .skills-tab-btn:hover {
          color: var(--text-main);
          background: var(--surface-hover);
        }

        .skills-tab-btn.active {
          background: var(--primary-accent);
          color: #ffffff;
          border-color: var(--primary-accent);
          box-shadow: 0 4px 18px var(--accent-glow);
        }

        .skills-tab-btn.active .tab-count {
          background: rgba(255, 255, 255, 0.25);
          color: #ffffff;
        }

        .tab-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tab-count {
          font-size: 0.72rem;
          padding: 2px 7px;
          border-radius: var(--radius-full);
          background: rgba(var(--primary-rgb), 0.08);
          color: var(--text-dim);
          font-weight: 700;
        }

        /* Groups Container */
        .skills-groups-container {
          display: flex;
          flex-direction: column;
          gap: 36px;
          max-width: 1120px;
          margin: 0 auto;
        }

        /* Group Card */
        .skill-group-card {
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg, 24px);
          padding: 30px 32px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.15);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-group-card:hover {
          border-color: var(--border-highlight);
        }

        /* Group Header */
        .group-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 26px;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--border-color);
          flex-wrap: wrap;
        }

        .group-header-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .group-icon-bubble {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm, 12px);
          background: var(--accent-glow-subtle);
          border: 1px solid var(--border-highlight);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-accent);
          flex-shrink: 0;
        }

        .group-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: -0.01em;
          margin: 0 0 3px 0;
        }

        .group-subtitle {
          font-size: 0.84rem;
          color: var(--text-muted);
          margin: 0;
        }

        .group-badge {
          display: inline-flex;
          align-items: center;
          padding: 5px 12px;
          border-radius: var(--radius-full);
          background: var(--accent-glow-subtle);
          border: 1px solid var(--border-color);
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--primary-accent);
          letter-spacing: 0.04em;
        }

        /* Skills Grid */
        .skills-items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 16px;
        }

        /* Individual Skill Card */
        .skill-item-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 18px 20px;
          border-radius: var(--radius-md, 16px);
          background: var(--surface-glass);
          border: 1px solid var(--border-color);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          cursor: default;
        }

        .skill-item-card:hover {
          background: var(--surface-hover);
          border-color: var(--border-highlight);
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12), 0 0 20px var(--accent-glow-subtle);
        }

        .skill-item-card:hover .skill-logo-box {
          transform: scale(1.08);
          border-color: var(--primary-accent);
        }

        .skill-logo-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm, 12px);
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skill-content {
          flex: 1;
          min-width: 0;
        }

        .skill-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 5px;
        }

        .skill-name {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: -0.01em;
          margin: 0;
        }

        .skill-desc {
          font-size: 0.8rem;
          line-height: 1.5;
          color: var(--text-muted);
          margin: 0;
        }

        .skill-card-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, var(--accent-glow-subtle) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .skill-item-card:hover .skill-card-glow {
          opacity: 1;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .technical-skills-section {
            padding: 60px 0 80px 0;
          }

          .skill-group-card {
            padding: 22px 18px;
            border-radius: 20px;
          }

          .skills-items-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .skills-filter-tabs {
            border-radius: 16px;
            padding: 6px;
          }

          .skills-tab-btn {
            padding: 7px 14px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};
