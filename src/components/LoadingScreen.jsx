import React, { useState, useEffect, useRef, useCallback } from 'react';
import './LoadingScreen.css';

/**
 * ANSAF Kinetic Typography & Geometric Logo Reveal
 * Inspired by the reference "SPACE" kinetic typography animation.
 *
 * Timeline (Total: ~6.4s):
 * 0.0s – 0.7s : Minimal pitch-black screen.
 * 0.8s – 1.4s : S appears alone at exact center, stationary anchor.
 * 1.4s – 2.2s : 4 thin geometric strip lines emerge from Left, Top, Bottom, Right edges,
 *               gliding inward with tails detaching from screen borders.
 * 2.2s – 3.6s : Strips reach letter positions, split and physically construct A, N, A, F.
 * 3.6s – 4.2s : Subtle line displacement & fragmentation lock in.
 * 4.2s – 5.8s : Perfectly aligned, stationary, high-contrast monochrome ANSAF wordmark.
 * 5.8s – 6.4s : Seamless cinematic exit transition into portfolio.
 */
export const LoadingScreen = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const done = useRef(false);

  const handleFinish = useCallback(() => {
    if (done.current) return;
    done.current = true;
    setIsExiting(true);
    setTimeout(() => onComplete?.(), 600);
  }, [onComplete]);

  useEffect(() => {
    // Stage 1 (0.8s): S reveals in center
    const t1 = setTimeout(() => setStage(1), 800);
    // Stage 2 (1.4s): 4 strips shoot from 4 edges
    const t2 = setTimeout(() => setStage(2), 1400);
    // Stage 3 (2.2s): Strips morph and construct A, N, A, F
    const t3 = setTimeout(() => setStage(3), 2200);
    // Stage 4 (3.6s): Full wordmark locked
    const t4 = setTimeout(() => setStage(4), 3600);
    // Stage 5 (5.8s): Begin exit
    const t5 = setTimeout(() => handleFinish(), 5800);

    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, [handleFinish]);

  return (
    <div className={`ansaf-kinetic-viewport${isExiting ? ' exit-fade' : ''}`}>
      <div className="ansaf-kinetic-container">
        <svg
          className="ansaf-svg-canvas"
          viewBox="0 0 720 720"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Subtle glow filter for the impact moment */}
            <filter id="kinetic-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Architectural stencil cut mask for Letter S */}
            <mask id="s-center-mask">
              <rect x="0" y="0" width="720" height="720" fill="#ffffff" />
              <line
                x1="340"
                y1="363"
                x2="380"
                y2="357"
                stroke="#000000"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </mask>
          </defs>

          {/* ══════════════════════════════════════════════════
              STAGE 2: THE 4 DIRECTIONAL STRIP LINES
              Thin, long geometric lines shooting from 4 edges,
              with tails detaching from the borders
              ══════════════════════════════════════════════════ */}
          {stage >= 2 && (
            <g className={`strips-group${stage >= 3 ? ' strips-morphing' : ''}`}>
              {/* 1. LEFT STRIP (Horizontal line from left edge -> Letter A1) */}
              <line
                className="anim-strip strip-from-left"
                x1="-60"
                y1="372"
                x2="180"
                y2="372"
              />
              {/* Left secondary displacement streak */}
              <line
                className="anim-strip strip-from-left-sub"
                x1="-100"
                y1="342"
                x2="160"
                y2="342"
              />

              {/* 2. TOP STRIP (Vertical line from top edge -> Letter N) */}
              <line
                className="anim-strip strip-from-top"
                x1="246"
                y1="-60"
                x2="246"
                y2="322"
              />
              {/* Top secondary streak interacting near S */}
              <line
                className="anim-strip strip-from-top-sub"
                x1="294"
                y1="-80"
                x2="294"
                y2="280"
              />

              {/* 3. BOTTOM STRIP (Vertical line from bottom edge -> Letter A2) */}
              <line
                className="anim-strip strip-from-bottom"
                x1="450"
                y1="780"
                x2="450"
                y2="322"
              />
              {/* Bottom secondary streak */}
              <line
                className="anim-strip strip-from-bottom-sub"
                x1="476"
                y1="800"
                x2="476"
                y2="440"
              />

              {/* 4. RIGHT STRIP (Horizontal lines from right edge -> Letter F) */}
              <line
                className="anim-strip strip-from-right-top"
                x1="780"
                y1="324"
                x2="516"
                y2="324"
              />
              <line
                className="anim-strip strip-from-right-mid"
                x1="820"
                y1="360"
                x2="516"
                y2="360"
              />
            </g>
          )}

          {/* ══════════════════════════════════════════════════
              LETTER 1: A (Constructed by LEFT strip)
              Apex at (180, 322), Left leg to (154, 398),
              Right leg to (206, 398), Crossbar at y=372
              ══════════════════════════════════════════════════ */}
          {stage >= 3 && (
            <g className={`constructed-letter letter-a1${stage >= 4 ? ' locked' : ''}`}>
              {/* Left diagonal leg */}
              <line
                className="letter-stroke stroke-a1-left"
                x1="180"
                y1="322"
                x2="154"
                y2="398"
              />
              {/* Right diagonal leg */}
              <line
                className="letter-stroke stroke-a1-right"
                x1="180"
                y1="322"
                x2="206"
                y2="398"
              />
              {/* Minimal crossbar */}
              <line
                className="letter-stroke stroke-a1-bar"
                x1="165"
                y1="372"
                x2="195"
                y2="372"
              />
            </g>
          )}

          {/* ══════════════════════════════════════════════════
              LETTER 2: N (Constructed by TOP strip)
              Left stem (246, 322)->(246, 398),
              Diagonal (246, 322)->(294, 398),
              Right stem (294, 398)->(294, 322)
              ══════════════════════════════════════════════════ */}
          {stage >= 3 && (
            <g className={`constructed-letter letter-n${stage >= 4 ? ' locked' : ''}`}>
              {/* Left vertical stem (flows down from the top strip) */}
              <line
                className="letter-stroke stroke-n-left"
                x1="246"
                y1="322"
                x2="246"
                y2="398"
              />
              {/* Sharp diagonal stroke */}
              <line
                className="letter-stroke stroke-n-diag"
                x1="246"
                y1="322"
                x2="294"
                y2="398"
              />
              {/* Right vertical stem */}
              <line
                className="letter-stroke stroke-n-right"
                x1="294"
                y1="398"
                x2="294"
                y2="322"
              />
            </g>
          )}

          {/* ══════════════════════════════════════════════════
              LETTER 3: S (STATIONARY CENTRAL ANCHOR)
              Reveals at 0.8s alone at exact center (360, 360).
              Custom flowing geometric Swiss letter S.
              ══════════════════════════════════════════════════ */}
          {stage >= 1 && (
            <g className={`anchor-s${stage >= 4 ? ' s-locked' : ''}`}>
              {/* Central S glyph with distinctive geometric curve */}
              <path
                className="s-path-stroke"
                d="M 379 337
                   C 379 324, 363 322, 354 322
                   C 338 322, 334 330, 334 341
                   C 334 353, 344 357, 358 360
                   L 362 361
                   C 376 364, 386 370, 386 381
                   C 386 393, 374 398, 360 398
                   C 344 398, 334 390, 334 379"
                mask="url(#s-center-mask)"
              />

              {/* Minimal geometric anchor bracket indicators */}
              <g className="s-anchor-ticks">
                <line x1="324" y1="322" x2="328" y2="322" className="tick-line" />
                <line x1="324" y1="322" x2="324" y2="326" className="tick-line" />
                <line x1="396" y1="398" x2="392" y2="398" className="tick-line" />
                <line x1="396" y1="398" x2="396" y2="394" className="tick-line" />
              </g>
            </g>
          )}

          {/* ══════════════════════════════════════════════════
              LETTER 4: A (Constructed by BOTTOM strip)
              Apex at (450, 322), Left leg to (424, 398),
              Right leg to (476, 398), Crossbar at y=372
              ══════════════════════════════════════════════════ */}
          {stage >= 3 && (
            <g className={`constructed-letter letter-a2${stage >= 4 ? ' locked' : ''}`}>
              {/* Left diagonal leg */}
              <line
                className="letter-stroke stroke-a2-left"
                x1="450"
                y1="322"
                x2="424"
                y2="398"
              />
              {/* Right diagonal leg */}
              <line
                className="letter-stroke stroke-a2-right"
                x1="450"
                y1="322"
                x2="476"
                y2="398"
              />
              {/* Crossbar */}
              <line
                className="letter-stroke stroke-a2-bar"
                x1="435"
                y1="372"
                x2="465"
                y2="372"
              />
            </g>
          )}

          {/* ══════════════════════════════════════════════════
              LETTER 5: F (Constructed by RIGHT strip)
              Spine (516, 322)->(516, 398),
              Top bar (516, 324)->(562, 324),
              Mid bar (516, 360)->(552, 360)
              ══════════════════════════════════════════════════ */}
          {stage >= 3 && (
            <g className={`constructed-letter letter-f${stage >= 4 ? ' locked' : ''}`}>
              {/* Vertical spine */}
              <line
                className="letter-stroke stroke-f-spine"
                x1="516"
                y1="322"
                x2="516"
                y2="398"
              />
              {/* Top horizontal bar */}
              <line
                className="letter-stroke stroke-f-top"
                x1="516"
                y1="324"
                x2="562"
                y2="324"
              />
              {/* Middle horizontal bar */}
              <line
                className="letter-stroke stroke-f-mid"
                x1="516"
                y1="360"
                x2="552"
                y2="360"
              />
            </g>
          )}

          {/* ══════════════════════════════════════════════════
              STAGE 4: SUBTLE GEOMETRIC LINE LOCK-IN
              Horizontal accent baseline that locks the Swiss typography
              ══════════════════════════════════════════════════ */}
          {stage >= 4 && (
            <line
              className="ansaf-lock-underline"
              x1="148"
              y1="416"
              x2="572"
              y2="416"
            />
          )}
        </svg>
      </div>
    </div>
  );
};
