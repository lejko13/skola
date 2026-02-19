"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function ShaderPlane() {
 const mesh = useRef(null)

  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
    },
    vertexShader: `
      uniform float time;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        vec3 pos = position;
        pos.z += sin(pos.x * 5.0 + time) * 0.1;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;

      void main() {
        float wave = sin(vUv.x * 10.0 + time) * 0.5 + 0.5;
        vec3 color = mix(vec3(0.0,0.0,0.0), vec3(1.0,0.3,0.1), wave);
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  })

  useFrame((state) => {
    if (mesh.current) {
      material.uniforms.time.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[2, 2, 32, 32]} />
      <primitive object={material} attach="material" />
    </mesh>
  )
}


export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 2] }}
        style={{ width: "100%", height: "100%" }}
      >
        <ShaderPlane />
      </Canvas>
    </div>
  )
}