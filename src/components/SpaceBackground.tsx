import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Sphere() {
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshBasicMaterial color="cyan" wireframe />
    </mesh>
  );
}

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Sphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}