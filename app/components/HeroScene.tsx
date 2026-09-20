'use client';

'use client';

import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Sparkles } from '@react-three/drei';

export default function HeroScene() {
  return (
    <div className="h-[420px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 shadow-[0_0_80px_rgba(96,165,250,0.15)]">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.8]}>
        <color attach="background" args={['#050816']} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[4, 4, 3]} intensity={2.6} color="#c084fc" />
        <pointLight position={[-4, -2, 1]} intensity={18} color="#22d3ee" />
        <Sparkles count={120} scale={[7, 5, 3]} size={2.2} speed={0.45} color="#93c5fd" />

        <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.4}>
          <mesh position={[0, 0.2, 0]} rotation={[0.6, 1.2, 0.4]}>
            <icosahedronGeometry args={[1.35, 1]} />
            <meshStandardMaterial
              color="#8b5cf6"
              emissive="#4f46e5"
              emissiveIntensity={0.5}
              metalness={0.7}
              roughness={0.18}
            />
          </mesh>
        </Float>

        <Float speed={2.2} rotationIntensity={1.6} floatIntensity={1.8}>
          <mesh position={[2.1, -1.1, -1.2]} rotation={[0.8, 1.5, 0.2]}>
            <torusKnotGeometry args={[0.8, 0.18, 180, 24]} />
            <meshStandardMaterial
              color="#22d3ee"
              emissive="#0f766e"
              emissiveIntensity={0.52}
              metalness={0.8}
              roughness={0.14}
            />
          </mesh>
        </Float>

        <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.6}>
          <mesh position={[-2.1, 1.2, -0.7]} rotation={[0.65, 0.8, 1.1]} scale={0.75}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color="#f59e0b"
              emissive="#d97706"
              emissiveIntensity={0.4}
              metalness={0.7}
              roughness={0.12}
            />
          </mesh>
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} minPolarAngle={Math.PI / 2.4} maxPolarAngle={Math.PI / 1.8} />
      </Canvas>
    </div>
  );
}
