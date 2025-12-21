"use client";

import { useMemo, useRef, useEffect } from 'react';
import * as THREE from 'three';
import worldPoints from '@/data/world_points.json';

interface IPoint {
  lat: number;
  lng: number;
}

const DOT_SIZE = 0.015;
const EARTH_RADIUS = 2; // Matches standard earth size (relative to camera)

// Helper to convert lat/lng to 3D position
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

export const DotEarth = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // Create dummy object for positioning instances
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    if (!meshRef.current) return;

    const points = worldPoints as IPoint[];

    points.forEach((point, i) => {
      const pos = latLngToVector3(point.lat, point.lng, EARTH_RADIUS);
      dummy.position.copy(pos);
      // Look at center to orient the dot/plane correctly (if used)
      // For spheres, rotation doesn't matter much, but let's align it
      dummy.lookAt(0, 0, 0);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [dummy]);

  return (
    <group>
      {/* Black sphere to block stars behind the earth */}
      <mesh>
        <sphereGeometry args={[EARTH_RADIUS - 0.05, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* The dots */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, worldPoints.length]}>
        {/* Simple square/circle geometry for dots. Box is cheap. */}
        <boxGeometry args={[DOT_SIZE, DOT_SIZE, DOT_SIZE]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
      </instancedMesh>
    </group>
  );
};
