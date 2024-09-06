import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
import Scene from './Scene'  
import {motion as Motion} from 'framer-motion' 
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { SectionWrapper } from '../hoc'



const Works = () => {
  return (
  
    <div>
      <div>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] flex justify-center" >Past Events</h2>
      <div>
    <div className='w-full h-screen'>
      <Canvas flat camera={{foc: 35}}>
        <OrbitControls enableZoom={false}/>
        <Scene/>
        <EffectComposer>
<Bloom
        mipmapBlur
        intensity={0.0} // The bloom intensity.
        luminanceThreshold={0.0} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0.0} // smoothness of the luminance threshold. Range is [0, 1]
        
      />
      
</EffectComposer>
       
      </Canvas>
      
    </div>
    </div>
    </div>
    </div>
  )
}

export default  SectionWrapper(Works, "work")// Works ;