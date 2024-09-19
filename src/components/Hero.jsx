import React, { useState, useEffect } from 'react';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { ComputersCanvas } from './canvas';
import { ishanvi2 } from '../assets';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className="flex  flex-col justify-center items-center h-full">
        <div className='w-full h-full relative flex justify-center items-center '>
        <div className={"sm:px-16 absolute px-6 max-w-7xl mx-auto flex flex-row items-start "}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 ml-2 rounded-sm bg-[#e9dfff]' />
            <div className='w-1 sm:h-80 h-40 white-gradient ml-2' />
          </div>
          <div className='mt-4 ml-3'>
              <h1 className={`${styles.heroHeadText} text-white drop-shadow-[0_0_60px_rgba(255,255,155,0.5)]`}>
                We are 
              </h1>
              <h1 className={`${styles.heroHeadText} text-[#d6c2fd] drop-shadow-[0_0_30px_rgba(255,255,155,0.5)]`}>
                CodeChef | BU
              </h1>

              <p className={`mt-3 ml-3 font-sans text-[rgb(206,205,206)] drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]`}>
                CodeChef’s university-based community chapter promotes
              </p>
              <p className={`ml-3 font-sans text-[rgb(206,205,206)] drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]`}>
                the art of programming among the student community.
              </p>
            </div>
        </div>
        </div>

        {/* Image or Canvas */}
       
      </div>

      {/* Scroll Indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
