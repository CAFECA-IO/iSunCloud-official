"use client";

import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Sphere } from '@react-three/drei';
import { DataMarkers } from '@/components/data_markers';
import { INodeData } from '@/data/mock_data';

export const Earth = () => {
  const earthRef = useRef<THREE.Group>(null);
  const [data, setData] = useState<INodeData[]>([]);
  const radius = 2; // Earth radius in 3D units

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/v1/nodes');
        const json = await res.json();
        if (json.nodes) {
          // Map API nodes to DataMarkers format
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const mappedData: INodeData[] = json.nodes.map((n: any) => ({
            id: n.id,
            lat: n.position.latitude,
            lng: n.position.longitude,
            connections: n.resources.flops, // Use flops to visualize spike height
            city: n.city,
            // Fill required properties
            flops: n.resources.flops,
            storage: n.resources.storage,
            ram: n.resources.ram
          }));
          setData(mappedData);
        }
      } catch (e) {
        console.error("Failed to fetch landing page data", e);
      }
    };
    fetchData();
  }, []);

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
        <meshLambertMaterial
          color="#00ccff"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* 4. Data Points - Render only if data exists */}
      {data.length > 0 && <DataMarkers data={data} radius={radius} />}

    </group>
  );
};
