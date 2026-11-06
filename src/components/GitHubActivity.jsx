import React, { useState } from 'react';
import { 
  GitBranch, 
  GitCommit, 
  GitPullRequest, 
  Star, 
  ExternalLink, 
  Sparkles, 
  Flame 
} from 'lucide-react';

export const GitHubActivity = () => {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate 52 weeks x 7 days simulated contribution matrix
  const weeks = 40;
  const daysPerWeek = 7;

  // Stable seed pattern for realistic developer heatmap
  const getCommitIntensity = (w, d) => {
    // Generate realistic dense pattern
    const val = (Math.sin(w * 0.35 + d * 0.7) + Math.cos(w * 0.2)) * 10;
    if (val > 6) return 4;
    if (val > 2) return 3;
    if (val > -3) return 2;
    if (val > -8) return 1;
    return 0;
  };

  const getCellColor = (intensity) => {
    switch (intensity) {
      case 4:
        return 'var(--primary-accent)';
      case 3:
        return 'rgba(var(--primary-rgb), 0.7)';
      case 2:
        return 'rgba(var(--primary-rgb), 0.45)';
      case 1:
        return 'rgba(var(--primary-rgb), 0.2)';
      default:
        return 'rgba(255, 255, 255, 0.04)';
    }
  };

  const repos = [
    {
      name: "spring-boot-distributed-saga",
      description: "Distributed transaction saga orchestrator with Apache Kafka, Spring Boot 3, and PostgreSQL idempotent consumers.",
      language: "Java",
      stars: 42,
      forks: 14,
      url: "https://github.com/ansaf-m"
    },
    {
      name: "react-query-observability-ui",
      description: "Production React 19 monitoring dashboard for microservice clusters with WebSockets and metric alerting.",
      language: "React / TypeScript",
      stars: 38,
      forks: 9,
      url: "https://github.com/ansaf-m"
    },
    {
      name: "mysql-index-explain-analyzer",
      description: "CLI utility to parse MySQL EXPLAIN JSON output and recommend composite index fixes to prevent table scans.",
      language: "Java / SQL",
      stars: 56,
      forks: 18,
      url: "https://github.com/ansaf-m"
    }
  ];

  return (
    <section id="github" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="section-badge">
            <GitBranch size={14} />
            <span>05 · Open Source & Consistency</span>
          </div>
          <h2 className="section-title">
            GitHub Activity & Engineering Rigor
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A transparent view of daily commit consistency, open-source repositories, and software craftsmanship.
          </p>
        </div>

        {/* Heatmap Glass Card */}
        <div 
          className="glass-card" 
          style={{ 
            maxWidth: '960px', 
            margin: '0 auto 40px auto', 
            padding: '28px' 
          }}
        >
          {/* Top Stats Bar */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '24px',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '18px'
            }}
          >
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Flame size={18} style={{ color: 'var(--secondary-accent)' }} />
                <span>1,480+ Contributions in the Last Year</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Active streak: 48 days · Longest streak: 112 days
              </div>
            </div>

            {/* Intensity Legend */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((lvl) => (
                <span
                  key={lvl}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '3px',
                    backgroundColor: getCellColor(lvl)
                  }}
                />
              ))}
              <span>More</span>
            </div>
          </div>

          {/* Matrix Grid */}
          <div 
            style={{ 
              overflowX: 'auto', 
              paddingBottom: '8px' 
            }}
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${weeks}, 1fr)`,
                gap: '5px',
                minWidth: '720px'
              }}
            >
              {Array.from({ length: weeks }).map((_, wIdx) => (
                <div key={wIdx} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {Array.from({ length: daysPerWeek }).map((_, dIdx) => {
                    const intensity = getCommitIntensity(wIdx, dIdx);
                    return (
                      <div
                        key={dIdx}
                        onMouseEnter={() => setHoveredCell({ week: wIdx, day: dIdx, intensity })}
                        onMouseLeave={() => setHoveredCell(null)}
                        style={{
                          width: '100%',
                          aspectRatio: '1',
                          borderRadius: '3px',
                          backgroundColor: getCellColor(intensity),
                          transition: 'transform 0.15s ease, filter 0.15s ease',
                          cursor: 'pointer'
                        }}
                        title={`Activity level: ${intensity} / 4`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Tooltip feedback */}
          <div style={{ height: '20px', marginTop: '12px', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)' }}>
            {hoveredCell ? (
              <span>Activity Node: {hoveredCell.intensity * 3 + 1} commits recorded</span>
            ) : (
              <span>Hover over matrix cells to inspect contribution activity</span>
            )}
          </div>
        </div>

        {/* Featured Repositories Grid */}
        <div className="grid-3" style={{ maxWidth: '960px', margin: '0 auto' }}>
          {repos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '22px',
                textDecoration: 'none'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <GitPullRequest size={16} style={{ color: 'var(--primary-accent)' }} />
                    <span style={{ fontSize: '0.98rem', fontWeight: 600, color: '#ffffff' }}>
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink size={14} style={{ color: 'var(--text-dim)' }} />
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.55', marginBottom: '16px' }}>
                  {repo.description}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary-accent)' }} />
                  <span>{repo.language}</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={13} />
                  <span>{repo.stars}</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
