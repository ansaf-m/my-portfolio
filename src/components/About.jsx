import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { AboutParticleGlobe } from "./AboutParticleGlobe";

export function About({ currentTheme }) {
  const sectionRef = useRef(null);

  // Viewport dimensions tracking for fluid 1:1 pixel card dimensions
  const [viewportSize, setViewportSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = viewportSize.width < 768;

  // Track raw scroll progress within the kinetic About section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // ── Ultra-Smooth 1:1 Kinetic Scroll Transition ──
  // Direct scroll mapping eliminates spring lag, harmonic settling, and direction-reversal resistance.
  // Wheel and touch gestures respond instantaneously with zero latency and zero stuck points.
  const smoothProgress = scrollYProgress;

  // ── Kinetic Exit of Heading Words ──
  // "ABOUT" (above) moves to the LEFT side smoothly, exiting the screen
  const aboutX = useTransform(
    smoothProgress,
    [0, 0.65],
    ["0vw", isMobile ? "-75vw" : "-82vw"]
  );

  // "ME" (below) moves to the RIGHT side smoothly, exiting the screen
  const meX = useTransform(
    smoothProgress,
    [0, 0.65],
    ["0vw", isMobile ? "75vw" : "82vw"]
  );

  // Words fade out smoothly as they glide towards screen edges
  const titleOpacity = useTransform(
    smoothProgress,
    [0, 0.35, 0.58],
    [1, 1, 0]
  );

  // ── Synchronized Clipping Card Dimensions ──
  // Initial compact vertical card
  const initialWidth = isMobile ? 180 : 250;
  const initialHeight = isMobile ? 270 : 340;

  // Expanded card with equal margin block gap on all 4 sides (32px desktop, 16px mobile)
  const targetWidth = Math.min(
    isMobile ? viewportSize.width - 32 : viewportSize.width - 64,
    1320
  );
  const targetHeight = isMobile
    ? viewportSize.height - 32
    : viewportSize.height - 64;

  const cardWidth = useTransform(
    smoothProgress,
    [0, 0.82],
    [initialWidth, targetWidth]
  );

  const cardHeight = useTransform(
    smoothProgress,
    [0, 0.82],
    [initialHeight, targetHeight]
  );

  // ── Stationary Spotlight World Coordinates ──
  // Calculate horizontal origin so the beam axis intersects exact center (targetWidth/2, targetHeight/2)
  const spotlightAngle = isMobile ? 24 : 45;
  const spotlightOriginY = -20;
  const spotlightDeltaY = targetHeight / 2 - spotlightOriginY;
  const spotlightDeltaX = spotlightDeltaY * Math.tan((spotlightAngle * Math.PI) / 180);
  const spotlightOriginX = Math.round(targetWidth / 2 + spotlightDeltaX);

  // Card Content revealed seamlessly as card opens
  const contentOpacity = useTransform(
    smoothProgress,
    [0.35, 0.78],
    [0, 1]
  );

  const contentY = useTransform(
    smoothProgress,
    [0.35, 0.78],
    [14, 0]
  );

  // Scroll indicator cue fades out
  const indicatorOpacity = useTransform(
    smoothProgress,
    [0, 0.12],
    [1, 0]
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      data-name="About"
      className="about-kinetic-section"
    >
      {/* Sticky Viewport (100vh / 100dvh) */}
      <div className="about-sticky-viewport">

        {/* Ambient background with subtle cyber atmosphere */}
        <div
          className="about-bg-media"
          style={{
            backgroundImage: "url('/images/ansaf-ui.jpg'), radial-gradient(circle at 50% 30%, rgba(var(--primary-rgb), 0.16) 0%, #0a0a0a 75%)",
          }}
          aria-hidden="true"
        />

        {/* Dark vignette overlay */}
        <div className="about-bg-overlay" aria-hidden="true" />

        {/* ── 3D Particle Globe & Dispersing Universe (Behind expanding card) ── */}
        <div className="about-particle-canvas-wrapper" aria-hidden="true">
          <AboutParticleGlobe scrollProgress={smoothProgress} isMobile={isMobile} currentTheme={currentTheme} />
        </div>

        {/* ── Initial Vertical Card Heading: ABOUT on top, ME next down below it, centered ── */}
        <motion.div
          style={{ opacity: titleOpacity }}
          className="about-vertical-heading-stage"
        >
          {/* ABOUT on top, moving to the left */}
          <motion.div
            style={{ x: aboutX }}
            className="about-word-top"
          >
            ABOUT
          </motion.div>

          {/* ME next down below it, moving to the right */}
          <motion.div
            style={{ x: meX }}
            className="about-word-bottom"
          >
            ME
          </motion.div>
        </motion.div>

        {/* ── Expanding Centre Card (Acts as the clipping container with overflow: hidden) ── */}
        <div className="about-card-stage">
          <motion.div
            style={{
              width: cardWidth,
              height: cardHeight,
            }}
            className="about-expanding-card"
          >
            {/* ── Stationary Cinematic Spotlight Composition (Progressively revealed as card expands) ── */}
            <div
              className="cinematic-spotlight-world"
              style={{
                width: targetWidth,
                height: targetHeight,
                "--spotlight-x": `${spotlightOriginX}px`,
                "--spotlight-y": `${spotlightOriginY}px`,
                "--spotlight-deg": `${spotlightAngle}deg`,
              }}
              aria-hidden="true"
            >
              {/* Upper-Right Spotlight Aperture / Source */}
              <div className="spotlight-upper-aperture" />

              {/* Stationary Volumetric Diagonal Light Cone */}
              <div className="spotlight-cone-pivot">
                {/* 1. Outer Feathering: Extremely subtle tinted mist */}
                <div className="spotlight-ambient-mist" />

                {/* 2. Main Beam: Translucent active theme colour with soft white core */}
                <div className="spotlight-main-beam" />

                {/* 3. Layered Light Rays: Volumetric godray striations */}
                <div className="spotlight-godray-rays" />

                {/* 4. Brightest Region: Soft white specular spine */}
                <div className="spotlight-specular-spine" />
              </div>
            </div>

            {/* Card Content revealed as card opens */}
            <motion.div
              style={{
                opacity: contentOpacity,
                y: contentY,
              }}
              className="about-card-inner"
            >
              <div className="about-pillars-grid">
                {/* 01 — WHO I AM */}
                <div className="about-pillar-card">
                  <div className="about-pillar-tag">
                    <span className="about-pillar-num">01</span>
                    <span className="about-pillar-sep">—</span>
                    <span className="about-pillar-label">WHO I AM</span>
                  </div>
                  <h3 className="about-pillar-title">Software Engineer</h3>
                  <p className="about-pillar-desc">
                    Passionate about building meaningful digital experiences through technology, creative thinking, and problem-solving.
                  </p>
                </div>

                {/* 02 — WHAT I DO */}
                <div className="about-pillar-card">
                  <div className="about-pillar-tag">
                    <span className="about-pillar-num">02</span>
                    <span className="about-pillar-sep">—</span>
                    <span className="about-pillar-label">WHAT I DO</span>
                  </div>
                  <h3 className="about-pillar-title">Design. Develop. Integrate.</h3>
                  <p className="about-pillar-desc">
                    Building responsive user interfaces, developing scalable backend systems, engineering REST APIs, and integrating databases to create seamless applications.
                  </p>
                </div>

                {/* 03 — WHAT I EXPLORE */}
                <div className="about-pillar-card">
                  <div className="about-pillar-tag">
                    <span className="about-pillar-num">03</span>
                    <span className="about-pillar-sep">—</span>
                    <span className="about-pillar-label">WHAT I EXPLORE</span>
                  </div>
                  <h3 className="about-pillar-title">Beyond Development</h3>
                  <p className="about-pillar-desc">
                    Exploring emerging technologies, experimenting with AI-powered solutions, and continuously learning new ways to turn innovative ideas into practical digital experiences.
                  </p>
                </div>
              </div>

              {/* Action Buttons: View Projects & Contact */}
              <div className="about-actions-row">
                <a href="#projects" className="btn btn-primary about-action-btn">
                  <span>View Projects</span>
                  <ArrowUpRight size={18} />
                </a>
                <a href="#contact" className="btn btn-outline about-action-btn">
                  <Mail size={18} />
                  <span>Contact Me</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="about-scroll-cue"
        >
          <span>Scroll to explore</span>
          <span className="cue-dot">↓</span>
        </motion.div>

      </div>

      <style>{`
        .about-kinetic-section {
          position: relative;
          height: 175vh;
          background: var(--bg-color);
          padding: 0 !important;
          margin: 0 !important;
          touch-action: pan-y;
          contain: paint;
        }

        .about-sticky-viewport {
          position: sticky;
          top: 0;
          height: 100vh;
          height: 100svh;
          overflow: hidden;
          width: 100%;
        }

        .about-bg-media {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.12;
          filter: blur(2px);
          z-index: 1;
        }

        .about-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            var(--bg-color) 0%,
            transparent 45%,
            var(--bg-color) 100%
          );
          z-index: 2;
        }

        /* ── 3D Particle Globe Universe Canvas Wrapper (Behind expanding card) ── */
        .about-particle-canvas-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 3;
          pointer-events: none;
          overflow: hidden;
        }

        /* ── Initial Vertical Card Heading Stage ── */
        .about-vertical-heading-stage {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          z-index: 25;
          pointer-events: none;
        }

        .about-word-top,
        .about-word-bottom {
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 750;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          line-height: 1.05;
          color: var(--text-main);
          display: inline-block;
          white-space: nowrap;

          /* Refined theme-gradient fill */
          background: linear-gradient(180deg, var(--text-main) 40%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;

          filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.4));
        }

        /* ── Expanding Centre Card Stage ── */
        .about-card-stage {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          pointer-events: none;
        }

        /* Fully expanded card has equal margin block gap on all 4 sides */
        .about-expanding-card {
          position: relative;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-top: 1.5px solid rgba(255, 255, 255, 0.45);
          border-right: 1.5px solid rgba(255, 255, 255, 0.38);
          background: rgba(8, 8, 14, 0.94);
          backdrop-filter: blur(10px) saturate(140%);
          -webkit-backdrop-filter: blur(10px) saturate(140%);
          box-shadow: 
            0 24px 70px rgba(0, 0, 0, 0.85), 
            0 0 35px rgba(var(--primary-rgb), 0.16),
            inset 0 1px 1px rgba(255, 255, 255, 0.25);
          overflow: hidden; /* Clips the inner content and spotlight to card boundary */
          pointer-events: auto;
          box-sizing: border-box;
          flex-shrink: 0;
          will-change: width, height;
          transform: translate3d(0, 0, 0);
          -webkit-transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          contain: layout paint;
          touch-action: pan-y;
        }

        /* ── Stationary Cinematic Spotlight World ── */
        .cinematic-spotlight-world {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          overflow: hidden;
          border-radius: inherit;
          z-index: 2;
        }

        /* Upper-Right Spotlight Aperture / Lamp Source */
        .spotlight-upper-aperture {
          position: absolute;
          top: var(--spotlight-y, -20px);
          left: var(--spotlight-x, 80%);
          transform: translate(-50%, -20%);
          width: 250px;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at 50% 60%,
            rgba(255, 255, 255, 0.75) 0%,
            rgba(var(--primary-rgb), 0.6) 30%,
            rgba(var(--secondary-accent), 0.25) 55%,
            transparent 80%
          );
          mix-blend-mode: screen;
          pointer-events: none;
          z-index: 2;
        }

        /* Stationary Volumetric Diagonal Light Cone */
        .spotlight-cone-pivot {
          --pivot-w: 680px;
          position: absolute;
          top: var(--spotlight-y, -20px);
          left: var(--spotlight-x, 80%);
          margin-left: calc(-0.5 * var(--pivot-w));
          width: var(--pivot-w);
          height: 200%;
          transform-origin: 50% 0%;
          transform: rotate(var(--spotlight-deg, 45deg));
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;

          /* Natural expanding spotlight cone frustum */
          clip-path: polygon(38% 0%, 62% 0%, 100% 100%, 0% 100%);
          -webkit-clip-path: polygon(38% 0%, 62% 0%, 100% 100%, 0% 100%);

          /* Fades out and vanishes into complete darkness in bottom-left */
          mask-image: linear-gradient(
            to bottom,
            #000000 0%,
            #000000 22%,
            rgba(0, 0, 0, 0.92) 40%,
            rgba(0, 0, 0, 0.6) 58%,
            rgba(0, 0, 0, 0.16) 74%,
            transparent 88%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            #000000 0%,
            #000000 22%,
            rgba(0, 0, 0, 0.92) 40%,
            rgba(0, 0, 0, 0.6) 58%,
            rgba(0, 0, 0, 0.16) 74%,
            transparent 88%,
            transparent 100%
          );
        }

        /* 1. Outer Feathering: Extremely subtle atmospheric mist */
        .spotlight-ambient-mist {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            ellipse at 50% 28%,
            rgba(var(--primary-rgb), 0.22) 0%,
            rgba(var(--secondary-accent), 0.12) 40%,
            transparent 72%
          );
          mix-blend-mode: screen;
          pointer-events: none;
        }

        /* 2. Main Beam: Translucent theme-refracted volumetric cone */
        .spotlight-main-beam {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(var(--primary-rgb), 0.08) 18%,
            rgba(var(--secondary-accent), 0.25) 34%,
            rgba(255, 255, 255, 0.35) 50%,
            rgba(var(--secondary-accent), 0.25) 66%,
            rgba(var(--primary-rgb), 0.08) 82%,
            transparent 100%
          );
          mix-blend-mode: screen;
          pointer-events: none;
          opacity: 0.86;
        }

        /* 3. Layered Light Rays: Volumetric refracted godray striations */
        .spotlight-godray-rays {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            to right,
            transparent 0px,
            rgba(var(--primary-rgb), 0.06) 12px,
            rgba(255, 255, 255, 0.16) 24px,
            rgba(var(--primary-rgb), 0.28) 38px,
            transparent 54px,
            rgba(var(--secondary-accent), 0.24) 74px,
            rgba(255, 255, 255, 0.18) 90px,
            transparent 110px
          );
          mix-blend-mode: screen;
          pointer-events: none;
          opacity: 0.82;
        }

        /* 4. Brightest Region: Soft translucent specular spine */
        .spotlight-specular-spine {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 55px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.5) 0%,
            rgba(var(--primary-rgb), 0.35) 28%,
            rgba(var(--secondary-accent), 0.16) 58%,
            transparent 82%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            #000000 35%,
            #000000 65%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            #000000 35%,
            #000000 65%,
            transparent 100%
          );
          mix-blend-mode: screen;
          pointer-events: none;
          opacity: 0.72;
        }

        /* Inner Content fills the card with centered alignment */
        .about-card-inner {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: clamp(24px, 4vw, 56px);
          box-sizing: border-box;
          overflow: hidden;
          touch-action: pan-y;
          z-index: 10;
        }

        /* ── Modern 3-Pillar Architectural Grid ── */
        .about-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          width: 100%;
          max-width: 1140px;
          margin: 0 auto;
        }

        .about-pillar-card {
          padding: clamp(22px, 2.5vw, 32px);
          border-radius: var(--radius-lg, 20px);
          background: var(--surface-glass, rgba(12, 12, 22, 0.72));
          backdrop-filter: blur(14px) saturate(140%);
          -webkit-backdrop-filter: blur(14px) saturate(140%);
          border: 1px solid var(--border-color, rgba(255, 255, 255, 0.12));
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .about-pillar-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-highlight);
          box-shadow: 0 16px 42px rgba(0, 0, 0, 0.35), 0 0 24px var(--accent-glow-subtle);
        }

        .about-pillar-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-code);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--primary-accent);
          margin-bottom: 12px;
        }

        .about-pillar-num {
          font-weight: 800;
          color: var(--text-main);
        }

        .about-pillar-sep {
          opacity: 0.6;
        }

        .about-pillar-label {
          color: var(--primary-accent);
        }

        .about-pillar-title {
          font-family: var(--font-heading);
          font-size: clamp(1.2rem, 1.8vw, 1.5rem);
          font-weight: 800;
          color: var(--text-main);
          line-height: 1.25;
          margin-bottom: 12px;
        }

        .about-pillar-desc {
          font-size: clamp(0.86rem, 1.05vw, 0.95rem);
          line-height: 1.7;
          color: var(--text-muted);
          margin: 0;
        }

        /* ── Action Buttons Row ── */
        .about-actions-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
          width: 100%;
        }

        .about-action-btn {
          padding: 12px 28px;
          font-size: 0.92rem;
          font-weight: 600;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .about-scroll-cue {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.72rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-family: var(--font-code);
          pointer-events: none;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 30;
        }

        .cue-dot {
          display: inline-block;
          color: var(--primary-accent);
          animation: bounceCue 2s infinite ease-in-out;
        }

        @keyframes bounceCue {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }

        /* ── Responsive adjustments for mobile ── */
        @media (max-width: 768px) {
          .about-kinetic-section {
            height: 165vh;
          }
          .about-vertical-heading-stage {
            gap: 6px;
          }
          .about-word-top,
          .about-word-bottom {
            font-size: clamp(1.6rem, 7.5vw, 2.4rem);
            letter-spacing: 0.06em;
          }
          .about-expanding-card {
            border-radius: 18px;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            background: rgba(8, 8, 14, 0.96) !important;
          }
          .spotlight-upper-aperture {
            width: 150px;
            height: 42px;
          }
          .spotlight-cone-pivot {
            --pivot-w: 440px;
            clip-path: polygon(34% 0%, 66% 0%, 100% 100%, 0% 100%);
            -webkit-clip-path: polygon(34% 0%, 66% 0%, 100% 100%, 0% 100%);
          }
          .about-card-inner {
            padding: 16px 14px 20px 14px;
            justify-content: center;
          }
          .about-pillars-grid {
            grid-template-columns: 1fr;
            gap: 10px;
            width: 100%;
          }
          .about-pillar-card {
            padding: 12px 14px;
            border-radius: 14px;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            background: rgba(16, 16, 26, 0.94) !important;
          }
          .about-pillar-tag {
            font-size: 0.7rem;
            margin-bottom: 4px;
          }
          .about-pillar-title {
            font-size: 1.05rem;
            margin-bottom: 4px;
          }
          .about-pillar-desc {
            font-size: 0.8rem;
            line-height: 1.45;
          }
          .about-actions-row {
            flex-direction: row;
            gap: 8px;
            margin-top: 12px;
            width: 100%;
          }
          .about-action-btn {
            flex: 1;
            padding: 9px 12px;
            font-size: 0.82rem;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

export default About;
