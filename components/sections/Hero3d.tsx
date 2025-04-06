// components/Hero3D.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei'

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 5]} intensity={1} />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1.5, 64, 64]} scale={4}>
            <MeshDistortMaterial
              color="#fca311"
              distort={0.4}
              speed={2}
              roughness={0.3}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  )
}
