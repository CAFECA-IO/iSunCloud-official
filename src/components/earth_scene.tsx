"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Earth } from '@/components/earth';
import { Suspense } from 'react';

export const EarthScene = () => {
  return (
    <div className="w-full h-screen bg-black relative">
      {/* UI Overlay can go here or in parent, but this component is just the 3D Scene */}
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <color attach="background" args={['#000000']} />

        <ambientLight intensity={1.5} color="#444444" />
        <pointLight position={[10, 10, 10]} intensity={2.0} color="#00ffff" />
        <pointLight position={[-10, -10, -5]} intensity={1.0} color="#ff00ff" />

        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Earth />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false} /* Disable zoom to keep UI alignment mostly static */
          autoRotate
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};
