"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
// Use examples util for Hilbert curve similar to the official example
// Ref: https://threejs.org/examples/#webgl_lines_dashed
// eslint-disable-next-line import/no-unresolved
// Type for hilbert3D is not exported by @types/three; declare minimal typing
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { hilbert3D } from "three/examples/jsm/utils/GeometryUtils.js";

export default function ThreeDashedLines() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 200);
    camera.position.z = 150;

    // Root group to rotate all lines
    const root = new THREE.Group();
    scene.add(root);

    // Hilbert spline dashed line
    const recursion = 1;
    const points = hilbert3D(new THREE.Vector3(0, 0, 0), 40.0, recursion, 0, 1, 2, 3, 4, 5, 6, 7);
    const subdivisions = 6;
    const samples = new THREE.CatmullRomCurve3(points).getPoints(points.length * subdivisions);
    const geometrySpline = new THREE.BufferGeometry().setFromPoints(samples);
    const line = new THREE.Line(
      geometrySpline,
      new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 1, gapSize: 0.5 })
    );
    line.computeLineDistances();
    root.add(line);

    // Box dashed line segments
    const box = (w: number, h: number, d: number) => {
      const hw = w * 0.5;
      const hh = h * 0.5;
      const hd = d * 0.5;
      const position: number[] = [];
      position.push(
        -hw, -hh, -hd,  -hw,  hh, -hd,
        -hw,  hh, -hd,   hw,  hh, -hd,
         hw,  hh, -hd,   hw, -hh, -hd,
         hw, -hh, -hd,  -hw, -hh, -hd,
        -hw, -hh,  hd,  -hw,  hh,  hd,
        -hw,  hh,  hd,   hw,  hh,  hd,
         hw,  hh,  hd,   hw, -hh,  hd,
         hw, -hh,  hd,  -hw, -hh,  hd,
        -hw, -hh, -hd,  -hw, -hh,  hd,
        -hw,  hh, -hd,  -hw,  hh,  hd,
         hw,  hh, -hd,   hw,  hh,  hd,
         hw, -hh, -hd,   hw, -hh,  hd
      );
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(position, 3));
      return geometry;
    };

    const geometryBox = box(80, 80, 80);
    const lineSegments = new THREE.LineSegments(
      geometryBox,
      new THREE.LineDashedMaterial({ color: 0xffaa00, dashSize: 3, gapSize: 1 })
    );
    lineSegments.computeLineDistances();
    root.add(lineSegments);

    const onResize = () => {
      if (!containerRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    const animate = () => {
      const time = Date.now() * 0.001;
      root.traverse((obj: THREE.Object3D) => {
        const anyObj = obj as any;
        if (anyObj.isLine) {
          obj.rotation.x = 0.25 * time;
          obj.rotation.y = 0.25 * time;
        }
      });
      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
      scene.traverse((obj: THREE.Object3D) => {
        const anyObj = obj as any;
        if (anyObj.geometry) anyObj.geometry.dispose?.();
        if (anyObj.material) {
          const m = anyObj.material as THREE.Material | THREE.Material[];
          if (Array.isArray(m)) m.forEach((mm) => mm.dispose?.());
          else m.dispose?.();
        }
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-xl aspect-square">
      {/* Three.js canvas injected here */}
    </div>
  );
}


