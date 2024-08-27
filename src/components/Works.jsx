import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'

const Works = () => {
  return (
    <div className='w-full h-screen'>
      <Canvas>
        <OrbitControls enableZoom={false}/>
        <mesh>
          <cylinderGeometry args={[2, 2, 2, 30, 30, true]}/>
          <meshBasicMaterial side={THREE.DoubleSide}/>
        </mesh>
      </Canvas>
    </div>
  )
}

export default Works