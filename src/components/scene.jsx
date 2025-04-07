'use client'; // Required for Next.js client components

import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

function Model() {
  const gltf = useLoader(GLTFLoader, '/models/inbox.glb');
  return <primitive object={gltf.scene} scale={0.8} />;
}

export default function Scene() {
  return (
    <Suspense fallback={null}>
      <Model />
    </Suspense>
  );
}
