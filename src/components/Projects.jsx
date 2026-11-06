import React, { useState } from 'react';
import { 
  FolderGit2, 
  ArrowRight, 
  Info,
  ArrowUpRight,
  ChevronUp
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollToTopProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header with Code-Tag Styling matching reference */}
        <div className="projects-header">
          <div className="section-badge" style={{ marginBottom: '16px' }}>
            <FolderGit2 size={14} />
            <span>03 · Featured Work</span>
          </div>

          <div className="projects-code-tag">
            <span className="code-bracket">&lt;</span>
            <span className="code-element">h2</span>
            <span className="code-attr"> class=</span>
            <span className="code-value">"projects"</span>
            <span className="code-bracket">&gt;</span>
            <span className="code-cursor">|</span>
          </div>

          <h2 className="projects-hero-heading">PROJECTS</h2>

          <div className="projects-code-tag" style={{ marginBottom: '18px' }}>
            <span className="code-bracket">&lt;/</span>
            <span className="code-element">h2</span>
            <span className="code-bracket">&gt;</span>
            <span className="code-cursor">|</span>
          </div>

          <p className="projects-hero-sub">
            Enterprise Distributed Systems · Scalable REST APIs · Modern Reactive Web Platforms
          </p>
        </div>

        {/* Physical Stacking Card Deck */}
        <div className="projects-stack-deck">
          {PROJECTS.map((project, index) => {
            const cardZIndex = index + 1;
            return (
              <div
                key={project.id}
                className="project-stack-card"
                style={{
                  '--card-index': index,
                  zIndex: cardZIndex,
                }}
              >
                {/* Card Header: Number & Category + Top Action Controls */}
                <div className="card-top-bar">
                  <div className="card-meta">
                    <span className="card-number">{project.number || `0${index + 1}`}</span>
                    <span className="card-category">{project.category || project.badge}</span>
                  </div>

                  <div className="card-actions-desktop">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="card-pill-btn card-pill-live"
                    >
                      <span>LIVE PROJECT</span>
                      <ArrowUpRight size={15} />
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="card-pill-btn card-pill-study"
                    >
                      <span>CASE STUDY</span>
                      <ArrowRight size={14} />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="card-pill-btn card-pill-ghost"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={14} />
                      <span>CODE</span>
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 
                  className="card-title"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>

                {/* Mobile Action Buttons Bar */}
                <div className="card-actions-mobile">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="card-pill-btn card-pill-live"
                  >
                    <span>LIVE PROJECT</span>
                    <ArrowUpRight size={15} />
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="card-pill-btn card-pill-study"
                  >
                    <span>CASE STUDY</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                {/* Narrative Description */}
                <p className="card-description">
                  {project.description}
                </p>

                {/* Technology Badges Row */}
                <div className="card-tech-row">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="card-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Split Media Showcase */}
                <div className="card-media-showcase">
                  {/* Left Column: 2 Feature Thumbnail Cards */}
                  <div className="media-thumbs-col">
                    {project.thumbnails && project.thumbnails.length > 0 ? (
                      project.thumbnails.map((thumb, tIdx) => (
                        <div
                          key={tIdx}
                          className="media-thumb-box"
                          onClick={() => setSelectedProject(project)}
                        >
                          <div className="thumb-box-header">
                            <span className="thumb-badge">{thumb.tag}</span>
                            <span className="thumb-dot" />
                          </div>
                          <h4 className="thumb-title">{thumb.title}</h4>
                          <p className="thumb-detail">{thumb.detail}</p>
                        </div>
                      ))
                    ) : (
                      <>
                        <div
                          className="media-thumb-box"
                          onClick={() => setSelectedProject(project)}
                        >
                          <div className="thumb-box-header">
                            <span className="thumb-badge">ARCHITECTURE</span>
                            <span className="thumb-dot" />
                          </div>
                          <h4 className="thumb-title">Distributed REST Services</h4>
                          <p className="thumb-detail">Stateless JWT Auth & Spring Filter Chains</p>
                        </div>
                        <div
                          className="media-thumb-box"
                          onClick={() => setSelectedProject(project)}
                        >
                          <div className="thumb-box-header">
                            <span className="thumb-badge">DATA PIPELINE</span>
                            <span className="thumb-dot" />
                          </div>
                          <h4 className="thumb-title">Relational Schema Integrity</h4>
                          <p className="thumb-detail">Indexed Queries & ACID Transactions</p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Right Column: Hero Showcase Image */}
                  <div 
                    className="media-hero-container"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="media-hero-img"
                    />
                    <div className="media-hero-overlay">
                      <span className="media-overlay-badge">
                        <Info size={14} />
                        <span>View Architecture Case Study</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Quick Scroll to Top of Projects */}
        <div className="projects-scroll-indicator">
          <button
            onClick={scrollToTopProjects}
            className="btn-scroll-top"
            aria-label="Scroll back to top of projects"
            title="Scroll to top of Projects"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        .projects-section {
          position: relative;
          padding: 80px 0 100px 0;
          overflow: visible;
        }

        /* Header Code Tag */
        .projects-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .projects-code-tag {
          font-family: var(--font-code, monospace);
          font-size: 0.95rem;
          color: #a855f7;
          display: inline-flex;
          align-items: center;
          gap: 2px;
          user-select: none;
          letter-spacing: 0.04em;
        }

        .code-bracket {
          color: #ec4899;
          font-weight: 600;
        }

        .code-element {
          color: #a855f7;
          font-weight: 600;
        }

        .code-attr {
          color: #38bdf8;
        }

        .code-value {
          color: #34d399;
        }

        .code-cursor {
          color: var(--primary-accent);
          font-weight: bold;
          margin-left: 2px;
          animation: blinkCursor 1s step-end infinite;
        }

        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .projects-hero-heading {
          font-size: clamp(2.4rem, 5.5vw, 4.2rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: var(--text-main);
          line-height: 1.05;
          margin: 10px 0;
          text-transform: uppercase;
        }

        .projects-hero-sub {
          max-width: 650px;
          margin: 0 auto;
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-muted);
        }

        /* Physical Stacking Deck */
        .projects-stack-deck {
          position: relative;
          width: 100%;
          max-width: 1060px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          padding-bottom: 80px;
        }

        .project-stack-card {
          position: sticky;
          top: calc(75px + var(--card-index) * 20px);
          margin-bottom: 70px;
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg, 28px);
          box-shadow: 0 -12px 30px rgba(0, 0, 0, 0.2), 0 24px 50px rgba(0, 0, 0, 0.3);
          padding: 34px 38px;
          color: var(--text-main);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .project-stack-card:hover {
          border-color: var(--border-highlight);
        }

        /* Top Bar: Number & Category */
        .card-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 14px;
        }

        .card-meta {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .card-number {
          font-family: var(--font-code, monospace);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.05em;
        }

        .card-category {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--primary-accent);
        }

        /* Desktop Action Buttons */
        .card-actions-desktop {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .card-actions-mobile {
          display: none;
          gap: 10px;
          margin-bottom: 16px;
        }

        .card-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 9999px;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-pill-live {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.28);
          color: #ffffff;
        }

        .card-pill-live:hover {
          background: var(--primary-accent);
          border-color: var(--primary-accent);
          box-shadow: 0 0 20px var(--accent-glow);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .card-pill-study {
          background: var(--accent-glow-subtle);
          border: 1px solid var(--border-highlight);
          color: var(--primary-accent);
        }

        .card-pill-study:hover {
          background: var(--primary-accent);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .card-pill-ghost {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: rgba(255, 255, 255, 0.75);
        }

        .card-pill-ghost:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.3);
        }

        /* Title */
        .card-title {
          font-family: var(--font-heading);
          font-size: clamp(1.35rem, 2.4vw, 1.85rem);
          font-weight: 800;
          color: var(--text-main);
          letter-spacing: -0.02em;
          margin-bottom: 14px;
          cursor: pointer;
          line-height: 1.25;
          text-transform: uppercase;
          transition: color 0.2s ease;
        }

        .card-title:hover {
          color: var(--primary-accent);
        }

        /* Description */
        .card-description {
          font-size: 0.94rem;
          line-height: 1.68;
          color: var(--text-muted);
          margin-bottom: 18px;
        }

        /* Tech Badges */
        .card-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .card-tech-pill {
          display: inline-flex;
          align-items: center;
          padding: 5px 12px;
          border-radius: var(--radius-full);
          background: var(--surface-glass);
          border: 1px solid var(--border-color);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--text-main);
        }

        /* Split Media Showcase */
        .card-media-showcase {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 18px;
          align-items: stretch;
          margin-top: 8px;
        }

        .media-thumbs-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .media-thumb-box {
          background: var(--surface-glass);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md, 16px);
          padding: 16px 18px;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
        }

        .media-thumb-box:hover {
          background: var(--surface-hover);
          border-color: var(--border-highlight);
          transform: translateY(-2px);
        }

        .thumb-box-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .thumb-badge {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--primary-accent);
          text-transform: uppercase;
        }

        .thumb-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary-accent);
          box-shadow: 0 0 8px var(--primary-accent);
        }

        .thumb-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 4px;
        }

        .thumb-detail {
          font-size: 0.76rem;
          line-height: 1.45;
          color: var(--text-muted);
        }

        .media-hero-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: #000000;
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          min-height: 220px;
          max-height: 320px;
        }

        .media-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .media-hero-container:hover .media-hero-img {
          transform: scale(1.04);
        }

        .media-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(9, 9, 15, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .media-hero-container:hover .media-hero-overlay {
          opacity: 1;
        }

        .media-overlay-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 9999px;
          background: var(--primary-accent);
          color: #ffffff;
          font-size: 0.78rem;
          font-weight: 700;
          box-shadow: 0 0 20px var(--accent-glow);
        }

        /* Floating Scroll to Top button */
        .projects-scroll-indicator {
          position: sticky;
          bottom: 24px;
          display: flex;
          justify-content: flex-end;
          pointer-events: none;
          z-index: 100;
        }

        .btn-scroll-top {
          pointer-events: auto;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(18, 19, 28, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(12px);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }

        .btn-scroll-top:hover {
          background: var(--primary-accent);
          border-color: var(--primary-accent);
          transform: translateY(-3px);
          box-shadow: 0 0 20px var(--accent-glow);
        }

        /* Responsive Styles */
        @media (max-width: 900px) {
          .project-stack-card {
            top: calc(65px + var(--card-index) * 15px);
            margin-bottom: 45px;
            padding: 24px 20px;
            border-radius: 22px;
          }

          .card-actions-desktop {
            display: none;
          }

          .card-actions-mobile {
            display: flex;
          }

          .card-media-showcase {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .media-hero-container {
            min-height: 200px;
          }
        }
      `}</style>
    </section>
  );
};
