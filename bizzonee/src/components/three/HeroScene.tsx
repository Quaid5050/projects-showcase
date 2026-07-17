"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const MINT = "#C8F31D";
const MINT_B = "#DBFF5A";
const PURPLE = "#8C00FF";
const PURPLE_L = "#B47BFF";

function Particles({ count = 850 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.6 + Math.random() * 7;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(p) * Math.cos(t);
      arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(p);
    }
    return arr;
  }, [count]);
  useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * 0.025; });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.034} color="#b9c4ff" transparent opacity={0.75} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Sphere() {
  const wire = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (wire.current) wire.current.rotation.y = s.clock.elapsedTime * 0.12;
    if (core.current) { core.current.rotation.y = s.clock.elapsedTime * 0.5; core.current.rotation.x = s.clock.elapsedTime * 0.3; }
  });
  return (
    <group>
      {/* halo */}
      <mesh>
        <sphereGeometry args={[2.05, 32, 32]} />
        <meshBasicMaterial color={PURPLE} transparent opacity={0.06} />
      </mesh>
      {/* glass shell */}
      <mesh>
        <sphereGeometry args={[1.7, 64, 64]} />
        <meshStandardMaterial color={PURPLE} transparent opacity={0.17} roughness={0.04} metalness={0.35} />
      </mesh>
      {/* wireframe grid */}
      <mesh ref={wire}>
        <sphereGeometry args={[1.74, 26, 26]} />
        <meshBasicMaterial color={PURPLE_L} wireframe transparent opacity={0.2} />
      </mesh>
      {/* glowing core */}
      <mesh ref={core}>
        <icosahedronGeometry args={[0.66, 1]} />
        <meshBasicMaterial color={MINT} transparent opacity={0.6} wireframe />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.44, 32, 32]} />
        <meshBasicMaterial color={MINT_B} transparent opacity={0.9} />
      </mesh>
      <pointLight position={[0, 0, 0]} intensity={9} color={MINT} distance={6} />
    </group>
  );
}

function Orbits() {
  const g = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (g.current) g.current.rotation.y += d * 0.16;
    if (inner.current) inner.current.rotation.y -= d * 0.26;
  });
  const rings: [number, [number, number, number], string][] = [
    [2.5, [0.5, 0, 0.2], PURPLE],
    [2.9, [-0.4, 0.3, 0.1], MINT],
    [3.3, [0.2, -0.4, -0.3], PURPLE_L],
    [3.7, [0.7, 0.2, 0.4], MINT],
  ];
  const nodes = Array.from({ length: 8 }).map((_, i) => {
    const a = (i / 8) * Math.PI * 2;
    const r = 2.5 + (i % 4) * 0.4;
    return { x: Math.cos(a) * r, z: Math.sin(a) * r, y: (i % 2 ? 0.45 : -0.45), c: i % 2 ? MINT : PURPLE_L, s: 0.1 + (i % 3) * 0.03 };
  });
  return (
    <group ref={g}>
      {rings.map(([r, rot, c], i) => (
        <mesh key={i} rotation={rot}>
          <torusGeometry args={[r, 0.009, 12, 140]} />
          <meshBasicMaterial color={c} transparent opacity={0.5} />
        </mesh>
      ))}
      <group ref={inner}>
        {nodes.map((n, i) => (
          <mesh key={i} position={[n.x, n.y, n.z]}>
            <icosahedronGeometry args={[n.s, 0]} />
            <meshBasicMaterial color={n.c} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function Platform() {
  return (
    <group position={[0, -2.05, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}><torusGeometry args={[1.5, 0.04, 16, 100]} /><meshBasicMaterial color={MINT} transparent opacity={0.6} /></mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}><torusGeometry args={[1.9, 0.02, 16, 100]} /><meshBasicMaterial color={PURPLE} transparent opacity={0.45} /></mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}><circleGeometry args={[1.45, 48]} /><meshBasicMaterial color={PURPLE} transparent opacity={0.12} /></mesh>
    </group>
  );
}

function Rig() {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y += (pointer.x * 0.35 - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (-pointer.y * 0.22 - group.current.rotation.x) * 0.05;
  });
  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.6}>
        <Sphere />
        <Orbits />
      </Float>
      <Platform />
      <Particles />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0.5, 8], fov: 38 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }} style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={45} color={PURPLE_L} />
      <pointLight position={[-5, -2, 3]} intensity={32} color={MINT} />
      <Rig />
    </Canvas>
  );
}