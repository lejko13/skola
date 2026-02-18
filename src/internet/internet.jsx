"use client";

import { useState } from "react";
import { MeshGradient, DotOrbit } from "@paper-design/shaders-react";

export default function DemoOne() {
  const [intensity, setIntensity] = useState(1.5);
  const [speed, setSpeed] = useState(1.0);
  const [activeEffect, setActiveEffect] = useState("mesh");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("pnpm i 21st");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative overflow-hidden isolate">
    <div className="w-full h-screen bg-black relative overflow-hidden isolate -z-40">
      {activeEffect === "mesh" && (
        <MeshGradient
          className="w-full h-full  inset-0  "
          colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
          speed={speed}
          backgroundColor="#000000"
        />
      )}

      {activeEffect === "dots" && (
        <DotOrbit
          className="w-full h-full  inset-0"
          dotColor="#333333"
          orbitColor="#1a1a1a"
          speed={speed}
          intensity={intensity}
        />
      )}

      {/* UI overlay / lighting */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center font-mono text-xs text-white/40">
          <div>...21st-cli...</div>
        </div>
      </div> */}
    </div>
</div>
  );
}
