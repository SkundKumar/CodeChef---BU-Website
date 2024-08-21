import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';  
import { SectionWrapper } from '../hoc';
const ServiceCard = ({index, title, icon, desc}) =>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className='w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card'>
        <div option={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-40 h-40 object-contain' />
            <h3 className='text-white font-bold text-center text-[20px'>{desc}</h3>
        </div>
        
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>overview</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Lorem20
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque ea necessitatibus
       earum rem, dolorum voluptas
       error voluptatum obcaecati 
       voluptatem? ipsum dolor sit amet consectetur 
       adipisicing elit. Aliquid eveniet corporis,
        molestiae consequuntur modi odit possimus rem ipsa 
        \magni vitae?
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
         {services.map((service,index)=>(
          <ServiceCard key = {service.title} index={index} {...service} /> ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about");