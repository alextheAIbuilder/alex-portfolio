"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

function FloatingTorus() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.15;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={[-3, 1, -2]}>
        <torusGeometry args={[1, 0.4, 16, 32]} />
        <MeshDistortMaterial color="#8b5cf6" wireframe distort={0.2} speed={2} transparent opacity={0.7} />
      </mesh>
    </Float>
  );
}

function FloatingIcosahedron() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
      ref.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh ref={ref} position={[3, -1, -1]}>
        <icosahedronGeometry args={[1.2, 0]} />
        <MeshDistortMaterial color="#06b6d4" wireframe distort={0.15} speed={1.5} transparent opacity={0.6} />
      </mesh>
    </Float>
  );
}

function FloatingOctahedron() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
      ref.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });
  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={ref} position={[0, 2.5, -3]}>
        <octahedronGeometry args={[0.8, 0]} />
        <MeshDistortMaterial color="#f59e0b" wireframe distort={0.25} speed={2.5} transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

function FloatingSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.12;
      ref.current.rotation.y = state.clock.elapsedTime * 0.18;
    }
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={ref} position={[-2, -2, -2]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <MeshDistortMaterial color="#8b5cf6" wireframe distort={0.3} speed={3} transparent opacity={0.4} />
      </mesh>
    </Float>
  );
}

function MouseParallax() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      const x = state.pointer.x * 0.3;
      const y = state.pointer.y * 0.3;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.1, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.1, 0.05);
    }
  });
  return (
    <group ref={groupRef}>
      <FloatingTorus />
      <FloatingIcosahedron />
      <FloatingOctahedron />
      <FloatingSphere />
    </group>
  );
}

function Particles() {
  const count = 200;
  const ref = useRef<THREE.Points>(null);
  const geomRef = useRef<THREE.BufferGeometry>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useEffect(() => {
    if (geomRef.current) {
      geomRef.current.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    }
  }, [positions]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry ref={geomRef} />
      <pointsMaterial size={0.02} color="#8b5cf6" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <MouseParallax />
        <Particles />
        <Stars radius={50} depth={50} count={1000} factor={3} saturation={0} fade speed={0.5} />
      </Canvas>
    </div>
  );
}
