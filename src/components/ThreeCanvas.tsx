import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Create high-tech cyberpunk back-face texture for the 3D ID Badge
function createBacksideTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 680;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    // Dark futuristic obsidian gradient
    const grad = ctx.createLinearGradient(0, 0, 512, 680);
    grad.addColorStop(0, '#090d16');
    grad.addColorStop(0.5, '#131b2e');
    grad.addColorStop(1, '#030712');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 680);

    // Glowing cyber borders
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 8;
    ctx.strokeRect(16, 16, 480, 648);

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.strokeRect(26, 26, 460, 628);

    // Grid lines pattern
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.12)';
    ctx.lineWidth = 1;
    for (let x = 40; x < 512; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 30);
      ctx.lineTo(x, 650);
      ctx.stroke();
    }
    for (let y = 40; y < 680; y += 40) {
      ctx.beginPath();
      ctx.moveTo(30, y);
      ctx.lineTo(480, y);
      ctx.stroke();
    }

    // Monogram Circle Badge
    ctx.beginPath();
    ctx.arc(256, 200, 75, 0, Math.PI * 2);
    ctx.fillStyle = '#1e1b4b';
    ctx.fill();
    ctx.strokeStyle = '#818cf8';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Monogram Text "AHG"
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 50px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('AHG', 256, 200);

    // Identity Labels
    ctx.font = 'bold 24px sans-serif';
    ctx.fillStyle = '#f8fafc';
    ctx.fillText('ABDUL HAMID AL-GHAZALI', 256, 320);

    ctx.font = 'bold 16px monospace';
    ctx.fillStyle = '#38bdf8';
    ctx.fillText('FULL-STACK WEB DEVELOPER', 256, 360);

    ctx.font = '15px monospace';
    ctx.fillStyle = '#a5b4fc';
    ctx.fillText('TELKOM UNIVERSITY', 256, 400);

    ctx.font = '14px monospace';
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText('BEKASI, INDONESIA', 256, 435);

    // PKL Industry Tag
    ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
    ctx.fillRect(86, 475, 340, 36);
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(86, 475, 340, 36);
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 13px monospace';
    ctx.fillText('PKL: PT BOLTZ INDONESIA (3 BULAN)', 256, 498);

    // Tech Stacks Pill
    ctx.fillStyle = 'rgba(99, 102, 241, 0.2)';
    ctx.fillRect(86, 535, 340, 40);
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.4)';
    ctx.strokeRect(86, 535, 340, 40);
    ctx.fillStyle = '#c7d2fe';
    ctx.font = 'bold 13px monospace';
    ctx.fillText('REACT • LARAVEL • THREE.JS • APPSCRIPT', 256, 560);

    // Chip footer ID
    ctx.fillStyle = '#64748b';
    ctx.font = '11px monospace';
    ctx.fillText('ID: VERIFIED DEV // TELKOM-ENG-2024', 256, 615);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// 3D Photo Hologram Card Component
function HologramPhotoCard() {
  const cardGroupRef = useRef<THREE.Group>(null!);
  const outerRingRef = useRef<THREE.Group>(null!);
  const secondRingRef = useRef<THREE.Group>(null!);

  // Load User Profile Photo as Texture
  const photoTexture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const tex = loader.load('/profile.jpg');
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);

  // Backside Tech Emblem Texture
  const backTexture = useMemo(() => createBacksideTexture(), []);

  // Multi-face materials for the 3D Card
  const materials = useMemo(() => {
    const sideMaterial = new THREE.MeshStandardMaterial({
      color: '#1e293b',
      metalness: 0.9,
      roughness: 0.2,
    });

    const frontMaterial = new THREE.MeshStandardMaterial({
      map: photoTexture,
      roughness: 0.25,
      metalness: 0.15,
    });

    const backMaterial = new THREE.MeshStandardMaterial({
      map: backTexture,
      roughness: 0.3,
      metalness: 0.4,
    });

    // Box order: right, left, top, bottom, front (+z), back (-z)
    return [
      sideMaterial,
      sideMaterial,
      sideMaterial,
      sideMaterial,
      frontMaterial,
      backMaterial,
    ];
  }, [photoTexture, backTexture]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Subtle gentle floating & cursor tilt interpolation
    if (cardGroupRef.current) {
      // Dynamic mouse tilt
      const targetRotY = state.pointer.x * 0.45;
      const targetRotX = -state.pointer.y * 0.35;
      cardGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        cardGroupRef.current.rotation.y,
        targetRotY,
        0.05
      );
      cardGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        cardGroupRef.current.rotation.x,
        targetRotX,
        0.05
      );
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = -t * 0.25;
      outerRingRef.current.rotation.x = Math.sin(t * 0.4) * 0.35;
    }

    if (secondRingRef.current) {
      secondRingRef.current.rotation.y = t * 0.3;
      secondRingRef.current.rotation.z = Math.cos(t * 0.35) * 0.3;
    }
  });

  return (
    <group>
      {/* Floating 3D Portrait Card */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.8}>
        <group ref={cardGroupRef}>
          {/* Main 3D Card Body */}
          <mesh material={materials} castShadow receiveShadow>
            <boxGeometry args={[2.1, 2.75, 0.08]} />
          </mesh>

          {/* Glowing Cyber Bezel Rim */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2.14, 2.79, 0.084]} />
            <meshStandardMaterial
              color="#6366f1"
              emissive="#4338ca"
              emissiveIntensity={0.5}
              wireframe
            />
          </mesh>

          {/* Floating Top Hologram Tag */}
          <mesh position={[0, 1.5, 0.05]}>
            <planeGeometry args={[1.4, 0.22]} />
            <meshStandardMaterial
              color="#0284c7"
              emissive="#38bdf8"
              emissiveIntensity={0.6}
              transparent
              opacity={0.85}
            />
          </mesh>
        </group>
      </Float>

      {/* Orbiting Neon Energy Ring 1 (Cyan) */}
      <group ref={outerRingRef}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.35, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* Orbiting Neon Energy Ring 2 (Purple) */}
      <group ref={secondRingRef}>
        <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[2.7, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#7c3aed"
            emissiveIntensity={1}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* Floating Tech Satellites / Glowing Octahedrons */}
      <Float speed={3.5} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[1.8, 1.3, 0.6]}>
          <octahedronGeometry args={[0.18]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={0.9}
          />
        </mesh>
        <mesh position={[-1.7, -1.2, -0.6]}>
          <octahedronGeometry args={[0.16]} />
          <meshStandardMaterial
            color="#c084fc"
            emissive="#c084fc"
            emissiveIntensity={0.9}
          />
        </mesh>
        <mesh position={[0.9, -1.8, 0.8]}>
          <octahedronGeometry args={[0.2]} />
          <meshStandardMaterial
            color="#34d399"
            emissive="#10b981"
            emissiveIntensity={0.9}
          />
        </mesh>
      </Float>
    </group>
  );
}

// Particle Stars/Dust field
function ParticleDust({ count = 140 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  });

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.04;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#a5b4fc"
        sizeAttenuation
        transparent
        opacity={0.65}
      />
    </points>
  );
}

// Fallback visual
function FallbackCanvas() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="w-48 h-60 rounded-3xl overflow-hidden p-[2px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 shadow-2xl animate-pulse">
        <img
          src="/profile.jpg"
          alt="Abdul Hamid Al-Ghazali"
          className="w-full h-full object-cover rounded-[22px]"
        />
      </div>
    </div>
  );
}

export const ThreeCanvas: React.FC = () => {
  const [hasError, setHasError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || hasError) {
    return <FallbackCanvas />;
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={() => setHasError(false)}
        onError={() => setHasError(true)}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 5]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-8, -8, -4]} intensity={1.2} color="#a855f7" />
        <pointLight position={[6, -4, 6]} intensity={1.1} color="#38bdf8" />
        <pointLight position={[0, 4, 3]} intensity={0.8} color="#818cf8" />
        
        {/* Hologram Card with User Photo & Orbiting Rings */}
        <HologramPhotoCard />
        <ParticleDust count={140} />

        {/* Orbit Controls for Interactive Rotation */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.5}
          dampingFactor={0.06}
          rotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
};
