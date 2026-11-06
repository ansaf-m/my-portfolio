import React, { useState } from 'react';
import { 
  Code2, 
  Copy, 
  Check, 
  Terminal, 
  FileCode, 
  Sparkles 
} from 'lucide-react';
import { CODE_SNIPPETS } from '../data/portfolioData';

export const CodeSnippet = () => {
  const [activeTab, setActiveTab] = useState('java');
  const [copied, setCopied] = useState(false);

  const snippet = CODE_SNIPPETS[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="section-badge">
            <Code2 size={14} />
            <span>05 · Live Code Craftsmanship</span>
          </div>
          <h2 className="section-title">
            Writing Clean, Resilient & Documented Code
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Inspect real snippets demonstrating clean dependency injection, reactive state hooks, and optimized SQL index plans.
          </p>
        </div>

        {/* Code Window Container */}
        <div 
          className="glass-card" 
          style={{ 
            maxWidth: '920px', 
            margin: '0 auto', 
            padding: 0,
            overflow: 'hidden',
            border: '1px solid var(--border-highlight)'
          }}
        >
          {/* Top Window Chrome Bar */}
          <div 
            style={{
              padding: '12px 20px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            {/* Traffic Lights & Filename */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
              </div>
              <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {snippet.filename}
              </span>
            </div>

            {/* Language Tabs & Copy Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '8px', padding: '3px' }}>
                <button
                  onClick={() => setActiveTab('java')}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '6px',
                    border: 'none',
                    background: activeTab === 'java' ? 'var(--primary-accent)' : 'transparent',
                    color: activeTab === 'java' ? '#ffffff' : 'var(--text-muted)',
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Java Spring
                </button>
                <button
                  onClick={() => setActiveTab('react')}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '6px',
                    border: 'none',
                    background: activeTab === 'react' ? 'var(--primary-accent)' : 'transparent',
                    color: activeTab === 'react' ? '#ffffff' : 'var(--text-muted)',
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  React 19
                </button>
                <button
                  onClick={() => setActiveTab('sql')}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '6px',
                    border: 'none',
                    background: activeTab === 'sql' ? 'var(--primary-accent)' : 'transparent',
                    color: activeTab === 'sql' ? '#ffffff' : 'var(--text-muted)',
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  SQL Indexing
                </button>
              </div>

              {/* Copy Code Button */}
              <button
                onClick={handleCopy}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  color: copied ? '#10b981' : 'var(--text-main)',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-code)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                title="Copy code to clipboard"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Code Content Area */}
          <div 
            style={{ 
              padding: '24px', 
              backgroundColor: '#07090e',
              overflowX: 'auto',
              maxHeight: '440px'
            }}
          >
            <pre 
              style={{ 
                margin: 0,
                fontFamily: 'var(--font-code)', 
                fontSize: '0.9rem',
                lineHeight: 1.65,
                color: '#e2e8f0'
              }}
            >
              <code>{snippet.code}</code>
            </pre>
          </div>

          {/* Footer Status Bar */}
          <div
            style={{
              padding: '8px 20px',
              background: 'rgba(0, 0, 0, 0.6)',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.75rem',
              color: 'var(--text-dim)',
              fontFamily: 'var(--font-code)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span>{snippet.language}</span>
            </div>
            <span>UTF-8 · Production Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};
