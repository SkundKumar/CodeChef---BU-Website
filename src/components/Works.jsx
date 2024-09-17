import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import Scene from './Scene';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { SectionWrapper } from '../hoc';
import ishanviImage from '../assets/ishanvi2.png'; // Import your image

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

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
    <div>
      <div>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] flex justify-center">
          Past Events
        </h2>
        <div>
          {isMobile ? (
            // Render the images if the screen width is less than 600px
            <div className="flex justify-center flex-wrap gap-5 mt-10">
              <div className="relative">
                <img
                  src={ishanviImage}
                  alt="Ishanvi"
                  className="w-48 h-48 object-cover rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
                />
              </div>
              <div className="relative">
                <img
                  src={ishanviImage}
                  alt="Ishanvi"
                  className="w-48 h-48 object-cover rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
                />
              </div>
              <div className="relative">
                <img
                  src={ishanviImage}
                  alt="Ishanvi"
                  className="w-48 h-48 object-cover rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
                />
              </div>
              <div className="relative">
                <img
                  src={ishanviImage}
                  alt="Ishanvi"
                  className="w-48 h-48 object-cover rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
                />
              </div>
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
