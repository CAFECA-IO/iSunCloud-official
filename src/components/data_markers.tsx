import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { NodeData } from "@/data/mock_data";

// Helper to convert lat/lng to 3D position
const latLngToVector3 = (lat: number, lng: number, radius: number): THREE.Vector3 => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = (radius * Math.sin(phi) * Math.sin(theta));
  const y = (radius * Math.cos(phi));

  return new THREE.Vector3(x, y, z);
};

interface DataMarkersProps {
  data: NodeData[];
  radius: number;
}

export const DataMarkers = ({ data, radius }: DataMarkersProps) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const tempObject = new THREE.Object3D();
  const color = new THREE.Color();

  // Color palette for data points (Cyan/Blue/Purple)
  const colors = useMemo(() => [
    "#00ffff", // Cyan
    "#0088ff", // Blue
    "#bd00ff", // Purple
  ], []);

  useEffect(() => {
    if (!meshRef.current) return;

    data.forEach((point, i) => {
      // Calculate position
      const vector = latLngToVector3(point.lat, point.lng, radius);

      // Orient the marker to face away from the center
      tempObject.position.copy(vector);
      tempObject.lookAt(new THREE.Vector3(0, 0, 0));

      // Scale based on "connections" or "flops". 
      // Base height 0.05 to 0.3 depending on value
      const scaleValue = Math.min(point.connections / 10, 3);
      tempObject.scale.set(1, 1, scaleValue * 5); // Scale Z is length since we rotate it

      tempObject.updateMatrix();
      meshRef.current?.setMatrixAt(i, tempObject.matrix);

      // Set random color from palette
      color.set(colors[Math.floor(Math.random() * colors.length)]);
      meshRef.current?.setColorAt(i, color);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  }, [data, radius, colors]);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, data.length]}>
      {/* Small cylinder as a "spike" */}
      {/* radiusTop, radiusBottom, height, radialSegments */}
      <cylinderGeometry args={[0.02, 0.02, 1, 6]} >
        <instancedBufferAttribute attach="attributes-color" args={[new Float32Array(data.length * 3), 3]} />
      </cylinderGeometry>
      <meshBasicMaterial
        toneMapped={false}
        color="#ffffff"
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </instancedMesh>
  );
};
