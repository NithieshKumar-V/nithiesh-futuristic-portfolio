import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCw, Pause, Play, Layers } from 'lucide-react';

interface ThreeHeroCoreProps {
  className?: string;
}

export const ThreeHeroCore: React.FC<ThreeHeroCoreProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGlSupported, setWebGlSupported] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activePreset, setActivePreset] = useState<'neural' | 'quantum' | 'lattice'>('neural');
  const [showControls, setShowControls] = useState<boolean>(false);

  // References for animation state
  const isPlayingRef = useRef<boolean>(true);
  const activePresetRef = useRef<'neural' | 'quantum' | 'lattice'>('neural');
  const mousePos = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    activePresetRef.current = activePreset;
  }, [activePreset]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Probe software GL & WebGL support
    let isSoftwareGl = false;
    let glProbe: WebGLRenderingContext | WebGL2RenderingContext | null = null;
    try {
      const probeCanvas = document.createElement('canvas');
      glProbe = probeCanvas.getContext('webgl2') || probeCanvas.getContext('webgl');
      if (!glProbe) {
        setWebGlSupported(false);
        return;
      }
      const ext = glProbe.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : glProbe.RENDERER;
      const gpu = String(glProbe.getParameter(param));
      glProbe.getExtension('WEBGL_lose_context')?.loseContext();
      isSoftwareGl = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    } catch {
      setWebGlSupported(false);
      return;
    }

    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.05);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebGlSupported(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Master Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Core Geometry (Octahedron + Wireframe Icosahedron)
    const coreGeo = new THREE.OctahedronGeometry(1.1, 2);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x06b6d4,
      emissive: 0x083344,
      emissiveIntensity: 0.4,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: false,
      clearcoat: 0.6,
      clearcoatRoughness: 0.1,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // Inner wireframe lattice
    const wireGeo = new THREE.IcosahedronGeometry(1.28, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // 2. Dual Orbital Rings
    const ring1Geo = new THREE.TorusGeometry(1.9, 0.016, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0284c7,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2,
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1Mesh.rotation.x = Math.PI / 3;
    ring1Mesh.rotation.y = Math.PI / 6;
    coreGroup.add(ring1Mesh);

    const ring2Geo = new THREE.TorusGeometry(2.3, 0.012, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x7e22ce,
      emissiveIntensity: 0.6,
      metalness: 0.8,
      roughness: 0.2,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.x = -Math.PI / 4;
    ring2Mesh.rotation.y = -Math.PI / 4;
    coreGroup.add(ring2Mesh);

    // 3. Orbiting Data Satellites / Nodes
    const satelliteNodes: THREE.Mesh[] = [];
    const satGeo = new THREE.DodecahedronGeometry(0.12, 0);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.1,
    });

    const satCount = isSoftwareGl ? 6 : 10;
    for (let i = 0; i < satCount; i++) {
      const sat = new THREE.Mesh(satGeo, satMat);
      coreGroup.add(sat);
      satelliteNodes.push(sat);
    }

    // 4. Luminous Particle Swarm
    const particleCount = isSoftwareGl ? 150 : 350;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x22d3ee);
    const purpleColor = new THREE.Color(0xa855f7);

    for (let i = 0; i < particleCount; i++) {
      const r = 1.6 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const mixedColor = Math.random() > 0.4 ? cyanColor : purpleColor;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particleSystem);

    // 5. Studio Lighting Rig
    const ambientLight = new THREE.HemisphereLight(0x38bdf8, 0x030712, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x06b6d4, 2.4);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xa855f7, 2.0);
    fillLight.position.set(-4, -3, -3);
    scene.add(fillLight);

    const coreLight = new THREE.PointLight(0x06b6d4, 1.5, 5);
    coreMesh.add(coreLight);

    // Mouse movement listener
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mousePos.current.targetX = (clientX / rect.width) * 2 - 1;
      mousePos.current.targetY = -(clientY / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handlePointerMove);

    // Resize listener
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      if (newW && newH) {
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      }
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId = 0;
    let prevTime = performance.now();
    let startTime = performance.now();

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      const sync = gl.fenceSync ? gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0) : null;
      gl.flush();
      const poll = () => {
        if (!sync) {
          animationFrameId = window.setTimeout(cb, 80);
          return;
        }
        const state = gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          animationFrameId = window.setTimeout(poll, 6);
        } else {
          gl.deleteSync(sync);
          animationFrameId = window.setTimeout(cb, 80);
        }
      };
      animationFrameId = window.setTimeout(poll, 6);
    }

    const tick = () => {
      const now = performance.now();
      const delta = Math.min((now - prevTime) / 1000, 0.1);
      const elapsed = (now - startTime) / 1000;
      prevTime = now;

      // Exponential damping towards target mouse coordinates
      mousePos.current.x = THREE.MathUtils.damp(mousePos.current.x, mousePos.current.targetX, 4, delta);
      mousePos.current.y = THREE.MathUtils.damp(mousePos.current.y, mousePos.current.targetY, 4, delta);

      if (isPlayingRef.current) {
        // Preset specific adaptations
        const currentPreset = activePresetRef.current;
        let speedMult = 1.0;
        if (currentPreset === 'quantum') {
          speedMult = 1.6;
        } else if (currentPreset === 'lattice') {
          speedMult = 0.6;
        }

        // Rotations
        coreMesh.rotation.y += 0.4 * delta * speedMult;
        coreMesh.rotation.x += 0.25 * delta * speedMult;
        wireMesh.rotation.y -= 0.3 * delta * speedMult;
        wireMesh.rotation.z += 0.2 * delta * speedMult;

        ring1Mesh.rotation.z += 0.45 * delta * speedMult;
        ring2Mesh.rotation.z -= 0.35 * delta * speedMult;

        particleSystem.rotation.y += 0.08 * delta * speedMult;

        // Animate satellites
        satelliteNodes.forEach((sat, idx) => {
          const orbitRadius = 1.85 + (idx % 3) * 0.25;
          const orbitSpeed = (0.5 + (idx % 4) * 0.2) * speedMult;
          const angle = elapsed * orbitSpeed + (idx * (Math.PI * 2)) / satCount;
          sat.position.x = Math.cos(angle) * orbitRadius;
          sat.position.y = Math.sin(angle * 1.5) * 0.8;
          sat.position.z = Math.sin(angle) * orbitRadius;
          sat.rotation.x += 1.2 * delta;
          sat.rotation.y += 1.4 * delta;
        });

        // Pulsing core light
        coreLight.intensity = 1.4 + Math.sin(elapsed * 2.5) * 0.4;
      }

      // Mouse responsive tilt
      coreGroup.rotation.y = mousePos.current.x * 0.35;
      coreGroup.rotation.x = -mousePos.current.y * 0.25;

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    if (isSoftwareGl) {
      afterDraw(tick);
    } else {
      animationFrameId = requestAnimationFrame(tick);
    }

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      satGeo.dispose();
      satMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* 3D WebGL Canvas Container */}
      {webGlSupported ? (
        <div
          ref={mountRef}
          className="w-full h-full min-h-[360px] md:min-h-[460px] lg:min-h-[520px] cursor-grab active:cursor-grabbing flex items-center justify-center"
          aria-label="Interactive 3D Technological Core visual representing software architecture and intelligence"
          role="img"
        />
      ) : (
        /* Seamless CSS/SVG Fallback */
        <div className="w-full h-full min-h-[360px] flex items-center justify-center p-8">
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: '24s' }} />
            <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-spin" style={{ animationDuration: '16s', animationDirection: 'reverse' }} />
            <div className="absolute inset-8 rounded-full border border-cyan-400/40 animate-pulse" />
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-950 via-slate-900 to-purple-950 border border-cyan-400/50 rotate-45 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <span className="text-cyan-300 font-mono text-xs tracking-wider -rotate-45">CORE</span>
            </div>
          </div>
        </div>
      )}

      {/* Subtle Bottom Interactive Dock (Collapsible as per Three.js UX directives) */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        {showControls && (
          <div className="mb-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl shadow-xl flex items-center gap-1.5 transition-all">
            {/* Mode selector buttons */}
            <button
              onClick={() => setActivePreset('neural')}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activePreset === 'neural' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Neural Core
            </button>
            <button
              onClick={() => setActivePreset('quantum')}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activePreset === 'quantum' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Quantum Flow
            </button>
            <button
              onClick={() => setActivePreset('lattice')}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activePreset === 'lattice' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Lattice
            </button>

            <div className="w-px h-4 bg-slate-800 mx-1" />

            {/* Play / Pause */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1 text-slate-400 hover:text-cyan-300 transition-colors"
              title={isPlaying ? 'Pause Rotation' : 'Resume Rotation'}
              aria-label={isPlaying ? 'Pause 3D scene rotation' : 'Resume 3D scene rotation'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}

        {/* Collapsible toggle badge */}
        <button
          onClick={() => setShowControls(!showControls)}
          className="px-2.5 py-1 text-[11px] font-mono text-slate-400 hover:text-cyan-300 bg-slate-950/80 border border-slate-800/80 rounded-full flex items-center gap-1.5 transition-colors"
          aria-expanded={showControls}
          aria-label="Toggle 3D interactive core controls"
        >
          <Layers className="w-3 h-3 text-cyan-400" />
          <span>{showControls ? 'Hide 3D Controls' : '3D Core Controls'}</span>
        </button>
      </div>
    </div>
  );
};
