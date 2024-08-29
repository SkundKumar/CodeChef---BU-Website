import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';  
import { SectionWrapper } from '../hoc';
import {rest} from '../constants';
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
    < >
    <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>overview</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex  '>
      Our objective is to conduct programming competitions of good standards and motivate the passion towards programming, especially among first-year students, whether you are a coding whiz, or you want to learn from peers and professionals. 
We are here to help you navigate the exciting world of coding, and to encourage and guide students to participate in national and international programming competition and to bag prizes!

    </motion.p>
    <div className='mt-20 flex flex-wrap justify-center gap-10'>
         {services.map((service,index)=>(
          <ServiceCard key = {service.title} index={index} {...service} /> ))}
    </div>
    <div className='mt-20 flex flex-wrap justify-center gap-10'>
         {rest.map((rest,index)=>(
          <ServiceCard key = {rest.title} index={index} {...rest} /> ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about");