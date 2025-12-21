"use client";

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { DotEarth } from '@/components/explorer/dot_earth';
import { CountryMarkers, ICountryData } from '@/components/explorer/country_markers';
import { latLngToVector3 } from '@/components/data_markers';

// Sub-component to handle camera animation
const CameraAnimator = ({ selectedCountry }: { selectedCountry: ICountryData | null }) => {
  const { camera, controls } = useThree();
  const targetPosRef = useRef<THREE.Vector3 | null>(null);

  useEffect(() => {
    if (selectedCountry) {
      // Calculate target camera position
      // Distance should be maintained or fixed. Let's use current distance or fixed 8.
      const currentDist = camera.position.length();
      const targetVec = latLngToVector3(selectedCountry.lat, selectedCountry.lng, currentDist);
      targetPosRef.current = targetVec;

      // Stop auto-rotation temporarily if we want to focus? 
      // Or just letting controls handle it. 
      // If we move camera manually, OrbitControls might fight it if accessing same frame.
      // But typically setting position works if we update controls.
    }
  }, [selectedCountry, camera]);

  useFrame((state, delta) => {
    if (targetPosRef.current) {
      // Smoothly interpolate camera position
      camera.position.lerp(targetPosRef.current, 3 * delta);

      // Stop animating when close enough
      if (camera.position.distanceTo(targetPosRef.current) < 0.05) {
        targetPosRef.current = null;
      }

      // Ensure controls stay valid
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const orbitalControls = controls as any;
      if (orbitalControls) {
        orbitalControls.update();
      }
    }
  });

  return null;
};

interface IExplorerSceneProps {
  selectedCountry?: ICountryData | null;
}

export const ExplorerScene = ({ selectedCountry }: IExplorerSceneProps) => {
  return (
    <div className="w-full h-full min-h-screen bg-black relative overflow-hidden">
      {/* Taiwan centered approx: scaled to distance 8 */}
      <Canvas camera={{ position: [-3.78, 3.15, -6.30], fov: 45 }}>
        <color attach="background" args={['#000000']} />

        {/* Subtle ambient light */}
        <ambientLight intensity={0.5} color="#ffffff" />

        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <DotEarth />
          <CountryMarkers />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={true} // Allow zoom in explorer? Usually good for exploration.
          minDistance={2.5}
          maxDistance={10}
          autoRotate
          autoRotateSpeed={0.5}
          makeDefault // This makes it available in useThree().controls
        />

        <CameraAnimator selectedCountry={selectedCountry || null} />
      </Canvas>
    </div>
  );
};
