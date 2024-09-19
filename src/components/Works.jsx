import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import Scene from './Scene';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion'; // Import Framer Motion
import { events } from '../constants';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// Sample event data


const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    // Set the initial value of the isMobile state variable
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

  const imageStyle = {
    width: '30rem',
    height: '30rem',
    objectFit: 'cover',
    borderRadius: '0.5rem',
    boxShadow: '0 0 15px rgba(102, 145, 180, 0.8)', // Glow effect
    transition: 'box-shadow 0.5s ease-in-out',
  };

  return (
    <div>
      <div>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] flex justify-center">
          Past Events
        </h2>
        <div>
          {isMobile ? (
            // Render the images if the screen width is less than 600px
           
            <div className="flex justify-center  flex-wrap gap-5 mt-10">
              {events.map((event, index) => (
                
                <div key={index} className="relative">
                   <ParallaxProvider>
                   <Parallax speed={10}>
                  <motion.img
                    src={event.icon}
                    alt={event.desc}
                    style={imageStyle}
                    whileHover={{ scale: 2.0, boxShadow: '0 0 80px rgba(164,119,253,0.5)' }}
                    initial={{ scale: 1, boxShadow: '0 0 80px rgba(164,119,253,0.2)' }}
                    transition={{ duration: 0.3 }}
                  />
                  
                   
                  <h3 className='flex justify-center font-mono font-bold mt-2'>{event.desc}</h3>
                  </Parallax>
                  </ParallaxProvider>
                </div>
                
              ))}
            </div>
            
          ) : (
            // Render the 3D scene if the screen width is larger than 600px
            <div className="w-full h-screen">
              <Canvas flat camera={{ foc: 35 }}>
                <OrbitControls enableZoom={false} />
                <Scene />
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
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, 'work'); // Works;
