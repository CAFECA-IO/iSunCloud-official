import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { DataMarkers } from './data_markers';
import { generateMockData } from '@/data/mock_data';

export const Earth = () => {
  const earthRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  const data = useMemo(() => generateMockData(200), []);
  const radius = 2; // Earth radius in 3D units

  return (
    <group ref={earthRef} dispose={null}>
      {/* 1. Main Globe Sphere (Black interior) */}
      <Sphere args={[radius, 64, 64]}>
        <meshBasicMaterial color="#000000" />
      </Sphere>

      {/* 2. Wireframe / Grid Layer (Digital Look) */}
      <Sphere args={[radius + 0.01, 32, 32]}>
        <meshBasicMaterial
          color="#0044aa"
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>

      {/* 3. Atmosphere Glow (Gradient Shader or simple transparent sphere) */}
      <Sphere args={[radius + 0.4, 64, 64]}>
        {/* Simple rim-light simulation using custom shader or Fresnel would be better, 
            but using standard materials for MVP */}
        <meshLambertMaterial
          color="#00ccff"
          transparent
          opacity={0.1}
          side={THREE.BackSide} /* Render on inside/back for halo effect? Or outside with additive blending */
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* 4. Data Points */}
      <DataMarkers data={data} radius={radius} />

      {/* 5. Ambient Rotation (Slowly spins the data points layer specifically if needed, 
          or the whole earth group) */}
    </group>
  );
};
