import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { test } from '../assets';

const Scene = () => {
  const [isMobile, setIsMobile] = useState(false);
  let tex = useTexture(test);
  let cyl = useRef(null);

  useFrame(() => {
    cyl.current.rotation.y += 0.002;
  });

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <group rotation={[0, -0.5, 0.2]}>
      <mesh ref={cyl} scale={isMobile ? 0.5 : 1}>
        <cylinderGeometry args={[isMobile ? 3 : 2.9, isMobile ? 3 : 2.9, isMobile ? 3 : 2.9, 60, 60, true]} />
        <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Scene;
