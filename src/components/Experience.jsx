import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement contentStyle={{background: '#1d1836', color: '#fff'}}
  contentArrowStyle={{borderRight: '7px solid #232631'}}
   
  iconStyle={{background: experience.iconBg}}
  icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img src={experience.icon} alt="..." className='w-[60%] h-[60%] object-contain'  />
    </div>
  }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold '>
        {experience.title}
      </h3>
      <p className='text-secondary text-[16px] font-semibold'>
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
  )
const Experience = () => {
  return (
    <>
    <motion.div
    variants={textVariant()}>
    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] flex justify-end" >Meet The Team</h2>
    </motion.div>
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, "Work") //src\components\Experience