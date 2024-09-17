import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    iconStyle={{
      background: '#232631',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0',
      border: 'none'
    }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon} alt="Head Icon" className='w-[100%] h-[100%] object-cover rounded-full' />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>
        {experience.title}
      </h3>
      <p className='text-secondary text-[16px] font-semibold'>
        {experience.company_name}
      </p>
      
      <div className='flex justify-end h-20 w-20'>
        <img
          src={experience.icon}  
          className='w-full h-full object-cover rounded-full'
        />
      </div>

     
      {experience.co_head && (
        <div className="mt-4 flex justify-between items-center">
          <h4 className='text-white text-[18px] font-semibold'>
            {experience.co_head}
          </h4>
          <div className='flex justify-end h-20 w-20'>
            <img
              src={experience.icon2}  
              className='w-full h-full object-cover rounded-full'
            />
          </div>
        </div>
      )}

     
      {experience.co_head2 && (
        <div className="mt-4 flex justify-between items-center">
          <h4 className='text-white text-[18px] font-semibold'>
            {experience.co_head2}
          </h4>
          <div className='flex justify-end h-20 w-20'>
            <img
              src={experience.icon_co_Head2}  
              className='w-full h-full object-cover rounded-full'
            />
          </div>
        </div>
      )}
      
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] flex justify-end">
          Meet The Team
        </h2>
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

export default SectionWrapper(Experience, "Work")
