import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'
import { Group } from 'three/examples/jsm/libs/tween.module.js'
import Loader from './Loader';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Scene = () => {
    let tex = useTexture('./src/assets/test2.png')
    let cyl = useRef(null)
    useFrame((state, delta) => {
        cyl.current.rotation.y += 0.002
    })
  return (
    <group rotation={[0,-0.5,0.2]}>
    <mesh ref={cyl} >
          <cylinderGeometry args={[2.9, 2.9,2.9, 60, 60, true]}/>
          <meshBasicMaterial  transparent  side={THREE.DoubleSide}/>
        </mesh>
        </group>
  )
}

export default Scene