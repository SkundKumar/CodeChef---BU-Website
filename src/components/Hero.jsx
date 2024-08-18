import React from 'react'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
//import {ComputersCanvas } from './canvas';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={"sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5"}>
        <div className='flex flex-col justify-center itenms-center mt-5'>
          <div className='w-5 h-5 rounded-sm  bg-[#e9dfff] '/>
          <div className='w-1 sm:h-80 h-40 white-gradient ml-2'/>
        </div>
        <div className='mt-4'>
          <h1 className={`${styles.heroHeadText} `}>We are </h1>
          <h1 className={`${styles.heroHeadText} text-[#dac8ff]`} >CodeChef | BU</h1>

          <p className={` mt-3 ml-3 font-sans text-[rgb(206,205,206)]`}>CodeChef’s university-based community chapter promotes </p>
          <p className={`  ml-3 font-sans text-[rgb(206,205,206)]`}> the art of programming among the student community. </p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

export default Hero