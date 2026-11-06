import React, { useState, useEffect, useRef } from 'react';
import { 
  FolderGit2, 
  ArrowRight, 
  ChevronUp,
  ZoomIn
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ImageViewerModal } from './ImageViewerModal';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewerData, setViewerData] = useState(null); // { project, imageIndex }
  const [activeImageMap, setActiveImageMap] = useState({}); // { [projectId]: index }

  const activeProjectIdRef = useRef(null);
  const activeViewerRef = useRef(null);

  // Keep refs synchronized with active modals
  useEffect(() => {
    activeProjectIdRef.current = selectedProject ? selectedProject.id : null;
  }, [selectedProject]);

  useEffect(() => {
    activeViewerRef.current = viewerData ? viewerData.project.id : null;
  }, [viewerData]);

  const scrollToTopProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Open Case Study Modal with browser history state
  const openCaseStudy = (project) => {
    setViewerData(null);
    setSelectedProject(project);
    activeProjectIdRef.current = project.id;
    window.history.pushState(
      { modal: 'project-case-study', projectId: project.id },
      '',
      `#project-${project.id}`
    );
  };

  // Close Case Study Modal (triggers history back so browser navigation stays clean)
  const closeCaseStudy = () => {
    if (window.location.hash.startsWith('#project-')) {
      window.history.back();
    } else {
      const closedId = activeProjectIdRef.current;
      setSelectedProject(null);
      activeProjectIdRef.current = null;
      if (closedId) {
        setTimeout(() => {
          const cardEl = document.getElementById(`project-card-${closedId}`);
          if (cardEl) {
            cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 80);
      }
    }
  };

  // Open Full Image Viewer with browser history state
  const openImageViewer = (project, imageIndex = 0) => {
    setViewerData({ project, imageIndex });
    activeViewerRef.current = project.id;
    window.history.pushState(
      { modal: 'image-viewer', projectId: project.id, imageIndex },
      '',
      `#view-${project.id}-${imageIndex}`
    );
  };

  // Close Full Image Viewer
  const closeImageViewer = () => {
    if (window.location.hash.startsWith('#view-')) {
      window.history.back();
    } else {
      const targetId = activeViewerRef.current;
      setViewerData(null);
      activeViewerRef.current = null;
      if (targetId) {
        setTimeout(() => {
          const cardEl = document.getElementById(`project-card-${targetId}`);
          if (cardEl) {
            cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 80);
      }
    }
  };

  // Listen for hardware / browser back navigation:
  // - Laptop: browser back button (top left), Alt+Left, trackpad 2-finger swipe back, mouse back button
  // - Mobile/Phone/Tablet: system edge-swipe back gesture, hardware back button, browser back
  useEffect(() => {
    const handlePopState = () => {
      // 1. If Image Viewer is open, close it and return to the card
      if (activeViewerRef.current) {
        const targetId = activeViewerRef.current;
        setViewerData(null);
        activeViewerRef.current = null;

        setTimeout(() => {
          const cardEl = document.getElementById(`project-card-${targetId}`);
          if (cardEl) {
            cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 80);
        return;
      }

      // 2. If Case Study modal is open, close it and return to the card
      if (activeProjectIdRef.current) {
        const targetId = activeProjectIdRef.current;
        setSelectedProject(null);
        activeProjectIdRef.current = null;

        setTimeout(() => {
          const cardEl = document.getElementById(`project-card-${targetId}`);
          if (cardEl) {
            cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 80);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Check initial URL hash on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#project-')) {
      const projId = hash.replace('#project-', '');
      const found = PROJECTS.find((p) => p.id === projId);
      if (found) {
        setSelectedProject(found);
        activeProjectIdRef.current = found.id;
      }
    } else if (hash && hash.startsWith('#view-')) {
      const parts = hash.replace('#view-', '').split('-');
      const indexStr = parts.pop();
      const projId = parts.join('-');
      const found = PROJECTS.find((p) => p.id === projId);
      if (found) {
        const idx = parseInt(indexStr, 10) || 0;
        setViewerData({ project: found, imageIndex: idx });
        activeViewerRef.current = found.id;
      }
    }
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="projects-header">
          <div className="section-badge" style={{ marginBottom: '16px' }}>
            <FolderGit2 size={14} />
            <span>03 · MY WORK</span>
          </div>

          <h2 className="projects-hero-heading">PROJECTS</h2>

          <p className="projects-hero-sub">
            Selected projects showcasing my engineering skills, technical expertise, and problem-solving approach.
          </p>
        </div>

        {/* Physical Stacking Card Deck */}
        <div className="projects-stack-deck">
          {PROJECTS.map((project, index) => {
            const cardZIndex = index + 1;
            const projectImages = project.images && project.images.length > 0
              ? project.images
              : [{ url: project.image, title: project.title, label: 'Overview' }];
            const activeImgIdx = activeImageMap[project.id] || 0;
            const currentImg = projectImages[activeImgIdx] || projectImages[0];
            const hasMultipleImages = projectImages.length > 1;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
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

                  <button
                    onClick={() => openCaseStudy(project)}
                    className="card-pill-btn card-pill-study"
                    aria-label={`Open architecture case study for ${project.title}`}
                  >
                    <span>CASE STUDY</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                {/* Project Title */}
                <h3 
                  className="card-title"
                  onClick={() => openCaseStudy(project)}
                >
                  {project.title}
                </h3>

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

                {/* Split Media Showcase: Both thumbnails + Image cleanly visible */}
                <div className="card-media-showcase">
                  {/* Left Column: 2 Feature Thumbnail Cards */}
                  <div className="media-thumbs-col">
                    {project.thumbnails && project.thumbnails.length > 0 ? (
                      project.thumbnails.map((thumb, tIdx) => (
                        <div
                          key={tIdx}
                          className="media-thumb-box"
                          onClick={() => openCaseStudy(project)}
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
                          onClick={() => openCaseStudy(project)}
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
                          onClick={() => openCaseStudy(project)}
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

                  {/* Right Column: Hero Showcase Image / Screenshot Switcher */}
                  <div className="media-hero-container">
                    {/* View Switcher Pills if project has multiple images */}
                    {hasMultipleImages && (
                      <div className="media-switcher-bar" onClick={(e) => e.stopPropagation()}>
                        {projectImages.map((img, imgIdx) => {
                          const isActive = imgIdx === activeImgIdx;
                          return (
                            <button
                              key={imgIdx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageMap((prev) => ({
                                  ...prev,
                                  [project.id]: imgIdx
                                }));
                              }}
                              className={`media-switch-pill ${isActive ? 'active' : ''}`}
                              title={`Switch to ${img.label}`}
                            >
                              {img.label}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Image Box: Click to view full image in high resolution */}
                    <div
                      className="media-img-wrapper"
                      onClick={() => openImageViewer(project, activeImgIdx)}
                      title="Click to view full image in high resolution"
                    >
                      <img
                        src={currentImg.url}
                        alt={currentImg.title || project.title}
                        className="media-hero-img"
                      />
                      <div className="media-hero-overlay">
                        <span className="media-overlay-badge">
                          <ZoomIn size={14} />
                          <span>View Full Image</span>
                        </span>
                      </div>
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
          onClose={closeCaseStudy}
          onOpenImageViewer={(imgIdx) => openImageViewer(selectedProject, imgIdx)}
        />
      )}

      {/* Fullscreen Image Lightbox Viewer with Back option */}
      {viewerData && (
        <ImageViewerModal
          project={viewerData.project}
          initialIndex={viewerData.imageIndex}
          onClose={closeImageViewer}
        />
      )}

      <style>{`
        .projects-section {
          position: relative;
          padding: 80px 0 100px 0;
          overflow: visible;
        }

        /* Header */
        .projects-header {
          text-align: center;
          margin-bottom: 54px;
        }

        .projects-hero-heading {
          font-size: clamp(2.4rem, 5.5vw, 4.2rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: var(--text-main);
          line-height: 1.05;
          margin: 12px 0 16px 0;
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

        /* Perfectly Proportioned Sticky Card */
        .project-stack-card {
          position: sticky;
          top: calc(64px + var(--card-index) * 6px);
          margin-bottom: clamp(65px, 9vh, 95px);
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg, 24px);
          box-shadow: 0 -12px 30px rgba(0, 0, 0, 0.2), 0 24px 50px rgba(0, 0, 0, 0.3);
          padding: clamp(16px, 2vw, 22px) clamp(18px, 2.5vw, 28px);
          color: var(--text-main);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          box-sizing: border-box;
          max-height: calc(100vh - 74px);
          overflow-y: auto;
          scrollbar-width: none;
        }

        .project-stack-card::-webkit-scrollbar {
          display: none;
        }

        .project-stack-card:hover {
          border-color: var(--border-highlight);
        }

        /* Top Bar: Number & Category on left, Case Study button on right */
        .card-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 10px;
        }

        .card-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
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

        /* Case Study Hero Pill Button */
        .card-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 18px;
          border-radius: 9999px;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
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
          box-shadow: 0 4px 18px var(--accent-glow);
        }

        /* Title */
        .card-title {
          font-family: var(--font-heading);
          font-size: clamp(1.15rem, 2vw, 1.55rem);
          font-weight: 800;
          color: var(--text-main);
          letter-spacing: -0.02em;
          margin-bottom: 6px;
          cursor: pointer;
          line-height: 1.25;
          text-transform: uppercase;
          transition: color 0.2s ease;
        }

        .card-title:hover {
          color: var(--primary-accent);
        }

        /* Description with Controlled Clamp so Card Details Below are Fully Visible */
        .card-description {
          font-size: 0.88rem;
          line-height: 1.55;
          color: var(--text-muted);
          margin-bottom: 10px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Tech Badges */
        .card-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 12px;
        }

        .card-tech-pill {
          display: inline-flex;
          align-items: center;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          background: var(--surface-glass);
          border: 1px solid var(--border-color);
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--text-main);
        }

        /* Split Media Showcase: Proportioned for 100% full visibility */
        .card-media-showcase {
          display: grid;
          grid-template-columns: minmax(220px, 260px) 1fr;
          gap: 12px;
          align-items: stretch;
          margin-top: 4px;
        }

        .media-thumbs-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .media-thumb-box {
          background: var(--surface-glass);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 9px 13px;
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
          margin-bottom: 3px;
        }

        .thumb-badge {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--primary-accent);
          text-transform: uppercase;
        }

        .thumb-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--primary-accent);
          box-shadow: 0 0 6px var(--primary-accent);
        }

        .thumb-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 2px;
          line-height: 1.25;
        }

        .thumb-detail {
          font-size: 0.7rem;
          line-height: 1.35;
          color: var(--text-muted);
        }

        /* Hero Image Container with Screenshot Switcher Tabs */
        .media-hero-container {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          background: #0a0c16;
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: clamp(140px, 20vh, 185px);
          display: flex;
          flex-direction: column;
        }

        .media-switcher-bar {
          position: absolute;
          top: 8px;
          left: 8px;
          right: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 10;
          pointer-events: auto;
        }

        .media-switch-pill {
          padding: 3px 10px;
          border-radius: 9999px;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(10, 12, 22, 0.75);
          color: rgba(255, 255, 255, 0.75);
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.2s ease;
        }

        .media-switch-pill:hover {
          color: #ffffff;
          border-color: var(--primary-accent);
          background: rgba(10, 12, 22, 0.9);
        }

        .media-switch-pill.active {
          background: var(--primary-accent);
          color: #000000;
          border-color: var(--primary-accent);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .media-img-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: pointer;
          overflow: hidden;
        }

        .media-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .media-img-wrapper:hover .media-hero-img {
          transform: scale(1.05);
        }

        .media-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(9, 9, 15, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .media-img-wrapper:hover .media-hero-overlay {
          opacity: 1;
        }

        .media-overlay-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 9999px;
          background: var(--primary-accent);
          color: #000000;
          font-size: 0.72rem;
          font-weight: 700;
          box-shadow: 0 0 18px var(--accent-glow);
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
            top: calc(58px + var(--card-index) * 4px);
            margin-bottom: 40px;
            padding: 14px 14px;
            border-radius: 18px;
          }

          .card-media-showcase {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .media-hero-container {
            height: 145px;
          }
        }
      `}</style>
    </section>
  );
};
