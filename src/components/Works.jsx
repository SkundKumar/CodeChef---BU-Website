import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect } from 'react';
import Scene from './Scene';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { SectionWrapper } from '../hoc';


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
    width: '12rem',
    height: '12rem',
    objectFit: 'cover',
    borderRadius: '0.5rem',
    boxShadow: '0 0 15px rgba(102, 145, 180, 0.8)', // Glow effect
    transition: 'box-shadow 0.3s ease-in-out',
  };

  const hoverImageStyle = {
    ...imageStyle,
    boxShadow: '0 0 25px rgba(102, 180, 180, 1.0)', // More intense glow on hover
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
            <div className="flex justify-center flex-wrap gap-5 mt-10">
              <div className="relative">
                <img
                  src="./src/assets/event1.jpg"
                  alt="Ishanvi"
                  style={imageStyle}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = hoverImageStyle.boxShadow}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = imageStyle.boxShadow}
                />
                <h3 className='flex justify-center font-mono font-bold mt-2'>Ishanvi</h3>
              </div>
              <div className="relative">
                <img
                  src="./src/assets/event2.jpg"
                  alt="Ishanvi"
                  style={imageStyle}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = hoverImageStyle.boxShadow}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = imageStyle.boxShadow}
                />
                <h3 className='flex justify-center font-mono font-bold mt-2'>Ishanvi</h3>
              </div>
              <div className="relative">
                <img
                  src="./src/assets/event3.jpg"
                  alt="Ishanvi"
                  style={imageStyle}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = hoverImageStyle.boxShadow}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = imageStyle.boxShadow}
                />
                <h3 className='flex justify-center font-mono font-bold mt-2'>Ishanvi</h3>
              </div>
              <div className="relative">
                <img
                  src="./src/assets/event4.jpg"
                  alt="Ishanvi"
                  style={imageStyle}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = hoverImageStyle.boxShadow}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = imageStyle.boxShadow}
                />
                <h3 className='flex justify-center font-mono font-bold mt-2'>Ishanvi</h3>
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
