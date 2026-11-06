import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export const ImageViewerModal = ({ project, initialIndex = 0, onClose }) => {
  const images = project?.images && project.images.length > 0 
    ? project.images 
    : [{ url: project.image, title: project.title, label: 'Overview' }];
  
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Keyboard navigation: ESC to close, Left/Right arrows to cycle
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [images.length, onClose]);

  const currentImg = images[currentIndex] || images[0];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      className="image-viewer-backdrop"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 3000,
        backgroundColor: 'rgba(5, 5, 12, 0.94)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 16px 24px 16px',
        boxSizing: 'border-box',
        animation: 'imageFadeIn 0.25s ease-out'
      }}
    >
      {/* Top Bar: Title, Indicator & Close button */}
      <div
        style={{
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          zIndex: 10
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.01em'
              }}
            >
              {project.title}
            </span>
            {images.length > 1 && (
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '3px 9px',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'var(--primary-accent)',
                  border: '1px solid var(--border-color)'
                }}
              >
                {currentIndex + 1} / {images.length}
              </span>
            )}
          </div>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            {currentImg.title || currentImg.caption || currentImg.label}
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            flexShrink: 0
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--primary-accent)';
            e.currentTarget.style.color = '#000000';
            e.currentTarget.style.transform = 'scale(1.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          aria-label="Close image viewer"
          title="Close (ESC / Back)"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px 0'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Image Arrow */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(16, 18, 28, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 20,
              backdropFilter: 'blur(10px)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-accent)';
              e.currentTarget.style.color = '#000000';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(16, 18, 28, 0.75)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* The Full High-Res Image */}
        <div
          style={{
            position: 'relative',
            maxWidth: '92vw',
            maxHeight: '74vh',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 40px var(--accent-glow-subtle)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0a0d18'
          }}
        >
          <img
            src={currentImg.url}
            alt={currentImg.title || project.title}
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '74vh',
              objectFit: 'contain',
              display: 'block',
              animation: 'imageZoomIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        </div>

        {/* Next Image Arrow */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(16, 18, 28, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 20,
              backdropFilter: 'blur(10px)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-accent)';
              e.currentTarget.style.color = '#000000';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(16, 18, 28, 0.75)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
            aria-label="Next screenshot"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Switcher Pills */}
      {images.length > 1 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '6px 14px',
            borderRadius: '9999px',
            background: 'rgba(18, 20, 32, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(14px)',
            zIndex: 10
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  background: isActive ? 'var(--primary-accent)' : 'transparent',
                  color: isActive ? '#000000' : '#ffffff',
                  border: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>{img.label || `Image ${idx + 1}`}</span>
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @keyframes imageFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes imageZoomIn {
          from { transform: scale(0.96); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

