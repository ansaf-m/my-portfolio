import React from 'react';

export const Hero = ({ currentTheme, onOpenResume }) => {
  return (
    <section id="hero" className="hero-master-section">
      {/* ══════════════════════════════════════════════════
          PAGE 1 (FIRST FOLD, 100vh / 100dvh):
          NAME "ANSAF" SITS DIRECTLY BELOW HEADER,
          PHOTO GROUNDED AT BOTTOM OF SCREEN (100% VISIBLE)
          ══════════════════════════════════════════════════ */}
      <div className="hero-first-page">
        {/* Ambient Gradient Lighting Orbs */}
        <div
          className="glow-orb glow-orb-primary"
          style={{
            top: '8%',
            left: '20%',
            animation: 'float 9s ease-in-out infinite'
          }}
        />
        <div
          className="glow-orb glow-orb-secondary"
          style={{
            top: '18%',
            right: '20%',
            animation: 'float-reverse 11s ease-in-out infinite'
          }}
        />

        <div className="container first-page-container">
          {/* Ambient Radial Halo behind photo & typography */}
          <div className="photo-ambient-halo" />

          {/* ── Unified Typography Stack (ANSAF just above SOFTWARE ENGINEER) ── */}
          <div className="hero-typography-stack">
            {/* Name: ANSAF (without M, sitting just above Software Engineer) */}
            <h1 className="hero-name-fading">ANSAF</h1>

            {/* Role: SOFTWARE ENGINEER (down behind head & shoulders) */}
            <div className="hero-role-behind">
              <span className="hero-role-behind-text">SOFTWARE ENGINEER</span>
            </div>
          </div>

          {/* Cutout Portrait in front (z-index 10), grounded at bottom of Page 1 */}
          <div className="photo-cutout-container">
            <img
              src="/images/ansaf-hero.png"
              alt="Ansaf - Software Engineer"
              className="photo-cutout-img"
            />
          </div>
        </div>
      </div>

      <style>{`
        .hero-master-section {
          position: relative;
          width: 100%;
          padding: 0 !important;
          margin: 0 !important;
          overflow: visible;
        }

        /* ══════════════════════════════════════════════════
           PAGE 1 (FIRST FOLD, 100vh / 100dvh)
           Fits 100% into viewport:
           - Navbar at top
           - Name right below navbar (no excess space)
           - Photo seated cleanly at the bottom edge
           - Entire photo 100% visible without scroll
           ══════════════════════════════════════════════════ */
        .hero-first-page {
          height: 100vh;
          height: 100dvh;
          max-height: 100vh;
          max-height: 100dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding-top: 68px;
          padding-bottom: 0;
          margin: 0;
          position: relative;
          box-sizing: border-box;
          overflow: hidden;
        }

        .first-page-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          width: 100%;
          height: 100%;
          flex: 1;
          min-height: 0;
          position: relative;
          z-index: 10;
          padding: 0 16px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* ── Unified Typography Stack (ANSAF just above SOFTWARE ENGINEER) ── */
        .hero-typography-stack {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          text-align: center;
          margin-bottom: clamp(-42px, -5vw, -20px);
          pointer-events: none;
          user-select: none;
        }

        .hero-name-fading {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 5.2vw, 3.8rem);
          font-weight: 850;
          letter-spacing: 0.1em;
          line-height: 0.95;
          text-transform: uppercase;
          margin: 0 0 2px 0;
          text-align: center;
          white-space: nowrap;

          background: linear-gradient(180deg, 
            #ffffff 20%, 
            rgba(255, 255, 255, 0.85) 55%, 
            rgba(255, 255, 255, 0.35) 88%,
            rgba(255, 255, 255, 0.1) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;

          filter: drop-shadow(0 4px 20px rgba(255, 255, 255, 0.16));
          animation: nameGlowBreathe 4s ease-in-out infinite alternate;
        }

        .hero-name-accent {
          color: var(--primary-accent);
          -webkit-text-fill-color: var(--primary-accent);
          filter: drop-shadow(0 0 18px var(--accent-glow));
        }

        @keyframes nameGlowBreathe {
          0% {
            filter: drop-shadow(0 4px 18px rgba(255, 255, 255, 0.12));
          }
          100% {
            filter: drop-shadow(0 6px 30px rgba(var(--primary-rgb), 0.38));
          }
        }

        /* ── Role text behind head: "SOFTWARE ENGINEER" (3D depth layer) ── */
        .hero-role-behind {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          text-align: center;
          margin-top: 2px;
        }

        .hero-role-behind-text {
          font-family: var(--font-heading);
          font-size: clamp(1.4rem, 4.4vw, 3rem);
          font-weight: 850;
          letter-spacing: 0.14em;
          line-height: 1;
          text-transform: uppercase;
          white-space: nowrap;

          background: linear-gradient(180deg, 
            rgba(255, 255, 255, 0.82) 15%, 
            rgba(255, 255, 255, 0.45) 55%, 
            rgba(var(--primary-rgb), 0.35) 85%,
            rgba(var(--primary-rgb), 0.08) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;

          filter: drop-shadow(0 4px 20px rgba(var(--primary-rgb), 0.25));
        }

        /* ── Ambient Radial Halo behind photo ── */
        .photo-ambient-halo {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: 520px;
          max-width: 90vw;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-glow) 0%, rgba(var(--primary-rgb), 0.18) 45%, transparent 70%);
          filter: blur(50px);
          z-index: 1;
          pointer-events: none;
        }

        .photo-cutout-container {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          line-height: 0;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .photo-cutout-img {
          display: block;
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: clamp(320px, 60vh, 540px);
          object-fit: contain;
          object-position: bottom center;
          vertical-align: bottom;
          margin-bottom: 0;
          filter: drop-shadow(0 20px 45px rgba(0, 0, 0, 0.9)) contrast(1.04) brightness(1.02);
          transition: transform 0.4s ease;
        }

        .photo-cutout-img:hover {
          transform: scale(1.015);
        }

        /* ── Responsive adjustments ── */
        @media (max-width: 900px) {
          .hero-first-page {
            padding-top: 56px;
          }
          .hero-typography-stack {
            margin-bottom: clamp(-28px, -5.5vw, -16px);
          }
          .hero-name-fading {
            font-size: clamp(1.6rem, 7.5vw, 2.5rem);
            margin-bottom: 2px;
          }
          .hero-role-behind-text {
            font-size: clamp(1rem, 4.5vw, 1.8rem);
            letter-spacing: 0.1em;
          }
          .photo-cutout-img {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: clamp(270px, 52vh, 410px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
