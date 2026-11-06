import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Deterministic seeded random for reproducible dispersal positions
const seededRandom = (seed) => {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453123;
  return x - Math.floor(x);
};

/**
 * Clean 3D Dot Sphere Component with Multi-Theme Support:
 * - Minimalism: Deep charcoal/graphite dots on warm off-white canvas
 * - Surrealism: Vibrant acid lime dots with electric energy
 * - Glassmorphism: Luminous cyan dots with futuristic depth
 * - Discrete dots arranged in elegant rings on a 3D sphere
 * - Realistic 3D depth with parallax between front and back dots
 * - Smooth scroll-synchronized dispersal outwards into floating dots
 */
const ParticlePoints = ({ scrollProgress, isMobile, currentTheme }) => {
  const pointsRef = useRef(null);
  const materialRef = useRef(null);
  const geometryRef = useRef(null);
  const { viewport } = useThree();

  const [spherePositions, targetPositions, sizes, randoms] = useMemo(() => {
    // 10 latitude rings forming a larger, well-proportioned geometric orb that generously surrounds the card on all sides
    const rings = [
      { phi: 1.25, count: 10 },
      { phi: 0.98, count: 16 },
      { phi: 0.70, count: 22 },
      { phi: 0.42, count: 28 },
      { phi: 0.14, count: 32 },
      { phi: -0.14, count: 32 },
      { phi: -0.42, count: 28 },
      { phi: -0.70, count: 22 },
      { phi: -0.98, count: 16 },
      { phi: -1.25, count: 10 },
    ];

    const totalDots = rings.reduce((acc, r) => acc + r.count, 0); // 216 clean discrete dots
    const sPos = new Float32Array(totalDots * 3);
    const tPos = new Float32Array(totalDots * 3);
    const szs = new Float32Array(totalDots);
    const rnds = new Float32Array(totalDots);

    // Initial sphere radius generously covers the card on top, bottom, left, and right
    const baseRadius = isMobile ? 2.15 : 2.75;
    const aspect = viewport.aspect || 1.6;
    const xMax = isMobile ? 3.8 : 7.2 * Math.max(1, aspect * 0.7);
    const yMax = isMobile ? 5.8 : 5.2;

    let idx = 0;
    rings.forEach((ring, ringIdx) => {
      const cosPhi = Math.cos(ring.phi);
      const sinPhi = Math.sin(ring.phi);
      const step = (Math.PI * 2) / ring.count;
      const ringOffset = ringIdx * 0.45; // stagger dots across rings

      for (let j = 0; j < ring.count; j++) {
        const theta = step * j + ringOffset;

        // 1. Position on clean spherical shell
        const sx = baseRadius * cosPhi * Math.cos(theta);
        const sy = baseRadius * sinPhi;
        const sz = baseRadius * cosPhi * Math.sin(theta);

        sPos[idx * 3] = sx;
        sPos[idx * 3 + 1] = sy;
        sPos[idx * 3 + 2] = sz;

        // 2. Dispersal target: travel outwards along the normal vector
        const len = Math.sqrt(sx * sx + sy * sy + sz * sz) || 1;
        const dx = sx / len;
        const dy = sy / len;
        const dz = sz / len;

        const r1 = seededRandom(idx * 4 + 1);
        const r2 = seededRandom(idx * 4 + 2);
        const r3 = seededRandom(idx * 4 + 3);

        const distMultiplier = 1.3 + r1 * 1.5;
        tPos[idx * 3] = dx * (xMax * 0.7) * distMultiplier + (r2 - 0.5) * 1.8;
        tPos[idx * 3 + 1] = dy * (yMax * 0.7) * distMultiplier + (r3 - 0.5) * 1.6;
        tPos[idx * 3 + 2] = dz * 1.8 + (r1 - 0.5) * 2.5;

        // Clean uniform dot size (approx 3.2px - 4.2px)
        szs[idx] = 1.0 + r2 * 0.35;
        rnds[idx] = r1;
        idx++;
      }
    });

    return [sPos, tPos, szs, rnds];
  }, [isMobile, viewport.aspect]);

  // Initial color based on currentTheme
  const initialThemeColor = useMemo(() => {
    if (currentTheme === 'surrealism') return new THREE.Color('#D4FF5C');
    if (currentTheme === 'glassmorphism') return new THREE.Color('#42D9FF');
    return new THREE.Color('#1f242e'); // Minimalism: deep graphite charcoal
  }, [currentTheme]);

  const uniforms = useMemo(() => ({
    uProgress: { value: 0 },
    uTime: { value: 0 },
    uColor: { value: initialThemeColor.clone() },
  }), []);

  // Cleanup Three.js GPU resources on unmount
  useEffect(() => {
    const geo = geometryRef.current;
    const mat = materialRef.current;
    return () => {
      if (geo) geo.dispose();
      if (mat) mat.dispose();
    };
  }, []);

  // 100% GPU-accelerated vertex shader
  const vertexShader = useMemo(() => `
    uniform float uProgress;
    uniform float uTime;
    attribute vec3 aTargetPosition;
    attribute float aSize;
    attribute float aRandom;
    varying float vAlpha;

    void main() {
      // 1. Initial State: Clean Y-axis rotation of the dot orb
      float globeSpeed = 0.28;
      float angle = uTime * globeSpeed;
      float cosA = cos(angle);
      float sinA = sin(angle);

      vec3 rotSphere = vec3(
        position.x * cosA + position.z * sinA,
        position.y,
        -position.x * sinA + position.z * cosA
      );

      // Subtle natural axial tilt (~12 degrees)
      float tilt = 0.21;
      rotSphere = vec3(
        rotSphere.x,
        rotSphere.y * cos(tilt) - rotSphere.z * sin(tilt),
        rotSphere.y * sin(tilt) + rotSphere.z * cos(tilt)
      );

      // 2. Dispersed Universe: Subtle, slow floating drift
      vec3 drift = vec3(
        sin(uTime * 0.25 + aRandom * 6.28) * 0.18,
        cos(uTime * 0.2 + aRandom * 6.28) * 0.18,
        sin(uTime * 0.22 + aRandom * 3.14) * 0.14
      );
      vec3 dispersedTarget = aTargetPosition + drift;

      // 3. Smooth Dispersal Interpolation
      float p = smoothstep(0.0, 1.0, clamp((uProgress - aRandom * 0.12) / 0.88, 0.0, 1.0));

      // Gentle volumetric outward impulse
      vec3 burstDirection = normalize(rotSphere + vec3(0.0001));
      float burstStrength = sin(p * 3.14159265) * 1.1;

      vec3 finalPos = mix(rotSphere, dispersedTarget, p) + burstDirection * burstStrength;

      vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
      gl_Position = projectionMatrix * mvPosition;

      // 4. Clean, crisp dot point size (approx 3.8px - 4.8px)
      gl_PointSize = (aSize * 28.0) / -mvPosition.z;

      // 5. Realistic 3D depth opacity: front dots are solid, back dots are subtler
      float depthFactor = clamp((finalPos.z + 2.75) / 5.5, 0.0, 1.0);
      float sphereAlpha = mix(0.42, 0.98, depthFactor);
      float dispersedAlpha = mix(0.55, 0.85, 0.5 + 0.5 * sin(uTime * 1.5 + aRandom * 6.28));

      vAlpha = mix(sphereAlpha, dispersedAlpha, p);
    }
  `, []);

  // Theme-adaptive circular dot fragment shader
  const fragmentShader = useMemo(() => `
    uniform vec3 uColor;
    varying float vAlpha;

    void main() {
      vec2 coord = gl_PointCoord - vec2(0.5);
      float dist = length(coord);
      if (dist > 0.5) discard;

      // Clean anti-aliased circle edge - zero fuzzy bloom
      float edge = smoothstep(0.5, 0.36, dist);
      gl_FragColor = vec4(uColor, edge * vAlpha);
    }
  `, []);

  // Target theme color vector
  const targetColor = useMemo(() => {
    if (currentTheme === 'surrealism') return new THREE.Color('#D4FF5C');
    if (currentTheme === 'glassmorphism') return new THREE.Color('#42D9FF');
    return new THREE.Color('#1f242e'); // Minimalism: charcoal
  }, [currentTheme]);

  useFrame((state, delta) => {
    if (!materialRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      materialRef.current.uniforms.uTime.value += delta;
    }

    const rawProgress = scrollProgress?.get ? scrollProgress.get() : 0;
    const normalizedProgress = Math.min(1.0, Math.max(0.0, rawProgress / 0.58));
    materialRef.current.uniforms.uProgress.value = normalizedProgress;

    // Smoothly interpolate dot color on theme change
    if (materialRef.current.uniforms.uColor) {
      materialRef.current.uniforms.uColor.value.lerp(targetColor, 0.1);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute attach="attributes-position" args={[spherePositions, 3]} />
        <bufferAttribute attach="attributes-aTargetPosition" args={[targetPositions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aRandom" args={[randoms, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
};

export const AboutParticleGlobe = ({ scrollProgress, isMobile, currentTheme }) => {
  return (
    <div
      className="about-particle-canvas-container"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: false,
        }}
        dpr={[1, 2]}
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <ParticlePoints scrollProgress={scrollProgress} isMobile={isMobile} currentTheme={currentTheme} />
      </Canvas>
    </div>
  );
};

export default AboutParticleGlobe;
