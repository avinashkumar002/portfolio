"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const DEPTH = 140;

function Stars({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const { pos, col } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const c = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const r = 2 + Math.random() * 16;
      const a = Math.random() * Math.PI * 2;
      const z = -Math.random() * DEPTH;
      pos.set([Math.cos(a) * r, Math.sin(a) * r * 0.7, z], i * 3);
      // hue sweeps magenta -> amber -> cyan -> violet as you fly deeper
      c.setHSL((0.9 + (-z / DEPTH) * 0.75 + Math.random() * 0.06) % 1, 0.95, 0.62);
      col.set([c.r, c.g, c.b], i * 3);
    }
    return { pos, col };
  }, [count]);

  useFrame((s, dt) => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? scrollY / max : 0;
    const k = Math.min(1, dt * 3);
    s.camera.position.z += (-p * (DEPTH - 10) - s.camera.position.z) * k;
    s.camera.position.x += (s.pointer.x * 1.4 - s.camera.position.x) * k * 0.6;
    s.camera.position.y += (s.pointer.y * 0.9 - s.camera.position.y) * k * 0.6;
    if (ref.current) ref.current.rotation.z += dt * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[pos, 3]} />
        <bufferAttribute attach="attributes-color" args={[col, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.1} vertexColors transparent opacity={0.95}
        sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

export default function Galaxy() {
  const count = innerWidth < 768 ? 3500 : 11000; // lighter on phones
  return (
    <div className="canvas" aria-hidden>
      <Canvas camera={{ fov: 70, position: [0, 0, 0] }} dpr={[1, 1.5]}>
        <Stars count={count} />
      </Canvas>
    </div>
  );
}
