import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Trash2 } from 'lucide-react';
import { TERMINAL_COMMANDS } from '../data/portfolioData';

export const Terminal = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `🚀 Ansaf M Portfolio Terminal v2.4.0 (x86_64-pc-linux-gnu)
Type 'help' to inspect available system commands or click any chip below.`
    }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);
  const isInitialMount = useRef(true);

  const scrollToBottom = () => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    scrollToBottom();
  }, [history]);

  const executeCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    // Add to executed command history
    setCommandHistory((prev) => [cmdStr, ...prev]);
    setHistoryIndex(-1);

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const output = TERMINAL_COMMANDS[trimmed] || `Command not found: "${trimmed}". Type 'help' to see valid commands.`;

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: cmdStr },
      { type: 'output', text: output }
    ]);

    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  const quickPills = ['help', 'about', 'skills', 'projects', 'contact', 'resume', 'quote', 'sudo hire', 'clear'];

  return (
    <section id="terminal" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="section-badge">
            <TerminalIcon size={14} />
            <span>06 · Interactive CLI</span>
          </div>
          <h2 className="section-title">
            Interactive Developer Terminal
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Prefer a command-line interface? Query my background, tech stack, and systems credentials via bash commands.
          </p>

          {/* Quick Command Pills */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '8px', 
              marginTop: '24px' 
            }}
          >
            {quickPills.map((pill) => (
              <button
                key={pill}
                onClick={() => executeCommand(pill)}
                style={{
                  fontFamily: 'var(--font-code)',
                  fontSize: '0.8rem',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-color)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  color: pill === 'sudo hire' ? 'var(--secondary-accent)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-accent)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = pill === 'sudo hire' ? 'var(--secondary-accent)' : 'var(--text-muted)';
                }}
              >
                $ {pill}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Window */}
        <div
          className="glass-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: 0,
            overflow: 'hidden',
            border: '1px solid var(--border-highlight)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 25px var(--accent-glow-subtle)'
          }}
          onClick={() => inputRef.current && inputRef.current.focus()}
        >
          {/* Header Bar */}
          <div
            style={{
              padding: '12px 20px',
              background: 'rgba(255, 255, 255, 0.04)',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
              <span 
                style={{ 
                  marginLeft: '12px', 
                  fontFamily: 'var(--font-code)', 
                  fontSize: '0.82rem', 
                  color: 'var(--text-muted)' 
                }}
              >
                ansaf@portfolio-vm:~
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setHistory([]);
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-dim)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-code)'
              }}
              title="Clear terminal output"
            >
              <Trash2 size={13} />
              <span>Clear</span>
            </button>
          </div>

          {/* Terminal Screen / Logs */}
          <div
            ref={terminalBodyRef}
            style={{
              padding: '24px',
              backgroundColor: '#07090e',
              minHeight: '280px',
              maxHeight: '440px',
              overflowY: 'auto',
              fontFamily: 'var(--font-code)',
              fontSize: '0.9rem',
              lineHeight: 1.6
            }}
          >
            {history.map((entry, idx) => (
              <div key={idx} style={{ marginBottom: '12px' }}>
                {entry.type === 'system' && (
                  <div style={{ color: 'var(--primary-accent)', whiteSpace: 'pre-wrap' }}>
                    {entry.text}
                  </div>
                )}

                {entry.type === 'input' && (
                  <div style={{ display: 'flex', gap: '8px', color: '#ffffff' }}>
                    <span style={{ color: 'var(--secondary-accent)' }}>ansaf@dev:~$</span>
                    <span>{entry.text}</span>
                  </div>
                )}

                {entry.type === 'output' && (
                  <div 
                    style={{ 
                      color: '#cbd5e1', 
                      whiteSpace: 'pre-wrap', 
                      paddingLeft: '14px', 
                      borderLeft: '2px solid rgba(var(--primary-rgb), 0.3)',
                      marginTop: '4px' 
                    }}
                  >
                    {entry.text}
                  </div>
                )}
              </div>
            ))}

            {/* Current Active Input Prompt */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
              <span style={{ color: 'var(--secondary-accent)' }}>ansaf@dev:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. 'skills', 'about')..."
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'var(--font-code)',
                  fontSize: '0.9rem',
                  color: '#ffffff',
                  caretColor: 'var(--primary-accent)'
                }}
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={() => executeCommand(inputVal)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--primary-accent)',
                  cursor: 'pointer',
                  padding: '4px'
                }}
                aria-label="Submit command"
              >
                <CornerDownLeft size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
