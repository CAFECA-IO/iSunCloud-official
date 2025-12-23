"use client";

import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useNodes } from '@/contexts/nodes_context';

export interface ICountryData {
  name: string;
  lat: number;
  lng: number;
  count: number;
}

const EARTH_RADIUS = 2;

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

const PulsingMarker = ({ position, count }: { position: THREE.Vector3, count: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  // Base size proportional to count
  const size = useMemo(() => Math.max(0.02, Math.min(0.08, count / 10000)), [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Inner Core Pulse
    if (meshRef.current) {
      const scale = 0.5 + Math.sin(t * 3) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }

    // Outer Glow Pulse (slower, larger)
    if (glowRef.current) {
      const scale = 1.5 + Math.sin(t * 2.5) * 0.4;
      glowRef.current.scale.set(scale, scale, scale);
      const material = glowRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.3 + Math.sin(t * 2.5) * 0.2;
    }
  });

  return (
    <group position={position}>
      {/* Core: Bright, solid */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial color="#30c0ff" />
      </mesh>

      {/* Glow: Cyan, Transparent, Larger */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.5} depthWrite={false} />
      </mesh>
    </group>
  );
}

export const CountryMarkers = () => {
  const { countries } = useNodes();


  return (
    <group>
      {countries.map((country) => {
        const pos = latLngToVector3(country.lat, country.lng, EARTH_RADIUS);
        // Reduced base height
        const markerHeight = 0.1 + (country.count / 10000);

        // Split positions to separate light from label
        const lightPos = pos.clone().normalize().multiplyScalar(EARTH_RADIUS + markerHeight);
        const labelPos = pos.clone().normalize().multiplyScalar(EARTH_RADIUS + markerHeight + 0.2); // Push label further out

        return (
          <group key={country.name}>
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  args={[new Float32Array([
                    pos.x, pos.y, pos.z,
                    lightPos.x, lightPos.y, lightPos.z
                  ]), 3]}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#00ccff" opacity={0.3} transparent />
            </line>

            <PulsingMarker position={lightPos} count={country.count} />

            <Html position={labelPos} center distanceFactor={4} zIndexRange={[100, 0]} style={{ pointerEvents: 'none' }} occlude>
              <div className="flex flex-col items-center">
                <div className="text-[8px] sm:text-[10px] font-bold text-cyan-400 bg-black/60 px-2 py-0.5 rounded border border-cyan-500/30 backdrop-blur-[2px] whitespace-nowrap">
                  {country.name}
                  <span className="block text-white font-mono text-[9px]">{country.count.toLocaleString()} Nodes</span>
                </div>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
};
